const claudePluginsConcept = {
  id: 'claude-plugins',
  title: 'Claude Plugins',
  category: 'Tutorial',
  tags: ['Plugins', 'Marketplace', 'Claude Code'],
  tabs: [
    {
      label: 'Overview',
      content: `
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Claude Plugins</strong> are like app bundles — a single package that installs multiple commands, tools, and behaviors all at once.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Plugins can bundle MCPs, skills, hooks, and commands into a single download. Instead of installing each piece separately, you get everything you need in one package.</p>

<p style="margin-bottom:1rem; line-height:1.75;">This tutorial walks you through building a complete Claude Code plugin from scratch.</p>

<div style="margin-top: 1.5rem; margin-bottom: 2rem;">
  <strong style="display:block; margin-bottom:1rem; font-size:1.05rem; color: var(--accent-primary);">What Can a Plugin Contain?</strong>
  <p style="margin-bottom:1rem; line-height:1.75;">A Claude plugin can include slash commands, MCPs, hooks, and skills — all packaged together and shared across projects or teams.</p>

  <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
    <thead>
      <tr style="background: rgba(0, 242, 255, 0.05);">
        <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">Ingredient</th>
        <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">What it does</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Skills</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Instructions that guide Claude on how to perform a task</td>
      </tr>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Commands</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Slash commands you can trigger manually, like <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/review</code></td>
      </tr>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>MCPs</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Connections to external tools, APIs, databases, and services</td>
      </tr>
      <tr>
        <td style="padding: 1rem;"><strong>Hooks</strong></td>
        <td style="padding: 1rem;">Automatic behaviors that run when specific events happen</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px; margin: 1rem 0;">
  <p style="margin: 0 0 0.75rem; font-weight: 600; color: var(--text-primary);">What you will build</p>
  <p style="margin: 0 0 0.75rem; line-height:1.75; color: var(--text-secondary);"><strong>py-helper</strong> — a Python code review plugin that includes:</p>
  <ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.75;">
    <li style="margin-bottom: 0.35rem;"><strong>Skill:</strong> auto-review Python files</li>
    <li style="margin-bottom: 0.35rem;"><strong>Command:</strong> manually fix style issues</li>
    <li style="margin-bottom: 0.35rem;"><strong>Hook:</strong> run automatic safety checks</li>
    <li style="margin-bottom: 0;"><strong>MCP:</strong> connect Claude to Context7</li>
  </ul>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">By the end, you will have a plugin that can review code, fix formatting, warn about secrets, and interact with Context7 for live Python documentation.</p>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Prerequisites <span>→</span>
  </a>
</div>
`,
    },
    {
      label: '1. Prerequisites',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Before You Start]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">You need two things installed before building any plugin.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 1 — Install Node.js</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">You can install Claude Code using npm. To use npm, install the LTS version from <a href="https://nodejs.org" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">nodejs.org</a>.</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">node --version
# You should see something like: v22.0.0</pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 2 — Install Claude Code</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Install Claude Code globally with npm:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">npm install -g @anthropic-ai/claude-code</pre>
<p style="margin-top: 1rem; margin-bottom: 0.5rem; line-height: 1.75; color: var(--text-secondary);">Verify the installation:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">claude --version</pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">You will also need a Claude API key or an authenticated Claude account. Claude Code will ask you to sign in the first time you run it.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Launch Claude</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Type <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">claude</code> in your terminal to get started:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.9rem; line-height: 1.5;">claude</pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Folder Plan <span>→</span>
  </a>
</div>
`,
    },
    {
      label: '2. Folder Plan',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[What We Are Building]</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Before creating files, it helps to understand the complete plugin structure.</p>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background: rgba(0, 242, 255, 0.05);">
      <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">Component</th>
      <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">Name</th>
      <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">What it does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Skill</td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>py-review</strong></td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Automatically checks for bugs, PEP 8 style issues, missing type hints, and docstrings whenever you ask Claude to review, audit, or check a Python file. It runs automatically based on natural language. When you say something like "review this file" or "check my Python code," Claude detects the intent and triggers it without any special syntax. It's passive and context-aware. py-review is read-only — it finds and reports issues with line numbers and suggested fixes, but doesn't touch your files.</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Command</td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>py-fix</strong></td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">A manual slash command (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/py-helper:py-fix</code>) that instantly fixes style violations, adds missing docstrings, and applies type hints across the entire open file. It runs manually via an explicit slash command. You have to deliberately invoke it. It won't activate from conversation alone. py-fix is destructive (in the good sense) — it actually modifies the file and then summarizes what changed.</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Hook</td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>hooks.json</strong></td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Runs background safety checks: scans for hardcoded secrets keys, passwords <strong>before</strong> any file write, and performs an automatic syntax check <strong>after</strong> every edit.</td>
    </tr>
    <tr>
      <td style="padding: 1rem;">MCP</td>
      <td style="padding: 1rem;"><strong>context7</strong></td>
      <td style="padding: 1rem;">Context7 is a documentation lookup tool that plugs into Claude Code. When you ask Claude how to use a Python library, it fetches the real, up-to-date documentation directly from the library's source before answering — so you always get accurate, version-specific code instead of potentially outdated suggestions.</td>
    </tr>
  </tbody>
</table>

<p style="margin: 1rem 0 0.75rem; line-height:1.75;">Final folder structure:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.45; font-size: 0.9rem;">my-claude-marketplace/
└── py-helper-marketplace/
    ├── .claude-plugin/
    │   └── marketplace.json
    └── plugins/
        └── py-helper/
            ├── .claude-plugin/
            │   └── plugin.json
            ├── skills/
            │   └── py-review/
            │       └── SKILL.md
            ├── commands/
            │   └── py-fix.md
            ├── hooks/
            │   └── hooks.json
            └── .mcp.json</pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>Important:</strong> the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> plugin folder must live inside the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper-marketplace</code> folder under a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugins/</code> subfolder.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Prerequisites
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Create Folders <span>→</span>
  </a>
</div>
`,
    },
    {
      label: '3. Create Folders',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Create All Folders]</strong>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 1 — Create your Python project</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">This is where your actual Python code will live. Create the folder and enter it:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">mkdir my-python-project</code></pre>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">cd my-python-project</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Create a test file:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">touch app.py</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Open <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">app.py</code> and paste in this intentionally messy example:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-python">def add_numbers(a,b):
    x=a+b
    return x
 
def greet(name):
    print("Hello "+name)
 
result=add_numbers(5,10)
greet("Alice")</code></pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 2 — Create the marketplace and plugin folders</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Go back to your parent folder and create the plugin structure:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">cd ..</code></pre>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">mkdir -p my-claude-marketplace/py-helper-marketplace/.claude-plugin
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks</code></pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Verify the folders</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">find my-claude-marketplace -type d</code></pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">If your folder tree matches the intended layout, you are ready to create the files.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Folder Plan
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Marketplace + Plugin Files <span>→</span>
  </a>
</div>
`,
    },
    {
      label: '4. Core Files',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Create the Core Files]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Run each block one at a time.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 1 — marketplace.json</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/.claude-plugin/marketplace.json << 'EOF'
{
  "name": "py-helper-marketplace",
  "owner": {
    "name": "Your Name"
  },
  "plugins": [
    {
      "name": "py-helper",
      "version": "1.0.0",
      "description": "Python coding toolkit with review, fix, and safety checks",
      "source": "./plugins/py-helper"
    }
  ]
}
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">marketplace.json</code> — Marketplace Registry File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the registry file for the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper-marketplace</code> — a Claude marketplace (a collection of one or more plugins). It serves as the top-level catalog that tells Claude what plugins are available within this marketplace, where to find them, and who owns the marketplace itself.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It defines four key pieces of information:</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">name</code></strong> — the unique identifier for the marketplace (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper-marketplace</code>), distinguishing it from the individual plugins it contains</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">owner</code></strong> — credits the person or organization that maintains the marketplace</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugins</code></strong> — an array listing every plugin available in this marketplace, with each entry containing:
      <ul style="margin: 0.25rem 0 0.25rem 1rem;">
        <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">name</code> — the plugin's identifier (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code>)</li>
        <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">version</code> — the version to load (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">1.0.0</code>)</li>
        <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">description</code> — a short summary shown in listings</li>
        <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">source</code> — the <strong>relative path</strong> to the plugin folder (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">./plugins/py-helper</code>)</li>
      </ul>
    </li>
  </ul>
  
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">No logic or behavior is defined here — it is purely a directory and routing file.</p>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugin.json</code>:</strong> while <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugin.json</code> is the ID card for a single plugin, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">marketplace.json</code> is the index for the entire collection. It sits one level above and points <em>to</em> the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugin.json</code> files beneath it.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 2 — plugin.json</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin/plugin.json << 'EOF'
{
  "name": "py-helper",
  "version": "1.0.0",
  "description": "Python coding toolkit with review, fix, and safety checks",
  "author": {
    "name": "Your Name"
  }
}
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugin.json</code> — Plugin Manifest File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the manifest file for the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> Claude plugin. It serves as the plugin's identity card, providing essential metadata that the Claude marketplace and runtime use to recognize, register, and load the plugin as a valid package.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It defines four key pieces of information:</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">name</code></strong> — the unique identifier (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code>), which also becomes the namespace prefix for all slash commands (e.g. <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/py-helper:py-fix</code>)</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">version</code></strong> — tracks the release version (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">1.0.0</code>) for updates and compatibility</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">description</code></strong> — a human-readable summary of the plugin's purpose, displayed in the marketplace listing</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">author</code></strong> — credits the creator of the plugin</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">This file contains no logic or behavior of its own — it does not define any skills, commands, or code. It simply declares that the folder it lives in is a named, versioned, attributable plugin package. Think of it as the equivalent of a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">package.json</code> in Node.js or a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">pyproject.toml</code> in Python.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 3 — SKILL.md</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review/SKILL.md << 'EOF'
---
name: py-review
description: >
  Reviews Python code for quality issues. Auto-trigger when the user
  asks to review, check, audit, or improve a Python file.
---
 
When reviewing Python code, always check for:
 
1. **Bugs** — logic errors, off-by-one mistakes, unhandled exceptions
2. **Style** — PEP 8 violations (spacing, naming conventions)
3. **Type hints** — missing annotations on functions
4. **Docstrings** — missing documentation on classes and functions
 
For each issue, show:
- The line number
- What the problem is
- A corrected version of the code
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> — Skill Definition File for <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-review</code></p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the skill definition file for the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-review</code> skill within the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> plugin. It is a Markdown file with a YAML frontmatter header that together define both the <strong>identity</strong> and the <strong>behavior</strong> of the skill — making it the most functional of the three files, as it contains actual instructions that Claude executes.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It is split into two distinct sections:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Frontmatter (YAML header <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">---</code>)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">name</code></strong> — the skill's unique identifier (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-review</code>), used to reference it within the plugin</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">description</code></strong> — a natural language trigger definition that tells Claude <em>when</em> to automatically activate this skill. The phrase "auto-trigger when the user asks to review, check, audit, or improve a Python file" is what enables intent-based activation — no slash command needed.</li>
  </ul>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Body (Markdown instructions)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li>This is the actual prompt/behavior Claude follows when the skill fires. It instructs Claude to check for four specific categories of issues — bugs, PEP 8 style violations, missing type hints, and missing docstrings</li>
    <li>It also defines the <strong>output format</strong> Claude must follow for every issue found: the line number, a description of the problem, and a corrected version of the code</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from the other files:</strong> unlike <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">marketplace.json</code> and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugin.json</code> which are purely metadata, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> contains executable instructions. It is both a configuration file (frontmatter) and a behavior file (body) in one, giving the plugin its actual intelligence and usefulness.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 4 — Verify these files</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Make sure these three critical files were created successfully and have the correct contents:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">cat my-claude-marketplace/py-helper-marketplace/.claude-plugin/marketplace.json
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin/plugin.json
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review/SKILL.md</pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Create Folders
  </a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">
    Next: Commands, Hooks, MCP <span>→</span>
  </a>
</div>
`,
    },
    {
      label: '5. Commands + MCP',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Create the Remaining Files]</strong>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 4 — commands/py-fix.md</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands/py-fix.md << 'EOF'
---
description: "Automatically fix PEP 8 issues in a Python file"
---
 
Look at the Python file at $ARGUMENTS (or the currently open file if no path is provided) and:
 
1. Fix all PEP 8 style violations
2. Add missing type hints to all functions
3. Add docstrings to any functions that are missing them
4. Show a summary of every change you made and why
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix.md</code> — Command Definition File for <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix</code></p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the command definition file for the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix</code> slash command within the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> plugin. Like <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code>, it is a Markdown file with a YAML frontmatter header, combining identity and behavior in one file. However, unlike the skill, this file defines a <strong>manually triggered command</strong> rather than an auto-activating skill.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It is split into two distinct sections:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Frontmatter (YAML header <code style="color: var(--code-text);">---</code>)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">description</code></strong> — a short summary of what the command does ("Automatically fix PEP 8 issues in a Python file"), used for display purposes in the marketplace and command palette. Notably, there is <strong>no auto-trigger definition</strong> here — this command only fires when explicitly invoked via <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/py-helper:py-fix</code></li>
  </ul>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Body (Markdown instructions)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">$ARGUMENTS</code></strong> — a special placeholder that captures whatever the user types after the slash command (typically a file path). If nothing is provided, Claude falls back to the currently open file. This is what makes the command flexible and reusable across different files</li>
    <li>The instructions tell Claude to perform three <strong>destructive (file-modifying) actions</strong>: fix PEP 8 violations, add missing type hints, and add missing docstrings</li>
    <li>It also requires Claude to produce a <strong>change summary</strong> explaining every modification made and why</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code>:</strong> while <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> is read-only and report-based, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix.md</code> is action-based and modifies actual files. It also uses <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">$ARGUMENTS</code> for explicit file targeting. The absence of an auto-trigger means the user retains full control over when fixes are applied — appropriate given that this command directly alters code.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 5 — hooks/hooks.json</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks/hooks.json << 'EOF'
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Before writing this Python file, check: does it contain any hardcoded passwords, API keys, or secrets? If yes, warn the user and suggest using environment variables instead."
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "prompt",
            "prompt": "After editing this Python file, quickly check if any obvious syntax errors were introduced. If yes, point them out immediately."
          }
        ]
      }
    ]
  }
}
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">hooks.json</code> — Hooks Configuration File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the hooks configuration file for the <code style="color: var(--code-text);">py-helper</code> plugin. It defines <strong>automatic background checks</strong> that fire silently around file write and edit operations — before and after Claude touches a Python file. Unlike the skill and command files, hooks are not triggered by the user at all; they run invisibly as a safety layer wrapped around Claude's own tool usage.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It is organized around two lifecycle events:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">PreToolUse</code> (Before writing/editing)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">matcher</code></strong> — <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">"Write|Edit"</code> tells Claude to intercept any Write or Edit tool call before it executes</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">prompt</code></strong> — instructs Claude to scan the file for hardcoded passwords, API keys, or secrets <em>before</em> writing, and if found, warn the user and recommend environment variables instead</li>
    <li>This acts as a <strong>security gate</strong> — catching sensitive data leaks before they are committed to disk</li>
  </ul>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">PostToolUse</code> (After writing/editing)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">matcher</code></strong> — same <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">"Write|Edit"</code> pattern, but fires <em>after</em> the tool call completes</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">prompt</code></strong> — instructs Claude to immediately check whether the edit introduced any obvious syntax errors, and flag them if so</li>
    <li>This acts as a <strong>quality gate</strong> — catching accidental breakage introduced during a fix or edit</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from the other files:</strong> <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix.md</code> are user-facing and user-initiated. <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">hooks.json</code> is entirely <strong>system-facing and automatic</strong>. The user never calls it directly; it wraps around Claude's own actions to enforce security and correctness passively. Together with the skill and command, it completes the plugin's three-layer approach: review on request, fix on demand, and guard automatically.</p>
</div>
<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 6 — .mcp.json</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.mcp.json << 'EOF'
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.mcp.json</code> — MCP Server Configuration File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the MCP (Model Context Protocol) server configuration file for the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> plugin. It connects Claude to <a href="https://context7.com/" target="_blank" style="color: var(--accent-primary); text-decoration: none; font-weight: 700;">Context7</a>, an external real-time documentation server, giving the plugin access to up-to-date, version-specific library documentation pulled directly from source repositories. Unlike all the other files in this plugin, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.mcp.json</code> reaches <em>outside</em> the plugin itself and wires Claude into a live external service.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It contains a single configuration block:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">mcpServers</code></p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">context7</code></strong> — the name given to this MCP server connection, used to reference it internally</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">command</code></strong> — <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">npx</code> tells Claude to use Node's package runner to launch the server</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">args</code></strong> — <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">["-y", "@upstash/context7-mcp"]</code> automatically installs and runs the Context7 MCP package without requiring manual setup. The <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">-y</code> flag bypasses confirmation prompts, making it seamless on first use</li>
  </ul>
  
  <p style="margin-bottom:0.5rem; font-weight:700; color: var(--text-primary);">What Context7 actually does</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li>Solves a core problem in AI-assisted development: Claude's training data has a knowledge cutoff, meaning library documentation it knows may be outdated or version-mismatched</li>
    <li>Context7 fetches <strong>live documentation</strong> directly from source repositories at the moment it's needed, ensuring Claude suggests current API patterns, not deprecated ones</li>
    <li>For a Python toolkit plugin like <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code>, this is especially valuable — when reviewing or fixing code that uses third-party libraries, Claude can reference the actual current docs rather than relying on potentially stale training knowledge</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from the other files:</strong> every other file in this plugin defines what Claude <em>does</em>. <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.mcp.json</code> defines what Claude <em>knows</em> — extending its context with real-time external knowledge. It is the plugin's connection to the outside world, making the difference between Claude guessing at library usage and Claude knowing it with certainty.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Verify these files</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Make sure these three remaining logic files were created successfully and have the correct contents:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands/py-fix.md
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks/hooks.json
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.mcp.json</pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Core Files
  </a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">
    Next: Verify Files <span>→</span>
  </a>
</div>
`,
    },
    {
      label: '6. Verify',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Verify Your Files]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Before installing the plugin, make sure every file is in the correct place.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">find my-claude-marketplace -type f</pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see these files:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin/plugin.json
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review/SKILL.md
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands/py-fix.md
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks/hooks.json
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.mcp.json
my-claude-marketplace/py-helper-marketplace/.claude-plugin/marketplace.json</pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="5" class="tutorial-nav-link previous">
    <span>←</span> Previous: Commands + MCP
  </a>
  <a href="#" data-goto-tab="7" class="tutorial-nav-link">
    Next: Install the Plugin <span>→</span>
  </a>
</div>
`,
    },
    {
      label: '7. Install',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Install the Plugin]</strong>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 1 — Go to your Python project</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Enter your project directory and launch Claude:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">cd my-python-project</pre>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">claude</pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 2 — Register your marketplace</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Inside Claude Code, use the absolute path to your marketplace:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">/plugin marketplace add <span style="color: var(--accent-primary); font-weight: bold;">/absolute/path/to</span>/my-claude-marketplace/py-helper-marketplace</code></pre>
<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary); font-style: italic;">(Make sure to replace the highlighted <code style="color: var(--code-text);">/absolute/path/to</code> part with your actual absolute path.)</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">To get the absolute path, open another terminal tab and run:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">cd my-claude-marketplace/py-helper-marketplace && pwd</pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see a success message like this:</p>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;">❯ /plugin marketplace add /Users/senthilpalanivelu/Downloads/my-claude-marketplace/py-helper-marketplace                                                       
  ⎿  Successfully added marketplace: py-helper-marketplace</code>
  
<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Install and reload</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">/plugin install py-helper@py-helper-marketplace</pre>

<p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--text-secondary); font-size: 0.9rem; padding-left: 0.5rem; border-left: 2px solid var(--accent-primary);">
  Where:<br>
  <code style="color: var(--code-text);">py-helper</code> is the plugin you want to install<br>
  <code style="color: var(--code-text);">py-helper-marketplace</code> is the marketplace it comes from
</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see a confirmation message like this:</p>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;"> /plugin install py-helper@py-helper-marketplace                                                                                                            
  ⎿  ✓ Installed py-helper. Run /reload-plugins to activate..</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">Then, reload your plugins to activate the changes:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">/reload-plugins</code></pre>
 
<p style="margin-bottom:0.5rem; line-height:1.75;">You can also list all active plugins to confirm <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> is ready:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">/plugin</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see <code style="color: var(--code-text);">py-helper</code> listed in your marketplaces:</p>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;">❯ /plugin                                                                                                                                          
                                                                                                                                                   
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  Plugins  Discover   Installed   <span style="background: var(--accent-primary); color: var(--bg-color); padding: 0 4px; border-radius: 2px; font-weight: bold;">Marketplaces</span>   Errors                                                                                            
                                                                                                                                                 
  Manage marketplaces                                                                                                                            
                                                                                                                                                   
  ❯ + Add Marketplace                                                                                                                              
                                                                                                                                                   
    ● claude-code-plugins                                                                                                                          
      anthropics/claude-code                                                                                                                       
      13 available • Updated 3/24/2026                                                                                                             
                                                                                                                                                   
    ● ✻ claude-plugins-official ✻                                                                                                                  
      anthropics/claude-plugins-official                                                                                                           
      118 available • 2 installed • Updated 3/24/2026                                                                                              
                                                                                                                                                   
    ● everything-claude-code                                                                                                                       
      affaan-m/everything-claude-code                                                                                                              
      1 available • 1 installed • Updated 3/17/2026                                                                                                
                                                                                                                                                   
    <span style="color: var(--accent-primary); font-weight: bold;">● py-helper-marketplace
      /Users/senthilpalanivelu/Downloads/my-claude-marketplace/py-helper-marketplace                                                                          
      1 available • 1 installed • Updated 3/24/2026</span>
                                                                                                                                                   
    ● ui-ux-pro-max-skill                                                                                                                          
      nextlevelbuilder/ui-ux-pro-max-skill                                                                                                         
      1 available • 1 installed • Updated 3/15/2026</code>
<p style="margin-top: 1.25rem; margin-bottom: 0.5rem; line-height: 1.75; font-weight: 500;">Now that you have installed the plugin, it's time to test it!</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="6" class="tutorial-nav-link previous">
    <span>←</span> Previous: Verify
  </a>
  <a href="#" data-goto-tab="8" class="tutorial-nav-link">
    Next: Test the Plugin <span>→</span>
  </a>
</div>
`,
    },
    {
      label: '8. Test',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Test Each Component]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Now test all four parts of the plugin one by one inside Claude Code.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 1 — Skill</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-review</code> operates on whatever code is in the conversation context.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">can you review app.py?</code></pre>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Claude should auto-apply the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-review</code> skill. You will see a <strong>Tool Use</strong> indicator in the terminal:</p>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;"> 🔧 py-helper: py-review(path: "app.py")</code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 2 — Command</p>
<p style="margin-bottom:0.75rem; line-height:1.75;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix</code> uses <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">$ARGUMENTS</code> — meaning it takes a file path as input, making it suitable for operating on files outside the current context.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">/py-helper:py-fix app.py</code></pre>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;">❯ /py-helper:py-fix app.py                                                                                                                         
                                                                                                                                                   
<span style="background: rgba(0, 255, 0, 0.15); border-radius: 4px; padding: 0 2px;">⏺ Skill(py-helper:py-fix)</span>                                                                                                                          
<span style="background: rgba(0, 255, 0, 0.15); border-radius: 4px; padding: 0 2px;">  ⎿  Successfully loaded skill</span>                                                                                                                     
                                                                                                                                                   
⏺ I have read app.py. Let me apply the fixes:                                                                                           
                                                                                                                                                   
⏺ Update(app.py)

⏺ Summary of Changes                          
                                                                                          
  PEP 8 Fixes                                                                                                                                      
                                                                                                                                                   
<div style="margin: 0.5rem 0 1rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--surface-dark); overflow-x: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <table style="width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--code-green); min-width: 800px; line-height: 1.4;">
    <thead>
      <tr style="border-bottom: 1px solid var(--border-color); background: rgba(255,255,255,0.03);">
        <th style="padding: 0.6rem 0.8rem; text-align: left; border-right: 1px dotted var(--border-color); color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem; width: 60px;">Line</th>
        <th style="padding: 0.6rem 0.8rem; text-align: left; border-right: 1px dotted var(--border-color); color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem; width: 180px;">Before</th>
        <th style="padding: 0.6rem 0.8rem; text-align: left; border-right: 1px dotted var(--border-color); color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem; width: 280px;">After</th>
        <th style="padding: 0.6rem 0.8rem; text-align: left; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem;">Why</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--text-secondary);">01</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--syntax-keyword); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">def add_numbers(a,b):</code></td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--code-green); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">def add_numbers(a: int, b: int):</code></td>
        <td style="padding: 0.6rem 0.8rem; color: var(--text-secondary);">Added space after comma and type hints</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--text-secondary);">02</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--syntax-keyword); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">x=a+b</code></td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--code-green); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">return a + b</code></td>
        <td style="padding: 0.6rem 0.8rem; color: var(--text-secondary);">Added spaces around operators; removed unused variable <code style="color: var(--text-secondary); font-family: 'JetBrains Mono', monospace;">x</code></td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--text-secondary);">03-04</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--syntax-keyword); white-space: nowrap;">Trailing whitespace</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--code-green); white-space: nowrap;">Removed</td>
        <td style="padding: 0.6rem 0.8rem; color: var(--text-secondary);">PEP 8: no trailing whitespace</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--text-secondary);">05</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--syntax-keyword); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">def greet(name):</code></td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--code-green); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">def greet(name: str) -> None:</code></td>
        <td style="padding: 0.6rem 0.8rem; color: var(--text-secondary);">Added type hints</td>
      </tr>
      <tr>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--text-secondary);">08-09</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--syntax-keyword); white-space: nowrap;">Module-level code</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--code-green); padding: 0; white-space: nowrap;">if __name__ == "__main__":</code></td>
        <td style="padding: 0.6rem 0.8rem; color: var(--text-secondary);">Prevents execution on import</td>
      </tr>
    </tbody>
  </table>
</div>

                  
  Type Hints Added                                                                                                                                 
                  
  - add_numbers(a: int, b: int) -> int - Parameters and return type                                                                                
  - greet(name: str) -> None - Parameter and return type
                                                                                                                                                   
  Docstrings Added                                                                                                                                 
                                                                                                                                                   
  - add_numbers: "Add two numbers and return the result."                                                                                          
  - greet: "Print a greeting message to the console."
                                                                                                                                                   
  Additional Improvements                                                                                                                          
                                                                                                                                                   
  - Removed intermediate variable x in add_numbers (direct return is cleaner)                                                                      
  - Added proper blank line between functions (PEP 8 requires 2 blank lines)

  The updated code now follows Python best practices and is more maintainable, readable, and professional.</code>


<p style="margin-bottom:0.75rem; line-height:1.75;">The intended workflow is sequential: run <code style="color: var(--code-text);"> /py-review </code> first to understand the problems, then run <code style="color: var(--code-text);"> /py-fix app.py </code> when you're ready to apply the fixes.</p>


<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 3 — Hook</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">add password="abc123" to app.py</code>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;">❯ add password="abc123" to app.py                                                                                                                  
                                  
⏺ I'll add the password variable to app.py. Let me first check the current content of the file and then make the update.                           
                                                                                                                                                   
  Read 1 file (ctrl+o to expand)                                                                                                                   
           
⏺ Now I'll add the password variable to the file. I'll place it near the top of the file, after the imports (though there are no imports in this   
  file). I'll add it right after the module docstring (which doesn't exist yet) or at the beginning of the file.

⏺ Update(app.py)                                                                                                                                   
  ⎿  <span style="color: var(--syntax-keyword);">Error: PreToolUse:Edit hook error: Prompt hook condition was not met: The edit introduces a hardcoded password ('abc123') which is a security risk. Hardcoded secrets should be avoided and instead be loaded from environment variables or secure configuration management systems.</span>
                                                                                          
⏺ I understand the security concern. The hook is preventing me from adding a hardcoded password, which is actually a good security practice.
  Hardcoding passwords in source code is a security risk because:                                                                                  
   
  1. The password would be visible to anyone with access to the code                                                                               
  2. It would be difficult to change the password without modifying the code
  3. It could accidentally be committed to version control systems                                                                                 
                                                                                                                                                   
  Instead of adding the password directly to the file, I recommend one of these more secure approaches:                                            
                                                                                                                                                   
  1. Environment Variables: Store the password in an environment variable and read it in the code:                                                 
  import os       
  password = os.getenv('APP_PASSWORD', 'default_password')                                                                                         
  2. Configuration File: Store the password in a separate configuration file that is not committed to version control:                             
  import json                                                                                                                                      
  with open('config.json') as f:                                                                                                                   
      config = json.load(f)                                                                                                                        
      password = config.get('password')                                                                                                            
  3. Command Line Arguments: Pass the password as a command line argument when running the script.</span></code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 4 — MCP Context7 Connection</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">First, verify the MCP server is loaded</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">/mcp</code>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;">❯ /mcp                                                                                                                                             
                                                                                                                                                   
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  Manage MCP servers                                                                                                                               
  4 servers                                                                                                                                        
                                                                                                                                                   
    User MCPs (/Users/senthilpalanivelu/.claude.json)                                                                                              
  ❯ magic · ✔ connected                                                                                                                            
    stitch · ✔ connected                                                                                                                           
    supadata · ✔ connected

    Built-in MCPs (always available)
    plugin:py-helper:context7 · ✔ connected

  https://code.claude.com/docs/en/mcp for help</code>

<p style="margin-top:1.5rem; margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1.1rem;">How to Use It</p>
<p style="margin-bottom:0.75rem; line-height:1.75;">Just add <code style="color: var(--code-text);">use context7</code> to any Python question:</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background: var(--surface-color); border-bottom: 1px solid var(--border-color);">
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">What you say</th>
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">What Claude does</th>
    </tr>
  </thead>
  <tbody style="line-height:1.6; color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">how do I use pandas groupby? use context7</code></td>
      <td style="padding: 0.75rem;">Fetches live pandas docs and gives you current syntax</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">what's new in FastAPI 0.115? use context7</code></td>
      <td style="padding: 0.75rem;">Pulls the actual FastAPI changelog and summarises it</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">how do I use pytest fixtures? use context7</code></td>
      <td style="padding: 0.75rem;">Gets real pytest docs, not training data from months ago</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">show me latest asyncio syntax use context7</code></td>
      <td style="padding: 0.75rem;">Fetches current Python asyncio docs</td>
    </tr>
  </tbody>
</table>

<p style="margin: 1.5rem 0; line-height:1.75; color: var(--text-secondary); font-style: italic;">Context7 is useful on literally every Python coding session — the moment you touch <code style="color: var(--code-text);">requests</code>, <code style="color: var(--code-text);">pandas</code>, <code style="color: var(--code-text);">FastAPI</code>, <code style="color: var(--code-text);">pytest</code> or any other library, it's working for you in the background.</p>

<p style="margin-top:2.5rem; margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">The Problem It Solves</p>
<p style="margin-bottom:0.75rem; line-height:1.75;">When you ask Claude (or any AI) how to use a Python library, Claude answers based on its <strong>training data</strong> — which has a cutoff date. Libraries like <code style="color: var(--code-text);">pandas</code>, <code style="color: var(--code-text);">FastAPI</code>, and <code style="color: var(--code-text);">pytest</code> update constantly. This means Claude might give you:</p>

<ul style="margin: 0.75rem 0 1.25rem 1.25rem; line-height:1.75; color: var(--text-secondary);">
  <li>A method that was <strong>renamed</strong> in the latest version</li>
  <li>A parameter that was <strong>removed</strong></li>
  <li>An old way of doing something that now has a <strong>better approach</strong></li>
  <li>Code that flat out <strong>doesn't work</strong> on your installed version</li>
</ul>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

<p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">What Context7 Does</p>
<p style="margin-bottom:1rem; line-height:1.75;">Context7 sits between you and Claude. Every time you ask about a library, it:</p>

<ol style="margin: 0.75rem 0 1.25rem 1.25rem; line-height:1.75; color: var(--text-secondary);">
  <li><strong>Looks up the real, live documentation</strong> directly from the library's source</li>
  <li><strong>Feeds it to Claude</strong> before Claude answers you</li>
  <li><strong>Claude then answers using current docs</strong> instead of potentially stale training data</li>
</ol>

<p style="margin-bottom:0.75rem; line-height:1.75; font-style: italic;">Think of it like giving Claude the ability to read the actual manual before answering — every single time.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

<p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">A Concrete Example</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-secondary); font-size:0.95rem;">Without Context7:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1.25rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text-secondary); white-space: pre-wrap; overflow-x: auto;"><code>You: how do I read a CSV in pandas?
Claude: Use pd.read_csv() with the parse_dates parameter...
        (might be based on pandas 1.x docs, but you're running 2.x)</code></pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:0.95rem;">With Context7:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap; overflow-x: auto;"><code>You: how do I read a CSV in pandas? use context7
⏺ I'll help you learn how to read a CSV file in pandas using the Context7 documentation service. Let me look up the relevant documentation for you.
                                                                                                                                                   
⏺ plugin:py-helper:context7 - resolve-library-id (MCP)(query: "How to read a CSV file in pandas", libraryName: "pandas")                           
  ⎿  Available Libraries:                                                                                                                          
                                                                                                                                                   
     - Title: pandas                                                                                                                               
     … +34 lines (ctrl+o to expand)                                                                                                                
                                                                                                                                                   
⏺ Now I'll query the documentation for reading CSV files in pandas:                                                                                
                                                                                                                                                   
⏺ <span style="background: rgba(176, 141, 87, 0.2); border-radius: 4px; padding: 0 2px;">plugin:py-helper:context7 - query-docs (MCP)</span>(libraryId: "/websites/pandas_pydata", query: "How to read a CSV file into a pandas DataFrame")      
  ⎿  ### Read CSV data into pandas DataFrame                                                                                                       
                                                                                                                                                   
     Source: https://pandas.pydata.org/docs/getting_started/intro_tutorials/09_timeseries                                                          
     … +49 lines (ctrl+o to expand)                                                                                                                
                                                                                                                                                   
⏺ Based on the documentation from Context7, here's how to read a CSV file in pandas:                                                               
                                                                                                                                                   
  Basic CSV Reading                                                                                                                                
                                                                                                                                                   
  The most common way to read a CSV file in pandas is using the pd.read_csv() function:                                                            
                                                                                                                                                   
  import pandas as pd                                                                                                                              
                                                                                                                                                   
  # Basic usage                                                                                                                                    
  df = pd.read_csv('filename.csv')                                                                                                                 
                                                                                                                                                   
  # Example with a specific file                                                                                                                   
  titanic = pd.read_csv("data/titanic.csv")                                                                                                        
                                                                                                                                                   
  Common Parameters                                                                                                                                
                                                                                                                                                   
  The read_csv() function has many useful parameters:                                                                                              
                  
  import pandas as pd                                                                                                                              
                                                                                                                                                   
  # Read CSV with specific options                                                                                                                 
  df = pd.read_csv(                                                                                                                                
      'filename.csv',                                                                                                                              
      index_col=0,           # Set first column as index                                                                                           
      parse_dates=True,       # Parse index column as dates                                                                                        
      sep=',',               # Specify separator (default is comma)                                                                                
      header=0,              # Row to use as column names                                                                                          
      usecols=['col1', 'col2']  # Only read specific columns                                                                                       
  )                                                                                                                                                
                                                                                                                                                   
  Simple Example                                                                                                                                   
                                                                                                                                                   
  Here's a complete example:                                                                                                                       
                  
  import pandas as pd                                                                                                                              
                                                                                                                                                   
  # Read a CSV file into a DataFrame                                                                                                               
  df = pd.read_csv('data.csv')                                                                                                                     
                                                                                                                                                   
  # Display the first few rows                                                                                                                     
  print(df.head())                                                                                                                                 
                                                                                                                                                   
  # Get basic info about the DataFrame                                                                                                             
  print(df.info())                                                                                                                                 
                                                                                                                                                   
  This is the standard way to load CSV data into pandas for analysis. The function automatically handles most CSV formatting, but you can customize its behavior with the various parameters when needed.</code></pre>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

<p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">Why It Fits the py-helper Plugin Perfectly</p>
<p style="margin-bottom:1rem; line-height:1.75;">Our plugin is all about <strong>Python code quality</strong>. Context7 completes that picture:</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">Plugin Component</th>
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">What it handles</th>
    </tr>
  </thead>
  <tbody style="line-height:1.6; color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--text-primary);">Skill (py-review)</td>
      <td style="padding: 0.75rem;">Finds bugs and style issues</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--text-primary);">Command (py-fix)</td>
      <td style="padding: 0.75rem;">Fixes PEP 8 violations</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--text-primary);">Hook</td>
      <td style="padding: 0.75rem;">Guards against secrets and syntax errors</td>
    </tr>
    <tr style="background: rgba(0, 242, 255, 0.05);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-primary);">MCP (Context7)</td>
      <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-primary);">Ensures library usage is always up to date</td>
    </tr>
  </tbody>
</table>

<p style="margin-top: 1.25rem; margin-bottom: 1.5rem; line-height: 1.75; color: var(--text-secondary);">Without Context7, Claude could review and fix your code perfectly — but still suggest a library pattern that's outdated. With it, the entire plugin becomes <strong>version-aware</strong>.</p>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">If something is not working, the fastest fallback is usually <code style="font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/reload-plugins</code>.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="7" class="tutorial-nav-link previous">
    <span>←</span> Previous: Install
  </a>
  <a href="#" data-goto-tab="9" class="tutorial-nav-link">
    Next: Share With Your Team <span>→</span>
  </a>
</div>
`,
    },
    {
      label: '9. Share',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Share With Your Team]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Once the plugin works locally, you can publish the marketplace and share it with your team.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Push the marketplace to GitHub</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; overflow-x: auto;"><code>cd my-claude-marketplace/py-helper-marketplace
git init
git add .
git commit -m "Initial plugin"
git remote add origin https://github.com/yourname/py-helper.git
git push -u origin main</code></pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Teammates install it with two commands inside Claude Code</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; overflow-x: auto;"><code>/plugin marketplace add yourname/py-helper
/plugin install py-helper@py-helper-marketplace</code></pre>

<div style="padding: 1.25rem; background: rgba(0, 242, 255, 0.03); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0 0 0.75rem; font-weight: 600; color: var(--text-primary);">You are done</p>
  <ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.75;">
    <li style="margin-bottom: 0.35rem;">A skill that auto-reviews Python code</li>
    <li style="margin-bottom: 0.35rem;">A command that fixes style issues on demand</li>
    <li style="margin-bottom: 0.35rem;">Hooks that guard every file save</li>
    <li style="margin-bottom: 0;">An MCP connection to Context7 for live Python documentation</li>
  </ul>
</div>

<div style="padding: 1.5rem; background: linear-gradient(135deg, rgba(0, 242, 255, 0.1), rgba(112, 0, 255, 0.1)); border: 1px solid var(--accent-primary); border-radius: 12px; margin: 2rem 0; text-align: center;">
  <p style="margin: 0 0 0.5rem; font-size: 1.25rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em;">Congratulations!</p>
  <p style="margin: 0; line-height: 1.6; color: var(--text-secondary);">You've successfully built and shared your first high-quality Claude Plugin. Your Python development workflow is now powered by custom skills, automated style fixes, security-first hooks, and live documentation via MCP. <strong>Go build something amazing!</strong></p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="8" class="tutorial-nav-link previous">
    <span>←</span> Previous: Test
  </a>
  <a href="#" data-goto-tab="9" class="tutorial-nav-link">
    Next: Additional <span>→</span>
  </a>
</div>
`,
    },
    {
      label: '10. Additional',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Maintenance & Troubleshooting]</strong>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-top: 4px solid var(--accent-secondary); border-radius: 8px; margin: 1.5rem 0;">
  <p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1.1rem;">How to remove a Marketplace plugin from Claude</p>
  <p style="margin-bottom:0.5rem; line-height:1.75;">Inside Claude Code, first list what's registered:</p>
  <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-text); border-left: 2px solid var(--accent-secondary);">/plugin marketplace list</code>
  <pre style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap; overflow-x: auto;"><code>❯ /plugin marketplace list                                                                                                                         
  ⎿  Configured marketplaces:                                                                                                                      
       • claude-plugins-official                                                                                                                   
       • claude-code-plugins
       • ui-ux-pro-max-skill
       • everything-claude-code
       • <span style="background: var(--surface-hover); border-radius: 4px; padding: 0 4px; color: var(--accent-primary); font-weight: bold;">py-helper-marketplace</span></code></pre>
  <p style="margin-bottom:0.5rem; line-height:1.75;">You can remove it by using the following command:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); border-left: 2px solid var(--accent-secondary);"><code>/plugin marketplace remove py-helper-marketplace</code></pre>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="9" class="tutorial-nav-link previous">
    <span>←</span> Previous: Share
  </a>
</div>
`,
    },
  ],
  interactiveType: 'custom',
};

export default claudePluginsConcept;
