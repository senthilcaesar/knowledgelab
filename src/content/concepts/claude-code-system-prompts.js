const claudeCodeSystemPromptsConcept = {
  id: 'claude-code-system-prompts',
  title: 'Claude Code System Prompts',
  description: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/Piebald-AI/claude-code-system-prompts" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span>GitHub: Piebald-AI/claude-code-system-prompts</span>
  </a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Claude Code System Prompts</strong> by Piebald-AI is the most comprehensive public collection of Claude Code's internal system prompts, tool descriptions, and sub-agent instructions. It captures every hidden prompt that shapes how Claude Code thinks and behaves — updated for each Claude Code release.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Why does this matter?</strong> Claude Code's behavior is governed by a layered set of system prompts you never normally see. Understanding them helps you write better CLAUDE.md files, craft more effective prompts, and debug unexpected AI behavior.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">What's Inside the Repo?</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">🔧 <strong>24 built-in tool descriptions</strong> — Exact prompts for Bash, WebFetch, Editor, Read, etc.</li>
    <li style="margin-bottom: 0.5rem;">🤖 <strong>Sub-agent prompts</strong> — Plan, Explore, and Task sub-agent system prompts</li>
    <li style="margin-bottom: 0.5rem;">📋 <strong>Utility prompts</strong> — CLAUDE.md format, compact summary, statusline, magic docs</li>
    <li style="margin-bottom: 0.5rem;">🔒 <strong>Security review prompt</strong> — How Claude evaluates security risks in bash commands</li>
    <li style="margin-bottom: 0.5rem;">🌐 <strong>WebFetch prompt</strong> — How Claude fetches and processes web content</li>
    <li>📝 <strong>Agent creation prompts</strong> — How Claude spins up sub-agents for complex tasks</li>
  </ul>
</div>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">The Layered Prompt Architecture</strong>
  <p style="margin-bottom: 0.75rem; line-height: 1.6;">Claude Code's behavior is determined by stacked prompt layers:</p>
  <ol style="margin-left: 1.25rem; line-height: 1.8;">
    <li style="margin-bottom: 0.5rem;"><strong>Base system prompt</strong> — Core identity, values, and safety guidelines</li>
    <li style="margin-bottom: 0.5rem;"><strong>Tool descriptions</strong> — Each tool (Bash, Read, Write, etc.) has its own mini-prompt</li>
    <li style="margin-bottom: 0.5rem;"><strong>CLAUDE.md</strong> — Your project-specific instructions injected at runtime</li>
    <li style="margin-bottom: 0.5rem;"><strong>Sub-agent prompts</strong> — Specialized prompts for Plan/Explore/Task agents</li>
    <li><strong>Compact/statusline prompts</strong> — Context management during long sessions</li>
  </ol>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Bash Tool Description (simplified)</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.85rem;">Executes a bash command in a persistent shell session.
- State persists between commands (working dir, env vars)
- NEVER run interactive commands that require stdin
- Avoid commands that run indefinitely
- For destructive operations, use --dry-run first
- Prefer absolute paths to avoid ambiguity</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use This Knowledge in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>Write better CLAUDE.md files:</strong> Knowing the base system prompt helps you write project instructions that work <em>with</em> Claude's defaults rather than fighting them</li>
    <li style="margin-bottom: 0.5rem;"><strong>Debug unexpected behavior:</strong> When Claude refuses a task or acts strangely, the system prompts reveal why</li>
    <li style="margin-bottom: 0.5rem;"><strong>Understand sub-agents:</strong> Knowing Plan vs. Task vs. Explore agent prompts helps you trigger the right mode for your workflow</li>
    <li style="margin-bottom: 0.5rem;"><strong>Security awareness:</strong> The security review prompt shows exactly what triggers Claude's caution on bash commands</li>
    <li><strong>Prompt engineering:</strong> Model your custom prompts and instructions on the patterns used in these official prompts</li>
  </ul>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Insight: Sub-Agent Modes</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>Plan sub-agent</strong> — Focuses on research and planning before touching any code; read-only mindset</li>
    <li style="margin-bottom: 0.5rem;"><strong>Explore sub-agent</strong> — Investigates codebase, existing patterns, dependencies before acting</li>
    <li><strong>Task sub-agent</strong> — The executor; writes code, runs commands, and implements changes</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `,
  interactiveType: 'custom',
};

export default claudeCodeSystemPromptsConcept;
