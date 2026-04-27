const claudeTaskMasterConcept = {
  id: 'claude-task-master',
  title: 'Claude Task Master',
  description: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/eyaltoledano/claude-task-master" target="_blank" style="display: inline-block; background: var(--accent-primary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ GitHub: eyaltoledano/claude-task-master</a>
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
