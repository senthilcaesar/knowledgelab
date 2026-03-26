const claudeSubagentsConcept = {
  id: 'claude-subagents',
  title: 'Claude Subagents',
  tabs: [
    {
      label: 'Overview',
      content: `
        <p style="margin-bottom:1rem; line-height:1.75;">Subagents are specialized AI assistants that handle specific types of tasks. Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions. When Claude encounters a task that matches a subagent’s description, it delegates to that subagent, which works independently and returns results.</p>
        <p style="margin-bottom:1.5rem; font-style: italic; color: var(--text-secondary); line-height:1.6;">
          Note: If you need multiple agents working in parallel and communicating with each other, see agent teams instead. Subagents work within a single session; agent teams coordinate across separate sessions.
        </p>
        <p>Claude uses each subagent’s description to decide when to delegate tasks. When you create a subagent, write a clear description so Claude knows when to use it.</p>
      `
    },
    {
      label: 'Built-in',
      content: `
        <p>Claude Code includes several built-in subagents that are optimized for common engineering workflows:</p>

        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">1) Explore</strong>
          <p>A fast, read-only agent optimized for searching and analyzing codebases.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Tools:</strong> Read-only tools (no Write/Edit access)</li>
              <li><strong>Purpose:</strong> File discovery, code search, codebase exploration</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Claude delegates to Explore when it needs to search or understand a codebase without making changes. This keeps exploration results out of your main session context.</p>
          <p style="font-size: 0.9rem; font-style: italic; opacity: 0.8;">Available thoroughness levels: quick, medium, or very thorough.</p>
        </div>
        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">2) Plan</strong>
          <p>A research-focused agent used during plan mode to gather context before presenting a plan.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Tools:</strong> Read-only tools</li>
              <li><strong>Purpose:</strong> Codebase research for planning</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Used when Claude needs to understand your codebase during a planning phase. This prevents infinite nesting (subagents cannot spawn other subagents) while still gathering necessary context.</p>
        </div>

        <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Viewing Subagents</strong>
          
          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size: 1rem; color: var(--text-primary);">Option 1: The <code>/agents</code> command (recommended)</strong>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.75rem;">Use the <code>/agents</code> slash command inside an interactive session to browse all available subagents in a searchable menu.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">/agents</code>
          </div>

          <div>
            <strong style="display:block; margin-bottom:0.75rem; font-size: 1rem; color: var(--text-primary);">Option 2: The <code>claude agents</code> CLI command</strong>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.75rem;">To list all configured subagents from the command line <em>without</em> starting an interactive session, run <code>claude agents</code>.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">claude agents</code>
          </div>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <h3 style="margin-bottom: 1.5rem; color: var(--accent-primary); font-size: 1.3rem;">Scenario: Adding a "Dark Mode Toggle" feature</h3>
          <p style="margin-bottom: 2rem; color: var(--text-secondary);">A real-world walkthrough of adding dark mode support to a React + Vite app using subagents.</p>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 1 — Explore: Understand the structure</strong>
            <p style="margin-bottom: 0.75rem;">Type this in your session:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> I want to add a dark mode toggle to this React + Tailwind app. Explore the codebase first.</code>
            <p style="line-height: 1.6;">Claude automatically delegates to the <strong>Explore</strong> subagent, which scans read-only:</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
              <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                <li><code>vite.config.ts</code> — checks build setup</li>
                <li><code>tailwind.config.ts</code> — checks if <code>darkMode: 'class'</code> is set</li>
                <li><code>src/components/</code> — finds existing layout components</li>
                <li><code>src/App.tsx</code> — checks current theme integration</li>
              </ul>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-secondary);">It returns a concise summary, keeping your context clean.</p>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 2 — Plan: Design the implementation</strong>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> /plan Add a dark mode toggle button to the Navbar component with Tailwind dark: classes and localStorage persistence</code>
            <p style="margin-bottom: 0.75rem;">The <strong>Plan</strong> subagent researches and returns a structured plan:</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
              <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8;">
                <li>Update <code>tailwind.config.ts</code> → set <code>darkMode: 'class'</code></li>
                <li>Create <code>src/hooks/useDarkMode.ts</code> → toggle + sync</li>
                <li>Update <code>src/components/Navbar.tsx</code> → add toggle button</li>
                <li>Update <code>index.html</code> → prevent unstyled flash</li>
                <li>Update <code>.github/workflows/ci.yml</code> → add build check</li>
              </ol>
            </div>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 3 — Execute: Final Implementation</strong>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> Implement the dark mode plan we just approved</code>
            <p style="margin-bottom: 1rem;">The general-purpose subagent handles complex file creations in isolated contexts:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); font-size: 0.85rem; margin-bottom: 1rem;">// src/hooks/useDarkMode.ts
export function useDarkMode() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  return [dark, setDark] as const;
}</code>
            <p style="font-size: 0.95rem; line-height: 1.6;">CI/CD pipelines and complex configurations are handled automatically based on your project stack.</p>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 4 — Verify: Final Checks</strong>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> Explore and confirm the dark: Tailwind classes are consistent</code>
            <p style="line-height: 1.6;"><strong>Explore</strong> conducts a targeted grep across <code>src/</code> to ensure visual consistency without touching files.</p>
          </div>

          <div style="margin-top: 3rem;">
            <strong style="display:block; margin-bottom:1rem; font-size:1.1rem; color: var(--text-primary);">Division of Work Summary</strong>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; border: 1px solid var(--border-color);">
                <thead>
                  <tr style="background: rgba(255, 255, 255, 0.05); border-bottom: 2px solid var(--border-color);">
                    <th style="text-align: left; padding: 1rem; color: var(--accent-primary);">Subagent</th>
                    <th style="text-align: left; padding: 1rem; color: var(--accent-primary);">Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 1rem; font-weight: bold;">Explore</td>
                    <td style="padding: 1rem; color: var(--text-secondary);">Analyzed tailwind/vite config and component tree.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 1rem; font-weight: bold;">Plan</td>
                    <td style="padding: 1rem; color: var(--text-secondary);">Produced the design and step-by-step technical plan.</td>
                  </tr>
                  <tr>
                    <td style="padding: 1rem; font-weight: bold;">General-purpose</td>
                    <td style="padding: 1rem; color: var(--text-secondary);">Implemented the hook, updated Navbar and CI workflows.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style="margin-top: 1.5rem; font-style: italic; color: var(--text-secondary); font-size: 0.9rem;">Claude routes to the right subagent automatically — no manual configuration needed for built-ins.</p>
          </div>
        </div>
      `
    },
    {
      label: 'Create your own',
      content: `
        <p style="margin-bottom: 2rem; line-height: 1.75;">Subagents are defined in Markdown files with YAML frontmatter. You can create them easily using the <code>/agents</code> command.</p>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">1) Open the subagents interface</strong>
          <p style="margin-bottom: 0.75rem;">In Claude Code, run:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">/agents</code>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">2) Choose a location</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Select <strong>Create new agent</strong>, then choose <strong>Personal</strong>. This saves the subagent to <code>~/.claude/agents/</code> so it’s available in all your projects.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">3) Generate with Claude</strong>
          <p style="margin-bottom: 1rem;">Select <strong>Generate with Claude</strong>. When prompted, describe the subagent:</p>
          <div style="padding: 1rem; background: var(--surface-color); border: 1px dashed var(--accent-primary); border-radius: 8px; font-size: 0.95rem; line-height: 1.6; font-style: italic; color: var(--text-secondary);">
            "A code improvement agent that scans files and suggests improvements for readability, performance, and best practices. It should explain each issue, show the current code, and provide an improved version."
          </div>
          <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-tertiary);">Claude generates the identifier, description, and system prompt for you.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">4) Select tools</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">For a read-only reviewer, deselect everything except <strong>Read-only tools</strong>. If you keep all tools selected, the subagent inherits all tools available to the main conversation.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">5) Select model</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Choose which model the subagent uses. For this example agent, select <strong>Sonnet</strong>, which balances capability and speed for analyzing code patterns.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">6) Choose a color</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Pick a background color for the subagent. This helps you identify which subagent is running in the UI.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">7) Configure memory</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Select <strong>User scope</strong> to give the subagent a persistent memory directory at <code>~/.claude/agent-memory/</code>. The subagent uses this to accumulate insights across conversations. Select <strong>None</strong> if you don’t want the subagent to persist learnings.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">8) Save and try it out</strong>
          <p style="margin-bottom: 1rem;">Review the configuration summary. Press <code>s</code> or <code>Enter</code> to save. The subagent is available immediately. Try it:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">Use the code-improver agent to suggest improvements in this project</code>
          <p style="font-size: 0.95rem; line-height: 1.6;">Claude delegates to your new subagent, which scans the codebase and returns improvement suggestions.</p>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">You now have a subagent you can use in any project on your machine to analyze codebases and suggest improvements.</p>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.9rem;">You can also create subagents manually as Markdown files, define them via CLI flags, or distribute them through plugins. The following sections cover all configuration options.</p>
        </div>
      `
    },
    {
      label: 'Config',
      content: `
        <div style="margin-top: 0.5rem;">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">1. Choose the subagent scope</h3>
          <p style="margin-bottom: 1.5rem; line-height: 1.6;">Subagents are Markdown files with YAML frontmatter. Store them in different locations depending on scope. When multiple subagents share the same name, the higher-priority location wins.</p>
          
          <div style="overflow-x: auto; margin-bottom: 2rem;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; border: 1px solid var(--border-color);">
              <thead>
                <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Location</th>
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Scope</th>
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Priority</th>
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Creation</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">--agents CLI flag</td>
                  <td style="padding: 0.75rem;">Current session</td>
                  <td style="padding: 0.75rem;">1 (highest)</td>
                  <td style="padding: 0.75rem;">JSON via CLI</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">.claude/agents/</td>
                  <td style="padding: 0.75rem;">Current project</td>
                  <td style="padding: 0.75rem;">2</td>
                  <td style="padding: 0.75rem;">Interactive/Manual</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">~/.claude/agents/</td>
                  <td style="padding: 0.75rem;">All projects</td>
                  <td style="padding: 0.75rem;">3</td>
                  <td style="padding: 0.75rem;">Interactive/Manual</td>
                </tr>
                <tr>
                  <td style="padding: 0.75rem; font-family: monospace;">Plugin directory</td>
                  <td style="padding: 0.75rem;">Plugin enabled</td>
                  <td style="padding: 0.75rem;">4 (lowest)</td>
                  <td style="padding: 0.75rem;">Installed plugin</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="margin-bottom: 2rem;">
            <p style="margin-bottom: 1rem; line-height: 1.6;"><strong style="color: var(--text-primary);">Project subagents (.claude/agents/)</strong> are ideal for subagents specific to a codebase. Check them into version control so your team can use and improve them collaboratively.</p>
            <p style="margin-bottom: 2.5rem; line-height: 1.6;"><strong style="color: var(--text-primary);">User subagents (~/.claude/agents/)</strong> are personal subagents available in all your projects.</p>
          </div>

          <div style="margin-bottom: 2rem;">
            <h4 style="margin-bottom: 1rem; color: var(--accent-primary);">CLI-defined subagents</h4>
            <p style="margin-bottom: 1rem; line-height: 1.6;">CLI-defined subagents are passed as JSON when launching Claude Code. They exist only for that session and aren’t saved to disk, making them useful for quick testing or automation scripts. You can define multiple subagents in a single <code>--agents</code> call:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">claude --agents '{
  "code-reviewer": {
    "description": "Expert code reviewer. Use proactively after code changes.",
    "prompt": "You are a senior code reviewer. Focus on code quality, security, and best practices.",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  },
  "debugger": {
    "description": "Debugging specialist for errors and test failures.",
    "prompt": "You are an expert debugger. Analyze errors, identify root causes, and provide fixes."
  }
}'</code>
            <p style="margin-top: 1.5rem; line-height: 1.6;">The <code>--agents</code> flag accepts JSON with the same frontmatter fields as file-based subagents: <code>description</code>, <code>prompt</code>, <code>tools</code>, <code>disallowedTools</code>, <code>model</code>, <code>permissionMode</code>, <code>mcpServers</code>, <code>hooks</code>, <code>maxTurns</code>, <code>skills</code>, <code>initialPrompt</code>, <code>memory</code>, <code>effort</code>, <code>background</code>, and <code>isolation</code>. Use <code>prompt</code> for the system prompt, equivalent to the markdown body in file-based subagents.</p>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">2. Create subagent manually</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Subagent files use YAML frontmatter for configuration, followed by the system prompt in Markdown. Subagents are loaded at session start. If you create a subagent by manually adding a file, restart your session or use <code>/agents</code> to load it immediately.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and provide
specific, actionable feedback on quality, security, and best practices.</code>

            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 1rem 0;">
              <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
                <li><strong style="color: var(--text-primary);">name:</strong> Unique identifier used to invoke the agent.</li>
                <li><strong style="color: var(--text-primary);">description:</strong> Crucial for Claude's routing; explain exactly when this agent should be used.</li>
                <li><strong style="color: var(--text-primary);">model:</strong> The specific Claude model to use for this agent.</li>
                <li><strong style="color: var(--text-primary);">tools:</strong> List of tools the agent can access (e.g., Read, Bash, Search).</li>
              </ul>
            </div>

            <div style="margin-top: 1.5rem;">
              <p style="margin-bottom: 0.75rem; color: var(--accent-primary); font-weight: bold;">Choose a model</p>
              <p style="margin-bottom: 0.75rem; line-height: 1.6;">The model field controls which AI model the subagent uses:</p>
              <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
                <li><strong style="color: var(--text-primary);">Model alias:</strong> Use one of the available aliases: <code>sonnet</code>, <code>opus</code>, or <code>haiku</code></li>
                <li><strong style="color: var(--text-primary);">Full model ID:</strong> Use a full model ID such as <code>claude-opus-4-6</code> or <code>claude-sonnet-4-6</code>.</li>
                <li><strong style="color: var(--text-primary);">inherit:</strong> Use the same model as the main conversation</li>
                <li><strong style="color: var(--text-primary);">Omitted:</strong> If not specified, defaults to <code>inherit</code>.</li>
              </ul>
            </div>

            <p style="margin-top: 1.5rem; line-height: 1.6;">The frontmatter defines the subagent’s metadata and configuration. The body becomes the system prompt that guides the subagent’s behavior. Subagents receive only this system prompt (plus basic environment details like working directory), not the full Claude Code system prompt.</p>

            <div style="margin-top: 1.5rem;">
              <h4 style="margin-bottom: 0.75rem; color: var(--accent-primary);">Plugin subagents</h4>
              <p style="line-height: 1.6; color: var(--text-secondary);">Plugin subagents come from plugins you’ve installed. They appear in <code>/agents</code> alongside your custom subagents. See the plugin components reference for details on creating plugin subagents.</p>
            </div>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">3. Control subagent capabilities</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">You can control what subagents can do through tool access, permission modes, and conditional rules.</p>
            
            <div style="margin-top: 1rem;">
              <h4 style="margin-bottom: 0.5rem; color: var(--accent-primary);">Available tools</h4>
              <p style="margin-bottom: 0.75rem; line-height: 1.6; color: var(--text-secondary);">Subagents can use any of Claude Code’s internal tools. By default, subagents inherit all tools from the main conversation, including MCP tools.</p>
              
              <p style="margin-bottom: 0.75rem; line-height: 1.6;">To restrict tools, use either the <code>tools</code> field (allowlist) or the <code>disallowedTools</code> field (denylist). This example uses <code>tools</code> to exclusively allow Read, Grep, Glob, and Bash:</p>
              <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: safe-researcher
description: Research agent with restricted capabilities
tools: Read, Grep, Glob, Bash
---</code>

              <p style="margin-top: 1.25rem; margin-bottom: 0.75rem; line-height: 1.6;">This example uses <code>disallowedTools</code> to inherit every tool from the main conversation except Write and Edit:</p>
              <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: no-writes
description: Inherits every tool except file writes
disallowedTools: Write, Edit
---</code>
              <p style="margin-top: 1rem; line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary);">If both are set, <code>disallowedTools</code> is applied first, then <code>tools</code> is resolved against the remaining pool. A tool listed in both is removed.</p>
            </div>
          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">4. Scope MCP servers to a subagent</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Use the <code>mcpServers</code> field to give a subagent access to MCP servers that aren’t available in the main conversation. Inline servers defined here are connected when the subagent starts and disconnected when it finishes. String references share the parent session’s connection.</p>
            
            <p style="margin-bottom: 1rem; line-height: 1.6;">Each entry in the list is either an inline server definition or a string referencing an MCP server already configured in your session:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: browser-tester
description: Tests features in a real browser using Playwright
mcpServers:
  # Inline definition: scoped to this subagent only
  - playwright:
      type: stdio
      command: npx
      args: ["-y", "@playwright/mcp@latest"]
  # Reference by name: reuses an already-configured server
  - github
---</code>
            <p style="margin-top: 1rem; line-height: 1.6; color: var(--text-secondary);">To keep an MCP server out of the main conversation entirely and avoid its tool descriptions consuming context there, define it inline here rather than in <code>.mcp.json</code>. The subagent gets the tools; the parent conversation does not.</p>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">5. Preload skills into subagents</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Use the <code>skills</code> field to inject skill content into a subagent’s context at startup. This gives the subagent domain knowledge without requiring it to discover and load skills during execution.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: api-developer
description: Implement API endpoints following team conventions
skills:
  - api-conventions
  - error-handling-patterns
---</code>
            <p style="margin-top: 1rem; line-height: 1.6; color: var(--text-secondary);">The full content of each skill is injected into the subagent’s context, not just made available for invocation. Subagents don’t inherit skills from the parent conversation; you must list them explicitly.</p>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">6. Enable persistent memory</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">The <code>memory</code> field gives the subagent a persistent directory that survives across conversations. Use this to build up knowledge over time, such as codebase patterns and architectural decisions.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: code-reviewer
description: Reviews code for quality and best practices
memory: user
---</code>

            <div style="overflow-x: auto; margin: 1.5rem 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; border: 1px solid var(--border-color);">
                <thead>
                  <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
                    <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Scope</th>
                    <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Location</th>
                    <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Use when...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.75rem; font-family: monospace;">user</td>
                    <td style="padding: 0.75rem; font-size: 0.8rem;">~/.claude/agent-memory/&lt;name&gt;/</td>
                    <td style="padding: 0.75rem;">Learn across all projects</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.75rem; font-family: monospace;">project</td>
                    <td style="padding: 0.75rem; font-size: 0.8rem;">.claude/agent-memory/&lt;name&gt;/</td>
                    <td style="padding: 0.75rem;">Shareable via version control</td>
                  </tr>
                  <tr>
                    <td style="padding: 0.75rem; font-family: monospace;">local</td>
                    <td style="padding: 0.75rem; font-size: 0.8rem;">.claude/agent-memory-local/&lt;name&gt;/</td>
                    <td style="padding: 0.75rem;">Project-specific, not shared</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="padding: 1rem; background: var(--surface-color); border-radius: 4px; margin-top: 1.5rem;">
              <h4 style="margin-bottom: 0.75rem; color: var(--accent-primary);">Memory mechanics</h4>
              <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.9rem; color: var(--text-secondary);">
                <li>Automated context: Includes the first 200 lines of <code>MEMORY.md</code> at startup.</li>
                <li>Self-management: <code>Read</code>, <code>Write</code>, and <code>Edit</code> tools are auto-enabled for memory management.</li>
                <li>Proactive learning: Instruct your agent to update its memory in its markdown prompt.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      label: 'Working with Subagents',
      content: `
        <p>Invoke your custom subagents either through natural language or the interactive menu:</p>
        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Natural Language</strong>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">"Use the doc-writer agent to document src/utils.py"</code>
        </div>
        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Agents Menu</strong>
          <p>Type <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-keyword);">/agents</code> to see all available built-in and custom subagents and select one to start a session.</p>
        </div>
      `
    },
    {
      label: 'Example',
      content: `
        <p style="margin-bottom: 1rem;">Here is a complete example of a <code>doc-writer</code> subagent specialized for Python documentation:</p>
        <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: doc-writer
description: Writes Sphinx/Google-style documentation for Python modules
tools: Read
---
You write clear, accurate Python documentation. Given a module path via the task:

1. Read all .py files in the module
2. Generate module-level docstring
3. Generate class and function docstrings in Google style
4. Write a usage example section

Output ready-to-paste Python docstrings.</code>
      `
    }
  ],
  interactiveType: 'custom',
};

export default claudeSubagentsConcept;
