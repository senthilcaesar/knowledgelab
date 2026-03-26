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

/* ── Shared style strings ─────────────────────────────────────────────────── */
const BASE_PRE = [
  'display: block',
  'padding: 1rem',
  'border: 1px solid var(--border-color)',
  'border-radius: 8px',
  "font-family: 'JetBrains Mono', monospace",
  'font-size: 0.85rem',
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
    'font-family: monospace',
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

    // Run highlight.js on code blocks (skip terminal output — freeform text)
    if (!isTerminal) {
      const codeEl = pre.querySelector('code') || pre;
      if (!codeEl.classList.contains('hljs')) {
        hljs.highlightElement(codeEl);
      }
    }
  });


  // Handle standalone <code> not inside a <pre>
  // (many concept files use <code style="display:block"> instead of <pre>)
  container.querySelectorAll('code').forEach((code) => {
    if (code.closest('pre')) return;
    const existingBg = code.style.background || '';
    const isTerminal = existingBg.includes('surface-dark');

    // Enforce uniform font-size regardless of what the HTML says
    code.style.fontSize = '0.85rem';
    code.style.fontFamily = "'JetBrains Mono', monospace";
    code.style.lineHeight = '1.5';

    if (!isTerminal && !code.classList.contains('hljs')) {
      code.style.background = 'var(--syntax-bg)';
      code.style.color      = 'var(--syntax-text)';
      hljs.highlightElement(code);
    }
  });

  // Also ensure every <pre> has a default font-size (if not already set)
  container.querySelectorAll('pre').forEach((pre) => {
    if (!pre.style.fontSize)   pre.style.fontSize   = '0.85rem';
    if (!pre.style.lineHeight) pre.style.lineHeight = '1.5';
  });
}

