const claudeAgentsConcept = {
  id: 'claude-agents',
  title: 'Claude Agents',
  category: 'AI Tools',
  tags: ['agents', 'multi-agent', 'orchestration', 'tutorial'],
  tabs: [
    {
      label: 'Overview',
      content: `
<p style="margin-bottom:1rem; line-height:1.75;">Agent teams let you coordinate <strong>multiple Claude Code instances working together</strong>. One session acts as the team lead, coordinating work, assigning tasks, and synthesizing results. Teammates work independently, each in its own context window, and can communicate directly with each other.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    &#x1F5DE; Think of it like a newsroom
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">An <strong>editor-in-chief</strong> (the Team Lead) assigns three reporters to research different angles of a story <em>in parallel</em>. Each reporter works independently, then submits findings. The editor synthesizes everything into the final piece &mdash; simultaneously, not one at a time.</p>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    &#x26A1; How this differs from Subagents
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">Unlike <a href="#" data-goto-concept="claude-subagents" style="color: var(--accent-primary); text-decoration: underline;">subagents</a> which run <em>inside</em> one session and only report back to the main agent, <strong>agent teammates are fully independent Claude Code sessions</strong> &mdash; each with its own context window, project files, and the ability to message other teammates directly. <strong>Agent teammates can communicate directly with each other</strong> and share a task list for coordination</p>
</div>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Prerequisites</h3>
<ul style="margin: 0 0 1.5rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.25rem;">Claude Code <strong>v2.1.32</strong> or later (<code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-text); font-family: monospace;">claude --version</code> to check)</li>
  <li style="margin-bottom: 0.25rem;">A terminal &mdash; macOS Terminal, iTerm2, or any Linux terminal</li>
  <li style="margin-bottom: 0.25rem;">Optional: <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-text); font-family: monospace;">tmux</code> for split-pane display (covered in Step 2)</li>
</ul>


<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">What You'll Build</h3>
<p style="margin-bottom:0.75rem; line-height:1.75;">A simple <strong>Research Team</strong> that works in parallel to analyze a topic from multiple angles. Perfect for learning because:</p>

<ul style="margin: 0 0 1.5rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.25rem;">✅ No coding required</li>
  <li style="margin-bottom: 0.25rem;">✅ Clear, measurable outputs</li>
  <li style="margin-bottom: 0.25rem;">✅ Easy to verify results</li>
  <li style="margin-bottom: 0.25rem;">✅ Demonstrates parallel coordination</li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">When to Use Agent Teams</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">&#x2705; Best For</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">&#x274C; Avoid When</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Research & review (parallel exploration)</td>
      <td style="padding: 0.75rem;">Sequential tasks with dependencies</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">New modules/features (separate files)</td>
      <td style="padding: 0.75rem;">Same-file edits (conflict risk)</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Debugging with competing hypotheses</td>
      <td style="padding: 0.75rem;">Routine tasks (token overhead)</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;">Cross-layer coordination (frontend/backend/tests)</td>
      <td style="padding: 0.75rem;">Work requiring frequent handoffs</td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Step 1 – Enable Agent Teams <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Step 1 – Enable',
      content: `
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 1 — Enable Agent Teams</h2>

<p style="margin-bottom:1rem; line-height:1.75;">Agent teams are an <strong>experimental feature</strong> that must be enabled with an environment variable before you can use them. Without this flag, Claude Code will not offer team coordination — it will just run as a normal single session.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.5rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--accent-primary);">📋</span> Before you begin
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">You need <strong>Claude Code v2.1.32 or later</strong>. Run the command below to check your version. If it's older, run <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-text); font-family: monospace;">npm update -g @anthropic-ai/claude-code</code> to upgrade.</p>
</div>

<p style="margin-bottom:0.5rem; line-height:1.75;">Check your installed version:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.25rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>claude --version</code></pre>
<p style="margin-bottom:1.5rem; font-size:0.85rem; color: var(--text-secondary); font-style:italic;">Expected output: <code style="color: var(--syntax-text); background: var(--syntax-bg); padding: 0.1rem 0.3rem; border-radius:3px;">Claude Code 2.1.32</code> (or higher)</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Option A: settings.json <span style="font-size:0.8rem; color: var(--accent-primary); font-weight:400;">(Recommended — persists across sessions)</span></h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">Open or create your Claude Code global settings file:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code># macOS/Linux — open in nano text editor
nano ~/.claude/settings.json

# Or use VS Code
code ~/.claude/settings.json</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Add (or merge) this content into the file:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75; margin-top: 1.5rem;">Example real-world output:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>senthilpalanivelu@Senthils-MacBook-Pro-M4 ~/.claude$ pwd
/Users/senthilpalanivelu/.claude</code></pre>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>senthilpalanivelu@Senthils-MacBook-Pro-M4 ~/.claude$ cat settings.json 
{
  "enabledPlugins": {
    "commit-commands@claude-plugins-official": true,
    "ui-ux-pro-max@ui-ux-pro-max-skill": true,
    "everything-claude-code@everything-claude-code": true,
    "frontend-design@claude-plugins-official": true,
    "py-helper@py-helper-marketplace": true
  },
  "extraKnownMarketplaces": {
    "everything-claude-code": {
      "source": {
        "source": "github",
        "repo": "affaan-m/everything-claude-code"
      }
    },
    "ui-ux-pro-max-skill": {
      "source": {
        "source": "github",
        "repo": "nextlevelbuilder/ui-ux-pro-max-skill"
      }
    },
    "py-helper-marketplace": {
      "source": {
        "source": "directory",
        "path": "/Users/senthilpalanivelu/Downloads/my-claude-marketplace/py-helper-marketplace"
      }
    }
  },
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}</code></pre>


<p style="margin-bottom:1.5rem; font-size:0.85rem; color: var(--text-secondary); line-height:1.6;">Save and close. This flag is read every time Claude Code starts, so you only need to set it once.</p>


<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Option B: Shell environment variable <span style="font-size:0.8rem; color: var(--text-secondary); font-weight:400;">(Current terminal only)</span></h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">For a quick one-time test, export the variable in your current terminal:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">To make it permanent, add the same line to your shell profile and reload it:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>echo 'export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1' >> ~/.zshrc
source ~/.zshrc   # reload (use ~/.bashrc if on bash)</code></pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Step 2 – Display Modes <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Step 2 – Display',
      content: `
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 2 — Choose Your Display Mode</h2>

<p style="margin-bottom:0.75rem; line-height:1.75;">Agent teams support two display modes for viewing and interacting with teammates:</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Mode Comparison</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Mode</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Description</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Best For</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600; color: var(--accent-primary);">In-Process</td>
      <td style="padding: 0.75rem;">All teammates run in your main terminal. Use <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">Shift+Down</code> to cycle through them.</td>
      <td style="padding: 0.75rem;">Any terminal, beginners, quick tasks</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; font-weight: 600; color: var(--accent-primary);">Split Panes</td>
      <td style="padding: 0.75rem;">Each teammate gets its own pane. See everyone at once.</td>
      <td style="padding: 0.75rem;">tmux or iTerm2 users, complex workflows</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Configuring Split Panes for Beginners</h3>

<p style="margin-bottom:0.75rem; line-height:1.75;">To see all your teammates working in parallel, you'll need a terminal multiplexer like <strong>tmux</strong>. Follow these simple steps:</p>

<ol style="margin: 0.5rem 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.5rem;">
    <strong>Install tmux:</strong> Ensure you have Homebrew installed, then run:
    <pre style="display: block; padding: 0.75rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>brew install tmux</code></pre>
  </li>
  <li style="margin-bottom: 0.5rem;">
    <strong>Start a tmux session:</strong> Before launching Claude Code, you must start a tmux session so it can manage your terminal panes.
    <pre style="display: block; padding: 0.75rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>tmux new -s claude-session</code></pre>
    <div style="padding: 0.75rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 3px solid var(--accent-primary); border-radius: 8px; margin: 0.5rem 0; font-size: 0.85rem; line-height: 1.5;">
      <strong>Mac / iTerm2 Users:</strong> Start tmux with native window integration for the best native-tab experience:<br>
      <code style="color: var(--code-green); font-family: 'JetBrains Mono', monospace; margin-top: 0.25rem; display: inline-block;">tmux -CC new -s claude-session</code>
    </div>
  </li>
  <li style="margin-bottom: 0.5rem;">
    <strong>Launch Claude Code:</strong> Tell Claude to use the split-pane mode.
    <pre style="display: block; padding: 0.75rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>claude --teammate-mode tmux</code></pre>
  </li>
</ol>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Make Split-Pane Mode the Default</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">If you want to make this the default behavior whenever you run Claude inside a tmux session, open or create your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude.json</code> file and add:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>{
  "teammateMode": "tmux"
}</code></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--accent-primary);">💡</span> Pro Tip
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">
    Using <strong>split-pane mode</strong> inside tmux gives you the best visibility into what all your teammates are doing simultaneously. Just verify Claude is already running inside of a tmux session before summoning agent agents!
  </p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 1
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Step 3 – First Team <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Step 3 – First Team',
      content: `
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 3 — Your First Agent Team</h2>

<p style="margin-bottom:0.75rem; line-height:1.75;">Let's create a <strong>Research Team</strong> that analyzes a topic from multiple perspectives in parallel.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Launch Claude Code</h3>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>cd ~/your-project-directory
claude</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Create Your First Team</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">Enter this prompt:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap; line-height: 1.5;"><code>I want to understand the concept of "human bias" from three
different perspectives. Create an agent team with 3 teammates:

1. "historian" - Research the history and origins of human bias
2. "psychologist" - Research the causes and mitigation techniques
3. "ethicist" - Research the societal and ethical implications

Each teammate should investigate their angle and report back. Have the
lead synthesize all findings into a summary.</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">What Happens Next</h3>

<ol style="margin: 0.5rem 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.5rem;"><strong>Claude creates a team</strong> with a shared task list</li>
  <li style="margin-bottom: 0.5rem;"><strong>Spawns 3 teammates</strong> (historian, technician, ethicist)</li>
  <li style="margin-bottom: 0.5rem;"><strong>Each teammate works independently</strong> on their assigned task</li>
  <li style="margin-bottom: 0.5rem;"><strong>The lead waits</strong> for all to complete</li>
  <li style="margin-bottom: 0.5rem;"><strong>The lead synthesizes</strong> all findings</li>
</ol>



<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">The Architecture</h3>

<div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; overflow-x: auto;">
  <pre style="margin: 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; line-height: 1.4; color: var(--text-secondary); white-space: pre;"><code style="color: var(--accent-primary);">┌────────────────────────────────────────────────────────────┐</code>
<code style="color: var(--accent-primary);">│</code><code style="color: var(--text-primary);">                       YOU (Team Lead)                      </code><code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code><code style="color: var(--text-secondary);">                 assigns tasks & synthesizes                </code><code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>                                                            <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--accent-secondary);">┌────────────┐      ┌────────────┐      ┌────────────┐</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-primary);">Historian</code>  <code style="color: var(--accent-secondary);">│</code>      <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-primary);">Technician</code> <code style="color: var(--accent-secondary);">│</code>      <code style="color: var(--accent-secondary);">│</code>  <code style="color: var(--text-primary);">Ethicist</code>  <code style="color: var(--accent-secondary);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-secondary);">(Teammate)</code> <code style="color: var(--accent-secondary);">│</code>      <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-secondary);">(Teammate)</code> <code style="color: var(--accent-secondary);">│</code>      <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-secondary);">(Teammate)</code> <code style="color: var(--accent-secondary);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--accent-secondary);">└────────────┘      └────────────┘      └────────────┘</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>         <code style="color: var(--text-secondary);">▲                  ▲                   ▲</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>         <code style="color: var(--text-secondary);">│                  │                   │</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>         <code style="color: var(--text-secondary);">└──────────┬───────┴─────────┬─────────┘</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>                    <code style="color: var(--text-secondary);">│                 │</code>                     <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">┌─────────┴─────────────────┴─────────┐</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">│</code>          <code style="color: var(--text-primary);">Shared Task List</code>           <code style="color: var(--code-green);">│</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">│</code>  <code style="color: var(--text-secondary);">• Task 1: Pending</code>                  <code style="color: var(--code-green);">│</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">│</code>  <code style="color: var(--text-secondary);">• Task 2: In Progress</code>              <code style="color: var(--code-green);">│</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">│</code>  <code style="color: var(--text-secondary);">• Task 3: Completed</code>                <code style="color: var(--code-green);">│</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">└─────────────────────────────────────┘</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">└────────────────────────────────────────────────────────────┘</code></pre>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 2
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Step 4 – Interact <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Step 4 – Interact',
      content: `
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 4 — Interact with Your Team</h2>

<p style="margin-bottom:0.75rem; line-height:1.75;">Once your team is running, you can monitor progress and interact with individual teammates.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Split-Pane Mode (Recommended with tmux)</h3>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--code-green); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--code-green);">✨</span> Automatic Layout
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">
    You don't need to manually configure windows! When you launch Claude inside a tmux session with <code style="padding: 0.2rem 0.4rem; background: var(--surface-dark); border-radius: 4px; font-family: monospace; color: var(--code-text);">split-pane</code> mode, Claude will <strong>automatically</strong> slice your terminal window into side-by-side or stacked panels so you can watch all 3 agents (and the team leader) working in parallel.
  </p>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">To navigate between these panes, you use tmux's <strong>Prefix Key</strong>. By default, this is <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; border: 1px solid var(--border-color);">Ctrl+B</kbd>. You press and release this prefix combo, then press a shortcut key.</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Action</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Shortcut / Command</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><strong>Move to an Agent's Pane</strong></td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+B</kbd> then <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Arrow Key</kbd><br><small style="color: var(--text-secondary); opacity: 0.8;">(Or just click on the pane with your mouse if mouse mode is on!)</small></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><strong>Zoom into One Agent (Full Screen)</strong></td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+B</kbd> then <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Z</kbd><br><small style="color: var(--text-secondary); opacity: 0.8;">(Press again to unzoom and see the whole team)</small></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><strong>Cycle Layout Arrangements</strong></td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+B</kbd> then <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Spacebar</kbd></td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;"><strong>Interact with an Agent</strong></td>
      <td style="padding: 0.75rem;">Once your cursor is in their pane, simply type your message to redirect them or ask for a status update.</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">In-Process Mode (Standard Terminal)</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Action</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">How To</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Cycle through teammates</td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Shift+Down</kbd></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">View teammate's session</td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Enter</kbd></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Interrupt current turn</td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Escape</kbd></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Toggle task list</td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+T</kbd></td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;">Send a message</td>
      <td style="padding: 0.75rem;">Just type and send</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Talking to Teammates Directly</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">You can message any teammate to give additional instructions:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Ask the historian teammate to focus specifically on
facial recognition bias in the last decade.</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Or switch to that teammate and type directly:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Add a section about IBM's early work on this topic and
how it influenced current practices.</code></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--accent-primary);">💡</span> Key Insight
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">
    Each teammate is a <strong>full, independent Claude Code session</strong> with its own context window. They load project context (CLAUDE.md, MCP servers, skills) but <strong>don't inherit the lead's conversation history</strong>.
  </p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 3
  </a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">
    Next: Step 5 – Tasks <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Step 5 – Tasks',
      content: `
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 5 — Manage Tasks</h2>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.5rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    &#x1F4CB; What is the Shared Task List?
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">Think of it like a Kanban board that every teammate can see. Tasks move from <strong>Pending &rarr; In Progress &rarr; Completed</strong>. Teammates self-assign unclaimed tasks when they finish their current work &mdash; no manual hand-off needed.</p>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">The shared task list coordinates work across the team. Tasks have three states: <strong>pending</strong>, <strong>in progress</strong>, and <strong>completed</strong>.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">How Task Assignment Works</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Lead assigns:</strong> Tell the lead which task to give to which teammate</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Assign the security review task to the reviewer teammate</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Self-claim:</strong> After finishing a task, a teammate picks up the next unassigned, unblocked task</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Creating Task Dependencies</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">You can specify that some tasks must complete before others:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Create an agent team to build a REST API. The work has dependencies:

1. First, "architect" teammate designs the API schema
2. Then, "backend" teammate implements endpoints (depends on architect)
3. Finally, "tester" teammate writes integration tests (depends on backend)

Create the team and set up the task dependencies.</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">How Dependencies Work</h3>
<div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; overflow-x: auto;">
  <pre style="margin: 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); white-space: pre;"><code style="color: var(--text-primary);">Task 1: Design API</code> <code style="color: var(--accent-primary);">──────────────►</code> <code style="color: var(--code-green);">Completed</code>
                                    <code style="color: var(--accent-primary);">│</code>
                                    <code style="color: var(--accent-primary);">▼</code>
<code style="color: var(--text-primary);">Task 2: Implement</code> <code style="color: var(--text-secondary);">(blocked)</code> <code style="color: var(--accent-primary);">─────►</code> <code style="color: var(--accent-secondary);">In Progress</code>
                                    <code style="color: var(--accent-primary);">│</code>
                                    <code style="color: var(--accent-primary);">▼</code>
<code style="color: var(--text-primary);">Task 3: Write tests</code> <code style="color: var(--text-secondary);">(blocked)</code> <code style="color: var(--accent-primary);">────►</code> <code style="color: var(--text-secondary);">Pending</code></pre>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">When Task 1 completes, Task 2 automatically unblocks. When Task 2 completes, Task 3 unblocks.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Practical Example: Parallel Code Review</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">A common use case is having multiple reviewers work independently:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Create an agent team to review the codebase. Spawn three reviewers:

1. "security-reviewer" - Focus on security vulnerabilities, input
   validation, authentication issues
2. "performance-reviewer" - Focus on algorithmic complexity, memory
   usage, database queries
3. "test-reviewer" - Focus on test coverage, edge cases, test quality

Each should review independently and report findings. The lead should
compile a prioritized action list.</code></pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">Each reviewer works from the same codebase but applies a different filter. The lead synthesizes findings after all finish.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 4
  </a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">
    Next: Step 6 – Plan Approval <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Step 6 – Approval',
      content: `
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 6 — Approval Mode</h2>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.5rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    &#x1F6E1; Why use Plan Approval?
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">By default, teammates can read <em>and</em> write files. Approval mode makes a teammate <strong>read-only first</strong>: it proposes what it plans to do, and only proceeds once you say &ldquo;yes.&rdquo; Use this for risky changes so you stay in control.</p>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">For complex or risky tasks, you can require teammates to <strong>plan before implementing</strong>. The teammate works in read-only plan mode until the lead approves.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Requesting Plan Approval</h3>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Spawn an "architect" teammate to refactor the authentication module.
Require plan approval before they make any changes.</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">The Approval Flow</h3>
<div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; overflow-x: auto;">
  <pre style="margin: 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; line-height: 1.4; color: var(--text-secondary); white-space: pre;"><code style="color: var(--accent-primary);">┌─────────────────────────────────────────────────────────┐</code>
<code style="color: var(--accent-primary);">│</code>                   <code style="color: var(--accent-secondary);">TEAMMATE (Read-Only)</code>                  <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">┌─────────────────────────────────────────────────┐</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">│</code>  <code style="color: var(--text-primary);">PLAN MODE</code>                                      <code style="color: var(--border-color);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">│</code>  <code style="color: var(--text-secondary);">• Analyzes the code</code>                             <code style="color: var(--border-color);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">│</code>  <code style="color: var(--text-secondary);">• Proposes approach</code>                             <code style="color: var(--border-color);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">│</code>  <code style="color: var(--text-secondary);">• Creates implementation plan</code>                   <code style="color: var(--border-color);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">└─────────────────────────────────────────────────┘</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>                         <code style="color: var(--accent-primary);">│</code>                                <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>                         <code style="color: var(--accent-primary);">▼</code>                                <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>                <code style="color: var(--text-primary);">Plan Approval Request</code>               <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>                         <code style="color: var(--accent-primary);">│</code>                                <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">└─────────────────────────┼───────────────────────────────┘</code>
                          <code style="color: var(--accent-primary);">│</code>
                          <code style="color: var(--accent-primary);">▼</code>
<code style="color: var(--accent-primary);">┌─────────────────────────┼───────────────────────────────┐</code>
<code style="color: var(--accent-primary);">│</code>                    <code style="color: var(--text-primary);">TEAM LEAD (YOU)</code>                      <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">┌─────────────────────────────────────────────────┐</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">│</code>  <code style="color: var(--text-primary);">REVIEWING PLAN</code>                                 <code style="color: var(--border-color);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">│</code>  <code style="color: var(--text-secondary);">• Checks for risks</code>                              <code style="color: var(--border-color);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">│</code>  <code style="color: var(--text-secondary);">• Validates approach</code>                            <code style="color: var(--border-color);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--border-color);">└─────────────────────────────────────────────────┘</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--accent-primary);">│</code>                      <code style="color: var(--accent-primary);">│</code>                         <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>     <code style="color: var(--code-green);">APPROVE</code>                 <code style="color: var(--accent-secondary);">REJECT</code>                        <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--accent-primary);">│</code>                      <code style="color: var(--accent-primary);">│</code>                         <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--accent-primary);">▼</code>                      <code style="color: var(--accent-primary);">▼</code>                         <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--code-green);">┌──────────────┐</code>      <code style="color: var(--accent-secondary);">┌──────────────┐</code>                 <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--code-green);">│</code> <code style="color: var(--text-primary);">IMPLEMENT</code>    <code style="color: var(--code-green);">│</code>      <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-primary);">FEEDBACK</code>     <code style="color: var(--accent-secondary);">│</code>                 <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--code-green);">│</code><code style="color: var(--text-secondary);">(Write Mode)</code>  <code style="color: var(--code-green);">│</code>      <code style="color: var(--accent-secondary);">│</code><code style="color: var(--text-secondary);">(Try Again)</code>   <code style="color: var(--accent-secondary);">│</code>                 <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--code-green);">└──────────────┘</code>      <code style="color: var(--accent-secondary);">└──────────────┘</code>                 <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">└─────────────────────────────────────────────────────────┘</code></pre>
</div>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Controlling Approval Decisions</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">Give the lead criteria for approval:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Tell the lead to only approve plans that include test coverage
and don't modify the database schema.</code></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--accent-primary);">💡</span> When to Use Plan Approval
  </p>
  <ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.5;">
    <li style="margin-bottom: 0.25rem;">Refactoring critical systems</li>
    <li style="margin-bottom: 0.25rem;">Making database schema changes</li>
    <li style="margin-bottom: 0.25rem;">Modifying authentication/authorization</li>
    <li style="margin-bottom: 0.25rem;">Large-scale code reorganization</li>
    <li>Any change with significant blast radius</li>
  </ul>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="5" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 5
  </a>
  <a href="#" data-goto-tab="7" class="tutorial-nav-link">
    Next: Step 7 – Cleanup <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Step 7 – Cleanup',
      content: `
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 7 — Cleanup</h2>

<p style="margin-bottom:0.75rem; line-height:1.75;">When you're done with your team, clean up properly to release resources.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Shutdown a Specific Teammate</h3>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Ask the researcher teammate to shut down</code></pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">The lead sends a shutdown request. The teammate can approve (exit gracefully) or reject with an explanation.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Clean Up the Entire Team</h3>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Clean up the team</code></pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">This removes shared team resources. <strong>All teammates must be shut down first</strong> or the cleanup will fail.</p>

<div style="padding: 1rem; background: rgba(255, 200, 50, 0.1); border: 1px solid rgba(255, 200, 50, 0.3); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.6; color: var(--text-primary);">
    <strong style="color: var(--accent-primary);">⚠️ Important:</strong> Always use the lead to clean up. Teammates should not run cleanup because their team context may not resolve correctly, potentially leaving resources in an inconsistent state.
  </p>
</div>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Cleanup Checklist</h3>
<ol style="margin: 0.5rem 0 1.5rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.4rem;">Tell each teammate to shut down: <em>"Ask the historian to shut down"</em></li>
  <li style="margin-bottom: 0.4rem;">Wait for each teammate to confirm they've exited</li>
  <li style="margin-bottom: 0.4rem;">Ask the lead to clean up the team: <em>"Clean up the team"</em></li>
  <li style="margin-bottom: 0.4rem;">Exit the lead session: type <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-text); font-family: monospace;">/exit</code> or press <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+C</kbd></li>
</ol>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Token Costs</h3>

<p style="margin-bottom:0.75rem; line-height:1.75;">Agent teams use <strong>significantly more tokens</strong> than a single session. Each teammate has its own context window.</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Use Teams When</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Use Single Session When</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Parallel exploration adds real value</td>
      <td style="padding: 0.75rem;">Sequential tasks with dependencies</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Tasks are truly independent</td>
      <td style="padding: 0.75rem;">Same-file edits needed</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;">Coordination overhead is worth it</td>
      <td style="padding: 0.75rem;">Routine tasks (token cost matters)</td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="6" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 6
  </a>
  <a href="#" data-goto-tab="8" class="tutorial-nav-link">
    Next: Step 8 – Troubleshoot <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Step 8 – Troubleshoot',
      content: `
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 8 — Troubleshoot</h2>

<p style="margin-bottom:1rem; line-height:1.75;">If something doesn't work as expected, the issue usually falls into one of the categories below. Each problem includes a plain-English explanation of <em>why</em> it happens and how to fix it.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Teammates Not Appearing</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Symptoms:</strong> You asked for a team but don't see teammates.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Solutions:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.25rem;">In in-process mode, teammates may already be running but not visible. Press <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Shift+Down</kbd> to cycle through active teammates.</li>
  <li style="margin-bottom: 0.25rem;">Check that the task was complex enough to warrant a team.</li>
  <li style="margin-bottom: 0.25rem;">If you requested split panes, verify tmux is installed: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">which tmux</code></li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Too Many Permission Prompts</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Symptoms:</strong> Teammates keep asking for permissions.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Solution:</strong> Pre-approve common operations in your permission settings before spawning teammates.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Teammates Stopping on Errors</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Symptoms:</strong> Teammate stops after encountering an error.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Solutions:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.25rem;">Check their output using <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Shift+Down</kbd></li>
  <li style="margin-bottom: 0.25rem;">Give them additional instructions directly</li>
  <li style="margin-bottom: 0.25rem;">Spawn a replacement teammate to continue the work</li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Lead Shuts Down Before Work Is Done</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Symptoms:</strong> The lead decides the team is finished before all tasks are complete.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Solution:</strong></p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Wait for your teammates to complete their tasks before proceeding</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Orphaned tmux Sessions</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Symptoms:</strong> tmux session persists after team ends.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Solution:</strong></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>tmux ls
tmux kill-session -t &lt;session-name&gt;</code></pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="7" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 7
  </a>
  <a href="#" data-goto-tab="9" class="tutorial-nav-link">
    Next: Best Practices <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Best Practices',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Best Practices for Agent Teams</strong>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">1. Give Teammates Enough Context</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">Teammates load project context automatically (CLAUDE.md, MCP servers, skills) but <strong>don't inherit the lead's conversation history</strong>. Include task-specific details in the spawn prompt:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Spawn a security reviewer teammate with the prompt: "Review the
authentication module at src/auth/ for security vulnerabilities. Focus
on token handling, session management, and input validation. The app
uses JWT tokens stored in httpOnly cookies. Report any issues with
severity ratings."</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">2. Choose an Appropriate Team Size</h3>

<ul style="margin: 0.5rem 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.25rem;"><strong>Start with 3-5 teammates</strong> — balances parallelism with coordination</li>
  <li style="margin-bottom: 0.25rem;"><strong>5-6 tasks per teammate</strong> keeps everyone productive without context switching</li>
  <li style="margin-bottom: 0.25rem;"><strong>More teammates ≠ faster work</strong> — coordination overhead increases</li>
  <li style="margin-bottom: 0.25rem;">Three focused teammates often outperform five scattered ones</li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">3. Size Tasks Appropriately</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Size</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Problem</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600; color: #ff6b6b;">Too Small</td>
      <td style="padding: 0.75rem;">Coordination overhead exceeds the benefit</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600; color: #ffd93d;">Too Large</td>
      <td style="padding: 0.75rem;">Teammates work too long without check-ins, increasing risk of wasted effort</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; font-weight: 600; color: var(--accent-primary);">Just Right</td>
      <td style="padding: 0.75rem;">Self-contained units producing a clear deliverable (function, test file, review)</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">4. Avoid File Conflicts</h3>

<p style="margin-bottom:0.75rem; line-height:1.75;">Two teammates editing the same file leads to overwrites. Break work so each teammate owns a different set of files.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">5. Monitor and Steer</h3>

<p style="margin-bottom:0.75rem; line-height:1.75;">Check in on teammates' progress, redirect approaches that aren't working, and synthesize findings as they come in. Letting a team run unattended too long increases wasted effort.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">6. Start with Research and Review</h3>

<p style="margin-bottom:0.75rem; line-height:1.75;">If you're new to agent teams, start with tasks that have clear boundaries and don't require writing code: reviewing a PR, researching a library, or investigating a bug. These show the value of parallel exploration without coordination challenges.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="8" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 8
  </a>
  <a href="#" data-goto-tab="10" class="tutorial-nav-link">
    Next: Quick Reference <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Quick Reference',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Quick Reference Card</strong>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Essential Commands</h3>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); white-space: pre;"><code># Create a team
"Create an agent team with [N] teammates to [task description]"

# Assign specific roles
"Spawn teammates: one focused on [A], one on [B], one on [C]"

# Specify a model
"Create a team using Sonnet for each teammate"

# Require plan approval
"Require plan approval before making changes"

# Talk to a teammate
"Ask the [name] teammate to [additional instruction]"

# Shut down a teammate
"Ask the [name] teammate to shut down"

# Clean up
"Clean up the team"</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Keyboard Shortcuts (In-Process Mode)</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Key</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Action</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Shift+Down</kbd></td>
      <td style="padding: 0.75rem;">Cycle to next teammate</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Enter</kbd></td>
      <td style="padding: 0.75rem;">View teammate session</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Escape</kbd></td>
      <td style="padding: 0.75rem;">Interrupt current turn</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+T</kbd></td>
      <td style="padding: 0.75rem;">Toggle task list</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Architecture Summary</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Component</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Role</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Team Lead</td>
      <td style="padding: 0.75rem;">Main session that creates the team, spawns teammates, coordinates work</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Teammates</td>
      <td style="padding: 0.75rem;">Independent Claude instances working on assigned tasks</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Task List</td>
      <td style="padding: 0.75rem;">Shared list of work items that teammates claim and complete</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; font-weight: 600;">Mailbox</td>
      <td style="padding: 0.75rem;">Messaging system for communication between agents</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Where Files Are Stored</h3>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>~/.claude/teams/{team-name}/config.json  # Team configuration
~/.claude/tasks/{team-name}/              # Task list directory</code></pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="9" class="tutorial-nav-link previous">
    <span>←</span> Previous: Best Practices
  </a>
  <a href="#" data-goto-tab="11" class="tutorial-nav-link">
    Next: Resources <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Resources',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Resources & Further Reading</strong>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Official Documentation</h3>

<ul style="margin: 0.5rem 0 1rem 0; color: var(--text-secondary); line-height: 1.75; list-style: none; padding: 0;">
  <li style="margin-bottom: 0.5rem;">
    <a href="https://code.claude.com/docs/en/agent-teams" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">Agent Teams Documentation</a>
    <span style="display: block; margin-left: 1.5rem; font-size: 0.9rem;">Complete reference for orchestrating teams of Claude Code sessions</span>
  </li>
  <li style="margin-bottom: 0.5rem;">
    <a href="https://code.claude.com/docs/en/sub-agents" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">Subagents Documentation</a>
    <span style="display: block; margin-left: 1.5rem; font-size: 0.9rem;">Lightweight delegation within a single session</span>
  </li>
  <li style="margin-bottom: 0.5rem;">
    <a href="https://code.claude.com/docs/en/overview" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">Claude Code Overview</a>
    <span style="display: block; margin-left: 1.5rem; font-size: 0.9rem;">Getting started with Claude Code</span>
  </li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Related Tutorials</h3>

<ul style="margin: 0.5rem 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.5rem;">
    <a href="#" data-goto-concept="claude-subagents" style="color: var(--accent-primary); text-decoration: underline;">Claude Subagents</a> — Learn about lightweight task delegation
  </li>
  <li style="margin-bottom: 0.5rem;">
    <a href="#" data-goto-concept="claude-skills-tutorial" style="color: var(--accent-primary); text-decoration: underline;">Claude Skills</a> — Create reusable instruction sets
  </li>
  <li style="margin-bottom: 0.5rem;">
    <a href="#" data-goto-concept="claude-mcp" style="color: var(--accent-primary); text-decoration: underline;">Claude MCP</a> — Extend Claude with external tools
  </li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Key Concepts from This Tutorial</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Concept</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Description</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Team Lead</td>
      <td style="padding: 0.75rem;">Main Claude session that coordinates the team</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Teammates</td>
      <td style="padding: 0.75rem;">Independent Claude instances with own context windows</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Task List</td>
      <td style="padding: 0.75rem;">Shared coordination mechanism (pending, in progress, completed)</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Plan Approval</td>
      <td style="padding: 0.75rem;">Teammate plans before implementing (for risky work)</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; font-weight: 600;">In-Process vs Split Panes</td>
      <td style="padding: 0.75rem;">Two display modes for viewing teammates</td>
    </tr>
  </tbody>
</table>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--accent-primary);">🎓</span> Next Steps for Your Learning
  </p>
  <ol style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.75;">
    <li style="margin-bottom: 0.25rem;">Try a parallel code review on your current project</li>
    <li style="margin-bottom: 0.25rem;">Experiment with task dependencies for multi-stage workflows</li>
    <li style="margin-bottom: 0.25rem;">Use plan approval for risky changes</li>
    <li style="margin-bottom: 0.25rem;">Compare agent teams with subagents to understand when each approach fits</li>
  </ol>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="10" class="tutorial-nav-link previous">
    <span>←</span> Previous: Quick Reference
  </a>
  <a href="#" data-goto-tab="0" class="tutorial-nav-link">
    Start Over: Overview <span>→</span>
  </a>
</div>
`,
    },
  ],
  interactiveType: 'custom',
};

export default claudeAgentsConcept;