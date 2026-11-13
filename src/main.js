import './style.css';
import { applyCodeColors } from './code-color.js';
import { buildSearchIndex, search, renderResults, highlightMatches, clearHighlights } from './search.js';
import {
  groupIntoTracks, stepCount, stepLabel, readingMinutes, progress,
  squiggle, heroDoodle, trackDoodle, checkIcon,
} from './course.js';
import pkg from '../package.json';

import concepts from './content/concepts/index.js';


const studyMode = {
  isActive: false,
  isLocked: false,
  isMinimized: false,
  currentView: 'timer',
  timer: {
    duration: 25 * 60,
    remaining: 25 * 60,
    interval: null,
    isRunning: false,
  },
  flashcards: {
    currentIndex: 0,
    shuffled: [],
    isFlipped: false,
  },
  stats: {
    streak: 0,
    cardsToday: 0,
    focusMinutes: 0,
    lastStudyDate: null,
  },
};

const app = {
  activeConcept: null,
  searchIndex: null,
  showingSearchResults: false,
  minutes: new Map(),
  activeStep: 0,

  /** The page scrolls as one: if the reader is past the concept header, bring the new step to the top. */
  scrollToStepTop() {
    const area = document.getElementById('content-area');
    const hero = document.querySelector('.kl-concept-hero');
    if (!area) return;
    const heroBottom = hero
      ? hero.getBoundingClientRect().bottom - area.getBoundingClientRect().top + area.scrollTop
      : 0;
    if (area.scrollTop > heroBottom) area.scrollTop = heroBottom;
  },

  resetContentScroll() {
    const contentArea = document.getElementById('content-area');
    if (contentArea) contentArea.scrollTop = 0;

    const tutorialContent = document.querySelector('.tutorial-tab-content');
    if (tutorialContent) tutorialContent.scrollTop = 0;
  },

  init() {
    this.searchIndex = buildSearchIndex(concepts);
    this.minutes = readingMinutes(this.searchIndex);
    this.renderSidebar();
    this.setupEventListeners();
    this.initTheme();
    this.initStudyMode();
    this.initTechStackModal();

    // Initial routing based on hash
    const hash = window.location.hash.substring(1);
    if (hash && concepts.some((c) => c.id === hash)) {
      this.selectConcept(hash);
    } else {
      this.renderWelcome();
    }
  },

  renderWelcome() {
    const contentArea = document.getElementById('content-area');
    contentArea.classList.remove('content-area--tabbed');

    const totalSteps = concepts.reduce((n, c) => n + stepCount(c), 0);
    const doneSteps = concepts.reduce((n, c) => n + progress.count(c.id, stepCount(c)), 0);
    const totalMin = [...this.minutes.values()].reduce((a, b) => a + b, 0);
    const pct = totalSteps ? Math.round((doneSteps / totalSteps) * 100) : 0;
    const hours = totalMin >= 60 ? `${Math.round(totalMin / 6) / 10}<small> h</small>` : `${totalMin}<small> min</small>`;

    const last = progress.last();
    const lastConcept = last && concepts.find((c) => c.id === last.id);
    const continueCard = lastConcept
      ? `<button class="kl-continue" data-concept="${lastConcept.id}" data-step="${last.step || 0}">
          <span><span class="k">Pick up where you left off</span>
          <span class="v">${lastConcept.title}${stepCount(lastConcept) > 1 ? ` · ${this.escape(stepLabel(lastConcept, Math.min(last.step || 0, stepCount(lastConcept) - 1)))}` : ''}</span></span>
          <span class="arrow" aria-hidden="true">→</span>
        </button>`
      : '';

    const tracks = groupIntoTracks(concepts)
      .map(
        (t, ti) => `
      <section class="kl-track" aria-labelledby="track-${t.id}">
        ${trackDoodle(ti)}
        <div class="kl-track-head">
          <span class="kl-tag">${t.label}</span>
          <h2 id="track-${t.id}">${t.title}</h2>
          ${squiggle()}
        </div>
        <div class="kl-grid">${t.items.map((c) => this.courseCard(c)).join('')}</div>
      </section>`,
      )
      .join('');

    contentArea.innerHTML = `
      <div class="kl-home">
        <header class="kl-home-hero">
          <span class="kl-tag">Knowledge Lab · Claude Code learning path</span>
          <div class="kl-home-hero-inner">
            <div>
              <h1>Learn <span class="kl-accent">Claude Code</span>, one step at a time</h1>
              <p class="kl-lede">Hands-on tutorials, broken into short steps. Tick each step off as you go and pick up right where you stopped.</p>
            </div>
            ${heroDoodle()}
          </div>
          <dl class="kl-meta-strip">
            <div><dt>Concepts</dt><dd>${concepts.length}</dd></div>
            <div><dt>Steps</dt><dd>${totalSteps}</dd></div>
            <div><dt>Completed</dt><dd>${doneSteps}<small> of ${totalSteps}</small></dd>
              <div class="kl-bar" role="progressbar" aria-label="Overall progress" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div></div>
            <div><dt>Reading time</dt><dd>~${hours}</dd></div>
          </dl>
        </header>
        ${continueCard}
        ${tracks}
        <footer class="kl-home-foot">
          <span>Your progress is saved in this browser only.</span>
          <button class="kl-reset" type="button">Reset progress</button>
        </footer>
      </div>
    `;
  },

  escape(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  },

  conceptSummary(id) {
    const section = this.searchIndex.find((s) => s.conceptId === id && s.text);
    if (!section) return '';
    const text = section.text.replace(/^(Next|Previous):?\s*\S+(\s\S+)?\s*→?\s*/i, '');
    return text.length > 150 ? `${text.slice(0, 150).replace(/\s+\S*$/, '')}…` : text;
  },

  courseCard(c) {
    const total = stepCount(c);
    const done = progress.count(c.id, total);
    const pct = Math.round((done / total) * 100);
    const state = done === 0 ? ['', 'Not started', 'Start'] : done === total ? ['is-done', 'Done', 'Review'] : ['is-progress', 'In progress', 'Continue'];
    return `
      <button class="kl-course-card" data-concept="${c.id}">
        <span class="kl-chip ${state[0]}">${state[0] === 'is-done' ? checkIcon() : ''}${state[1]}</span>
        <h3>${c.title}</h3>
        <p class="desc">${this.escape(this.conceptSummary(c.id))}</p>
        <div class="foot">
          <div class="meta"><span>${total} step${total === 1 ? '' : 's'} · ~${this.minutes.get(c.id) || 1} min</span><span>${done}/${total}</span></div>
          <div class="kl-bar" aria-hidden="true"><span style="width:${pct}%"></span></div>
          <span class="cta">${state[2]} →</span>
        </div>
      </button>`;
  },

  firstOpenStep(c) {
    const total = stepCount(c);
    for (let i = 0; i < total; i++) if (!progress.isDone(c.id, i)) return i;
    return 0;
  },

  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-mode');
      document.querySelector('#theme-toggle .icon').textContent = '☀️';
    }
    if (localStorage.getItem('sidebar') === 'collapsed') {
      document.getElementById('app').classList.add('sidebar-collapsed');
    }
  },

  renderSidebar() {
    const list = document.getElementById('concept-list');
    list.innerHTML = concepts
      .map((c) => `<li class="nav-item" data-id="${c.id}"><span class="nav-title">${c.title}</span><span class="nav-progress"></span></li>`)
      .join('');
    this.updateSidebarProgress();
  },

  updateSidebarProgress() {
    document.querySelectorAll('.nav-item').forEach((item) => {
      const c = concepts.find((x) => x.id === item.dataset.id);
      if (!c) return;
      const total = stepCount(c);
      const done = progress.count(c.id, total);
      const badge = item.querySelector('.nav-progress');
      item.style.setProperty('--p', `${Math.round((done / total) * 100)}%`);
      badge.classList.toggle('is-done', done === total);
      badge.innerHTML = done === total ? checkIcon() : done ? `${done}/${total}` : '';
      badge.setAttribute('aria-label', `${done} of ${total} steps done`);
    });
  },

  /** Drawer-style sidebar on phones and portrait tablets. */
  isMobile() {
    return window.innerWidth <= 900;
  },

  closeMobileSidebar() {
    document.getElementById('app').classList.remove('sidebar-open');
  },

  setupEventListeners() {
    // Concept list: close mobile drawer after selecting
    document.getElementById('concept-list').addEventListener('click', (e) => {
      const item = e.target.closest('.nav-item');
      if (item) {
        const id = item.dataset.id;
        if (this.isMobile()) this.closeMobileSidebar();
        this.selectConcept(id, { query: document.getElementById('concept-search').value });
      }
    });

    // Sidebar: the button inside the sidebar collapses it (or closes the mobile
    // drawer); the top-bar button brings it back and only shows while hidden.
    const setCollapsed = (collapsed) => {
      document.getElementById('app').classList.toggle('sidebar-collapsed', collapsed);
      try { localStorage.setItem('sidebar', collapsed ? 'collapsed' : 'open'); } catch { /* ignore */ }
    };
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
      const app = document.getElementById('app');
      if (this.isMobile()) app.classList.toggle('sidebar-open');
      else setCollapsed(false);
    });
    document.getElementById('sidebar-collapse').addEventListener('click', () => {
      if (this.isMobile()) this.closeMobileSidebar();
      else setCollapsed(true);
    });

    window.matchMedia('(max-width: 900px)').addEventListener('change', (e) => {
      if (!e.matches) this.closeMobileSidebar();
    });

    // Backdrop click: close mobile drawer
    document.getElementById('app').addEventListener('click', (e) => {
      if (this.isMobile() && e.target === document.getElementById('app')) {
        this.closeMobileSidebar();
      }
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light-mode');
      const icon = document.querySelector('#theme-toggle .icon');
      icon.textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Home navigation
    document.getElementById('home-link').addEventListener('click', () => {
      this.activeConcept = null;
      document
        .querySelectorAll('.nav-item')
        .forEach((el) => el.classList.remove('active'));
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      if (this.isMobile()) this.closeMobileSidebar();
      this.renderWelcome();
    });

    // Full-text search: filters the sidebar and lists matching content
    const searchInput = document.getElementById('concept-search');
    const searchClear = document.getElementById('search-clear');
    const fullPlaceholder = searchInput.placeholder;
    const smallScreen = window.matchMedia('(max-width: 640px)');
    const setPlaceholder = () => {
      searchInput.placeholder = smallScreen.matches ? 'Search tutorials…' : fullPlaceholder;
    };
    setPlaceholder();
    smallScreen.addEventListener('change', setPlaceholder);
    let searchTimer = null;
    searchInput.addEventListener('input', () => {
      searchClear.hidden = !searchInput.value;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => this.runSearch(searchInput.value), 120);
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        clearTimeout(searchTimer);
        this.runSearch(searchInput.value);
        document.querySelector('.search-results .search-hit, .search-results .search-group-title')?.click();
      } else if (e.key === 'Escape') {
        searchInput.value = '';
        searchClear.hidden = true;
        this.runSearch('');
      }
    });
    searchClear.addEventListener('click', () => {
      clearTimeout(searchTimer);
      searchInput.value = '';
      searchClear.hidden = true;
      this.runSearch('');
      searchInput.focus();
    });

    // Compact the step-tab bar while reading; expand it again near the top
    const area = document.getElementById('content-area');
    let tabsTicking = false;
    area.addEventListener('scroll', () => {
      if (tabsTicking) return;
      tabsTicking = true;
      requestAnimationFrame(() => {
        tabsTicking = false;
        if (window.innerWidth <= 900) return;   // tabs keep one size on phones/tablets
        const card = area.querySelector('.concept-card--tabs');
        const hero = area.querySelector('.kl-concept-hero');
        if (!card || !card.querySelector('.tutorial-tabs')) return;
        const start = hero ? hero.offsetHeight : 0;
        const compact = card.classList.contains('tabs-compact');
        // Hysteresis: shrink a little past the header, expand only back at the header
        if (!compact && area.scrollTop > start + 40) card.classList.add('tabs-compact');
        else if (compact && area.scrollTop < start + 4) card.classList.remove('tabs-compact');
      });
    }, { passive: true });

    // Home course map, continue card, reset, and step navigation
    document.getElementById('content-area').addEventListener('click', (e) => {
      const card = e.target.closest('.kl-course-card, .kl-continue');
      if (card) {
        const c = concepts.find((x) => x.id === card.dataset.concept);
        const step = card.dataset.step !== undefined ? Number(card.dataset.step) : this.firstOpenStep(c);
        this.selectConcept(c.id, { tabIndex: step });
        return;
      }
      const reset = e.target.closest('.kl-reset');
      if (reset) {
        if (!reset.classList.contains('is-armed')) {
          reset.classList.add('is-armed');
          reset.textContent = 'Click again to reset all progress';
          setTimeout(() => {
            reset.classList.remove('is-armed');
            reset.textContent = 'Reset progress';
          }, 4000);
        } else {
          progress.reset();
          this.updateSidebarProgress();
          this.renderWelcome();
        }
        return;
      }
      const toggle = e.target.closest('.kl-done-toggle');
      if (toggle) {
        progress.toggle(this.activeConcept.id, this.activeStep);
        this.refreshProgressUI();
        return;
      }
      const go = e.target.closest('.kl-step-card');
      if (go) this.goStep(go.dataset.go, { markDone: go.dataset.go === 'next' });
    });

    document.addEventListener('keydown', (e) => {
      if (!this.activeConcept || this.showingSearchResults || studyMode.isActive) return;
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.target.closest('input, textarea, select, [contenteditable="true"]')) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); this.goStep('next'); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); this.goStep('prev'); }
    });

    // Clicking a search result opens that concept/tab with matches highlighted
    document.getElementById('content-area').addEventListener('click', (e) => {
      const hit = e.target.closest('.search-hit, .search-group-title');
      if (!hit) return;
      const tab = hit.dataset.tab;
      this.selectConcept(hit.dataset.concept, {
        tabIndex: tab === undefined ? null : Number(tab),
        query: searchInput.value,
      });
    });

    // Hash navigation listener
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.substring(1);
      if (hash && concepts.some((c) => c.id === hash)) {
        if (!this.activeConcept || this.activeConcept.id !== hash) {
          this.selectConcept(hash);
        }
      } else if (!hash) {
        // Handle direct home navigation via hash removal
        this.activeConcept = null;
        document
          .querySelectorAll('.nav-item')
          .forEach((el) => el.classList.remove('active'));
        this.renderWelcome();
      }
    });

    window.addEventListener('message', async (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type !== 'knowledgeLabFlowchartFullscreenToggle') return;

      const embed = document.querySelector('.flowchart-embed');
      if (!embed) return;

      try {
        if (document.fullscreenElement === embed) {
          await document.exitFullscreen();
        } else if (!document.fullscreenElement) {
          await embed.requestFullscreen();
        }
      } catch (error) {
        console.error('Flowchart fullscreen toggle failed:', error);
      } finally {
        const iframe = embed.querySelector('iframe');
        iframe?.contentWindow?.postMessage(
          {
            type: 'knowledgeLabFlowchartFullscreenState',
            isFullscreen: document.fullscreenElement === embed,
          },
          window.location.origin,
        );
      }
    });

    document.addEventListener('fullscreenchange', () => {
      const embed = document.querySelector('.flowchart-embed');
      const iframe = embed?.querySelector('iframe');
      iframe?.contentWindow?.postMessage(
        {
          type: 'knowledgeLabFlowchartFullscreenState',
          isFullscreen: document.fullscreenElement === embed,
        },
        window.location.origin,
      );
    });
  },

  runSearch(rawQuery) {
    const query = rawQuery.trim();
    const items = document.querySelectorAll('.nav-item');
    const contentArea = document.getElementById('content-area');

    if (!query) {
      items.forEach((item) => (item.style.display = ''));
      clearHighlights(contentArea);
      if (this.showingSearchResults) {
        this.showingSearchResults = false;
        if (this.activeConcept) {
          this.renderConcept(this.activeConcept);
        } else {
          this.renderWelcome();
        }
      }
      return;
    }

    if (!this.searchIndex) this.searchIndex = buildSearchIndex(concepts);
    const results = search(this.searchIndex, concepts, query);
    const matchedIds = new Set(results.map((r) => r.conceptId));
    items.forEach((item) => {
      item.style.display = matchedIds.has(item.dataset.id) ? '' : 'none';
    });

    this.showingSearchResults = true;
    contentArea.classList.remove('content-area--tabbed');
    contentArea.innerHTML = renderResults(results, query);
    contentArea.scrollTop = 0;
  },

  highlightInActivePanel(query) {
    const root =
      document.querySelector('.tutorial-tab-panel.active .concept-content') ||
      document.getElementById('concept-description');
    const marks = highlightMatches(root, query);
    if (marks.length) {
      marks[0].classList.add('search-highlight--current');
      requestAnimationFrame(() => marks[0].scrollIntoView({ block: 'center' }));
    }
  },

  selectConcept(id, { tabIndex = null, query = '' } = {}) {
    const concept = concepts.find((c) => c.id === id);
    if (!concept) return;
    this.showingSearchResults = false;

    // Update URL hash
    if (window.location.hash !== `#${id}`) {
      window.location.hash = id;
    }


    // Update UI
    this.activeConcept = concept;
    document
      .querySelectorAll('.nav-item')
      .forEach((el) => el.classList.remove('active'));

    const navItem = document.querySelector(`[data-id="${id}"]`);
    if (navItem) navItem.classList.add('active');

    this.renderConcept(concept);
    this.resetContentScroll();

    if (tabIndex !== null && tabIndex > 0 && this.switchToTab) {
      this.switchToTab(Math.min(tabIndex, stepCount(concept) - 1));
    } else {
      progress.visit(concept.id, 0);
    }
    if (query.trim()) this.highlightInActivePanel(query);
  },

  /** Move to the previous/next step; past the last step, open the next concept. */
  goStep(dir, { markDone = false } = {}) {
    const c = this.activeConcept;
    if (!c) return;
    const total = stepCount(c);
    if (markDone) {
      progress.set(c.id, this.activeStep, true);
      this.refreshProgressUI();
    }
    if (dir === 'next') {
      if (this.activeStep < total - 1) this.switchToTab(this.activeStep + 1);
      else {
        const next = concepts[concepts.indexOf(c) + 1];
        if (next) this.selectConcept(next.id, { tabIndex: this.firstOpenStep(next) });
      }
    } else if (dir === 'prev' && this.activeStep > 0) {
      this.switchToTab(this.activeStep - 1);
    }
  },

  refreshProgressUI() {
    const c = this.activeConcept;
    if (!c) return;
    const total = stepCount(c);
    const done = progress.count(c.id, total);
    document.querySelectorAll('.tutorial-tab-btn').forEach((b) => {
      const i = Number(b.dataset.tab);
      const isDone = progress.isDone(c.id, i);
      b.classList.toggle('is-done', isDone);
      b.querySelector('.kl-step-n').innerHTML = isDone ? checkIcon() : this.autoNumber ? String(i + 1) : '';
    });
    document.querySelectorAll('.kl-done-toggle').forEach((t) => {
      const isDone = progress.isDone(c.id, Number(t.dataset.step));
      t.setAttribute('aria-pressed', String(isDone));
      t.querySelector('.label').textContent = isDone ? 'Step complete' : 'Mark step complete';
    });
    const count = document.querySelector('.kl-meta .kl-done-count');
    if (count) count.textContent = `${done}/${total}`;
    const bar = document.querySelector('.kl-meta .kl-bar > span');
    if (bar) bar.style.width = `${Math.round((done / total) * 100)}%`;
    this.updateSidebarProgress();
  },

  trackLabel(id) {
    const t = groupIntoTracks(concepts).find((x) => x.items.some((c) => c.id === id));
    return t ? t.label : 'Knowledge Lab';
  },

  stepNav(c, i) {
    const total = stepCount(c);
    const next = concepts[concepts.indexOf(c) + 1];
    const prevCard = i > 0
      ? `<button class="kl-step-card prev" data-go="prev"><span class="n">← Previous</span><span class="t">${this.escape(stepLabel(c, i - 1))}</span></button>`
      : '<span class="kl-step-card prev" hidden></span>';
    let nextCard = '<span class="kl-step-card next" hidden></span>';
    if (i < total - 1) {
      nextCard = `<button class="kl-step-card next" data-go="next"><span class="n">Next →</span><span class="t">${this.escape(stepLabel(c, i + 1))}</span></button>`;
    } else if (next) {
      nextCard = `<button class="kl-step-card next is-concept" data-go="next"><span class="n">Next concept →</span><span class="t">${this.escape(next.title)}</span></button>`;
    }
    const isDone = progress.isDone(c.id, i);
    return `
      <nav class="kl-stepnav" aria-label="Step navigation">
        ${prevCard}
        <button class="kl-done-toggle" data-step="${i}" aria-pressed="${isDone}">${checkIcon()}<span class="label">${isDone ? 'Step complete' : 'Mark step complete'}</span></button>
        ${nextCard}
        <p class="kl-keys">Tip: use <kbd>←</kbd> <kbd>→</kbd> to move between steps. Clicking the next step marks this one complete.</p>
      </nav>`;
  },

  renderConcept(concept) {
    const contentArea = document.getElementById('content-area');
    contentArea.classList.add('content-area--tabbed');
    this.activeStep = 0;

    const hasTabs = concept.tabs && concept.tabs.length > 0;
    const steps = hasTabs
      ? concept.tabs
      : [{ label: concept.title, content: this.formatDescription(concept.description) }];
    const total = steps.length;
    const done = progress.count(concept.id, total);
    // Skip auto numbers when the tutorial's own labels are already numbered
    this.autoNumber = !steps.some((t) => /^\s*(\d+\s*[.):–-]|step\s*\d+)/i.test(t.label));

    const tabButtons = hasTabs
      ? `<nav class="tutorial-tabs" role="tablist">${steps
          .map((tab, i) => {
            const isDone = progress.isDone(concept.id, i);
            return `<button class="tutorial-tab-btn${i === 0 ? ' active' : ''}${isDone ? ' is-done' : ''}" data-tab="${i}"><span class="kl-step-n">${isDone ? checkIcon() : this.autoNumber ? i + 1 : ''}</span>${tab.label}</button>`;
          })
          .join('')}</nav>`
      : '';

    const tabPanels = steps
      .map(
        (tab, i) => `<div class="tutorial-tab-panel${i === 0 ? ' active' : ''}" data-panel="${i}">
          <div class="concept-content" id="concept-description-${i}">${tab.content}</div>
          ${this.stepNav(concept, i)}
        </div>`,
      )
      .join('');

    contentArea.innerHTML = `
      <article class="concept-card concept-card--tabs">
        <header class="kl-concept-hero">
          <div class="kl-hero-text">
            <h1 class="kl-concept-title">${concept.title}</h1>
            <span class="kl-track-label">${this.trackLabel(concept.id)}</span>
          </div>
          <div class="kl-meta" aria-label="Tutorial progress">
            <span><b class="kl-done-count">${done}/${total}</b> done</span>
            <div class="kl-bar" aria-hidden="true"><span style="width:${Math.round((done / total) * 100)}%"></span></div>
          </div>
        </header>
        ${tabButtons}
        <div class="tutorial-tab-content">${tabPanels}</div>
      </article>
    `;

    this.removeDuplicateStepLinks();
    contentArea.querySelectorAll('.concept-content table').forEach((table) => {
      if (table.parentElement.classList.contains('kl-table-scroll')) return;
      const wrap = document.createElement('div');
      wrap.className = 'kl-table-scroll';
      table.replaceWith(wrap);
      wrap.appendChild(table);
    });
    this.initTabs();
    steps.forEach((_, i) => {
      const el = document.getElementById(`concept-description-${i}`);
      if (el) {
        applyCodeColors(el);
        this.attachCopyButtonsTo(el);
      }
    });
  },

  /**
   * Many tutorials end each tab with hand-written "Previous / Next" links. The
   * step navigation cards do the same job, so drop links that only point to the
   * adjacent step (and their wrapper once it is empty). Other jump links stay.
   */
  removeDuplicateStepLinks() {
    document.querySelectorAll('.tutorial-tab-panel').forEach((panel) => {
      const i = Number(panel.dataset.panel);
      panel.querySelectorAll('.concept-content .tutorial-nav-link[data-goto-tab]').forEach((link) => {
        const target = Number(link.dataset.gotoTab);
        if (Math.abs(target - i) !== 1) return;
        let wrapper = link.parentElement;
        link.remove();
        while (
          wrapper &&
          !wrapper.classList.contains('concept-content') &&
          !wrapper.children.length &&
          !wrapper.textContent.trim()
        ) {
          const parent = wrapper.parentElement;
          wrapper.remove();
          wrapper = parent;
        }
      });
    });
  },

  formatDescription(content = 'Add your description here...') {
    return content.trim().startsWith('<')
      ? content
      : content.split('\n\n').map((p) => `<p>${p}</p>`).join('');
  },

  initTabs() {
    const btns = document.querySelectorAll('.tutorial-tab-btn');
    const panels = document.querySelectorAll('.tutorial-tab-panel');

    const switchToTab = (index) => {
      if (!panels[index]) return;
      btns.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      panels[index].classList.add('active');
      this.activeStep = index;
      if (this.activeConcept) progress.visit(this.activeConcept.id, index);

      if (btns[index]) {
        btns[index].classList.add('active');
        // Centre the active tab horizontally in the tab bar (no vertical jump)
        const bar = btns[index].parentElement;
        bar.scrollTo({
          left: btns[index].offsetLeft - (bar.clientWidth - btns[index].offsetWidth) / 2,
          behavior: 'smooth',
        });
      }

      this.scrollToStepTop();
    };
    this.switchToTab = switchToTab;

    btns.forEach((btn) => {
      btn.addEventListener('click', () => switchToTab(Number(btn.dataset.tab)));
    });

    // Wire up any in-content links that jump to a specific tab
    document.querySelectorAll('[data-goto-tab]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        switchToTab(Number(link.dataset.gotoTab));
      });
    });

    // Wire up any in-content links that jump to a specific concept (tutorial)
    document.querySelectorAll('[data-goto-concept]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        if (typeof this.selectConcept === 'function') {
          this.selectConcept(link.dataset.gotoConcept);
        }
      });
    });
  },

  attachCopyButtons() {
    const conceptDescription = document.getElementById('concept-description');
    if (!conceptDescription) return;
    this.attachCopyButtonsTo(conceptDescription);
  },

  attachCopyButtonsTo(container) {
    if (!container) return;

    const blockCandidates = container.querySelectorAll('pre, code');
    const wrappedTargets = new Set();

    blockCandidates.forEach((node) => {
      if (node.closest('.code-wrapper')) return;

      let target = null;

      if (node.tagName === 'PRE') {
        target = node;
      } else {
        const code = node;
        const isBlock =
          code.style.display === 'block' ||
          (code.parentNode && code.parentNode.tagName === 'PRE') ||
          code.textContent.includes('\n');
        if (!isBlock) return;

        target = code.parentNode && code.parentNode.tagName === 'PRE' ? code.parentNode : code;
      }

      if (!target || wrappedTargets.has(target)) return;
      if (target.parentNode && target.parentNode.classList?.contains('code-wrapper')) return;

      wrappedTargets.add(target);

      // Create wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'code-wrapper';

      // Insert wrapper before the block target
      target.parentNode.insertBefore(wrapper, target);
      // Move the pre/code block into the wrapper
      wrapper.appendChild(target);

      // Add copy button
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.setAttribute('title', 'Copy to clipboard');

      const copyIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
      const checkIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

      btn.innerHTML = copyIcon;

      wrapper.appendChild(btn);

      btn.addEventListener('click', () => {
        const text = target.textContent;
        // Clean up text (remove the leading '❯ ' prompt if it's there, but keep the rest)
        const cleanText = text.replace(/^❯\s+/, '');

        navigator.clipboard.writeText(cleanText).then(() => {
          btn.innerHTML = checkIcon;
          btn.classList.add('copied');

          setTimeout(() => {
            btn.innerHTML = copyIcon;
            btn.classList.remove('copied');
          }, 2000);
        });
      });
    });
  },

  // ========================================
  // TECH STACK MODAL
  // ========================================

  initTechStackModal() {
    const btn = document.getElementById('tech-stack-btn');
    const overlay = document.getElementById('tech-stack-overlay');
    const closeBtn = document.getElementById('close-tech-stack');
    const list = document.getElementById('tech-stack-list');

    if (!btn || !overlay || !closeBtn || !list) return;

    const ver = (name) => (pkg.dependencies?.[name] || pkg.devDependencies?.[name] || '').replace(/^[\^~]/, '');
    const ico = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
    const chips = (items) => `<ul class="kl-chips">${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
    const conceptCount = concepts.length;
    const stepTotal = concepts.reduce((n, c) => n + stepCount(c), 0);

    // Each tile: size = 'wide' (2 cols) | 'tall' (2 rows) | 'hero' (2x2) | '' (1x1)
    const tiles = [
      {
        size: 'hero', accent: true, kicker: 'Core',
        icon: ico('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
        title: 'Vanilla JavaScript + Vite',
        body: `ES modules and plain DOM rendering, with no UI framework. Vite ${ver('vite')} serves the dev build with hot reload and bundles the production site.`,
        stats: [
          ['0', 'UI frameworks'],
          [String(Object.keys(pkg.dependencies || {}).length), 'runtime dependency' + (Object.keys(pkg.dependencies || {}).length === 1 ? '' : 'ies')],
          ['0', 'servers or backend'],
        ],
        extra: chips(['HTML5', 'CSS3', 'ES modules', `Vite ${ver('vite')}`]),
      },
      {
        size: 'wide', kicker: 'Code blocks',
        icon: ico('<path d="M4 7h16M4 12h10M4 17h7"/>'),
        title: `highlight.js ${ver('highlight.js')}`,
        body: 'Syntax colours for tutorial code, plus a custom highlighter for shell commands, directory trees, prompts and terminal transcripts.',
        extra: chips(['bash', 'python', 'json', 'yaml', 'javascript', 'html']),
      },
      {
        size: 'tall', kicker: 'Typography',
        icon: ico('<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>'),
        title: 'Google Fonts',
        body: 'Loaded from Google Fonts, with system fallbacks.',
        extra: `<div class="kl-fonts">
            <div><span class="aa" style="font-family:'Nunito Sans'">Aa</span><b>Nunito Sans</b><small>Headings &amp; body</small></div>
            <div><span class="aa" style="font-family:'Inter'">Aa</span><b>Inter</b><small>Sidebar</small></div>
            <div><span class="aa" style="font-family:var(--font-mono)">Aa</span><b>IBM Plex Mono</b><small>Code blocks</small></div>
            <div><span class="aa" style="font-family:'Shantell Sans', 'Nunito Sans'">Aa</span><b>Shantell Sans</b><small>Flowchart labels</small></div>
          </div>`,
      },
      {
        kicker: 'Animation',
        icon: ico('<circle cx="5" cy="6" r="2"/><circle cx="19" cy="8" r="2"/><circle cx="11" cy="18" r="2"/><path d="M7 6.5l10 1.2M6.3 7.6l3.7 8.6M17.6 9.6l-5.2 7"/>'),
        title: 'Canvas 2D',
        body: 'The animated Zen Flow background behind the Study Mode focus timer.',
      },
      {
        kicker: 'Themes',
        icon: ico('<path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z"/>'),
        title: 'Light & dark',
        body: 'CSS custom-property design tokens; light editorial palette and a Windows 95–inspired dark platinum.',
        extra: '<div class="kl-swatches"><span style="background:#F7F8FA"></span><span style="background:#006989"></span><span style="background:#2B2D30"></span><span style="background:#ca9ee6"></span></div>',
      },
      {
        kicker: 'Search',
        icon: ico('<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
        title: 'Full-text search',
        body: 'In-browser index over every tab: highlighted snippets, jump straight to the match.',
      },
      {
        size: 'wide', kicker: 'Learning',
        icon: ico('<path d="M3 12l6 6L21 6"/>'),
        title: 'Course map & progress',
        body: `${conceptCount} tutorials, ${stepTotal} steps in 4 tracks. Step completion, “pick up where you left off” and preferences persist in localStorage.`,
        extra: chips(['progress', 'lastVisit', 'theme', 'sidebar', 'study stats']),
      },
      {
        kicker: 'Focus',
        icon: ico('<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>'),
        title: 'Study Mode',
        body: 'Pomodoro focus timer and concept flashcards with a daily streak.',
      },
      {
        kicker: 'Diagrams',
        icon: ico('<rect x="3" y="3" width="7" height="6" rx="1"/><rect x="14" y="15" width="7" height="6" rx="1"/><path d="M6.5 9v4a2 2 0 0 0 2 2H14"/>'),
        title: 'Interactive flowcharts',
        body: 'Standalone HTML diagrams embedded in tutorials, with fullscreen support.',
      },
      {
        kicker: 'Navigation',
        icon: ico('<path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>'),
        title: 'Hash routing',
        body: 'Each tutorial has a shareable #concept-id URL; back/forward just work.',
      },
      {
        size: 'wide', accent: true, kicker: 'Deployment',
        icon: ico('<path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>'),
        title: 'GitHub Actions → GitHub Pages',
        body: 'Every push to main builds and publishes the static site automatically.',
        extra: `<ol class="kl-pipeline"><li>Push to main</li><li>Node 20 · npm install</li><li>vite build</li><li>deploy-pages</li></ol>`,
      },
      {
        size: 'wide', kicker: 'Layout',
        icon: ico('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M9 4v16"/>'),
        title: 'Responsive',
        body: 'Drawer sidebar on phones and tablets, sticky step tabs, centred search.',
      },
    ];

    list.innerHTML = tiles
      .map(
        (t) => `
      <article class="kl-tile${t.size ? ' kl-tile--' + t.size : ''}${t.accent ? ' kl-tile--accent' : ''}">
        <div class="kl-tile-top"><span class="kl-tile-icon">${t.icon}</span><span class="kl-tile-kicker">${t.kicker}</span></div>
        ${t.stats ? `<dl class="kl-stats">${t.stats.map(([n, l]) => `<div><dt>${n}</dt><dd>${l}</dd></div>`).join('')}</dl>` : ''}
        <h3>${t.title}</h3>
        <p>${t.body}</p>
        ${t.extra || ''}
      </article>`,
      )
      .join('');

    const openModal = () => {
      overlay.classList.remove('hidden');
      // trigger reflow
      void overlay.offsetWidth;
      overlay.classList.add('active');
    };

    const closeModal = () => {
      overlay.classList.remove('active');
      setTimeout(() => {
        if (!overlay.classList.contains('active')) {
          overlay.classList.add('hidden');
        }
      }, 300); // match transition duration
    };

    btn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  },

  // ========================================
  // STUDY MODE
  // ========================================

  initStudyMode() {
    // Load stats from localStorage
    this.loadStudyStats();
    this.updateStudyMetrics();
    this.initZenFlow();

    // Study mode button
    document.getElementById('study-mode-btn').addEventListener('click', () => {
      this.toggleStudyMode();
    });

    // Exit study mode
    document.getElementById('exit-study').addEventListener('click', () => {
      this.toggleStudyMode();
    });

    // Timer controls
    document.getElementById('timer-toggle').addEventListener('click', () => {
      this.toggleTimer();
    });

    document.getElementById('timer-reset').addEventListener('click', () => {
      this.resetTimer();
    });

    // Timer presets
    document.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const time = parseInt(e.target.dataset.time);
        this.setTimerDuration(time);
      });
    });

    // Minimize / expand study mode
    document.getElementById('minimize-study').addEventListener('click', () => {
      this.minimizeStudy();
    });

    document.getElementById('expand-study').addEventListener('click', () => {
      this.expandStudy();
    });

    document.getElementById('mini-stop-btn').addEventListener('click', () => {
      this.expandStudy();
      this.toggleStudyMode(); // exit study mode
    });

    // Lock / unlock screen
    document.getElementById('lock-screen-btn').addEventListener('click', () => {
      this.lockScreen();
    });

    document
      .getElementById('unlock-screen-btn')
      .addEventListener('click', () => {
        this.unlockScreen();
      });
  },

  loadStudyStats() {
    const saved = localStorage.getItem('studyStats');
    if (saved) {
      studyMode.stats = JSON.parse(saved);
      this.updateStreak();
    }
  },

  saveStudyStats() {
    localStorage.setItem('studyStats', JSON.stringify(studyMode.stats));
  },

  updateStreak() {
    const today = new Date().toDateString();
    const lastDate = studyMode.stats.lastStudyDate;

    if (lastDate) {
      const lastStudy = new Date(lastDate);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastStudy.toDateString() === yesterday.toDateString()) {
        // Continue streak
      } else if (lastStudy.toDateString() !== today) {
        // Reset streak
        studyMode.stats.streak = 0;
      }
    }
  },

  updateStudyMetrics() {
    // Elements removed from UI — guard against null refs
    const streak = document.getElementById('study-streak');
    const cards = document.getElementById('study-cards');
    const mins = document.getElementById('study-minutes');
    if (streak) streak.textContent = studyMode.stats.streak;
    if (cards) cards.textContent = studyMode.stats.cardsToday;
    if (mins) mins.textContent = studyMode.stats.focusMinutes;
  },

  toggleStudyMode() {
    studyMode.isActive = !studyMode.isActive;
    const overlay = document.getElementById('study-mode-overlay');
    const zenFlowBg = document.querySelector('.zen-flow-bg');

    if (studyMode.isActive) {
      // If coming back from minimized, just expand
      if (studyMode.isMinimized) {
        this.expandStudy();
        return;
      }
      overlay.classList.remove('hidden');
      overlay.classList.add('active');
      zenFlowBg.style.opacity = '1';
      this.updateStreak();
      this.saveStudyStats();
    } else {
      // Fully exit — also clear minimized state
      this.expandStudy(); // ensure mini-timer is hidden
      overlay.classList.remove('active');
      zenFlowBg.style.opacity = '0';
      this.resetTimer();
      setTimeout(() => {
        overlay.classList.add('hidden');
      }, 500);
    }
  },

  // Timer methods
  setTimerDuration(minutes) {
    studyMode.timer.duration = minutes * 60;
    studyMode.timer.remaining = minutes * 60;

    // Update UI
    document.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.classList.toggle('active', parseInt(btn.dataset.time) === minutes);
    });

    this.updateTimerDisplay();
  },

  toggleTimer() {
    if (studyMode.timer.isRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  },

  startTimer() {
    studyMode.timer.isRunning = true;
    document.getElementById('timer-toggle').textContent = 'Pause';
    document.querySelector('.timer-wrapper').classList.add('active');
    document.getElementById('lock-screen-btn').classList.remove('hidden');

    studyMode.timer.interval = setInterval(() => {
      studyMode.timer.remaining--;
      this.updateTimerDisplay();

      if (studyMode.timer.remaining <= 0) {
        this.completeTimer();
      }
    }, 1000);
  },

  pauseTimer() {
    studyMode.timer.isRunning = false;
    document.getElementById('timer-toggle').textContent = 'Resume';
    document.querySelector('.timer-wrapper').classList.remove('active');
    document.getElementById('lock-screen-btn').classList.add('hidden');
    clearInterval(studyMode.timer.interval);
    if (studyMode.isLocked) this.unlockScreen();
  },

  resetTimer() {
    this.pauseTimer();
    studyMode.timer.remaining = studyMode.timer.duration;
    document.getElementById('timer-toggle').textContent = 'Start Focus';
    document.getElementById('timer-status').textContent = 'Ready to focus';
    document.getElementById('lock-screen-btn').classList.add('hidden');
    this.updateTimerDisplay();
  },

  completeTimer() {
    this.pauseTimer();
    document.getElementById('timer-status').textContent =
      'Focus complete! Great work!';

    // Update stats
    studyMode.stats.focusMinutes += Math.floor(studyMode.timer.duration / 60);
    this.updateStreakDate();
    this.saveStudyStats();
    this.updateStudyMetrics();

    // Play notification sound (optional)
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Focus Session Complete', {
        body: 'Great job! Take a break.',
        icon: '/vite.svg',
      });
    }
  },

  updateTimerDisplay() {
    const minutes = Math.floor(studyMode.timer.remaining / 60);
    const seconds = studyMode.timer.remaining % 60;
    const timeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById('timer-minutes').textContent = minutes
      .toString()
      .padStart(2, '0');
    document.getElementById('timer-seconds').textContent = seconds
      .toString()
      .padStart(2, '0');

    // Update mini-timer display
    document.getElementById('mini-timer-display').textContent = timeStr;
    const progressPct =
      (studyMode.timer.remaining / studyMode.timer.duration) * 100;
    document.getElementById('mini-timer-progress').style.width =
      `${progressPct}%`;

    // Update progress ring
    const progress = studyMode.timer.remaining / studyMode.timer.duration;
    const circumference = 2 * Math.PI * 130;
    const offset = circumference * (1 - progress);
    document.getElementById('timer-progress').style.strokeDashoffset = offset;

    // Update status
    if (!studyMode.timer.isRunning) {
      document.getElementById('timer-status').textContent = 'Ready to focus';
    } else {
      document.getElementById('timer-status').textContent = 'Stay focused...';
    }
  },

  // Minimize to floating widget
  minimizeStudy() {
    studyMode.isMinimized = true;
    const overlay = document.getElementById('study-mode-overlay');
    const zenFlowBg = document.querySelector('.zen-flow-bg');
    overlay.classList.remove('active');
    zenFlowBg.style.opacity = '0';
    setTimeout(() => overlay.classList.add('hidden'), 500);
    document.getElementById('mini-timer').classList.remove('hidden');
    // Sync mini display immediately
    const m = Math.floor(studyMode.timer.remaining / 60);
    const s = studyMode.timer.remaining % 60;
    document.getElementById('mini-timer-display').textContent =
      `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    const progressPct =
      (studyMode.timer.remaining / studyMode.timer.duration) * 100;
    document.getElementById('mini-timer-progress').style.width =
      `${progressPct}%`;
  },

  // Expand back to full study mode
  expandStudy() {
    studyMode.isMinimized = false;
    document.getElementById('mini-timer').classList.add('hidden');
    if (studyMode.isActive) {
      const overlay = document.getElementById('study-mode-overlay');
      const zenFlowBg = document.querySelector('.zen-flow-bg');
      overlay.classList.remove('hidden');
      overlay.classList.add('active');
      zenFlowBg.style.opacity = '1';
    }
  },

  // Lock Screen
  lockScreen() {
    studyMode.isLocked = true;
    document.getElementById('study-mode-overlay').classList.add('study-locked');
    document.getElementById('unlock-screen-overlay').classList.remove('hidden');
  },

  unlockScreen() {
    studyMode.isLocked = false;
    document
      .getElementById('study-mode-overlay')
      .classList.remove('study-locked');
    document.getElementById('unlock-screen-overlay').classList.add('hidden');
  },

  updateStreakDate() {
    const today = new Date().toDateString();
    const lastDate = studyMode.stats.lastStudyDate;

    if (lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastDate === yesterday.toDateString()) {
        studyMode.stats.streak++;
      } else {
        studyMode.stats.streak = 1;
      }

      studyMode.stats.lastStudyDate = today;
    }
  },

  // Zen Flow Animation
  initZenFlow() {
    const canvas = document.getElementById('zen-flow-canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = 30;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 80 + 40,
          hue: Math.random() * 60 + 170, // Blue-cyan range
          alpha: Math.random() * 0.1 + 0.05,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = () => {
      if (!studyMode.isActive) {
        requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Get theme colors
      const isLight = document.documentElement.classList.contains('light-mode');

      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        // Update pulse
        p.pulse += 0.02;

        // Draw particle
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius,
        );
        const pulseRadius = p.radius * (1 + Math.sin(p.pulse) * 0.1);

        if (isLight) {
          gradient.addColorStop(0, `hsla(40, 30%, 70%, ${p.alpha * 0.5})`);
          gradient.addColorStop(0.5, `hsla(40, 20%, 80%, ${p.alpha * 0.2})`);
          gradient.addColorStop(1, 'transparent');
        } else {
          gradient.addColorStop(0, `hsla(${p.hue}, 70%, 50%, ${p.alpha})`);
          gradient.addColorStop(
            0.5,
            `hsla(${p.hue}, 70%, 50%, ${p.alpha * 0.3})`,
          );
          gradient.addColorStop(1, 'transparent');
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw breathing aura
      if (studyMode.timer.isRunning) {
        const time = Date.now() / 1000;
        const breathRadius = 150 + Math.sin(time * 0.5) * 20;

        const breathGradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          0,
          width / 2,
          height / 2,
          breathRadius,
        );

        if (isLight) {
          breathGradient.addColorStop(0, 'hsla(40, 30%, 75%, 0.05)');
          breathGradient.addColorStop(1, 'transparent');
        } else {
          breathGradient.addColorStop(0, 'hsla(180, 70%, 50%, 0.03)');
          breathGradient.addColorStop(1, 'transparent');
        }

        ctx.beginPath();
        ctx.arc(width / 2, height / 2, breathRadius, 0, Math.PI * 2);
        ctx.fillStyle = breathGradient;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();
  },
};

document.addEventListener('DOMContentLoaded', () => app.init());
