const claudeTaskMasterConcept = {
  id: 'claude-task-master',
  title: 'Claude Task Master',
  description: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/eyaltoledano/claude-task-master" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span>GitHub: eyaltoledano/claude-task-master</span>
  </a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Claude Task Master</strong> is an AI-powered task management system you can drop into AI coding environments like <strong>Cursor, Lovable, Windsurf, Roo, and Claude Code</strong>. It brings structured project planning directly into your coding workflow — no external Jira or Notion needed.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Core idea:</strong> Parse a PRD, auto-generate a prioritized task list, and let your AI work through it systematically — tracking status, handling dependencies, and adapting when requirements change.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">What Can It Do?</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">📄 Parse a PRD and auto-generate a structured task list</li>
    <li style="margin-bottom: 0.5rem;">🔀 Break large tasks into sub-tasks automatically</li>
    <li style="margin-bottom: 0.5rem;">📊 Track task status: pending, in-progress, done, blocked</li>
    <li style="margin-bottom: 0.5rem;">🔄 Handle mid-project pivots by updating tasks and dependencies</li>
    <li>💬 Works via AI chat commands inside your IDE</li>
  </ul>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Install</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">npm install -g task-master-ai
cd your-project && task-master init</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Typical Workflow</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;"># Parse PRD to generate tasks
task-master parse-prd scripts/prd.txt

# See what to work on next
task-master next

# Expand a complex task into sub-tasks
task-master expand --id=5 --research

# Mark a task done
task-master set-status --id=3 --status=done

# Update tasks when requirements change
task-master update --from=6 --prompt="Use PostgreSQL instead of SQLite"</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Commands</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">task-master next</code> — AI picks the best next task</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">task-master show &lt;id&gt;</code> — Full details with context</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">task-master analyze-complexity</code> — Score task complexity</li>
    <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">task-master validate-dependencies</code> — Fix circular deps</li>
  </ul>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use It in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>New project:</strong> Write a PRD → parse it → Task Master builds your backlog</li>
    <li style="margin-bottom: 0.5rem;"><strong>Daily coding:</strong> Ask AI "What's next?" — it handles context automatically</li>
    <li style="margin-bottom: 0.5rem;"><strong>Pivots:</strong> <code>update</code> command propagates changes across dependent tasks</li>
    <li><strong>Hard tasks:</strong> <code>expand --research</code> breaks them down with AI research</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `,
  interactiveType: 'custom',
};

export default claudeTaskMasterConcept;
