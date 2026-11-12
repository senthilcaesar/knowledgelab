// Course structure, progress tracking and small drawing helpers for the
// editorial (Hydra-inspired) learning experience.

/** Learning tracks shown on the home page course map. Unlisted concepts land in "More". */
export const TRACKS = [
  {
    id: 'core',
    label: 'Track 1 · Claude Code foundations',
    title: 'Learn how Claude Code is configured',
    ids: ['claude-code-configuration', 'claude-extension', 'claude-commands', 'claude-skills-tutorial', 'claude-hooks'],
  },
  {
    id: 'agents',
    label: 'Track 2 · Agents and integrations',
    title: 'Delegate work and connect tools',
    ids: ['claude-subagents', 'claude-agents', 'claude-plugins', 'claude-mcp', 'claude-official-docs'],
  },
  {
    id: 'build',
    label: 'Track 3 · Build with AI',
    title: 'Ship real apps and interfaces',
    ids: ['claude-code-uiux-21st-dev', 'build-app-skill-mcp', 'claude-designer-stack', 'build-webapp-ai'],
  },
  {
    id: 'frameworks',
    label: 'Track 4 · Frameworks and ideas',
    title: 'Go deeper on agentic engineering',
    ids: ['ai-agent-workflows', 'ai-engineering', 'questions'],
  },
];

/** Group concepts into tracks, keeping any concept not listed above in a final "More" track. */
export function groupIntoTracks(concepts) {
  const byId = new Map(concepts.map((c) => [c.id, c]));
  const used = new Set();
  const tracks = TRACKS.map((t) => {
    const items = t.ids.map((id) => byId.get(id)).filter(Boolean);
    items.forEach((c) => used.add(c.id));
    return { ...t, items };
  }).filter((t) => t.items.length);
  const rest = concepts.filter((c) => !used.has(c.id));
  if (rest.length) {
    tracks.push({ id: 'more', label: `Track ${tracks.length + 1} · More`, title: 'Everything else', items: rest });
  }
  return tracks;
}

export const stepCount = (concept) => (concept.tabs && concept.tabs.length ? concept.tabs.length : 1);

export const stepLabel = (concept, i) =>
  concept.tabs && concept.tabs.length ? concept.tabs[i].label : concept.title;

/** Reading minutes per concept from the search index (≈200 words a minute). */
export function readingMinutes(index) {
  const words = new Map();
  index.forEach((s) => {
    const n = s.text ? s.text.split(' ').length : 0;
    words.set(s.conceptId, (words.get(s.conceptId) || 0) + n);
  });
  const minutes = new Map();
  words.forEach((w, id) => minutes.set(id, Math.max(1, Math.round(w / 200))));
  return minutes;
}

// ── Progress (per-viewer convenience, so localStorage is fine) ───────────
const PROGRESS_KEY = 'progress';
const LAST_KEY = 'lastVisit';

const read = (key, fallback) => {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return v ?? fallback;
  } catch {
    return fallback;
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable: progress just won't persist */
  }
};

export const progress = {
  data: read(PROGRESS_KEY, {}),

  done(conceptId) {
    return new Set(this.data[conceptId] || []);
  },
  isDone(conceptId, step) {
    return (this.data[conceptId] || []).includes(step);
  },
  set(conceptId, step, value) {
    const s = this.done(conceptId);
    if (value) s.add(step);
    else s.delete(step);
    this.data[conceptId] = [...s].sort((a, b) => a - b);
    write(PROGRESS_KEY, this.data);
  },
  toggle(conceptId, step) {
    const next = !this.isDone(conceptId, step);
    this.set(conceptId, step, next);
    return next;
  },
  count(conceptId, total) {
    return (this.data[conceptId] || []).filter((i) => i < total).length;
  },
  reset() {
    this.data = {};
    write(PROGRESS_KEY, {});
    write(LAST_KEY, null);
  },
  last() {
    return read(LAST_KEY, null);
  },
  visit(conceptId, step) {
    write(LAST_KEY, { id: conceptId, step });
  },
};

// ── Hand-drawn SVG bits ──────────────────────────────────────────────────
export const squiggle = () =>
  `<svg class="kl-squiggle" viewBox="0 0 300 24" aria-hidden="true"><path d="M4 15 C40 4 70 21 104 11 C140 1 170 23 206 13 C236 5 262 19 296 8"/></svg>`;

/** Line-art terminal + spark doodle for the home hero. */
export const heroDoodle = () => `
<svg class="kl-hero-doodle" viewBox="0 0 320 300" aria-hidden="true">
  <path d="M30 60 C28 120 32 180 30 230 C110 234 200 228 284 232 C286 170 282 110 286 58 C200 54 110 62 30 60 Z"/>
  <path d="M32 92 C110 88 200 94 284 90"/>
  <path d="M50 76 C50 70 58 70 58 76 C58 82 50 82 50 76"/>
  <path d="M70 76 C70 70 78 70 78 76 C78 82 70 82 70 76"/>
  <path d="M90 76 C90 70 98 70 98 76 C98 82 90 82 90 76"/>
  <path d="M58 124 L84 142 L58 160"/>
  <path d="M100 162 C120 160 140 164 160 161"/>
  <path d="M60 196 C100 192 150 198 210 194"/>
  <path d="M248 20 L254 40 M268 30 L256 44 M232 34 L248 44"/>
  <path d="M120 262 C150 250 200 252 230 266"/>
</svg>`;

/** Small doodles for track headers, cycled by index. */
const DOODLES = [
  // gear-ish cog
  `<path d="M80 30 C100 30 116 46 116 66 C116 86 100 102 80 102 C60 102 44 86 44 66 C44 46 60 30 80 30 Z"/><path d="M80 12 L80 30 M80 102 L80 120 M26 66 L44 66 M116 66 L134 66"/><path d="M70 66 C70 58 90 58 90 66 C90 74 70 74 70 66"/>`,
  // two connected nodes
  `<path d="M40 40 C40 28 60 28 60 40 C60 52 40 52 40 40"/><path d="M100 96 C100 84 120 84 120 96 C120 108 100 108 100 96"/><path d="M58 48 C76 62 88 74 102 88"/><path d="M110 30 C110 22 122 22 122 30 C122 38 110 38 110 30"/><path d="M60 38 C80 32 96 30 110 30"/>`,
  // rocket
  `<path d="M80 14 C104 36 108 70 96 100 L64 100 C52 70 56 36 80 14 Z"/><path d="M72 56 C72 48 88 48 88 56 C88 64 72 64 72 56"/><path d="M64 88 L46 112 L64 104 M96 88 L114 112 L96 104"/><path d="M74 108 C76 118 84 118 86 108"/>`,
  // lightbulb
  `<path d="M80 18 C108 18 122 42 114 66 C108 82 96 88 96 102 L64 102 C64 88 52 82 46 66 C38 42 52 18 80 18 Z"/><path d="M66 112 C76 114 86 114 94 112 M70 122 C76 124 84 124 90 122"/><path d="M80 102 L80 70 C80 62 70 60 70 68"/>`,
];
export const trackDoodle = (i) =>
  `<svg class="kl-doodle" viewBox="0 0 160 130" aria-hidden="true">${DOODLES[i % DOODLES.length]}</svg>`;

export const checkIcon = () =>
  `<svg class="kl-check" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5 L6.5 12 L13 4.5"/></svg>`;
