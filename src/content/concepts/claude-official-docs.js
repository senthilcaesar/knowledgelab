const claudeOfficialDocsConcept = {
  id: 'claude-official-docs',
  title: 'Claude Code Docs',
  category: 'Tutorial',
  tags: ['claude', 'docs', 'tutorials', 'best-practices', 'prompt-caching', 'memory', 'context-window'],
  tabs: [
    {
      label: 'Overview',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Official Claude Code Guides & Documentation</strong>

<p style="margin-bottom:1.25rem; line-height:1.75;">Explore the essential official documentation topics for Claude Code. These guides cover best practices for AI pair programming, prompt caching strategies to optimize performance and reduce costs, memory configurations for persistent project context, and context window management.</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">

  <div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s ease, border-color 0.2s ease;">
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
        <strong style="font-size: 1.05rem; color: var(--text-primary);">Best Practices</strong>
        <span class="tag" style="font-size: 0.75rem;">Guide</span>
      </div>
      <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
        Learn official recommendations for effective prompting, iterative development loops, context pruning, and workflow automation.
      </p>
    </div>
    <a href="https://code.claude.com/docs/en/best-practices" target="_blank" class="github-link-btn" style="align-self: flex-start;">
      <span>Read Best Practices</span>
      <svg viewBox="0 0 24 24" style="width: 14px; height: 14px;"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" fill="currentColor"/></svg>
    </a>
  </div>

  <div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s ease, border-color 0.2s ease;">
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
        <strong style="font-size: 1.05rem; color: var(--text-primary);">Prompt Caching</strong>
        <span class="tag" style="font-size: 0.75rem;">Performance</span>
      </div>
      <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
        Understand how prompt caching works in Claude Code to dramatically lower API latency and reduce token costs across sessions.
      </p>
    </div>
    <a href="https://code.claude.com/docs/en/prompt-caching" target="_blank" class="github-link-btn" style="align-self: flex-start;">
      <span>Read Prompt Caching</span>
      <svg viewBox="0 0 24 24" style="width: 14px; height: 14px;"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" fill="currentColor"/></svg>
    </a>
  </div>

  <div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s ease, border-color 0.2s ease;">
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
        <strong style="font-size: 1.05rem; color: var(--text-primary);">Memory</strong>
        <span class="tag" style="font-size: 0.75rem;">Context</span>
      </div>
      <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
        Master persistent memory in Claude Code, including CLAUDE.md files, project rules, auto-memory storage, and topic sub-directories.
      </p>
    </div>
    <a href="https://code.claude.com/docs/en/memory" target="_blank" class="github-link-btn" style="align-self: flex-start;">
      <span>Read Memory Docs</span>
      <svg viewBox="0 0 24 24" style="width: 14px; height: 14px;"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" fill="currentColor"/></svg>
    </a>
  </div>

  <div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s ease, border-color 0.2s ease;">
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
        <strong style="font-size: 1.05rem; color: var(--text-primary);">Context Window</strong>
        <span class="tag" style="font-size: 0.75rem;">Architecture</span>
      </div>
      <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
        Learn context window limits, compaction routines (/compact), token budgets, subagent isolation, and multi-turn efficiency.
      </p>
    </div>
    <a href="https://code.claude.com/docs/en/context-window" target="_blank" class="github-link-btn" style="align-self: flex-start;">
      <span>Read Context Window</span>
      <svg viewBox="0 0 24 24" style="width: 14px; height: 14px;"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" fill="currentColor"/></svg>
    </a>
  </div>

</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Best Practices <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Best Practices',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Best Practices for Claude Code</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The official Best Practices guide provides battle-tested patterns for optimizing your workflow with Claude Code:</p>

<ul style="margin-left: 1.25rem; margin-bottom: 1.5rem; line-height: 1.7; color: var(--text-primary);">
  <li style="margin-bottom: 0.5rem;"><strong>Give clear, specific instructions:</strong> Break large features into smaller, verifiable tasks rather than open-ended requests.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Provide context early:</strong> Keep project conventions in <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: monospace;">CLAUDE.md</code> so Claude starts every session fully informed.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Use Test-Driven Loops:</strong> Ask Claude to run unit tests or lint commands before declaring a task complete.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Manage session context:</strong> Run <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: monospace;">/compact</code> periodically when working through long sessions to prevent token bloat.</li>
</ul>

<div style="margin: 1.5rem 0;">
  <a href="https://code.claude.com/docs/en/best-practices" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="transform: none;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/></svg>
    <span>Open Official Best Practices Guide (code.claude.com)</span>
  </a>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Prompt Caching <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Prompt Caching',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Prompt Caching in Claude Code</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Prompt caching allows Claude Code to reuse prompt prefix states (such as system prompts, tool schemas, and conversation history), drastically reducing response times and cost:</p>

<ul style="margin-left: 1.25rem; margin-bottom: 1.5rem; line-height: 1.7; color: var(--text-primary);">
  <li style="margin-bottom: 0.5rem;"><strong>Latency reduction:</strong> Cached prefixes accelerate generation by skipping repeated token processing.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Cost efficiency:</strong> Reading cached tokens costs significantly less than processing raw input tokens.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Automatic handling:</strong> Claude Code handles caching automatically behind the scenes for conversation turns and tools.</li>
</ul>

<div style="margin: 1.5rem 0;">
  <a href="https://code.claude.com/docs/en/prompt-caching" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="transform: none;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/></svg>
    <span>Open Official Prompt Caching Documentation (code.claude.com)</span>
  </a>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Best Practices
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Memory <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Memory',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Memory System in Claude Code</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Claude Code uses persistent memory mechanisms to maintain context across sessions and developers:</p>

<ul style="margin-left: 1.25rem; margin-bottom: 1.5rem; line-height: 1.7; color: var(--text-primary);">
  <li style="margin-bottom: 0.5rem;"><strong>CLAUDE.md:</strong> Project-level instructions committed to git, shared across the whole engineering team.</li>
  <li style="margin-bottom: 0.5rem;"><strong>CLAUDE.local.md:</strong> Personal developer notes gitignored for local machine configuration.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Auto-Memory:</strong> Automatic memory storage located in <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: monospace;">~/.claude/projects/&lt;project&gt;/memory/</code>.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Memory Shortcuts:</strong> Use <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: monospace;">/memory</code> to view and edit memory topics directly.</li>
</ul>

<div style="margin: 1.5rem 0;">
  <a href="https://code.claude.com/docs/en/memory" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="transform: none;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/></svg>
    <span>Open Official Memory Documentation (code.claude.com)</span>
  </a>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Prompt Caching
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Context Window <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Context Window',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Context Window Management</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Understanding how Claude Code manages token capacity and context window limits keeps long-running agent workflows fast and responsive:</p>

<ul style="margin-left: 1.25rem; margin-bottom: 1.5rem; line-height: 1.7; color: var(--text-primary);">
  <li style="margin-bottom: 0.5rem;"><strong>Context Compaction:</strong> When context grows large, run <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: monospace;">/compact</code> to generate a dense summary and free up token space.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Subagent Isolation:</strong> Subagents run in isolated context windows, preventing tool outputs from filling up your main session context.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Token Economy:</strong> Large file reads and bash output are pruned automatically when context thresholds are reached.</li>
</ul>

<div style="margin: 1.5rem 0;">
  <a href="https://code.claude.com/docs/en/context-window" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="transform: none;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/></svg>
    <span>Open Official Context Window Documentation (code.claude.com)</span>
  </a>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Memory
  </a>
</div>
`,
    },
  ],
  interactiveType: 'custom',
};

export default claudeOfficialDocsConcept;
