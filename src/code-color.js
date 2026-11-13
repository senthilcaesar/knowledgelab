/**
 * code-color.js — Centralized Monokai syntax theme for KnowledgeLab.
 *
 * Token palette (from the official Vim Monokai colorscheme by sickill):
 *   --syntax-keyword    #f92672  Keyword Conditional Statement Operator Type Tag
 *   --syntax-string     #e6db74  String Label
 *   --syntax-constant   #ae81ff  Boolean Number Float SpecialChar
 *   --syntax-comment    #75715e  Comment (italic)
 *   --syntax-function   #a6e22e  Function name
 *   --syntax-identifier #66d9ef  Identifier StorageClass built-ins (cyan italic)
 *   --syntax-params     #fd971f  block params / decorators (orange italic)
 *   --syntax-bg         #272822  background
 *   --syntax-text       #f8f8f2  default foreground
 */

import hljs from 'highlight.js/lib/core';

// Register only the languages we need (keeps bundle small)
import bash       from 'highlight.js/lib/languages/bash';
import python     from 'highlight.js/lib/languages/python';
import json       from 'highlight.js/lib/languages/json';
import yaml       from 'highlight.js/lib/languages/yaml';
import javascript from 'highlight.js/lib/languages/javascript';
import xml        from 'highlight.js/lib/languages/xml'; // covers HTML

hljs.registerLanguage('bash',       bash);
hljs.registerLanguage('shell',      bash);
hljs.registerLanguage('python',     python);
hljs.registerLanguage('json',       json);
hljs.registerLanguage('yaml',       yaml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html',       xml);
hljs.configure({ ignoreUnescapedHTML: true });

/* ── Shared style strings ─────────────────────────────────────────────────── */
const BASE_PRE = [
  'display: block',
  'padding: 1rem',
  'border: 1px solid var(--border-color)',
  'border-radius: 8px',
  "font-family: var(--font-mono)",
  'font-size: var(--code-block-size)',
  'white-space: pre-wrap',
  'line-height: 1.5',
  'overflow-x: hidden',
  'margin: 0.5rem 0',
  'box-shadow: inset 0 2px 4px rgba(0,0,0,0.15)',
].join('; ');

export const codeStyles = {
  block:    `${BASE_PRE}; background: var(--syntax-bg); color: var(--syntax-text)`,
  terminal: `${BASE_PRE}; background: var(--surface-dark); color: var(--code-green)`,
  inline: [
    'padding: 0.2rem 0.4rem',
    'background: var(--surface-color)',
    'border-radius: 4px',
    'font-family: var(--font-mono)',
    'color: var(--code-text)',
  ].join('; '),
};

/* ── Helper: generate HTML strings ─────────────────────────────────────────── */
export function codeBlock(content)     { return `<pre style="${codeStyles.block}"><code>${content}</code></pre>`; }
export function terminalBlock(content) { return `<pre style="${codeStyles.terminal}"><code>${content}</code></pre>`; }
export function inlineCode(content)    { return `<code style="${codeStyles.inline}">${content}</code>`; }

/* ── applyCodeColors ────────────────────────────────────────────────────────
 *
 * Call after rendering a concept card. It:
 *   1. Detects terminal vs code blocks
 *   2. Applies correct background/text color via CSS vars
 *   3. Runs highlight.js for per-token syntax coloring on code blocks
 *   4. Injects a <style> tag once to map hljs token classes to our CSS vars
 *
 * Terminal block detection heuristic:
 *   - already uses --code-green / --surface-dark, OR
 *   - first non-whitespace char is the > or $ prompt
 * ─────────────────────────────────────────────────────────────────────────── */

let _hljsStyleInjected = false;

function _injectHljsTokenStyles() {
  if (_hljsStyleInjected) return;
  _hljsStyleInjected = true;

  const style = document.createElement('style');

  // Token class → CSS variable mappings.
  // Based on the official Vim Monokai colorscheme (sickill/vim-monokai).
  style.textContent = `

    /* keyword — pink-red #f92672
       Vim: Keyword Conditional Statement Operator Type Tag Define PreProc rubyControl */
    .hljs-keyword,
    .hljs-operator,
    .hljs-selector-tag,
    .hljs-type,
    .hljs-deletion,
    .hljs-meta .hljs-keyword {
      color: var(--syntax-keyword);
      font-weight: bold;
    }

    /* string — yellow #e6db74
       Vim: String Label shQuote yamlDocumentHeader rubyStringDelimiter */
    .hljs-string,
    .hljs-addition,
    .hljs-regexp,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-attr {
      color: var(--syntax-string);
    }

    /* constant / number — purple #ae81ff
       Vim: Boolean Character Number Float SpecialChar rubySymbol htmlSpecialChar cssColor */
    .hljs-number,
    .hljs-literal,
    .hljs-link,
    .hljs-symbol,
    .hljs-template-variable {
      color: var(--syntax-constant);
    }

    /* comment — warm grey #75715e, italic
       Vim: Comment SpecialComment NonText Folded SpecialKey */
    .hljs-comment,
    .hljs-meta,
    .hljs-quote {
      color: var(--syntax-comment);
      font-style: italic;
    }

    /* function name — green #a6e22e
       Vim: Function helpCommand htmlTag htmlEndTag rubyFunction cssPseudoClassId cssClassName */
    .hljs-title,
    .hljs-section,
    .hljs-selector-class {
      color: var(--syntax-function);
    }

    /* identifier / built-in — cyan #66d9ef, italic
       Vim: Identifier StorageClass javaScriptFunction shDerefSimple
            rubyConstant rubyRailsMethod cssCommonAttr diffFile diffLine */
    .hljs-built_in,
    .hljs-variable,
    .hljs-name {
      color: var(--syntax-identifier);
      font-style: italic;
    }

    /* params / decorators — orange #fd971f, italic
       Vim: rubyBlockParameter cssURL elixirAlias */
    .hljs-params {
      color: var(--syntax-params);
      font-style: italic;
    }

    /* Keep our bg/text CSS vars in control, not hljs defaults */
    .hljs {
      background: transparent !important;
      color: var(--syntax-text) !important;
    }

  `;

  document.head.appendChild(style);
}


/* ── Extra highlighters for content highlight.js can't colour ───────────────
 * highlight.js's bash grammar leaves plain commands (`claude --version`),
 * slash commands, directory trees and prompts uncoloured. These small
 * line-based highlighters fill the gap using the same hljs token classes,
 * so they pick up the theme colours above.
 * ─────────────────────────────────────────────────────────────────────────── */

const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
const tok = (cls, s) => `<span class="hljs-${cls}">${esc(s)}</span>`;

const TREE_RE = /[├└│]──|[├└]─|^\s*│/m;
const PROMPT_RE = /^(\s*)([$❯>]|PS>)(\s+)/;

/** Colour one shell command line. */
function shellLine(line) {
  let out = '';
  let rest = line;
  const prompt = rest.match(PROMPT_RE);
  if (prompt) {
    out += esc(prompt[1]) + tok('meta', prompt[2]) + prompt[3];
    rest = rest.slice(prompt[0].length);
  }
  if (/^\s*#/.test(rest)) return out + tok('comment', rest);

  const re = /(\s+)|(#.*$)|("(?:[^"\\]|\\.)*"|'[^']*')|(&&|\|\||\||;|>>?|<<)|(\S+)/g;
  let cmdPos = true;
  let m;
  while ((m = re.exec(rest))) {
    const [all, ws, comment, str, op, word] = m;
    if (ws) { out += ws; continue; }
    if (comment) {
      // Only a comment if it starts a token (not part of a URL fragment)
      out += tok('comment', comment); break;
    }
    if (str) { out += tok('string', str); cmdPos = false; continue; }
    if (op) { out += tok('keyword', op); cmdPos = true; continue; }
    if (cmdPos) {
      out += tok(word.startsWith('/') ? 'keyword' : 'title', word);
      cmdPos = false;
      continue;
    }
    if (/^--?[\w-]/.test(word)) out += tok('params', word);
    else if (/^\$\{?\w+\}?$|^\w+=/.test(word)) out += tok('variable', word);
    else if (/^\d+(\.\d+)*$/.test(word)) out += tok('number', word);
    else if (/[/@~.:]/.test(word)) out += tok('string', word);
    else out += esc(word);
  }
  return out;
}

/** Colour a directory tree: branches dimmed, folders vs files, notes as comments. */
function treeLine(line) {
  const m = line.match(/^([\s│├└─┬┼]*)(.*)$/);
  const glyphs = m[1];
  let body = m[2];
  let note = '';
  const noteAt = body.search(/\s+(←|<-|#|\/\/)\s/);
  if (noteAt > -1) { note = body.slice(noteAt); body = body.slice(0, noteAt); }
  const name = body.trim() ? tok(/\/$/.test(body.trim()) ? 'title' : 'string', body) : esc(body);
  return (glyphs ? tok('comment', glyphs) : '') + name + (note ? tok('comment', note) : '');
}

/** Colour a natural-language prompt: prompt marker, /commands and @mentions. */
function promptLine(line) {
  let out = '';
  let rest = line;
  const prompt = rest.match(PROMPT_RE);
  if (prompt) {
    out += esc(prompt[1]) + tok('meta', prompt[2]) + prompt[3];
    rest = rest.slice(prompt[0].length);
  }
  return out + rest
    .split(/(\s+)/)
    .map((w) => (/^\s*$/.test(w) ? w : /^\/[\w:-]+/.test(w) ? tok('keyword', w) : /^@[\w:-]+/.test(w) ? tok('variable', w) : tok('string', w)))
    .join('');
}

const BOX_CHARS = /[┌┐└┘│├┤┬┴┼─═║╔╗╚╝╠╣╦╩╬▶◀▲▼→←↓↑]+/g;
/** Colour an ASCII box diagram: frame characters dimmed, labels as titles. */
function boxLine(line) {
  let out = '';
  let last = 0;
  line.replace(BOX_CHARS, (g, at) => {
    const txt = line.slice(last, at);
    out += txt.trim() ? tok('title', txt) : txt;
    out += tok('comment', g);
    last = at + g.length;
    return g;
  });
  const tail = line.slice(last);
  return out + (tail.trim() ? tok('title', tail) : tail);
}

const looksLikeShell = (text) =>
  text
    .split('\n')
    .filter((l) => l.trim())
    .every((l) => {
      const t = l.trim().replace(/^([$❯>]|PS>)\s+/, '');
      if (/^#/.test(t)) return true;
      // English sentences start with a capitalised word; shell commands rarely do
      if (/^[A-Z][a-z]+\b/.test(t)) return false;
      return /^(\/[\w:-]|[\w.~/-]+(\s|$)|[A-Z_]+=)/.test(t) && t.split(/\s+/).length <= 14 && !/[.?!]$/.test(t);
    });

/**
 * Re-colour a block when highlight.js produced little or nothing useful.
 * Terminal transcripts: prompt lines get shell/prompt colours; Claude's output
 * keeps the terminal colour (with box-drawing dimmed).
 */
function enhance(el, { terminal }) {
  const text = el.textContent;
  if (!text.trim()) return;
  const lang = (el.className.match(/language-(\w+)/) || [])[1];
  const spans = el.querySelectorAll('[class^="hljs-"]').length;

  let html = null;
  if (TREE_RE.test(text)) {
    html = text.split('\n').map(treeLine).join('\n');
  } else if (!terminal && /[┌┐└┘╔╗╚╝]/.test(text)) {
    html = text.split('\n').map(boxLine).join('\n');
  } else if (terminal) {
    html = text
      .split('\n')
      .map((l) => {
        if (PROMPT_RE.test(l)) return looksLikeShell(l) ? shellLine(l) : promptLine(l);
        if (/^[\s│┌┐└┘├┤─═║╔╗╚╝⎿●]+/.test(l)) return l.replace(/^([\s│┌┐└┘├┤─═║╔╗╚╝⎿●]+)(.*)$/, (_, g, r) => tok('comment', g) + esc(r));
        return esc(l);
      })
      .join('\n');
  } else if ((lang === 'bash' || lang === 'shell' || spans === 0) && looksLikeShell(text)) {
    html = text.split('\n').map(shellLine).join('\n');
  } else if (spans === 0) {
    html = text.split('\n').map(promptLine).join('\n');
  }
  if (html !== null) {
    el.innerHTML = html;
    el.classList.add('hljs', 'kl-enhanced');
  }
}

export function applyCodeColors(container) {
  if (!container) return;
  _injectHljsTokenStyles();

  container.querySelectorAll('pre').forEach((pre) => {
    const existingColor = pre.style.color || '';
    const existingBg    = pre.style.background || '';
    const text          = (pre.textContent || '').trimStart();
    const firstChar     = text[0];

    const isTerminal =
      existingColor.includes('code-green') ||
      existingBg.includes('surface-dark')  ||
      firstChar === '❯' ||
      firstChar === '$';

    // Apply base surface style
    const targetStyle = isTerminal ? codeStyles.terminal : codeStyles.block;
    targetStyle.split(';').forEach((decl) => {
      const [prop, ...rest] = decl.split(':');
      if (!prop) return;
      const propName = prop.trim();
      const camel = propName.replace(/-([a-z])/g, (_, l) => l.toUpperCase());

      // Don't overwrite if it was explicitly set in the HTML string
      if (propName === 'font-size' && pre.style.fontSize) return;
      if (propName === 'line-height' && pre.style.lineHeight) return;

      pre.style[camel] = rest.join(':').trim();
    });

    // Run highlight.js on code blocks, then fill gaps (plain commands,
    // trees, prompts). Terminal transcripts get the line-based highlighter.
    const codeEl = pre.querySelector('code') || pre;
    if (!codeEl.classList.contains('hljs')) {
      if (!isTerminal) hljs.highlightElement(codeEl);
      enhance(codeEl, { terminal: isTerminal });
    }
  });


  // Handle standalone <code> not inside a <pre>
  // (many concept files use <code style="display:block"> instead of <pre>)
  container.querySelectorAll('code').forEach((code) => {
    if (code.closest('pre')) return;
    const existingBg = code.style.background || '';
    const isTerminal = existingBg.includes('surface-dark');

    // Enforce uniform font-size regardless of what the HTML says
    code.style.fontSize = 'var(--code-block-size)';
    code.style.fontFamily = 'var(--font-mono)';
    code.style.lineHeight = '1.5';

    const isBlock = /display:\s*block/.test(code.getAttribute('style') || '');
    if (!code.classList.contains('hljs')) {
      if (!isTerminal) {
        code.style.background = 'var(--syntax-bg)';
        code.style.color      = 'var(--syntax-text)';
        hljs.highlightElement(code);
      }
      if (isBlock || isTerminal) enhance(code, { terminal: isTerminal });
    }
  });

  // Also ensure every <pre> has a default font-size (if not already set)
  container.querySelectorAll('pre').forEach((pre) => {
    if (!pre.style.fontSize)   pre.style.fontSize   = 'var(--code-block-size)';
    if (!pre.style.lineHeight) pre.style.lineHeight = '1.5';
  });
}

