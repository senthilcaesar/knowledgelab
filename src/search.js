// Full-text search across every concept's title and tab content.

const SNIPPET_RADIUS = 60;
const MAX_SNIPPETS_PER_SECTION = 3;

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const htmlToText = (html) => {
  const doc = new DOMParser().parseFromString(html || '', 'text/html');
  doc.querySelectorAll('script, style').forEach((el) => el.remove());
  return (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
};

/** Build one index entry per searchable section (a tab, or the description). */
export function buildSearchIndex(concepts) {
  const sections = [];
  concepts.forEach((c) => {
    if (c.tabs && c.tabs.length) {
      c.tabs.forEach((tab, i) => {
        sections.push({
          conceptId: c.id,
          conceptTitle: c.title,
          tabIndex: i,
          tabLabel: tab.label,
          text: htmlToText(tab.content),
        });
      });
    } else {
      sections.push({
        conceptId: c.id,
        conceptTitle: c.title,
        tabIndex: null,
        tabLabel: null,
        text: htmlToText(c.description),
      });
    }
  });
  return sections;
}

const findAll = (haystackLower, needleLower) => {
  const positions = [];
  let i = haystackLower.indexOf(needleLower);
  while (i !== -1) {
    positions.push(i);
    i = haystackLower.indexOf(needleLower, i + needleLower.length);
  }
  return positions;
};

/**
 * Returns results grouped by concept:
 * [{ conceptId, conceptTitle, titleMatch, total, sections: [{ tabIndex, tabLabel, count, snippets }] }]
 */
export function search(index, concepts, query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const byConcept = new Map();
  concepts.forEach((c) => {
    byConcept.set(c.id, {
      conceptId: c.id,
      conceptTitle: c.title,
      titleMatch: c.title.toLowerCase().includes(q),
      total: 0,
      sections: [],
    });
  });

  index.forEach((s) => {
    const positions = findAll(s.text.toLowerCase(), q);
    const labelMatch = s.tabLabel && s.tabLabel.toLowerCase().includes(q);
    if (!positions.length && !labelMatch) return;

    const snippets = positions.slice(0, MAX_SNIPPETS_PER_SECTION).map((pos) => {
      const start = Math.max(0, pos - SNIPPET_RADIUS);
      const end = Math.min(s.text.length, pos + q.length + SNIPPET_RADIUS);
      return {
        before: (start > 0 ? '…' : '') + s.text.slice(start, pos),
        match: s.text.slice(pos, pos + q.length),
        after: s.text.slice(pos + q.length, end) + (end < s.text.length ? '…' : ''),
      };
    });

    const group = byConcept.get(s.conceptId);
    group.total += positions.length;
    group.sections.push({ tabIndex: s.tabIndex, tabLabel: s.tabLabel, count: positions.length, snippets });
  });

  return [...byConcept.values()]
    .filter((g) => g.titleMatch || g.sections.length)
    .sort((a, b) => (b.titleMatch - a.titleMatch) || (b.total - a.total));
}

/** HTML for the results panel shown in the content area. */
export function renderResults(results, query) {
  const total = results.reduce((n, g) => n + g.total, 0);
  if (!results.length) {
    return `
      <div class="search-results">
        <p class="search-summary">No matches for “${escapeHtml(query)}”</p>
      </div>`;
  }

  const groups = results
    .map((g) => {
      const sections = g.sections
        .map((s) => {
          const tabAttr = s.tabIndex === null ? '' : `data-tab="${s.tabIndex}"`;
          const snippets = s.snippets
            .map(
              (sn) =>
                `<p class="search-snippet">${escapeHtml(sn.before)}<mark>${escapeHtml(sn.match)}</mark>${escapeHtml(sn.after)}</p>`,
            )
            .join('');
          const more = s.count > s.snippets.length ? `<span class="search-more">+${s.count - s.snippets.length} more</span>` : '';
          return `
            <button class="search-hit" data-concept="${g.conceptId}" ${tabAttr}>
              ${s.tabLabel ? `<span class="search-hit-tab">${escapeHtml(s.tabLabel)}<span class="search-count">${s.count}</span></span>` : ''}
              ${snippets}${more}
            </button>`;
        })
        .join('');

      return `
        <section class="search-group">
          <button class="search-group-title" data-concept="${g.conceptId}">${escapeHtml(g.conceptTitle)}</button>
          ${sections}
        </section>`;
    })
    .join('');

  return `
    <div class="search-results">
      <p class="search-summary">${total} match${total === 1 ? '' : 'es'} for “${escapeHtml(query)}” in ${results.length} concept${results.length === 1 ? '' : 's'}</p>
      ${groups}
    </div>`;
}

/**
 * Wrap every case-insensitive occurrence of `query` inside `root` in <mark class="search-highlight">.
 * Works across element boundaries (e.g. syntax-highlighted code split into spans).
 * Returns the created mark elements.
 */
export function highlightMatches(root, query) {
  const q = query.trim().toLowerCase();
  if (!root || !q) return [];

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.parentElement && n.parentElement.closest('script, style, .copy-btn')
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT,
  });

  const nodes = [];
  let full = '';
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    nodes.push({ node: n, start: full.length });
    full += n.nodeValue;
  }

  const positions = findAll(full.toLowerCase(), q);
  if (!positions.length) return [];

  // Collect [node, from, to] pieces, then wrap in reverse so offsets stay valid.
  const pieces = [];
  let ni = 0;
  positions.forEach((pos) => {
    const end = pos + q.length;
    while (ni < nodes.length && nodes[ni].start + nodes[ni].node.nodeValue.length <= pos) ni++;
    for (let j = ni; j < nodes.length && nodes[j].start < end; j++) {
      const { node, start } = nodes[j];
      const from = Math.max(pos, start) - start;
      const to = Math.min(end, start + node.nodeValue.length) - start;
      if (to > from) pieces.push({ node, from, to });
    }
  });

  const marks = [];
  for (let k = pieces.length - 1; k >= 0; k--) {
    const { node, from, to } = pieces[k];
    const range = document.createRange();
    range.setStart(node, from);
    range.setEnd(node, to);
    const mark = document.createElement('mark');
    mark.className = 'search-highlight';
    range.surroundContents(mark);
    marks.unshift(mark);
  }
  return marks;
}
