const claudeExtensionConcept = {
  id: "claude-extension",
  title: "Claude Extension",
  category: "",
  tags: [],
  tabs: [
    {
      label: "Features",
      content: `
<style>
.cc-table-wrap { width:100%; margin-top:1.5rem; border-radius:12px; overflow: visible; }
.cc-table { width:100%; border-collapse:collapse; font-size:0.85rem; font-family:'Outfit', sans-serif; line-height:1.5; table-layout:auto; letter-spacing:0.01em; }
.cc-table th { padding:12px 12px;text-align:left;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;font-size:0.75rem;color:var(--text-secondary);border-bottom:1px solid var(--border-color);background:rgba(0,0,0,0.2) }
.cc-table td { padding:24px 12px;border-bottom:1px solid var(--border-color);vertical-align:top;color:var(--text-primary); }
.cc-table td p { margin: 0; padding: 0; line-height: 1.5; }
.cc-table td code { 
  vertical-align: top; 
  display: inline-block;
  padding: 0.15rem 0.4rem; 
  background: var(--syntax-bg); 
  border: 1px solid var(--border-color); 
  border-radius: 4px; 
  font-family: 'JetBrains Mono', monospace; 
  font-size: 0.85rem; 
  color: var(--accent-primary); 
  white-space: pre-wrap; 
  word-break: break-word; 
  overflow-wrap: break-word;
  line-height: 1.5;
  box-sizing: border-box;
}
.cc-table tr:last-child td { border-bottom:none }
.cc-table tr:hover td { background:var(--surface-hover) }
.badge { display:inline-block;padding:0 10px;border-radius:6px;font-size:0.8rem;font-weight:700;white-space:nowrap; border: 1px solid var(--border-color); letter-spacing: 0.02em; line-height: 24px; vertical-align: top; margin: 0; box-sizing: border-box; }
.badge-exp, .badge-legacy { font-size:0.65rem; padding:0 7px; line-height:20px; margin-top:4px; text-transform:uppercase; font-weight:700; }
.badge-exp { color:#f5c842; border-color:rgba(245,200,66,0.45); background:rgba(245,200,66,0.08); }
.badge-legacy { color:var(--text-secondary); background:rgba(255,255,255,0.04); }
.doc-links { display:grid; gap: 4px; }
.doc-links a { font-size:0.85rem;color:var(--accent-primary);text-decoration:none;white-space:nowrap; transition: 0.2s ease; }
.doc-links a:hover { text-decoration:underline; opacity: 0.8; }
.doc-label { font-size:0.75rem;color:var(--text-secondary);display:block;margin:0;font-weight:700;letter-spacing:0.02em;padding:0;text-transform:uppercase; line-height: 26px; vertical-align: top; }

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
<td data-label="What it stores"><p>A folder holding <code>SKILL.md</code> plus any scripts and reference files, in <code>.claude/skills/</code> or <code>~/.claude/skills/</code></p></td>
<td data-label="How to invoke"><p><code>/skill-name</code>, or Claude loads it on its own when the task matches the <code>description</code>. Set <code>disable-model-invocation: true</code> to make it manual-only</p></td>
<td data-label="Best used for"><p>Codifying repeatable workflows: code review, deployments, doc generation. The body loads only when used, so long reference material costs nothing until needed</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://code.claude.com/docs/en/skills" target="_blank">Skills →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Commands</span> <span class="badge badge-legacy">Merged into Skills</span></td>
<td data-label="One-liner"><p>Prompt shortcuts — now the flat-file form of a Skill</p></td>
<td data-label="What it stores"><p>Single markdown file with a prompt template, in <code>.claude/commands/</code></p></td>
<td data-label="How to invoke"><p><code>/command-name</code></p></td>
<td data-label="Best used for"><p>Quick one-file prompt templates. Existing files keep working, but new work belongs in <code>.claude/skills/&lt;name&gt;/SKILL.md</code>, which can carry scripts and reference files alongside the prompt</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://code.claude.com/docs/en/skills" target="_blank">Skills →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">MCP</span></td>
<td data-label="One-liner"><p>USB-C for AI — connects Claude to real data</p></td>
<td data-label="What it stores"><p>External server definitions in <code>.mcp.json</code> at the <strong>project root</strong>, or <code>~/.claude.json</code> for user scope — never in <code>settings.json</code></p></td>
<td data-label="How to invoke"><p>Claude picks tools automatically. Add with <code>claude mcp add</code>; check what connected with <code>/mcp</code></p></td>
<td data-label="Best used for"><p>Querying live databases, creating PRs, reading Slack, anything with real external state</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://code.claude.com/docs/en/mcp" target="_blank">MCP overview →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Hooks</span></td>
<td data-label="One-liner"><p>Handlers that fire automatically at lifecycle events</p></td>
<td data-label="What it stores"><p>Handlers tied to ~30 events, in <code>settings.json</code> or a plugin's <code>hooks/hooks.json</code>. A handler can be a shell <code>command</code>, an <code>http</code> endpoint, an <code>mcp_tool</code> call, a model <code>prompt</code>, or an <code>agent</code></p></td>
<td data-label="How to invoke"><p>Never manually — fires automatically on event. Browse what's configured with <code>/hooks</code> (read-only)</p></td>
<td data-label="Best used for"><p>Auto-linting, blocking dangerous commands, desktop notifications, test gates. The <code>prompt</code> and <code>agent</code> types cover rules that need judgment rather than a regex</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank">Hooks guide →</a>
    <span class="doc-label">Reference</span>
    <a href="https://code.claude.com/docs/en/hooks" target="_blank">Hooks reference →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Plugins</span></td>
<td data-label="One-liner"><p>Installable bundles containing all of the above (Skills, Commands, MCPs, Hooks)</p></td>
<td data-label="What it stores"><p>Optional <code>plugin.json</code> manifest plus <code>skills/</code> <code>agents/</code> <code>hooks/</code> <code>workflows/</code>, <code>.mcp.json</code>, <code>.lsp.json</code>, <code>monitors/</code> and <code>bin/</code> — all at the plugin root, never inside <code>.claude-plugin/</code></p></td>
<td data-label="How to invoke"><p>Components activate on install, but run <code>/reload-plugins</code> to pick them up mid-session. Skills are namespaced <code>/plugin-name:skill</code></p></td>
<td data-label="Best used for"><p>Sharing team setups, open-source toolkits, org-wide standards</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Discover</span>
    <a href="https://code.claude.com/docs/en/discover-plugins" target="_blank">Find &amp; install plugins →</a>
    <span class="doc-label">Build</span>
    <a href="https://code.claude.com/docs/en/plugins" target="_blank">Create plugins →</a>
    <span class="doc-label">Distribute</span>
    <a href="https://code.claude.com/docs/en/plugin-marketplaces" target="_blank">Marketplaces →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Subagents</span></td>
<td data-label="One-liner"><p>Isolated mini-agents with their own context window</p></td>
<td data-label="What it stores"><p>System prompt plus tool/model config in YAML frontmatter, in <code>.claude/agents/</code> or <code>~/.claude/agents/</code></p></td>
<td data-label="How to invoke"><p>Natural language, <code>@agent-&lt;name&gt;</code> to guarantee it, or <code>claude --agent &lt;name&gt;</code> for the whole session. Note <code>/agents</code> no longer opens a creation menu — ask Claude to write the file instead</p></td>
<td data-label="Best used for"><p>Delegating heavy subtasks without polluting main session context. Built-ins: Explore, Plan, general-purpose</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://code.claude.com/docs/en/sub-agents" target="_blank">Subagents →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Agent teams</span> <span class="badge badge-exp">Experimental</span></td>
<td data-label="One-liner"><p>Multiple full Claude sessions that collaborate, message each other, and share a task list</p></td>
<td data-label="What it stores"><p>Nothing you author. Runtime state is generated at <code>~/.claude/teams/{team}/config.json</code> — don't hand-edit it, and note a project <code>teams.json</code> is <strong>not</strong> recognised as config</p></td>
<td data-label="How to invoke"><p>Off by default — set <code>CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1</code> first, then ask in natural language. Manage from the agent panel (↑/↓, Enter, Esc)</p></td>
<td data-label="Best used for"><p>Large parallel work where workers must talk to each other: security + perf + tests reviewing the same module, or competing debugging hypotheses</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://code.claude.com/docs/en/agent-teams" target="_blank">Agent teams →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Workflows</span></td>
<td data-label="One-liner"><p>A JavaScript script that orchestrates dozens of subagents, with the plan in code instead of in Claude's head</p></td>
<td data-label="What it stores"><p>A script with a <code>meta</code> block and <code>agent()</code> / <code>pipeline()</code> calls, saved to <code>.claude/workflows/</code> or <code>~/.claude/workflows/</code></p></td>
<td data-label="How to invoke"><p>Ask for one (<code>use a workflow…</code> or the <code>ultracode</code> keyword), then save the run as <code>/&lt;name&gt;</code>. <code>/deep-research</code> ships built in; watch runs with <code>/workflows</code></p></td>
<td data-label="Best used for"><p>Work too big for one context: repo-wide audits, 500-file migrations, research cross-checked across sources. Intermediate results stay in script variables, so only the final answer reaches your context</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://code.claude.com/docs/en/workflows" target="_blank">Dynamic workflows →</a>
  </div>
</td>
</tr>
</tbody>
</table>
</div>
      `,
    },
    {
      label: "Decision Flow",
      content: `
<div class="flowchart-embed" style="width: 100%; height: calc(100vh - 160px); min-height: 700px; overflow: hidden; background: var(--syntax-bg); border-radius: 12px; border: 1px solid var(--border-color);">
  <iframe src="/knowledgelab/flowchart.html" style="width: 100%; height: 100%; border: none;" title="Decision Flowchart" allow="fullscreen" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
</div>
      `,
    },
  ],
  interactiveType: "custom",
};

export default claudeExtensionConcept;
