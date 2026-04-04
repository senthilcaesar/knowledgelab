const claudeFolderConcept = {
  id: 'claude-folder',
  title: 'Claude Code Configuration',
  category: '',
  tags: [''],
  tabs: [
    {
      label: 'Overview',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">A Complete Beginner's Guide to Claude Code Configuration</strong>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">What is Claude Code, really?</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Claude Code is an AI coding assistant that lives in your terminal. You type instructions in plain English, and it reads your code, edits files, runs commands, and helps you build things — all without you leaving the command line.</p>

<p style="margin-bottom:1rem; line-height:1.75;">But here is the thing that makes Claude Code different from a simple chatbot: it has a memory system. You can teach it about your project once, set rules for how it should behave, and give it shortcuts for your most common tasks. It will remember all of that across every session, for every developer on your team.</p>

<p style="margin-bottom:1rem; line-height:1.75;">That memory system is built from a handful of plain text files. Understanding those files is the key to getting genuinely useful work out of Claude Code.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The problem Claude Code solves</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Every time you start a new Claude Code session, it begins with a completely blank slate. It does not remember that you prefer Google-style docstrings. It does not know your database runs on port 5433. It does not know that your team uses a specific branch naming convention, or that there is a tricky workaround in your authentication module.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Without any configuration, you end up repeating yourself constantly — explaining the same context at the start of every conversation, re-establishing your preferences, reminding Claude not to touch certain files. This gets old very fast.</p>

<p style="margin-bottom:1rem; line-height:1.75;">The configuration files solve this by encoding everything Claude needs to know once, upfront. From that point on, every session starts with Claude already briefed on your project.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The two kinds of configuration</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Before looking at individual files, it helps to understand that Claude Code has two fundamentally different things it needs to know:</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>What Claude should know</strong> — context about your project, your coding conventions, your architecture, your team's rules. This is documentation you write for Claude the same way you'd write documentation for a new teammate.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>What Claude is allowed to do</strong> — permissions, tool access, environment variables, which commands it can run without asking. This is the safety layer that controls Claude's behaviour at runtime.</p>

<p style="margin-bottom:1rem; line-height:1.75;">The first kind lives in Markdown files (<code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.md</code>). The second kind lives in JSON files (<code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.json</code>). Once you understand that split, the whole system clicks into place.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Where the files live</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Claude Code uses files in three locations. Together they form a layered system where more specific settings override broader ones.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Inside your project</strong> — files that are specific to this codebase and shared with your team via version control. This is where most of your configuration lives.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>In your home directory</strong> (<code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/</code>) — files that apply to every project you work on, across your whole machine. Good for personal preferences that follow you everywhere.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>On your machine only</strong> — certain files are intentionally never committed to git. They contain your personal notes, your local environment details, and anything else that should not be imposed on teammates.</p>

<p style="margin-bottom:1rem; line-height:1.75;">The diagram below shows exactly where each file lives and how the layers relate.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The Complete File Map</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre; line-height: 1.6;"><code>your-project/
│
├── CLAUDE.md                        ← Team project context (committed)
├── CLAUDE.local.md                  ← Your personal notes (gitignored)
│
└── .claude/
    ├── settings.json                ← Team tool permissions &amp; config (committed)
    ├── settings.local.json          ← Your personal settings (gitignored)
    │
    ├── rules/
    │   ├── code-style.md            ← Global rule, loads every session
    │   ├── testing.md               ← paths: tests/**/*.py
    │   ├── git.md                   ← Global rule, loads every session
    │   └── api/
    │       └── endpoints.md         ← paths: app/routers/**/*.py
    │
    ├── commands/
    │   ├── review.md                ← /review
    │   ├── test-gen.md              ← /test-gen
    │   ├── commit.md                ← /commit
    │   └── debug.md                 ← /debug
    │
    ├── agents/                      ← Specialized subagents
    │   └── code-reviewer.md
    │
    └── .mcp.json                    ← External tool integrations

~/.claude/                           ← Global (applies to ALL projects)
    ├── CLAUDE.md                    ← Personal preferences &amp; style
    ├── settings.json                ← Global model &amp; tool defaults
    ├── commands/                    ← Commands available in every project
    └── skills/                      ← Skills available in every project</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The six configuration files, explained plainly</strong>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">CLAUDE.md</code> — the project briefing</strong>
<p style="margin-bottom:1rem; line-height:1.75;">This is the most important file. It is a plain Markdown document that Claude reads automatically at the start of every session. Think of it as the briefing document you would write for a new developer joining the team — except Claude reads it every single time, so it never forgets.</p>

<p style="margin-bottom:1rem; line-height:1.75;">You put things in here that would cause mistakes if Claude didn't know them: your build commands, your architecture decisions, your naming conventions, which files are off-limits. Anything you find yourself explaining at the start of every conversation belongs here.</p>

<p style="margin-bottom:1rem; line-height:1.75;">It lives in your project root and is committed to git, so the whole team benefits. It is written in plain English — no special syntax required.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">CLAUDE.local.md</code> — your personal notes</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Same format as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>, but never committed to git. It sits alongside <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> in your project root and is invisible to your teammates.</p>

<p style="margin-bottom:1rem; line-height:1.75;">This is where you put things that are specific to your machine: your local server port, the path to your virtual environment, your sandbox API URL, whatever feature you are currently working on. Because it is gitignored by default, you can write freely without worrying about polluting the shared project context.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">settings.json</code> — the permission layer</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Where <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> tells Claude what to know, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> tells Claude what it is allowed to do. This JSON file controls which tools Claude can run without asking for your approval, which commands are blocked entirely, what environment variables to set at startup, and which AI model to use.</p>

<p style="margin-bottom:1rem; line-height:1.75;">The most important section is <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">permissions</code>. You can allow certain commands to run silently (like <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">pytest</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">git</code>) and explicitly deny others (like reading your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.env</code> file). This is the file that makes Claude safe to use on a real codebase.</p>

<p style="margin-bottom:1rem; line-height:1.75;">It is committed to git so your team shares the same baseline permissions.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">settings.local.json</code> — your personal permission overrides</strong>
<p style="margin-bottom:1rem; line-height:1.75;">The personal counterpart to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code>. Also gitignored. Use it for permission tweaks that only make sense on your machine — like allowing Claude to access a local docs directory that only you have, or bypassing permission prompts during a focused debugging session you're running solo.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">.claude/rules/*.md</code> — modular, scoped instructions</strong>
<p style="margin-bottom:1rem; line-height:1.75;">As your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> grows, you will want to break it into separate files — one for code style, one for testing conventions, one for API design rules. The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">rules/</code> directory is where those go.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Each file is a plain Markdown document covering one topic. The real power is path scoping: you can add YAML frontmatter to a rules file so it only loads when Claude is working with certain files. Your API rules only appear when Claude touches your router files. Your test conventions only appear when Claude touches files in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">tests/</code>. This keeps Claude's context lean and focused.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">.claude/commands/*.md</code> — slash command shortcuts</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Any prompt you type more than once a week probably belongs here. Create a Markdown file, write your prompt inside it, save it as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">review.md</code>, and from that point on you can type <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/review</code> to run it instantly.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">How it all loads together</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">When you start a Claude Code session in a project, this is the order in which everything loads:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>1. ~/.claude/CLAUDE.md          your global personal defaults
2. ~/.claude/settings.json      your global tool preferences
3. CLAUDE.md                    the team's project briefing
4. .claude/settings.json        the team's permission rules
5. .claude/rules/*.md           modular rule files (global ones)
6. CLAUDE.local.md              your personal project notes
7. .claude/settings.local.json  your personal permission overrides

   + path-scoped rules load on demand as Claude opens matching files
   + commands load on demand when you type /command-name</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Everything from steps 1–7 is in Claude's context before you type your first message. Commands and path-scoped rules join the context as needed during the session.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">How to get started in five minutes</strong>
<p style="margin-bottom:1rem; line-height:1.75;">You do not need to create any of this manually. Run this single command inside your project's claude terminal:</p>

<pre style="
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background: var(--syntax-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin: 0.25rem 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: var(--syntax-text);
  white-space: pre;
  line-height: 1.2;
"><code>/init</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Claude will examine your codebase — reading your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">package.json</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">pyproject.toml</code>, scanning your directory structure, detecting your test framework — and generate a starter <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> that reflects what it finds. From there, you edit it like any other text file and build up the other pieces as you discover you need them.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;">A good order to build things up:</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>1</strong> — let <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/init</code> create your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>. Edit it to add anything it missed. Add your personal local notes to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>2</strong> — set up <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> with permissions. Allow the commands you use constantly (like <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">pytest</code>). Deny access to your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.env</code> file.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>3</strong> — create your first custom command for whatever task you repeat most. Probably <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/commit</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/review</code>.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>When <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> grows past 150 lines</strong> — start moving sections into <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">rules/*.md</code> files. Add <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths:</code> frontmatter to the ones that only apply to specific parts of your codebase.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The one thing to remember</strong>
<p style="margin-bottom:1rem; line-height:1.75;">All of these files are plain text. There is no special tooling, no build step, no compiler. A Markdown file is a Markdown file. A JSON file is a JSON file. You can open any of them in your editor right now and start writing.</p>

<p style="margin-bottom:1rem; line-height:1.75;">The sophistication is in how Claude reads them — not in how you write them. Write clearly, be specific, and Claude will follow what you write. That is the whole system.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<p style="margin-bottom:1rem; line-height:1.75;">Here's the full overview of how everything fits together.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>



<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">What Each File Does (One-Line Summary)</strong>
<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse: collapse; min-width: 640px; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">File</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Controls</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Committed?</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Scope</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">CLAUDE.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">What Claude <em>knows</em> about the project</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">CLAUDE.local.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Your personal context, WIP notes, local URLs</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">❌ No</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Just you</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/settings.json</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Permissions, tools, model, env vars</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/settings.local.json</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Your personal permission overrides</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">❌ No</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Just you</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/rules/*.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Modular instructions, optionally path-scoped</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/commands/*.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Reusable <code style="color: var(--code-text);">/slash</code> command shortcuts</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/agents/*.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Specialized subagent definitions</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/.mcp.json</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">MCP server integrations (GitHub, Postgres…)</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">~/.claude/CLAUDE.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Personal style defaults for all projects</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">N/A</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Just you</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">~/.claude/settings.json</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Global model &amp; tool preferences</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">N/A</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Just you</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">~/.claude/commands/</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Personal commands in every project</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">N/A</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Just you</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">How They Layer Together</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Every Claude Code session loads files in this order — later layers have higher priority:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>1. Managed policy CLAUDE.md        (org-wide, if your team uses it)
2. ~/.claude/CLAUDE.md             (your global personal defaults)
3. ~/.claude/settings.json         (your global tool settings)
4. project CLAUDE.md               (team project context)
5. .claude/settings.json           (team permission rules)
6. .claude/rules/*.md              (modular team rules)
7. CLAUDE.local.md                 (your personal project notes)
8. .claude/settings.local.json     (your personal permission overrides)</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Slash commands and agents load on demand, not at startup.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The Mental Model: Three Layers of Ownership</strong>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>What the whole team shares</strong> (committed to git):<br><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> + <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> + <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">rules/*.md</code> + <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commands/*.md</code></p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>What only you see</strong> (gitignored):<br><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> + <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.local.json</code></p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>What follows you across all projects</strong> (in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/</code>):<br>Your global <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code>, and personal <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commands/</code></p>

<p style="margin-bottom:1rem; line-height:1.75;">Think of it as: the team sets the rules, you add your personal layer on top, and your global defaults underpin everything.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The "What Goes Where" Decision Rule</strong>
<ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><strong>Does it affect the whole team?</strong> → <code style="color: var(--code-text);">CLAUDE.md</code> or <code style="color: var(--code-text);">rules/*.md</code></li>
  <li><strong>Is it a permission or tool setting?</strong> → <code style="color: var(--code-text);">settings.json</code></li>
  <li><strong>Is it your personal machine/local setup?</strong> → <code style="color: var(--code-text);">CLAUDE.local.md</code> or <code style="color: var(--code-text);">settings.local.json</code></li>
  <li><strong>Do you type it more than twice per week?</strong> → <code style="color: var(--code-text);">commands/*.md</code></li>
  <li><strong>Does it only matter for certain file types?</strong> → <code style="color: var(--code-text);">rules/*.md</code> with <code style="color: var(--code-text);">paths:</code> frontmatter</li>
  <li><strong>Do you want it in every project you work on?</strong> → <code style="color: var(--code-text);">~/.claude/</code> (global files)</li>
</ul>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">Next: CLAUDE.md <span>→</span></a>
</div>
`,
    },
    {
      label: 'CLAUDE.md',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What is <code style="color: var(--code-text);">CLAUDE.md</code>?</strong>

<p style="margin-bottom:1rem; line-height:1.75;"><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> is a plain markdown file that Claude Code reads at the start of every session. Whatever you put in it gets injected into the model's context automatically — no prompting required. Think of it as a standing brief: every time you open a session in a project, Claude already knows your preferred code style, how the project is structured, which commands to run, and any rules you've set for how it should behave.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Why is it needed?</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Claude starts every session with no memory of the last one. It doesn't know your code style preferences. It doesn't know how to run your tests. It doesn't know that your team uses a specific branch naming convention or that there's a quirky workaround in your authentication module. You end up repeating yourself. Or worse, you forget to mention something important and spend time fixing code that didn't follow your conventions. <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> fixes that — Claude reads it automatically, so your preferences persist across sessions.</p>

<p style="margin-bottom:1rem; line-height:1.75;">In short: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> controls <strong>how Claude behaves</strong> (permissions, tools, env). <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> controls <strong>what Claude knows</strong> (your project, your rules, your context).</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 1 — The File Hierarchy (Where to Put It)</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">There are two levels:</p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">~/.claude/CLAUDE.md</code> — your personal <strong>global preferences</strong>, applied to every project</li>
  <li><code style="color: var(--code-text);">&lt;project-root&gt;/CLAUDE.md</code> — <strong>project-specific</strong> context, committed to the repo and shared with your team</li>
</ul>

<p style="margin-bottom:1rem; line-height:1.75;">Keeping these separate means you maintain your global file once and update project files as those projects evolve. Team members who open the same repository get the same project context automatically.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Rule of thumb:</strong> Put personal preferences (your coding style, communication preferences) in the global file. Put everything project-specific in the project file.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 2 — How to Generate Your First One</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">The fastest way to get started is the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/init</code> command. Run it inside your project:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre; line-height: 1.6;"><code>cd your-python-project
claude
/init</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Claude examines your codebase — reading package files, existing documentation, configuration files, and code structure — then generates a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> tailored to your project. The generated file typically includes build commands, test instructions, key directories, and coding conventions it detected. Think of <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/init</code> as a starting point, not a finished product. The generated <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> captures obvious patterns but may miss nuances specific to your workflow. Review what Claude produces and refine it based on your team's actual practices.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 3 — What Goes Inside</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Write instructions that would cause mistakes if missing. Everything else is noise.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>Include:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Build, test, and lint commands (exact invocations, not just tool names)</li>
  <li>Architecture decisions that affect how code should be written or organized</li>
  <li>Coding conventions specific to your project (naming patterns, file structure rules)</li>
  <li>Environment setup requirements (required env vars, expected services)</li>
  <li>Common pitfalls or patterns Claude should know to avoid</li>
  <li>Monorepo structure and which packages own which responsibilities</li>
</ul>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>Omit:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Things Claude already knows (standard Python syntax, common library APIs)</li>
  <li>Obvious reminders like "write clean code" or "add comments"</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 4 — A Complete Example for a Python Project</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Here's what a well-structured <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> looks like for a Python backend project:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Project: My FastAPI Service

This is a Python FastAPI service for managing customer invoices.
Uses PostgreSQL for storage and Redis for caching.

## Common Commands

### Run the app
uvicorn app.main:app --reload

### Run tests
pytest tests/ -v
pytest tests/test_api.py::test_specific_case -v   # single test

### Lint &amp; format
ruff check . --fix
black .

### Type check
mypy app/

### Database migrations
alembic upgrade head
alembic revision --autogenerate -m "description"

## Architecture

- \`app/\` — main application code
- \`app/routers/\` — FastAPI route handlers (one file per domain)
- \`app/services/\` — business logic; never access DB directly
- \`app/models/\` — SQLAlchemy ORM models
- \`app/schemas/\` — Pydantic schemas for request/response validation
- \`tests/\` — pytest tests mirroring the app/ structure

Routers call services. Services call models. Never skip layers.

## Coding Conventions

- Use type hints on all functions
- Pydantic v2 style (model_config, not class Config)
- Prefer named exceptions over generic Exception
- All services must be async
- Use \`snake_case\` for variables/functions, \`PascalCase\` for classes

## Important Rules

- NEVER modify files under \`alembic/versions/\` directly
- Always run \`mypy app/\` before considering a change complete
- Do not add third-party libraries without asking first
- \`.env\` file is gitignored — never commit secrets

## Current Focus

Working on the invoice PDF export feature in \`app/services/export.py\`.</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 5 — The <code style="color: var(--code-text);">@include</code> Feature (Advanced)</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Memory files can include other files using <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">@</code> notation. Included files are processed recursively and inserted before the file that references them:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre; line-height: 1.6;"><code># CLAUDE.md
@./docs/architecture.md
@~/shared/style-guide.md</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">This is great for Python projects — you can keep your architecture docs in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">docs/</code> and just reference them rather than copying content into <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 6 — Path-Scoped Rules (<code style="color: var(--code-text);">.claude/rules/</code>)</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Files in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> can use YAML frontmatter to restrict which file paths they apply to:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre; line-height: 1.6;"><code>---
paths:
  - "src/api/**"
  - "*.graphql"
---
# API conventions
All API handlers must validate input using the shared \`validate()\` helper.</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Rules without frontmatter apply unconditionally.</p>

<p style="margin-bottom:1rem; line-height:1.75;">For Python, you could create <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/tests.md</code> that only applies when Claude is editing files in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">tests/</code>, keeping your testing rules separate from your general rules.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Tips &amp; Tricks</strong>
<ol style="margin: 0 0 1rem 1.4rem; color: var(--text-secondary); line-height: 1.85;">
  <li><strong>Be specific, not vague</strong> — "Functions should be under 40 lines; if longer, extract helper functions" is something Claude can act on. "Write good code" does nothing.</li>
  <li><strong>Keep it short</strong> — The file counts toward Claude's context window, so length matters. A bloated <code style="color: var(--code-text);">CLAUDE.md</code> that runs thousands of tokens long will eat into the space available for actual conversation, code review, and reasoning. The goal is signal density: every line should earn its place. Aim for under 500 words.</li>
  <li><strong>Use emphasis for critical rules</strong> — For rules that absolutely must be followed, phrases like "IMPORTANT: Never modify the migrations folder directly" or "YOU MUST run tests before committing" can help draw attention. Use it sparingly — if everything is marked IMPORTANT, nothing is.</li>
  <li><strong>Add a "Current Focus" section</strong> — Add a "Current Focus" section and update it regularly to steer Claude toward what's relevant right now. This is particularly useful when working on a long feature over multiple sessions.</li>
  <li><strong>Document domain-specific terms</strong> — Claude Code excels at understanding general programming principles, but it might lack context for your business domain. Project-specific jargon, obscure entity names, and acronyms can confuse the agent. Documenting domain-specific terms helps AI agents navigate the codebase and edit the correct files.</li>
  <li><strong>Never put secrets in <code style="color: var(--code-text);">CLAUDE.md</code></strong> — Don't include sensitive information, API keys, credentials, or database connection strings — especially if you commit to version control. Since <code style="color: var(--code-text);">CLAUDE.md</code> becomes part of Claude's system prompt, treat it as documentation that could be shared publicly.</li>
  <li><strong>Evolve it as you work</strong> — The most valuable updates often come from code reviews. When a PR reveals a convention that wasn't documented, or a reviewer catches a pattern violation, that's a signal to update <code style="color: var(--code-text);">CLAUDE.md</code>.</li>
  <li><strong>Don't duplicate your README</strong> — If something is already in your README or a <code style="color: var(--code-text);">/docs</code> folder, don't copy it into <code style="color: var(--code-text);">CLAUDE.md</code>. Either reference the file or trust that Claude can read it when needed.</li>
</ol>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Quick Comparison: <code style="color: var(--code-text);">CLAUDE.md</code> vs <code style="color: var(--code-text);">settings.json</code></strong>
<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse: collapse; min-width: 520px; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"></th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"><code style="color: var(--code-text);">CLAUDE.md</code></th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"><code style="color: var(--code-text);">settings.json</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Format</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Markdown (human-readable)</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">JSON</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Purpose</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">What Claude <em>knows</em></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">How Claude <em>behaves</em></td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Controls</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project context, conventions, commands</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Permissions, tools, env vars, model</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Audience</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Claude + your teammates</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Claude Code runtime</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Commit to repo?</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project version yes, local version no</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:0; line-height:1.75;">The two files work together — <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> tells Claude about <em>your world</em>, and <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> tells Claude Code what it's <em>allowed to do</em>.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous"><span>←</span> Previous: Overview</a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">Next: settings.json <span>→</span></a>
</div>
`,
    },
    {
      label: 'settings.json',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What is <code style="color: var(--code-text);">settings.json</code>?</strong>

<p style="margin-bottom:1rem; line-height:1.75;">While <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> handles instructions and context, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> gives you <em>programmatic control</em> over Claude's behavior — managing permissions, environment variables, and advanced features that go beyond simple instructions.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;">Think of it like this:</p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">CLAUDE.md</code> → <em>what</em> you tell Claude to do (instructions in plain English)</li>
  <li><code style="color: var(--code-text);">settings.json</code> → <em>how</em> Claude is allowed to behave (rules, tools, environment)</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Why is it needed?</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Every time you start a new Claude Code session, you're essentially starting from scratch. Without global instructions, you'll find yourself repeatedly explaining your coding standards or re-establishing project context. Global settings solve this by creating persistent configuration that applies across all sessions.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 1 — The Three Files (Configuration Hierarchy)</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Claude Code reads settings from three JSON files at different scopes:</p>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">~/.claude/settings.json</code> — <strong>global</strong>, your personal baseline for all projects</li>
  <li><code style="color: var(--code-text);">&lt;project-root&gt;/.claude/settings.json</code> — <strong>project</strong>, team-shared settings (commit to repo)</li>
  <li><code style="color: var(--code-text);">&lt;project-root&gt;/.claude/settings.local.json</code> — <strong>local</strong>, personal overrides (add to <code style="color: var(--code-text);">.gitignore</code>)</li>
</ul>

<p style="margin-bottom:1rem; line-height:1.75;">Values merge with local taking priority — local overrides project, project overrides global.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>Rule of thumb for beginners:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Start with <code style="color: var(--code-text);">~/.claude/settings.json</code> for your personal defaults</li>
  <li>Use <code style="color: var(--code-text);">.claude/settings.json</code> in each project for team-shared rules</li>
  <li>Use <code style="color: var(--code-text);">.claude/settings.local.json</code> for secrets and personal tweaks you don't want committed</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 2 — The Most Important Setting: Permissions</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Permissions control which tools and commands Claude Code can execute — this is arguably the most important setting for both productivity and security.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run test *)",
      "Read(~/.zshrc)"
    ],
    "deny": [
      "Bash(curl *)",
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  }
}</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Commands in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">allow</code> run without confirmation prompts, while those in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">deny</code> are completely blocked. You can use wildcards (<code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">*</code>) for pattern matching.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;">For a Python project, you'd typically allow:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "permissions": {
    "allow": [
      "Bash(python *)",
      "Bash(pytest *)",
      "Bash(pip install *)",
      "Bash(git *)",
      "Read(**)",
      "Write(**)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  }
}</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 3 — Model Selection</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Control which AI model Claude Code uses and how deeply it reasons:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "model": "claude-sonnet-4-6",
  "effortLevel": "high",
  "alwaysThinkingEnabled": true
}</code></pre>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">effortLevel</code>: <code style="color: var(--code-text);">low</code> (quick responses), <code style="color: var(--code-text);">medium</code> (standard), or <code style="color: var(--code-text);">high</code> (deep reasoning)</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 4 — Environment Variables</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Any environment variable can be configured in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> under the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">env</code> key to apply it to every session or roll it out to your team.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "env": {
    "PYTHONPATH": "/your/project/src",
    "ENVIRONMENT": "development",
    "LOG_LEVEL": "DEBUG"
  }
}</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">This is great for Python projects — you won't need to export <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">PYTHONPATH</code> manually every time.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 5 — MCP Servers (Extend Claude with Tools)</strong>
<p style="margin-bottom:1rem; line-height:1.75;">MCP servers extend Claude Code with external tools. Configure them in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> to auto-start when Claude launches:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/me/docs"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost:5432/mydb"
      }
    }
  }
}</code></pre>
<p style="margin-bottom:1rem; line-height:1.75;">Servers start automatically when Claude Code launches and stop when it exits.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 6 — Attribution &amp; Git Settings</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Control how Claude Code attributes its contributions to commits and pull requests:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "attribution": {
    "commits": true,
    "pullRequests": true
  }
}</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">A Complete Starter Config for a Python Developer</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Here's a practical <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/settings.json</code> to get you started:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "model": "claude-sonnet-4-6",
  "effortLevel": "medium",
  "permissions": {
    "allow": [
      "Bash(python *)",
      "Bash(pytest *)",
      "Bash(pip *)",
      "Bash(git *)",
      "Bash(ruff *)",
      "Bash(black *)",
      "Read(**)",
      "Write(**)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  },
  "env": {
    "PYTHONPATH": "./src",
    "LOG_LEVEL": "DEBUG"
  },
  "attribution": {
    "commits": true,
    "pullRequests": false
  }
}</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Tips &amp; Tricks</strong>
<ol style="margin: 0 0 1rem 1.4rem; color: var(--text-secondary); line-height: 1.85;">
  <li><strong>Don't commit secrets</strong> — always put API keys in <code style="color: var(--code-text);">.claude/settings.local.json</code> and add it to <code style="color: var(--code-text);">.gitignore</code></li>
  <li><strong>Use wildcards smartly</strong> — <code style="color: var(--code-text);">Bash(pytest *)</code> lets Claude run any pytest variant without prompting you every time</li>
  <li><strong>Deny your <code style="color: var(--code-text);">.env</code> files</strong> — always deny access to <code style="color: var(--code-text);">.env</code> files and any directories containing secrets or credentials as a security best practice</li>
  <li><strong>Check your merged config</strong> — use <code style="color: var(--code-text);">/status</code> inside Claude Code to see each configuration layer (managed, user, project) along with its origin. If a settings file contains errors, <code style="color: var(--code-text);">/status</code> reports the issue so you can fix it.</li>
  <li><strong>Arrays replace, objects merge</strong> — settings merge with a last-writer-wins strategy at the field level: arrays are replaced (not appended), objects are deep-merged. So if your project <code style="color: var(--code-text);">settings.json</code> has a <code style="color: var(--code-text);">permissions.allow</code> array, it replaces — not adds to — your global one.</li>
  <li><strong>Restart after changes</strong> — if you manually modify <code style="color: var(--code-text);">settings.json</code> and changes don't take effect, close all Claude Code windows, open a new terminal window, and run <code style="color: var(--code-text);">claude</code> again.</li>
</ol>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<p style="margin-bottom:0; line-height:1.75;">The most impactful thing you can do as a beginner is set up your <strong>permissions</strong> correctly and define your <strong>env variables</strong> — those two alone will save you a lot of repetitive prompting during Python development.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous"><span>←</span> Previous: CLAUDE.md</a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">Next: commands/*.md <span>→</span></a>
</div>
`,
    },
    {
      label: 'commands/*.md',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What Are Custom Commands?</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Custom commands are your own reusable shortcuts — stored as Markdown files — that you can trigger instantly by typing <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/command-name</code> in Claude Code. Instead of typing out a long, repetitive prompt every session, you write it once in a file and call it with a single slash.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Think of them as custom spells for your most common development tasks.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">⚠️ Important: Commands → Skills (The Modern Way)</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Before diving in, here's something every beginner needs to know upfront:</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Custom commands have been merged into skills.</strong> A file at <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/deploy.md</code> and a skill at <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/skills/deploy/SKILL.md</code> both create <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/deploy</code> and work the same way. Your existing <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/</code> files keep working. Skills add optional features: a directory for supporting files, frontmatter to control whether you or Claude invokes them, and the ability for Claude to load them automatically when relevant.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>What this means for you as a beginner:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">.claude/commands/*.md</code> still works perfectly — use it, it's simpler</li>
  <li><code style="color: var(--code-text);">.claude/skills/&lt;name&gt;/SKILL.md</code> is the modern approach with more features</li>
  <li>This guide covers both, starting with the simpler commands format</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 1 — Where Commands Live (The Two Locations)</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Project commands are stored in a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/</code> directory right inside your project's repository. The great thing about this is that they get checked into version control, so anyone who clones the repo gets the same set of standard commands.</p>

<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse: collapse; min-width: 420px; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Location</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Path</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Scope</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Personal</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">~/.claude/commands/</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">All your projects</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Project</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/commands/</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">This project only (commit to repo)</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 2 — How to Create Your First Command</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">It's just three steps:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># 1. Create the commands directory
mkdir -p .claude/commands

# 2. Create a markdown file — the filename IS the command name
touch .claude/commands/review.md

# 3. Write your prompt inside it (plain English)</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">The filename becomes the slash command name — <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commit.md</code> becomes <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/commit</code>.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Then inside Claude Code, just type <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/review</code> and it runs.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 3 — Anatomy of a Command File</strong>
<p style="margin-bottom:1rem; line-height:1.75;">A command file has two parts: optional <strong>frontmatter</strong> (metadata) and the <strong>prompt body</strong>.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Simplest possible command (no frontmatter)</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>Review this Python file for:
1. PEP 8 style violations
2. Missing type hints
3. Functions over 20 lines
4. Bare \`except:\` clauses
5. Any obvious logic errors

Be concise. List issues with line numbers.</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Save as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/review.md</code> → use as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/review</code></p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Command with frontmatter</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Review Python code for style, types, and quality issues
allowed-tools: Read, Grep
argument-hint: [filename or leave blank for current file]
---

Review $ARGUMENTS for:
1. PEP 8 style violations  
2. Missing type hints
3. Functions over 20 lines
4. Bare \`except:\` clauses
5. Any obvious logic errors

Be concise. List issues with line numbers.</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Frontmatter fields explained</strong>
<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse: collapse; min-width: 480px; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Field</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Purpose</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">description</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Shown in autocomplete when you type <code style="color: var(--code-text);">/</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">"Run full test suite"</code></td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">allowed-tools</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Tools Claude can use without asking</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">Read, Bash, Grep</code></td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">argument-hint</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Hint shown after the command name</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">[filename]</code></td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">model</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Override the model for this command</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">claude-opus-4-6</code></td>
      </tr>
    </tbody>
  </table>
</div>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 4 — Using <code style="color: var(--code-text);">$ARGUMENTS</code></strong>
<p style="margin-bottom:1rem; line-height:1.75;">You can use the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">$ARGUMENTS</code> string to place user-supplied arguments into the prompt.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Run a specific pytest test by name
allowed-tools: Bash(pytest *)
argument-hint: [test name or file path]
---

Run the following test and show me the full output including any tracebacks:

pytest $ARGUMENTS -v -s</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Usage: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/run-test tests/test_api.py::test_login</code></p>

<p style="margin-bottom:0.75rem; line-height:1.75;">You can also use multiple positional arguments with <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">$1</code>, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">$2</code>:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
argument-hint: [source_file] [target_module]
description: Move a Python function to another module
---

Move the function or class from $1 into $2.
Update all imports across the codebase.
Run mypy after to confirm no type errors were introduced.</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 5 — Running Bash Commands Inside a Command File</strong>
<p style="margin-bottom:1rem; line-height:1.75;">You can embed shell commands that get executed when the command runs using backtick syntax with <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">!</code>:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Smart git commit with conventional message
allowed-tools: Bash(git *)
---

Here is the current diff:

&lt;diff&gt;
!\`git diff --cached\`
&lt;/diff&gt;

Write a conventional commit message (feat/fix/chore/docs/refactor/test)
following this format:
  type(scope): short description

Then run \`git commit -m "&lt;your message&gt;"\`.</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Save as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/commit.md</code> → use as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/commit</code></p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 6 — Practical Python Examples</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Here are ready-to-use commands for Python development. Create these in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/</code>:</p>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="color: var(--code-text);">review.md</code></strong> — Code review</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Review Python file for quality, style, and correctness
allowed-tools: Read, Grep
argument-hint: [filename]
---

Review $ARGUMENTS (or the current file if no argument given).

Check for:
- Missing type hints on functions/methods
- Bare \`except:\` without exception type
- Functions longer than 30 lines (suggest splitting)
- Unused imports
- Hardcoded values that should be constants or env vars
- Missing docstrings on public functions
- PEP 8 violations

Format output as a bulleted list with line numbers.</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="color: var(--code-text);">test-gen.md</code></strong> — Generate tests</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Generate pytest tests for a Python file or function
allowed-tools: Read, Write, Bash(pytest *)
argument-hint: [filename or function name]
---

Generate comprehensive pytest tests for: $ARGUMENTS

Requirements:
- Use pytest fixtures where appropriate
- Cover happy path, edge cases, and error cases
- Use \`pytest.mark.parametrize\` for multiple input scenarios
- Mock external dependencies with \`unittest.mock\`
- Follow the existing test structure in tests/
- Run the generated tests and fix any failures</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="color: var(--code-text);">docstring.md</code></strong> — Add docstrings</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Add Google-style docstrings to all undocumented functions
allowed-tools: Read, Write, Grep
argument-hint: [file or directory]
---

Add Google-style docstrings to all public functions and classes
in $ARGUMENTS that are missing them.

Format:
"""Summary line.

Args:
    param_name (type): Description.

Returns:
    type: Description.

Raises:
    ExceptionType: When this happens.
"""

Do not modify existing docstrings. Only add where missing.</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="color: var(--code-text);">debug.md</code></strong> — Debug an error</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Debug an error by tracing it through the codebase
allowed-tools: Read, Grep, Bash(python *), Bash(pytest *)
argument-hint: [paste error message or describe the bug]
---

Debug this issue: $ARGUMENTS

Steps:
1. Identify the root cause by tracing the error through relevant files
2. Explain what is going wrong and why
3. Propose a fix
4. Implement the fix
5. Run the relevant test to confirm it is resolved</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 7 — Personal Global Commands</strong>
<p style="margin-bottom:1rem; line-height:1.75;">For commands you want in <strong>every</strong> project, put them in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/commands/</code>:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>mkdir -p ~/.claude/commands</code></pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">Good candidates for your global commands:</p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">/standup</code> — summarize what changed in git today</li>
  <li><code style="color: var(--code-text);">/explain</code> — explain any code with an analogy</li>
  <li><code style="color: var(--code-text);">/refactor</code> — general refactoring prompt</li>
  <li><code style="color: var(--code-text);">/commit</code> — smart commit message generator</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Tips &amp; Tricks</strong>
<ol style="margin: 0 0 1rem 1.4rem; color: var(--text-secondary); line-height: 1.85;">
  <li><strong>Tab autocomplete works</strong> — Slash commands appear in autocomplete when you type <code style="color: var(--code-text);">/</code>. The <code style="color: var(--code-text);">description</code> frontmatter is what shows up there, so write it clearly.</li>
  <li><strong>Chain commands into shell aliases</strong> — You can skip the interactive prompt entirely with <code style="color: var(--code-text);">claude -p</code>. Add aliases to your <code style="color: var(--code-text);">.zshrc</code> or <code style="color: var(--code-text);">.bashrc</code>:</li>
</ol>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>alias clint="claude -p '/lint'"
alias ccommit="claude -p '/commit'"</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Now <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">ccommit</code> runs your commit command without opening the interactive session.</p>

<ol start="3" style="margin: 0 0 1rem 1.4rem; color: var(--text-secondary); line-height: 1.85;">
  <li><strong>Use <code style="color: var(--code-text);">!</code> to inject live shell output</strong> — Embedding <code style="color: var(--code-text);">!</code>backtick<code style="color: var(--code-text);">command</code>backtick<code style="color: var(--code-text);"></code> inside your prompt runs a shell command and injects its output into the context before Claude sees the prompt. Great for injecting <code style="color: var(--code-text);">git diff</code>, <code style="color: var(--code-text);">pytest</code> output, or environment info.</li>
  <li><strong>Keep command files focused</strong> — One command, one job. If a command does three unrelated things, split it into three files.</li>
  <li><strong>Check available commands anytime</strong> — The <code style="color: var(--code-text);">/help</code> command shows all available slash commands, including your custom commands from <code style="color: var(--code-text);">.claude/commands/</code> and <code style="color: var(--code-text);">~/.claude/commands/</code> directories.</li>
  <li><strong>Evolve commands from real friction</strong> — The best commands come from noticing what you type repeatedly. When you write the same long prompt three times in a week, that's a command waiting to be made.</li>
</ol>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Quick Comparison: Commands vs CLAUDE.md vs settings.json</strong>
<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse: collapse; min-width: 560px; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"></th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"><code style="color: var(--code-text);">commands/*.md</code></th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"><code style="color: var(--code-text);">CLAUDE.md</code></th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"><code style="color: var(--code-text);">settings.json</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>What it is</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Reusable prompt shortcuts</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Persistent project context</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Runtime configuration</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>You trigger it</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Manually with <code style="color: var(--code-text);">/name</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Automatic every session</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Automatic always</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Best for</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Repetitive multi-step tasks</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Conventions, architecture</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Permissions, tools, env</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Format</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Markdown + optional frontmatter</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Plain markdown</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">JSON</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Commit to repo?</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Yes (project commands)</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project yes, local no</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:0; line-height:1.75;">The three files work as a team: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> controls what Claude <em>can</em> do, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> tells Claude what it <em>should know</em>, and <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commands/*.md</code> gives you instant <em>shortcuts</em> for your most common workflows.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous"><span>←</span> Previous: settings.json</a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">Next: rules/*.md <span>→</span></a>
</div>
`,
    },
    {
      label: 'rules/*.md',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## What Is <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code>?</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> directory is a modular alternative to monolithic <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> files. Instead of cramming everything into one file, you organize instructions into multiple markdown files that Claude loads as project memory. Every <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.md</code> file in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> automatically becomes part of your project context — no configuration needed.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Think of it as the evolution of <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>. Once your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> grows too long, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> is how you split it up intelligently.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Why Is It Needed?</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The problem: your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> file has grown unwieldy. React patterns mixed with API guidelines mixed with testing rules. Everything loads every session, even when you're only working on database migrations.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Claude's context window isn't flat. Different sources of information receive different priority levels. When everything is marked important, Claude struggles to determine what's actually relevant to the current task. The result: instructions get ignored, context becomes noisy, and Claude's behavior becomes unpredictable. <strong>High priority everywhere = priority nowhere.</strong></p>

<p style="margin-bottom:1rem; line-height:1.75;">Rules files solve this by letting you scope instructions to only the files where they're relevant.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## How It Compares to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code></strong>

<p style="margin-bottom:1rem; line-height:1.75;">Rules without <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths</code> frontmatter are loaded at launch with the same priority as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/CLAUDE.md</code>. Rules can be scoped to specific files using YAML frontmatter with the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths</code> field. These conditional rules only apply when Claude is working with files matching the specified patterns.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Rules load into context every session or when matching files are opened. For task-specific instructions that don't need to be in context all the time, use skills instead, which only load when you invoke them or when Claude determines they're relevant to your prompt.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 1 — Set Up the Directory</strong>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); line-height: 1.6;"><code>mkdir -p .claude/rules</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">That's it. Every <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.md</code> file you put there is automatically picked up by Claude Code.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Place markdown files in your project's <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> directory. Each file should cover one topic, with a descriptive filename like <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">testing.md</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">api-design.md</code>. All <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.md</code> files are discovered recursively, so you can organize rules into subdirectories like <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">frontend/</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">backend/</code>.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">A well-organized Python project might look like this:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); line-height: 1.6;"><code>your-project/
├── CLAUDE.md                    ← short, always-true project overview
└── .claude/
    └── rules/
        ├── code-style.md        ← Python style and formatting rules
        ├── testing.md           ← pytest conventions
        ├── security.md          ← security checklist
        ├── git.md               ← commit and branch conventions
        └── api/
            └── endpoints.md     ← FastAPI-specific rules</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 2 — Global Rules (No Frontmatter)</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The simplest kind — a plain markdown file with no YAML header. It loads every session for every file, just like <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>.</p>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/code-style.md</code></strong></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Python Code Style

- Use type hints on all function signatures
- Max function length: 30 lines. Longer = extract a helper.
- Prefer named exceptions over bare \`except:\`
- Use \`snake_case\` for functions/variables, \`PascalCase\` for classes
- All public functions and classes must have Google-style docstrings
- Use \`black\` for formatting, \`ruff\` for linting
- No \`print()\` in production code — use \`logging\`</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/git.md</code></strong></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Git Conventions

- Branch names: \`feat/\`, \`fix/\`, \`chore/\`, \`docs/\` prefixes
- Commit format: \`type(scope): short description\` (Conventional Commits)
- Never commit directly to \`main\` — always use a branch
- Run \`pytest\` and \`mypy\` before committing
- NEVER modify files under \`alembic/versions/\` directly</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 3 — Path-Scoped Rules (The Superpower)</strong>

<p style="margin-bottom:1rem; line-height:1.75;">This is where <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> becomes genuinely powerful. Add a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths:</code> field in YAML frontmatter and the rule only loads when Claude is working on matching files.</p>

<p style="margin-bottom:1rem; line-height:1.75;">This rule only activates when Claude works on files matching the pattern. Your API guidelines stay out of the way when you're editing React components.</p>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/api/endpoints.md</code></strong> — only applies to FastAPI route files:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
paths:
  - "app/routers/**/*.py"
  - "app/api/**/*.py"
---

# FastAPI Endpoint Rules

- Every endpoint must have a Pydantic request and response schema
- Use \`HTTPException\` with appropriate status codes — never return raw dicts for errors
- All endpoints must be \`async def\`
- Add an OpenAPI \`summary\` and \`description\` to every route decorator
- Validate input at the router level, not inside services
- Log every incoming request with its correlation ID</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/testing.md</code></strong> — only applies when editing test files:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
paths:
  - "tests/**/*.py"
  - "test_*.py"
  - "*_test.py"
---

# pytest Conventions

- Use fixtures for anything used in more than one test
- Use \`pytest.mark.parametrize\` for multiple input scenarios
- Mock all external services with \`unittest.mock\` or \`pytest-mock\`
- Every test must have a docstring explaining what it verifies
- Test filenames mirror the source file: \`app/services/auth.py\` → \`tests/services/test_auth.py\`
- Never use real DB connections in unit tests — use SQLite in-memory or mocks</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/migrations.md</code></strong> — only applies when working with Alembic:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
paths:
  - "alembic/**/*.py"
  - "alembic/versions/**"
---

# Alembic Migration Rules

- NEVER modify existing migration files — always create a new one
- Always include both \`upgrade()\` and \`downgrade()\` functions
- Run \`alembic check\` after generating to verify consistency
- Migration filenames must be descriptive: use \`--message\` flag
- Always test the downgrade path before merging</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 4 — Using Glob Patterns Correctly</strong>

<p style="margin-bottom:1rem; line-height:1.75;">A common mistake: unquoted glob patterns starting with <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">*</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">{</code> are reserved indicators in YAML and will silently fail. Always quote your patterns.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># ❌ WRONG — unquoted patterns will silently fail
---
paths:
  - **/*.py
  - {src,lib}/**
---

# ✅ CORRECT — always quote glob patterns
---
paths:
  - "**/*.py"
  - "{src,lib}/**"
---</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Common patterns and what they match:</p>

<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse:collapse; font-size:0.82rem;">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;">Pattern</th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;">Matches</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">"src/api/**/*.py"</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">All Python files in src/api and subdirectories</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">"*.test.py"</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">All test files in any directory</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">"src/models/*.py"</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Only direct children of models (not nested)</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">"**/*.css"</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">All CSS files anywhere in the project</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:1rem; line-height:1.75;">You can specify multiple patterns and use brace expansion to match multiple extensions in one pattern:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
paths:
  - "src/**/*.{ts,tsx}"
  - "lib/**/*.ts"
  - "tests/**/*.test.ts"
---</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 5 — Know the Current Limitation</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Path-scoped rules defined in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> with a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths:</code> frontmatter are only injected into context when Claude <strong>reads</strong> a file matching the pattern. They are not injected when Claude <strong>writes or creates</strong> a file matching the same pattern. This means rules targeting file creation conventions are silently ignored when a new file is created, because Claude never sees the rule at the time of writing.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Workaround for new file creation:</strong> As a practical fix, put your most critical "file creation" rules (e.g., required headers, boilerplate structure) into a global rule file without <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths:</code> frontmatter, so they're always in context regardless of whether Claude is reading or writing.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 6 — Sharing Rules Across Projects</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> directory supports symlinks, allowing you to maintain a single source of rules shared across multiple projects:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Symlink a shared rules directory
ln -s ~/shared-claude-rules .claude/rules/shared

# Symlink individual rule files
ln -s ~/company-standards/security.md .claude/rules/security.md</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Symlinks are resolved and their contents load normally. Circular symlinks are detected and handled gracefully.</p>

<p style="margin-bottom:1rem; line-height:1.75;">This is great for teams — maintain one canonical rules repository and symlink it into each project.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## A Complete Python Project Setup</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;">Here's a full rules structure for a FastAPI + pytest Python project:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); line-height: 1.6;"><code>.claude/
└── rules/
    ├── code-style.md        ← global (no paths), loads always
    ├── git.md               ← global, loads always
    ├── security.md          ← global, loads always
    ├── testing.md           ← paths: tests/**/*.py
    ├── api/
    │   └── endpoints.md     ← paths: app/routers/**/*.py
    └── db/
        └── migrations.md    ← paths: alembic/**/*.py</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/security.md</code></strong> (global — always loaded):</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Security Rules

- Never log passwords, tokens, or PII
- Always validate and sanitize user inputs before DB operations
- Use parameterized queries — never f-string SQL
- Secrets must come from environment variables, never hardcoded
- NEVER commit \`.env\` files or API keys
- Rate-limit all public endpoints</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Tips &amp; Tricks</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>1. Verify what's actually loaded</strong> — Run <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/memory</code> inside Claude Code to see which rules files are currently in context. This is your debugging tool when rules don't seem to be applying.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>2. Keep each rule file under 50 lines</strong> — Target under 200 lines per <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> file. Longer files consume more context and reduce adherence. If your instructions are growing large, split them using <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> files. Apply the same discipline to each rules file.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>3. One topic per file</strong> — name files after what they govern: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">testing.md</code>, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">security.md</code>, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">api-design.md</code>. Never mix concerns in one rules file.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>4. Path-scoped rules are loaded on Read</strong> — because of the current limitation with Write, don't rely on path-scoped rules alone to enforce new-file conventions. Back them up with a global rule for the most critical requirements.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>5. Don't duplicate your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code></strong> — Use <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> for what applies everywhere: routing logic, quality standards, coordination protocols. Keep it lean — everything here competes for high-priority attention. Use rules for what applies to specific areas: API patterns for API files, test requirements for test files.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Full Comparison: All Four Config Files</strong>

<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse:collapse; font-size:0.82rem;">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">settings.json</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">CLAUDE.md</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">commands/*.md</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">rules/*.md</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Controls</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Permissions, tools, env</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Project context &amp; conventions</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Reusable prompt shortcuts</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Modular, scoped instructions</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Loaded</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Always (runtime)</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Every session</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">On-demand (you type <code style="color:var(--code-text);">/cmd</code>)</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Every session or on file match</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Path-scoped?</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">No</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">No</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">No</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">✅ Yes</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Best for</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Security &amp; tool access</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Short always-true project facts</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Repetitive multi-step tasks</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Growing rule sets per domain</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Commit to repo?</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Project yes, local no</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Yes</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Yes</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Yes</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:1rem; line-height:1.75;">The four files work as a layered system: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> is the enforcement layer, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> is the project briefing, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commands/</code> are your workflow shortcuts, and <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">rules/</code> is your scalable, organized instruction library.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous"><span>←</span> Previous: commands/*.md</a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">Next: CLAUDE.local.md <span>→</span></a>
</div>
`,
    },
    {
      label: 'CLAUDE.local.md',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## What Is <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>?</strong>

<p style="margin-bottom:1rem; line-height:1.75;"><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is your <strong>personal, private instruction file</strong> for a specific project. It lives alongside <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> in your project root but is never committed to version control — it exists only on your machine, for your eyes only.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Local instructions</strong> live at <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">./CLAUDE.local.md</code> — personal project-specific preferences you add to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.gitignore</code>. Typical use cases: your sandbox URLs, preferred test data, personal notes about the codebase.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Think of it this way:</p>
<ul style="margin:0 0 1rem 1.5rem; color:var(--text-secondary); line-height:1.8;">
  <li><code style="color:var(--code-text);">CLAUDE.md</code> is the <strong>team contract</strong> — shared with everyone via git</li>
  <li><code style="color:var(--code-text);">CLAUDE.local.md</code> is your <strong>personal sticky note</strong> on that contract — visible only to you</li>
</ul>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Why Is It Needed?</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Every developer on a team has slightly different local setups. You might be running a local database on a different port than your colleague, using a different Python virtual environment path, pointing at a sandbox API instead of staging, or have personal debugging habits you don't want to impose on the whole team.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is gitignored by default, meaning changes to it stay local to your machine and never affect what teammates see.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Without <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>, you'd have two bad options: either clutter the shared <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> with your personal quirks, or repeat your personal context to Claude at the start of every session. <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is the clean solution for both.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 1 — Create the File and Gitignore It</strong>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># In your project root
touch CLAUDE.local.md</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Then make sure it's gitignored. Claude Code gitignores it by default, but verify by checking your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.gitignore</code>:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Confirm it's excluded from git
echo "CLAUDE.local.md" &gt;&gt; .gitignore</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">You can verify it's not being tracked:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>git status  # CLAUDE.local.md should NOT appear here</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 2 — The Loading Order (How It Fits In)</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;">The full loading order, from lowest to highest priority, is:</p>
<ul style="margin:0 0 1rem 1.5rem; color:var(--text-secondary); line-height:1.8;">
  <li><code style="color:var(--code-text);">CLAUDE.md</code>, <code style="color:var(--code-text);">.claude/CLAUDE.md</code>, and <code style="color:var(--code-text);">.claude/rules/*.md</code> in each directory from the filesystem root down to your current directory — files closer to your CWD are higher priority</li>
  <li><code style="color:var(--code-text);">CLAUDE.local.md</code> in each directory from root to CWD — same traversal order, but gitignored by default</li>
</ul>

<p style="margin-bottom:1rem; line-height:1.75;">All of these load together at session start. <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> doesn't <em>override</em> <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> — both are in context simultaneously. If they conflict, Claude uses the more specific instruction.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">The full picture:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>Loaded every session (lowest → highest priority):
  1. ~/.claude/CLAUDE.md         ← your global personal defaults
  2. CLAUDE.md                   ← team-shared project context
  3. .claude/rules/*.md          ← modular team rules
  4. CLAUDE.local.md             ← YOUR personal project overrides ✅</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 3 — What to Put In It</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The golden rule: <strong>anything you wouldn't want a teammate to see or be affected by.</strong></p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Here's a breakdown by category:</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">### Local Environment Details</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## My Local Environment

- Python venv: \`source ~/.venvs/myproject/bin/activate\`
- Local DB runs on port 5433 (not the default 5432)
- Redis is on port 6380 on my machine
- I use \`python -m pytest\` not bare \`pytest\` (PATH issue with my setup)</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">### Personal Sandbox / Dev URLs</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## My Dev URLs

- Local API: http://localhost:8001
- Local frontend: http://localhost:3001
- My personal staging environment: https://senthil-staging.myapp.io
- DO NOT use https://staging.myapp.io — that's the shared one</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">### Personal Test Data</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## My Test Fixtures

- Use user ID \`usr_test_senthil_001\` for integration tests
- Test database: \`myproject_dev_senthil\` (NOT myproject_dev — that's shared)
- Stripe test card: 4242... (last 4: 4242)
- My test webhook secret is in ~/.secrets/stripe_test_webhook</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">### Work-in-Progress Notes</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## Current Focus

Working on the invoice PDF export feature. The relevant files are:
- app/services/export.py (main logic)
- app/templates/invoice.html (Jinja2 template)
- tests/test_export.py (currently failing — that's OK, WIP)

The tricky part: we're using WeasyPrint but my local install
needs \`brew install pango\` first. Docs don't mention this.</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">### Personal Debugging Preferences</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## My Debugging Style

- I prefer verbose logging during development — set LOG_LEVEL=DEBUG
- When debugging, always add \`breakpoint()\` rather than print statements
- I use \`ipdb\` not \`pdb\` — it's installed in my venv
- For DB queries, always print the generated SQL first so I can see it</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">### Machine-Specific Paths</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## My Machine Paths

- Shared company docs: ~/Documents/company-wiki/
- Design assets: ~/Dropbox/Projects/myproject/assets/
- Reference the backend API repo at: ~/code/myproject-api/</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 4 — A Complete Example for a Python Developer</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Here's a realistic <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> for a FastAPI project:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># My Local Setup Notes

## Environment

- Activate venv: \`source ~/.venvs/fastapi-proj/bin/activate\`
- I use Python 3.12.3 — \`python3.12\` not \`python\`
- Local postgres runs on port 5433 (my laptop has two PG versions)
- DATABASE_URL for local: \`postgresql://senthil:@localhost:5433/myproject_local\`

## My Dev URLs

- API: http://localhost:8001 (I run on 8001 to avoid clash with another project)
- Docs: http://localhost:8001/docs

## Current Task

Implementing the \`/reports/export\` endpoint (GitHub issue #142).
Key files I'm currently editing:
- app/routers/reports.py
- app/services/report_export.py (new file, doesn't exist yet)

## Personal Notes

- The \`auth\` module has a known issue on my machine with token refresh.
  Ignore it for now — it's being fixed in PR #138 (not merged yet).
- When running alembic, always use:
  \`alembic -x env=local upgrade head\`
  (the -x env=local flag selects my local .env file)

## Test Data

- My test user: \`test_senthil@example.com\` / \`test1234\`
- My test workspace ID: \`ws_01JA2KTEST_LOCAL\`

## DO NOT

- Don't run \`docker-compose up\` — I run services natively
- Don't use the shared staging DB for testing</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Step 5 — The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">#</code> Shortcut (Quick Additions During a Session)</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The fastest way to add a memory during a session is by starting your input with the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">#</code> character. Claude will prompt you to select which memory file (<code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>) to store it in.</p>

<p style="margin-bottom:1rem; line-height:1.75;">So if you discover something mid-session — like a tricky workaround — you can just type:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># On my machine, always use python3.12 not python</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Claude will ask whether to save it to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>. Pick <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> for anything personal.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## ⚠️ One Important Note: Deprecation Warning</strong>

<p style="margin-bottom:1rem; line-height:1.75;"><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> has been deprecated in favor of using imports, which work better across multiple git worktrees.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">What this means in practice:</p>
<ul style="margin:0 0 1rem 1.5rem; color:var(--text-secondary); line-height:1.8;">
  <li>It still <strong>works</strong> and is still widely used</li>
  <li>The modern equivalent is using <code style="color:var(--code-text);">@imports</code> inside <code style="color:var(--code-text);">CLAUDE.md</code> to pull in a local file that's gitignored</li>
  <li>If you use git worktrees heavily, the import approach is more robust</li>
</ul>

<p style="margin-bottom:0.5rem; line-height:1.75;">The <strong>import-based alternative</strong> looks like this:</p>

<p style="margin-bottom:0.25rem; line-height:1.75;">In your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> (committed):</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>@./CLAUDE.local.md</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Then <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is added to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.gitignore</code> and contains all your personal notes as before. The result is functionally identical — the difference is that the import approach composes more predictably when you have multiple worktrees of the same repo.</p>

<p style="margin-bottom:1rem; line-height:1.75;">For most solo developers and small teams, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> placed directly in the project root is perfectly fine and simpler to understand.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Tips &amp; Tricks</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>1. Treat it as a living document</strong> — update it whenever you discover something specific to your machine. It compounds in value over time.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>2. Never put real secrets in it</strong> — even though it's gitignored, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is still a plaintext file on disk. Reference environment variable <em>names</em> only, not their values. Use <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.env</code> files for actual secrets.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>3. Use it for "current focus"</strong> — a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">## Current Task</code> section that you update each time you sit down to work is incredibly effective. Claude immediately knows what you're working on without you having to explain it.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>4. Verify with <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/memory</code></strong> — run <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/memory</code> inside Claude Code to see all loaded memory files including <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>. This is your debugging tool if things aren't loading as expected.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>5. Keep it short</strong> — the same context window rules apply here. Aim for under 100 lines. If it's growing large, you're probably putting things in it that belong in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code>.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">## Full Comparison: All Five Config Files</strong>

<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse:collapse; font-size:0.82rem;">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">settings.json</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">CLAUDE.md</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">rules/*.md</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">commands/*.md</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">CLAUDE.local.md</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Controls</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Permissions, tools, env</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Team project context</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Modular scoped rules</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Reusable shortcuts</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Personal local context</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Committed to git?</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Project yes, local no</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">✅ Yes</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">✅ Yes</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">✅ Yes</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">❌ Never</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Who sees it?</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Team</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Team</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Team</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Team</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Only you</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Loaded</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Always (runtime)</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Every session</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Every session / file match</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">On-demand</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Every session</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Best for</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Security &amp; tool access</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Architecture, conventions</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Domain-specific rules</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Repetitive tasks</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Your sandbox, WIP notes, local paths</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:1rem; line-height:1.75;"><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is the private complement to everything else in the system — it's where <em>your</em> reality lives, separate from the team's shared contract.</p>

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
  <iframe src="${import.meta.env.BASE_URL}claude-code-config-flowchart.html" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
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
