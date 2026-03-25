const claudeExtensionConcept = {
  id: 'claude-extension',
  title: 'Claude Extension',
  category: '',
  tags: [],
  tabs: [
    {
      label: 'Features',
      content: `
<style>
.cc-table-wrap { width:100%; margin-top:1.5rem; border-radius:12px; overflow: visible; }
.cc-table { width:100%; border-collapse:collapse; font-size:15px; font-family:'Outfit', sans-serif; line-height:1.5; table-layout:auto; letter-spacing:0.01em; }
.cc-table th { padding:12px 12px;text-align:left;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;font-size:12px;color:var(--text-secondary);border-bottom:1px solid var(--border-color);background:rgba(0,0,0,0.2) }
.cc-table td { padding:24px 12px;border-bottom:1px solid var(--border-color);vertical-align:top;color:var(--text-primary); }
.cc-table td p { margin: 0; padding: 0; line-height: 1.5; }
.cc-table td code { 
  vertical-align: top; 
  display: inline-block;
  padding: 0.15rem 0.4rem; 
  background: var(--surface-color); 
  border: 1px solid var(--border-color); 
  border-radius: 4px; 
  font-family: 'Inter', monospace; 
  font-size: 12.5px; 
  color: var(--code-text); 
  white-space: pre-wrap; 
  word-break: break-word; 
  overflow-wrap: break-word;
  line-height: 1.5;
  box-sizing: border-box;
}
.cc-table tr:last-child td { border-bottom:none }
.cc-table tr:hover td { background:var(--surface-hover) }
.badge { display:inline-block;padding:0 10px;border-radius:6px;font-size:12.5px;font-weight:700;white-space:nowrap; border: 1px solid var(--border-color); letter-spacing: 0.02em; line-height: 24px; vertical-align: top; margin: 0; box-sizing: border-box; }
.doc-links { display:grid; gap: 4px; }
.doc-links a { font-size:13.5px;color:var(--accent-primary);text-decoration:none;white-space:nowrap; transition: 0.2s ease; }
.doc-links a:hover { text-decoration:underline; opacity: 0.8; }
.doc-label { font-size:12px;color:var(--text-secondary);display:block;margin:0;font-weight:700;letter-spacing:0.02em;padding:0;text-transform:uppercase; line-height: 26px; vertical-align: top; }

@media (max-width: 1024px) {
  .cc-table-wrap {
    overflow: visible;
  }

  .cc-table,
  .cc-table thead,
  .cc-table tbody,
  .cc-table tr,
  .cc-table th,
  .cc-table td {
    display: block;
  }

  .cc-table thead {
    display: none;
  }

  .cc-table tr {
    margin-bottom: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.12);
  }

  .cc-table td {
    padding: 0.9rem 1rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .cc-table td:last-child {
    border-bottom: none;
  }

  .cc-table td::before {
    content: attr(data-label);
    display: block;
    margin-bottom: 0.45rem;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--text-secondary);
  }

  .cc-table td p,
  .doc-label,
  .badge,
  .cc-table td code {
    height: auto;
    line-height: 1.5;
  }

  .doc-links {
    gap: 0.3rem;
  }

  .doc-links a {
    white-space: normal;
  }
}

:root.light-mode .cc-table th { background: rgba(0,0,0,0.03); }
:root.light-mode .badge { border-color: rgba(67, 52, 34, 0.2); }
</style>

<div class="cc-table-wrap">
<table class="cc-table">
<thead>
<tr>
<th>Feature</th>
<th>One-liner</th>
<th>What it stores</th>
<th>How to invoke</th>
<th>Best used for</th>
<th>Official docs</th>
</tr>
</thead>
<tbody>
<tr>
<td data-label="Feature"><span class="badge">Skills</span></td>
<td data-label="One-liner"><p>Teaches Claude how to handle specific tasks or workflows</p></td>
<td data-label="What it stores"><p>Instructions, scripts, reference files in a folder</p></td>
<td data-label="How to invoke"><p><code>/skill-name</code></p></td>
<td data-label="Best used for"><p>Codifying repeatable workflows: code review, deployments, doc generation</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://code.claude.com/docs/en/skills" target="_blank">Skills →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Commands</span></td>
<td data-label="One-liner"><p>Prompt shortcuts</p></td>
<td data-label="What it stores"><p>Single markdown file with prompt template</p></td>
<td data-label="How to invoke"><p><code>/command-name</code></p></td>
<td data-label="Best used for"><p>Quick prompt templates: /fix-bug, /explain-code, /summarize</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/slash-commands" target="_blank">Slash commands →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">MCP</span></td>
<td data-label="One-liner"><p>USB-C for AI — connects Claude to real data</p></td>
<td data-label="What it stores"><p>External tool definitions (21st.dev, Supadata, Stitch..)</p></td>
<td data-label="How to invoke"><p>Claude picks tools automatically</p></td>
<td data-label="Best used for"><p>Querying live databases, creating PRs, reading Slack, anything with real external state</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/mcp" target="_blank">MCP overview →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Hooks</span></td>
<td data-label="One-liner"><p>Scripts that fire automatically at lifecycle events</p></td>
<td data-label="What it stores"><p>Shell commands tied to events (PostToolUse etc.)</p></td>
<td data-label="How to invoke"><p>Never manually — fires automatically on event</p></td>
<td data-label="Best used for"><p>Auto-linting, blocking dangerous commands, desktop notifications, test gates</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/hooks-guide" target="_blank">Hooks guide →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Plugins</span></td>
<td data-label="One-liner"><p>Installable bundles containing all of the above (Skills, Commands, MCPs, Hooks)</p></td>
<td data-label="What it stores"><p>plugin.json manifest + skills/ agents/ hooks/ MCPs</p></td>
<td data-label="How to invoke"><p>All components auto-activate on install</p></td>
<td data-label="Best used for"><p>Sharing team setups, open-source toolkits, org-wide standards</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Discover</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/plugins" target="_blank">Find &amp; install plugins →</a>
    <span class="doc-label">Build</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/create-plugins" target="_blank">Create plugins →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Subagents</span></td>
<td data-label="One-liner"><p>Isolated mini-agents with their own context window</p></td>
<td data-label="What it stores"><p>Agent system prompt + tool/model config in YAML</p></td>
<td data-label="How to invoke"><p>Natural language or <code>/agents</code> menu</p></td>
<td data-label="Best used for"><p>Delegating heavy subtasks without polluting main session context</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/sub-agents" target="_blank">Subagents →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Agent teams</span></td>
<td data-label="One-liner"><p>Multiple Claude sessions that collaborate and cross-check</p></td>
<td data-label="What it stores"><p>Defined through prompts; teams.json for fine-tuning</p></td>
<td data-label="How to invoke"><p>Prompt-driven; keyboard shortcuts to manage</p></td>
<td data-label="Best used for"><p>Large parallel work: security + perf + tests reviewing the same module</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/agent-teams" target="_blank">Agent teams →</a>
  </div>
</td>
</tr>
</tbody>
</table>
</div>
      `,
    },
    {
      label: 'Decision Flow',
      content: `
<div style="width: 100%; height: calc(100vh - 160px); min-height: 700px; overflow: hidden; background: var(--surface-color); border-radius: 12px; border: 1px solid var(--border-color);">
  <iframe src="/knowledgelab/flowchart.html" style="width: 100%; height: 100%; border: none;" title="Decision Flowchart"></iframe>
</div>
      `,
    }
  ],
  interactiveType: 'custom'
};

export default claudeExtensionConcept;
