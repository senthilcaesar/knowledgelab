const claudeCodeSystemPromptsConcept = {
  id: 'claude-code-system-prompts',
  title: 'Claude Code System Prompts',
  description: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/Piebald-AI/claude-code-system-prompts" target="_blank" style="display: inline-block; background: var(--accent-primary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ GitHub: Piebald-AI/claude-code-system-prompts</a>
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
