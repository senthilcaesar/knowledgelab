import './style.css';
import { initConstellation } from './constellation.js';
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

  resetContentScroll() {
    const contentArea = document.getElementById('content-area');
    if (contentArea) contentArea.scrollTop = 0;

    const tutorialContent = document.querySelector('.tutorial-tab-content');
    if (tutorialContent) tutorialContent.scrollTop = 0;
  },

  init() {
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

    // Start the neural constellation background
    initConstellation(document.getElementById('constellation-bg'));
  },

  renderWelcome() {
    // Restore constellation on home screen
    document.getElementById('constellation-bg').style.display = '';
    const cotd = this.getConceptOfTheDay();
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
      <div class="cotd-ticker">
        <span class="cotd-label">Skill of the Day</span>
        <div class="ticker-track">
          <span class="ticker-text">${cotd.title}</span>
        </div>
      </div>
      <div class="welcome-card">
        <h2>Welcome to Knowledge Lab</h2>
        <p>Select a tutorial from the sidebar to begin your interactive learning journey.</p>
      </div>
    `;

    // Make the ticker clickable to open the concept
    contentArea.querySelector('.cotd-ticker').addEventListener('click', () => {
      this.selectConcept(cotd.id);
    });

    // Pin the start position to the exact right edge of the track (no dead zone)
    const tickerText = contentArea.querySelector('.ticker-text');
    const trackWidth = contentArea.querySelector('.ticker-track').offsetWidth;
    tickerText.style.setProperty('--start-x', trackWidth + 'px');
  },

  getConceptOfTheDay() {
    // Deterministic: divide epoch ms by ms-per-day to get a stable daily index.
    // Every user on the same calendar day (UTC) sees the exact same concept.
    // Changes automatically at midnight UTC — no localStorage needed.
    const dayIndex = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
    return concepts[dayIndex % concepts.length];
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
      .map(
        (c) => `
      <li class="nav-item" data-id="${c.id}">${c.title}</li>
    `,
      )
      .join('');
  },

  isMobile() {
    return window.innerWidth <= 640;
  },

  closeMobileSidebar() {
    document.getElementById('app').classList.remove('sidebar-open');
  },

  setupEventListeners() {
    // Concept list: close mobile drawer after selecting
    document.getElementById('concept-list').addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-item')) {
        const id = e.target.dataset.id;
        if (this.isMobile()) this.closeMobileSidebar();
        this.selectConcept(id);
      }
    });

    // Sidebar toggle: overlay drawer on mobile, collapse on desktop
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
      const app = document.getElementById('app');
      if (this.isMobile()) {
        app.classList.toggle('sidebar-open');
      } else {
        const collapsed = app.classList.toggle('sidebar-collapsed');
        localStorage.setItem('sidebar', collapsed ? 'collapsed' : 'open');
      }
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

    // Search functionality
    document.getElementById('concept-search').addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const items = document.querySelectorAll('.nav-item');
      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
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
  },

  selectConcept(id) {
    const concept = concepts.find((c) => c.id === id);
    if (!concept) return;

    // Update URL hash
    if (window.location.hash !== `#${id}`) {
      window.location.hash = id;
    }

    // Hide constellation when reading a concept
    document.getElementById('constellation-bg').style.display = 'none';

    // Update UI
    this.activeConcept = concept;
    document
      .querySelectorAll('.nav-item')
      .forEach((el) => el.classList.remove('active'));

    const navItem = document.querySelector(`[data-id="${id}"]`);
    if (navItem) navItem.classList.add('active');

    this.renderConcept(concept);
    this.resetContentScroll();
  },

  renderConcept(concept) {
    const contentArea = document.getElementById('content-area');

    if (concept.tabs && concept.tabs.length > 0) {
      // Render tabbed interface
      const tabButtons = concept.tabs
        .map(
          (tab, i) =>
            `<button class="tutorial-tab-btn${i === 0 ? ' active' : ''}" data-tab="${i}">${tab.label}</button>`,
        )
        .join('');

      const tabPanels = concept.tabs
        .map(
          (tab, i) =>
            `<div class="tutorial-tab-panel${i === 0 ? ' active' : ''}" data-panel="${i}">
          <div class="concept-content" id="concept-description-${i}">
            ${tab.content}
          </div>
        </div>`,
        )
        .join('');

      contentArea.innerHTML = `
        <article class="concept-card concept-card--tabs">
          <nav class="tutorial-tabs" role="tablist">${tabButtons}</nav>
          <div class="tutorial-tab-content">${tabPanels}</div>
        </article>
      `;

      this.initTabs();
      // Attach copy buttons to the first (active) panel
      concept.tabs.forEach((_, i) => {
        const el = document.getElementById(`concept-description-${i}`);
        if (el) this.attachCopyButtonsTo(el);
      });
    } else {
      contentArea.innerHTML = `
        <article class="concept-card">
          <h2 class="concept-title">${concept.title}</h2>
          <div class="concept-meta">
            <span class="tag">${concept.category}</span>
            ${concept.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
          </div>
          <div class="concept-content" id="concept-description">
            ${(concept.description || 'Add your description here...')
              .split('\n\n')
              .map((p) => `<p>${p}</p>`)
              .join('')}
          </div>
        </article>
      `;
      this.attachCopyButtons();
    }
  },

  initTabs() {
    const btns = document.querySelectorAll('.tutorial-tab-btn');
    const panels = document.querySelectorAll('.tutorial-tab-panel');

    const switchToTab = (index) => {
      btns.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      btns[index].classList.add('active');
      panels[index].classList.add('active');

      // Scroll the active tab into the center of the viewport
      btns[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });

      this.resetContentScroll();
    };

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

    // Find all code blocks
    const codeBlocks = container.querySelectorAll('code');

    codeBlocks.forEach((code) => {
      // Only attach to block-level code elements (the ones with inline styles or specifically for commands)
      const isBlock =
        code.style.display === 'block' || code.textContent.includes('\n');
      if (!isBlock) return;

      // Create wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'code-wrapper';

      // Insert wrapper before code
      code.parentNode.insertBefore(wrapper, code);
      // Move code into wrapper
      wrapper.appendChild(code);

      // Add copy button
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.setAttribute('title', 'Copy to clipboard');

      const copyIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
      const checkIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

      btn.innerHTML = copyIcon;

      wrapper.appendChild(btn);

      btn.addEventListener('click', () => {
        const text = code.textContent;
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

    // Check technologies from package.json
    const deps = {
      ...(pkg.dependencies || {}),
      ...(pkg.devDependencies || {}),
    };

    // Core tech stack
    const stack = [
      {
        name: 'Vanilla JavaScript',
        desc: 'Core application logic, ECMAScript modules, DOM manipulation, and dynamic rendering.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M14.5 9h-5l-.5-5h7l-.5 5zm-5 4h5l-.5 4.5-2 1.5-2-1.5-.2-2h2.2l.1 1.2 1 .8 1-.8.2-1.2h-3.8z"></path></svg>',
      },
      {
        name: 'Vanilla CSS3 & HTML5',
        desc: 'Custom glassmorphism styling, responsive grid layout, and semantic structure.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M15 9h-6l-.5-4h7.5l-.5 4zm-6 4h6l-.5 4.5-2.5 1.5-2.5-1.5-.2-2h2.2l.1 1.2 1.2.8 1.2-.8.2-1.2h-4.6z"></path></svg>',
      },
      {
        name: 'HTML5 Canvas API',
        desc: 'Custom performant animations including the Neural Constellation and Zen Flow backgrounds.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.268-.652-.053-.877.215-.225.542-.31 1.051-.31h2.438c2.66 0 4.853-2.192 4.853-4.853C21.5 6.756 17.244 2 12 2z"></path></svg>',
      },
    ];

    if (deps.vite) {
      stack.push({
        name: 'Vite (' + deps.vite.replace(/[\^\~]/, '') + ')',
        desc: 'Next-generation frontend tooling providing ultra-fast builds and Hot Module Replacement.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
      });
    }

    // Hosting logic mapped explicitly
    stack.push({
      name: 'GitHub Pages',
      desc: 'Automated CI/CD deployment via GitHub Actions pipeline using the deployed build.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    });

    list.innerHTML = stack
      .map(
        (tech) => `
      <li class="tech-stack-item">
        <div class="tech-stack-icon-wrapper">
          ${tech.icon}
        </div>
        <div class="tech-stack-info">
          <span class="tech-stack-name">${tech.name}</span>
          <span class="tech-stack-desc">${tech.desc}</span>
        </div>
      </li>
    `,
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
