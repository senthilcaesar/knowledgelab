const claudeFolderConcept = {
  id: 'claude-folder',
  title: 'The .claude Folder',
  category: '',
  tags: [''],
  tabs: [
    {
      label: 'Overview',
      content: `
<p style="margin-bottom:1rem; line-height:1.75;">When you use Claude Code inside a project, it creates a hidden folder called <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude</code> inside your project directory. Think of this folder as Claude's "brain" for your project. Everything in it tells Claude how to behave, what it is allowed to do, and what shortcuts you have set up.</p>

<p style="margin-bottom:1rem; line-height:1.75;">You do not have to create this folder yourself. Claude Code creates it for you the first time you run <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/init</code> inside a project. But once it exists, you can edit every file in it using any text editor — no coding required.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The Folder Layout at a Glance</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre; line-height: 1.6;"><code>your-project/
├── CLAUDE.md          ← Claude's instructions for this project
├── CLAUDE.local.md    ← Your personal notes (not shared with team)
└── .claude/
    ├── settings.json  ← Permission rules &amp; technical config
    ├── commands/      ← Your custom shortcut commands
    │   └── review.md  ← e.g. /project:review
    └── rules/         ← Modular topic-specific guidelines
        ├── code-style.md
        └── testing.md

# Plus, globally (applies to ALL your projects):
~/.claude/
├── CLAUDE.md          ← Your personal preferences everywhere
└── settings.json      ← Your global permission defaults</code></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">💡 <strong>Key idea:</strong> CLAUDE.md files are like a permanent sticky note. Every time a new session starts, Claude reads them — so your instructions never need to be retyped.</p>
</div>

<div style="margin-top: 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.75rem;">
  ${[
    ['📄', 'CLAUDE.md', 'Permanent instruction manual'],
    ['⚙️', 'settings.json', 'Permission rulebook'],
    ['⚡', 'commands/*.md', 'Custom slash shortcuts'],
    ['📋', 'rules/*.md', 'Topic-specific guidelines'],
    ['🔒', 'CLAUDE.local.md', 'Your private notes'],
  ].map(([icon, name, desc]) => `
  <div style="padding: 0.9rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px; text-align: center;">
    <div style="font-size: 1.5rem; margin-bottom: 0.4rem;">${icon}</div>
    <div style="font-family: monospace; font-size: 0.78rem; color: var(--accent-primary); margin-bottom: 0.25rem;">${name}</div>
    <div style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4;">${desc}</div>
  </div>`).join('')}
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">Next: CLAUDE.md <span>→</span></a>
</div>
`,
    },
    {
      label: 'CLAUDE.md',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">📄 CLAUDE.md — The Permanent Instruction Manual</strong>

<p style="margin-bottom:1rem; line-height:1.75;">CLAUDE.md is the most important file in your project's .claude setup. It is a plain text file written in Markdown — a simple formatting language — where you write instructions that Claude reads at the beginning of <strong>every session</strong>. You never have to paste the same instructions into the chat again; they are always there.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">When it is loaded</strong>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Automatically at the start of every new Claude Code session. Claude also re-loads it after the <code style="padding: 0.15rem 0.35rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/compact</code> command. The file is loaded <em>in full</em> — not summarised — so every instruction you write is always in front of Claude.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Where to put it</strong>
<div style="overflow-x: auto; margin-bottom: 1rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.85rem;">
  <thead>
    <tr style="background: var(--surface-color);">
      <th style="padding: 0.6rem 0.8rem; text-align:left; border: 1px solid var(--border-color); color: var(--text-primary);">Location</th>
      <th style="padding: 0.6rem 0.8rem; text-align:left; border: 1px solid var(--border-color); color: var(--text-primary);">Who sees it</th>
      <th style="padding: 0.6rem 0.8rem; text-align:left; border: 1px solid var(--border-color); color: var(--text-primary);">Best for</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); font-family: monospace; font-size: 0.8rem; color: var(--code-text);">./CLAUDE.md</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Your whole team (checked into git)</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Coding standards, project commands, architecture notes</td>
    </tr>
    <tr style="background: var(--surface-color);">
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); font-family: monospace; font-size: 0.8rem; color: var(--code-text);">~/.claude/CLAUDE.md</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Only you, across all projects</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Personal style preferences, favourite shortcuts</td>
    </tr>
    <tr>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); font-family: monospace; font-size: 0.8rem; color: var(--code-text);">./CLAUDE.local.md</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Only you, in this project</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Your sandbox URLs, personal test data</td>
    </tr>
  </tbody>
</table>
</div>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example CLAUDE.md for a Python project</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># My Python API Project

## Stack
Python 3.11 + FastAPI + PostgreSQL + pytest

## Commands
- Run server: uvicorn main:app --reload
- Run tests: pytest -v
- Lint: ruff check .

## Style rules
- Type-hint every function parameter and return value.
- Prefer async functions for all database calls.
- Never commit credentials — use .env for secrets.</code></pre>

<strong style="display:block; margin-top:1.25rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Pro tips</strong>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Keep the file <strong>under 200 lines</strong>. Longer files reduce how well Claude follows instructions.</li>
  <li>Be specific: <em>"Use 2-space indentation"</em> is better than <em>"format code nicely"</em>.</li>
  <li>Run <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/memory</code> inside a session to check which CLAUDE.md files are currently loaded.</li>
  <li>Use <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/init</code> to auto-generate a starter CLAUDE.md from your existing project.</li>
</ul>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous"><span>←</span> Previous: Overview</a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">Next: settings.json <span>→</span></a>
</div>
`,
    },
    {
      label: 'settings.json',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">⚙️ .claude/settings.json — The Permission Rulebook</strong>

<p style="margin-bottom:1rem; line-height:1.75;">While CLAUDE.md is about <em>instructions</em> (the "what" and "why"), <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> is about <em>technical permissions</em> — the "how". This JSON file tells Claude Code which tools it can use freely, which require your permission each time, and which are completely off-limits.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Settings hierarchy (who overrides whom)</strong>
<div style="overflow-x: auto; margin-bottom: 1rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.85rem;">
  <thead>
    <tr style="background: var(--surface-color);">
      <th style="padding: 0.6rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-primary);">Priority</th>
      <th style="padding: 0.6rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-primary);">File location</th>
      <th style="padding: 0.6rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-primary);">Scope</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--accent-primary); font-weight:600;">1 — Highest</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Managed settings (IT-deployed)</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Whole organisation — cannot be overridden</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">2</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.8rem; color:var(--code-text);">.claude/settings.local.json</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Just you, in this project</td></tr>
    <tr><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">3</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.8rem; color:var(--code-text);">.claude/settings.json</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Your whole team in this project</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">4 — Lowest</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.8rem; color:var(--code-text);">~/.claude/settings.json</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Just you, across all projects</td></tr>
  </tbody>
</table>
</div>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">permissions — allow and deny lists</strong>
<p style="margin-bottom:0.5rem; color: var(--text-secondary); line-height:1.75;">The most important section. You list which terminal commands and file operations Claude is allowed to run without asking, and which it must never do.</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "permissions": {
    "allow": [
      "Bash(python manage.py test *)",  // always allow running tests
      "Bash(git status)",
      "Bash(git diff *)",
      "Read(./src/**)"                  // always allow reading src folder
    ],
    "deny": [
      "Read(./.env)",                   // NEVER read the .env secrets file
      "Read(./.env.*)",
      "Bash(rm -rf *)",                 // NEVER delete files recursively
      "Bash(curl *)"                    // NEVER make network requests
    ]
  }
}</code></pre>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">hooks — run code automatically</strong>
<p style="margin-bottom:0.5rem; color: var(--text-secondary); line-height:1.75;">Hooks let you run a terminal command whenever Claude does something. For example, automatically format a file after Claude edits it.</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "hooks": [{
    "matcher": "Edit",
    "hooks": [{
      "type": "command",
      "command": "python -m black \\"$CLAUDE_FILE_PATHS\\""
    }]
  }]
}</code></pre>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">model — choose which AI model to use</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text);"><code>{ "model": "claude-sonnet-4-6" }</code></pre>

<div style="padding: 1rem; background: rgba(255,100,100,0.07); border: 1px solid rgba(255,100,100,0.2); border-left: 4px solid #f87171; border-radius: 10px; margin: 1rem 0;">
  <p style="margin:0; line-height:1.75; font-size:0.9rem;">🔒 <strong>Security tip:</strong> Always add your <code style="color:var(--code-text);">.env</code> file to the deny list. This prevents Claude from accidentally reading API keys or database passwords.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous"><span>←</span> Previous: CLAUDE.md</a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">Next: commands/*.md <span>→</span></a>
</div>
`,
    },
    {
      label: 'commands/*.md',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">⚡ .claude/commands/*.md — Custom Slash Commands</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commands/</code> folder lets you create your own slash commands — shortcuts you can type in the Claude Code chat that instantly run a pre-written prompt. Instead of typing the same code review instructions every time, you create a file <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/review.md</code> and then type <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/project:review</code> to run it instantly.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">When it is invoked</strong>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Only when you <strong>explicitly type</strong> the slash command in the chat. Unlike CLAUDE.md (which loads automatically), command files sit quietly until you call them.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">How to create a command</strong>
<ol style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Create the folder: <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/</code></li>
  <li>Create a file with the command name as the filename (e.g. <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">review.md</code>)</li>
  <li>Write your instructions in plain English inside the file</li>
  <li>Use <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/project:review</code> in the chat to run it</li>
</ol>

<div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
  📌 <strong>Naming rule:</strong> The file name becomes the command name. <code style="color:var(--code-text);">review.md</code> → <code style="color:var(--accent-primary);">/project:review</code> &nbsp;|&nbsp; <code style="color:var(--code-text);">fix-bug.md</code> → <code style="color:var(--accent-primary);">/project:fix-bug</code>
</div>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example 1 — Code review command</strong>
<p style="margin-bottom:0.25rem; font-size:0.82rem; color:var(--text-secondary);">File: <code style="color:var(--code-text);">.claude/commands/review.md</code></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>Review the code I've selected and check for:
- Any obvious bugs or logic errors
- Missing error handling (try/except blocks)
- Functions that are too long (over 30 lines)
- Any variable names that are unclear

Give me a brief summary, then list issues by priority.
Be concise — no need to re-explain correct parts.</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example 2 — Fix a GitHub issue (using $ARGUMENTS)</strong>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Place <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">$ARGUMENTS</code> in your file. Whatever the user types after the command name gets inserted there.</p>
<p style="margin-bottom:0.25rem; font-size:0.82rem; color:var(--text-secondary);">File: <code style="color:var(--code-text);">.claude/commands/fix-issue.md</code></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>Fix GitHub issue #$ARGUMENTS following our project conventions.
Steps: read the issue, find relevant code, implement the fix,
add tests, and summarise what you changed and why.</code></pre>
<p style="margin-bottom:1rem; font-size:0.85rem; color:var(--text-secondary);">Use: type <code style="color:var(--accent-primary);">/project:fix-issue 42</code> — Claude will fix issue #42.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example 3 — Git commit (with frontmatter)</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
allowed-tools: Bash(git status:*), Bash(git diff *), Bash(git commit *)
description: Create a meaningful git commit
---

Look at the current git status and diff, then write a clear,
descriptive commit message following the Conventional Commits format.
Then commit the staged changes.</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem;">
  <p style="margin:0; font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">🌍 <strong>Global commands:</strong> Commands placed in <code style="color:var(--code-text);">~/.claude/commands/</code> are available across every project, not just the current one.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous"><span>←</span> Previous: settings.json</a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">Next: rules/*.md <span>→</span></a>
</div>
`,
    },
    {
      label: 'rules/*.md',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">📋 .claude/rules/*.md — Modular Topic-Specific Guidelines</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">rules/</code> folder is a more organised way to write instructions than cramming everything into a single CLAUDE.md file. Instead of one long file, you create separate, focused files — one per topic. Rules files are loaded the same way as CLAUDE.md — <strong>automatically at the start of every session.</strong></p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">When rules files are loaded</strong>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><strong>Rules without a path filter:</strong> loaded at session start, every time, just like CLAUDE.md.</li>
  <li><strong>Rules with a <code style="color:var(--code-text);">paths:</code> filter:</strong> loaded only when Claude opens a file matching the specified pattern. This saves context space in large projects.</li>
</ul>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example structure</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); line-height: 1.6;"><code>.claude/
└── rules/
    ├── code-style.md  ← loaded every session
    ├── testing.md     ← loaded every session
    └── api-rules.md   ← loaded only when editing API files</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example 1 — Code style rules (always loaded)</strong>
<p style="margin-bottom:0.25rem; font-size:0.82rem; color:var(--text-secondary);">File: <code style="color:var(--code-text);">.claude/rules/code-style.md</code></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Code Style Rules
- Always use 4-space indentation (PEP 8).
- Maximum line length: 88 characters.
- Write a one-line docstring for every function.
- Name variables clearly — avoid abbreviations like 'x' or 'tmp'.
- Group imports: stdlib first, then third-party, then local.</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example 2 — API rules (only loaded for API files)</strong>
<p style="margin-bottom:0.25rem; font-size:0.82rem; color:var(--text-secondary);">File: <code style="color:var(--code-text);">.claude/rules/api-rules.md</code></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
paths:
  - "src/api/**/*.py"
---

# API Development Rules
These rules apply only when editing files inside src/api/.
- Every endpoint must validate its input before processing.
- Return consistent error responses: {error: string, code: int}
- Always check authentication before accessing user data.
- Log every request with its status code.</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Path filtering patterns</strong>
<div style="overflow-x: auto; margin-bottom: 1rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.82rem;">
  <thead><tr style="background: var(--surface-color);">
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">Pattern</th>
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">Which files it matches</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">**/*.py</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">All Python files, anywhere in the project</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">src/**/*</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">All files inside the src/ folder</td></tr>
    <tr><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">*.md</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Markdown files in the project root only</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">src/api/**/*.py</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Python files specifically inside src/api/</td></tr>
  </tbody>
</table>
</div>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem;">
  <p style="margin:0; font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">✅ <strong>When to use rules/ vs CLAUDE.md:</strong> Use CLAUDE.md for a high-level project overview. Use rules/ when your instructions grow long enough to need organisation — for example, separate files per team, per language, or per feature area.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous"><span>←</span> Previous: commands/*.md</a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">Next: CLAUDE.local.md <span>→</span></a>
</div>
`,
    },
    {
      label: 'CLAUDE.local.md',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">🔒 CLAUDE.local.md — Your Private Notes</strong>

<p style="margin-bottom:1rem; line-height:1.75;">CLAUDE.local.md is your personal version of CLAUDE.md for the current project. It works identically to CLAUDE.md — Claude reads it automatically at session start — but it lives alongside CLAUDE.md in the project root and is meant to be added to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.gitignore</code> so it is <strong>never committed</strong> to the repository.</p>

<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary);">Use it for anything that applies only to you: your local machine paths, your personal development server URLs, your preferred debug flags, or instructions that are just for your workflow — not your teammates.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">When it is loaded</strong>
<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary);">Automatically at session start, alongside CLAUDE.md. If both files exist and their instructions conflict, <strong>CLAUDE.local.md is read last</strong> — so your personal notes take precedence over the shared instructions at the same directory level.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">How to set it up</strong>
<ol style="margin: 0 0 0.75rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Create the file in your project root: <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code></li>
  <li>Add it to <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.gitignore</code> so it is never pushed to the repository</li>
  <li>Write your personal notes inside it in plain Markdown</li>
</ol>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># .gitignore
CLAUDE.local.md           # add this line
.claude/settings.local.json</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example CLAUDE.local.md</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># My personal dev setup

## Local URLs
- Backend API: http://localhost:8000
- Frontend: http://localhost:5173
- Admin panel: http://localhost:8000/admin

## My preferences
- Always show full stack traces when there's an error.
- I'm on macOS — use 'open' to open URLs, not 'xdg-open'.
- My Python virtualenv is at: ~/venvs/myproject/</code></pre>

<div style="padding: 1rem; background: rgba(255,100,100,0.07); border: 1px solid rgba(255,100,100,0.2); border-left: 4px solid #f87171; border-radius: 10px; margin: 0.75rem 0 1rem;">
  <p style="margin:0; line-height:1.75; font-size:0.9rem;">🔐 <strong>Privacy reminder:</strong> CLAUDE.local.md is for personal convenience. Don't put real production passwords here — use a proper secrets manager. This file is purely for your local dev notes.</p>
</div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">CLAUDE.local.md vs settings.local.json</strong>
<div style="overflow-x: auto; margin-bottom: 1rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.85rem;">
  <thead><tr style="background: var(--surface-color);">
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">File</th>
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">What to put in it</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.8rem; color:var(--code-text);">CLAUDE.local.md</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Personal instructions, local URLs, your preferred workflow notes</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.8rem; color:var(--code-text);">.claude/settings.local.json</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Personal permission overrides (allow/deny rules specific to your machine)</td></tr>
  </tbody>
</table>
</div>
<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary);">Both files are gitignored automatically — neither is shared with the team.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous"><span>←</span> Previous: rules/*.md</a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">Next: Quick Reference <span>→</span></a>
</div>
`,
    },
    {
      label: 'Quick Reference',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">🧭 Quick Reference Card</strong>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Which file do I edit?</strong>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Use this table whenever you want to configure Claude Code:</p>
<div style="overflow-x: auto; margin-bottom: 1.25rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.82rem;">
  <thead><tr style="background: var(--surface-color);">
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">#</th>
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">I want to…</th>
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">→ Edit this file</th>
  </tr></thead>
  <tbody>
    ${[
      ['1','Give Claude permanent project instructions all teammates share','CLAUDE.md (project root)'],
      ['2','Give Claude my personal preferences for every project','~/.claude/CLAUDE.md (home folder)'],
      ['3','Store personal notes for this project — not for teammates','CLAUDE.local.md (project root, gitignored)'],
      ['4','Allow or block specific terminal commands / file reads','.claude/settings.json'],
      ['5','Make personal permission overrides just for my machine','.claude/settings.local.json'],
      ['6','Create a reusable shortcut I can type as a /command','.claude/commands/<name>.md'],
      ['7','Split a growing CLAUDE.md into organised topic files','.claude/rules/<topic>.md'],
      ['8','Apply rules only when editing a specific type of file','.claude/rules/<topic>.md (with paths: frontmatter)'],
    ].map(([n, want, file], i) => `
    <tr${i % 2 === 1 ? ' style="background:var(--surface-color);"' : ''}>
      <td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--accent-primary); font-weight:600; text-align:center;">${n}</td>
      <td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">${want}</td>
      <td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">${file}</td>
    </tr>`).join('')}
  </tbody>
</table>
</div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Files at a glance</strong>
<div style="overflow-x: auto; margin-bottom: 1.25rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.82rem;">
  <thead><tr style="background: var(--surface-color);">
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">File</th>
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">Auto-loaded?</th>
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">Shared?</th>
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">Purpose</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">CLAUDE.md</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Yes</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Team</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Permanent project instructions</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">CLAUDE.local.md</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Yes</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">🔒 Just you</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Personal notes for this project</td></tr>
    <tr><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">.claude/settings.json</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Yes</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Team</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Allow / deny permissions &amp; config</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">.claude/settings.local.json</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Yes</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">🔒 Just you</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Personal permission overrides</td></tr>
    <tr><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">.claude/commands/*.md</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">❌ On demand</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Team</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Custom /slash commands</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">.claude/rules/*.md</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Yes (or on demand)</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Team</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Topic-specific modular rules</td></tr>
  </tbody>
</table>
</div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Useful commands inside Claude Code</strong>
<div style="overflow-x: auto; margin-bottom: 1.25rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.82rem;">
  <thead><tr style="background: var(--surface-color);">
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">Command</th>
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">What it does</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--accent-primary);">/init</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Generate a starter CLAUDE.md for your project automatically</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--accent-primary);">/memory</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Show all loaded instruction files; toggle auto memory</td></tr>
    <tr><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--accent-primary);">/config</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Open the settings interface</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--accent-primary);">/status</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Show which settings files are active</td></tr>
    <tr><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--accent-primary);"># your text</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Quickly add a note to the most relevant CLAUDE.md</td></tr>
  </tbody>
</table>
</div>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem;">
  <p style="margin:0; font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">🧭 <strong>Still not sure?</strong> Start with CLAUDE.md. It covers 90% of day-to-day needs. Add the other files only as your project grows.</p>
</div>

<p style="margin-top: 0.75rem; font-size:0.85rem; color: var(--text-secondary);">
  Official docs:
  <a href="https://code.claude.com/docs/en/memory" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Memory</a> |
  <a href="https://code.claude.com/docs/en/settings" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Settings</a>
</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="5" class="tutorial-nav-link previous"><span>←</span> Previous: CLAUDE.local.md</a>
  <a href="#" data-goto-tab="7" class="tutorial-nav-link">Next: Visual Outline <span>→</span></a>
</div>
`,
    },
    {
      label: 'Visual Outline',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Visual Outline</strong>

<p style="margin-bottom:1rem; line-height:1.75;">An interactive flowchart showing the relationships between all the config files in the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude</code> folder.</p>

<div style="width: 100%; height: 650px; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; margin-bottom: 1.5rem; background: var(--surface-color);">
  <iframe src="./claude-folder-flowchart.html" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="6" class="tutorial-nav-link previous"><span>←</span> Previous: Quick Reference</a>
</div>
`,
    },
  ],
  interactiveType: 'custom',
};

export default claudeFolderConcept;
