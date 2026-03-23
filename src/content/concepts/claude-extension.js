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
.cc-table { width:100%;border-collapse:collapse;font-size:15px;font-family:'Outfit', sans-serif;line-height:1.5;table-layout:fixed; margin-top: 1.5rem; letter-spacing:0.01em; }
.cc-table th { padding:12px 10px;text-align:left;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;font-size:12px;color:var(--text-secondary);border-bottom:1px solid var(--border-color);background:rgba(0,0,0,0.2) }
.cc-table td { padding:24px 10px;border-bottom:1px solid var(--border-color);vertical-align:top;color:var(--text-primary); }
.cc-table td p { margin: 0; padding: 0; height: 26px; line-height: 26px; }
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
  height: 26px;
  line-height: 23px;
  box-sizing: border-box;
}
.cc-table tr:last-child td { border-bottom:none }
.cc-table tr:hover td { background:var(--surface-hover) }
.badge { display:inline-block;padding:0 10px;border-radius:6px;font-size:12.5px;font-weight:700;white-space:nowrap; border: 1px solid var(--border-color); letter-spacing: 0.02em; height: 26px; line-height: 24px; vertical-align: top; margin: 0; box-sizing: border-box; }
.doc-links { display:grid; gap: 4px; }
.doc-links a { font-size:13.5px;color:var(--accent-primary);text-decoration:none;white-space:nowrap; transition: 0.2s ease; }
.doc-links a:hover { text-decoration:underline; opacity: 0.8; }
.doc-label { font-size:12px;color:var(--text-secondary);display:block;margin:0;font-weight:700;letter-spacing:0.02em;padding:0;text-transform:uppercase; height: 26px; line-height: 26px; vertical-align: top; }

:root.light-mode .cc-table th { background: rgba(0,0,0,0.03); }
:root.light-mode .badge { border-color: rgba(67, 52, 34, 0.2); }
</style>

<table class="cc-table">
<thead>
<tr>
<th style="width:12%">Feature</th>
<th style="width:23%">One-liner</th>
<th style="width:16%">What it stores</th>
<th style="width:14%">How to invoke</th>
<th style="width:21%">Best used for</th>
<th style="width:14%">Official docs</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="badge">Skills</span></td>
<td><p>Teaches Claude how to handle specific tasks or workflows</p></td>
<td><p>Instructions, scripts, reference files in a folder</p></td>
<td><p><code>/skill-name</code></p></td>
<td><p>Codifying repeatable workflows: code review, deployments, doc generation</p></td>
<td class="doc-links">
  <span class="doc-label">Guide</span>
  <a href="https://code.claude.com/docs/en/skills" target="_blank">Skills →</a>
</td>
</tr>
<tr>
<td><span class="badge">Commands</span></td>
<td><p>Prompt shortcuts</p></td>
<td><p>Single markdown file with prompt template</p></td>
<td><p><code>/command-name</code></p></td>
<td><p>Quick prompt templates: /fix-bug, /explain-code, /summarize</p></td>
<td class="doc-links">
  <span class="doc-label">Guide</span>
  <a href="https://docs.anthropic.com/en/docs/claude-code/slash-commands" target="_blank">Slash commands →</a>
</td>
</tr>
<tr>
<td><span class="badge">MCP</span></td>
<td><p>USB-C for AI — connects Claude to real data</p></td>
<td><p>External tool definitions (21st.dev, Supadata, Stitch..)</p></td>
<td><p>Claude picks tools automatically</p></td>
<td><p>Querying live databases, creating PRs, reading Slack, anything with real external state</p></td>
<td class="doc-links">
  <span class="doc-label">Guide</span>
  <a href="https://docs.anthropic.com/en/docs/claude-code/mcp" target="_blank">MCP overview →</a>
</td>
</tr>
<tr>
<td><span class="badge">Hooks</span></td>
<td><p>Scripts that fire automatically at lifecycle events</p></td>
<td><p>Shell commands tied to events (PostToolUse etc.)</p></td>
<td><p>Never manually — fires automatically on event</p></td>
<td><p>Auto-linting, blocking dangerous commands, desktop notifications, test gates</p></td>
<td class="doc-links">
  <span class="doc-label">Guide</span>
  <a href="https://docs.anthropic.com/en/docs/claude-code/hooks-guide" target="_blank">Hooks guide →</a>
</td>
</tr>
<tr>
<td><span class="badge">Plugins</span></td>
<td><p>Installable bundles containing all of the above (Skills, Commands, MCPs, Hooks)</p></td>
<td><p>plugin.json manifest + skills/ agents/ hooks/ MCPs</p></td>
<td><p>All components auto-activate on install</p></td>
<td><p>Sharing team setups, open-source toolkits, org-wide standards</p></td>
<td class="doc-links">
  <span class="doc-label">Discover</span>
  <a href="https://docs.anthropic.com/en/docs/claude-code/plugins" target="_blank">Find &amp; install plugins →</a>
  <span class="doc-label">Build</span>
  <a href="https://docs.anthropic.com/en/docs/claude-code/create-plugins" target="_blank">Create plugins →</a>
</td>
</tr>
<tr>
<td><span class="badge">Subagents</span></td>
<td><p>Isolated mini-agents with their own context window</p></td>
<td><p>Agent system prompt + tool/model config in YAML</p></td>
<td><p>Natural language or <code>/agents</code> menu</p></td>
<td><p>Delegating heavy subtasks without polluting main session context</p></td>
<td class="doc-links">
  <span class="doc-label">Guide</span>
  <a href="https://docs.anthropic.com/en/docs/claude-code/sub-agents" target="_blank">Subagents →</a>
</td>
</tr>
<tr>
<td><span class="badge">Agent teams</span></td>
<td><p>Multiple Claude sessions that collaborate and cross-check</p></td>
<td><p>Defined through prompts; teams.json for fine-tuning</p></td>
<td><p>Prompt-driven; keyboard shortcuts to manage</p></td>
<td><p>Large parallel work: security + perf + tests reviewing the same module</p></td>
<td class="doc-links">
  <span class="doc-label">Guide</span>
  <a href="https://docs.anthropic.com/en/docs/claude-code/agent-teams" target="_blank">Agent teams →</a>
</td>
</tr>
</tbody>
</table>
<div style="height: 20vh;"></div>
      `,
    },
    {
      label: 'Decision Flow',
      content: `
<div style="width: 100%; height: calc(100vh - 160px); min-height: 700px; overflow: hidden; background: var(--surface-color); border-radius: 12px; border: 1px solid var(--border-color);">
  <iframe src="./flowchart.html" style="width: 100%; height: 100%; border: none;" title="Decision Flowchart"></iframe>
</div>
      `,
    }
  ],
  interactiveType: 'custom'
};

export default claudeExtensionConcept;
