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
/* Feature comparison as small multiples: one card per feature, same fields in the same place */
.fx-intro { margin: 0 0 1.5rem; color: var(--text-secondary); }
.fx-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 24rem), 1fr));
  gap: 0 1rem;
  margin: 0;
}
/* Subgrid: cards side by side share row heights, so Stores / Invoke / Best for line up across */
.fx-card {
  display: grid;
  grid-row: span 6;
  grid-template-rows: subgrid;
  row-gap: 0;
  margin-bottom: 1rem;
  border: 1px solid var(--ink-line);
  border-radius: 10px;
  background: var(--surface-solid);
  padding: 1.15rem 1.25rem 1rem;
  min-width: 0;
}
.fx-card.is-legacy { border-style: dashed; }
.fx-card.is-legacy .fx-name { color: var(--text-secondary); }
.fx-head { display: flex; align-items: baseline; align-self: start; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap; }
.fx-card .fx-name { margin: 0 !important; font-size: 1.15rem !important; font-weight: 700 !important; line-height: 1.3; color: var(--text-primary); }
.fx-status {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
  padding: 0.1rem 0.5rem; border-radius: 999px; white-space: nowrap;
  border: 1px solid var(--ink-line); color: var(--text-secondary);
}
.fx-status.is-exp { color: var(--warn); background: var(--warn-bg); border-color: transparent; }
.fx-status.is-exp::before { content: "⚑ "; }
.fx-status.is-legacy::before { content: "↪ "; }
.fx-lede { margin: 0.4rem 0 0.9rem !important; color: var(--text-secondary); line-height: 1.55 !important; }
.fx-fields { display: contents; }
.fx-fields > div {
  display: grid; grid-template-columns: 5.25rem 1fr; gap: 0.75rem;
  padding: 0.65rem 0; border-top: 1px solid var(--ink-line);
}
.fx-fields dt {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--text-secondary); padding-top: 0.2rem;
}
.fx-fields dd { margin: 0; font-size: 0.95em; line-height: 1.6; color: var(--text-primary); overflow-wrap: anywhere; }
/* Calm inline code: no syntax colouring inside the comparison cards */
.fx-card code {
  background: var(--surface-hover) !important;
  color: var(--text-primary) !important;
  padding: 0.05rem 0.3rem !important;
  border-radius: 4px;
  font-size: 0.86em !important;
  white-space: normal;
}
.fx-card code * { color: inherit !important; }
.fx-docs {
  display: flex; flex-wrap: wrap; gap: 0.35rem 1rem;
  padding-top: 0.75rem; border-top: 1px solid var(--ink-line);
  font-size: 0.85rem;
}
.fx-docs a { color: var(--accent-primary); text-decoration: none; font-weight: 500; }
.fx-docs a:hover { text-decoration: underline; }
.fx-docs a span { color: var(--text-secondary); font-weight: 400; }
@media (max-width: 640px) {
  .fx-card { padding: 1rem; }
  .fx-fields > div { grid-template-columns: 1fr; gap: 0.2rem; }
}
</style>

<p class="fx-intro">Eight ways to extend Claude Code. Every card answers the same three questions in the same order (where it lives, how it runs, and when to reach for it), so you can compare features by reading across cards.</p>

<div class="fx-grid">

<article class="fx-card">
  <div class="fx-head"><h3 class="fx-name">Skills</h3></div>
  <p class="fx-lede">Teaches Claude how to handle specific tasks or workflows.</p>
  <dl class="fx-fields">
    <div><dt>Stores</dt><dd>A folder holding <code>SKILL.md</code> plus any scripts and reference files, in <code>.claude/skills/</code> or <code>~/.claude/skills/</code></dd></div>
    <div><dt>Invoke</dt><dd><code>/skill-name</code>, or Claude loads it on its own when the task matches the <code>description</code>. Set <code>disable-model-invocation: true</code> to make it manual-only</dd></div>
    <div><dt>Best for</dt><dd>Codifying repeatable workflows: code review, deployments, doc generation. The body loads only when used, so long reference material costs nothing until needed</dd></div>
  </dl>
  <div class="fx-docs"><a href="https://code.claude.com/docs/en/skills" target="_blank"><span>Guide ·</span> Skills →</a></div>
</article>

<article class="fx-card is-legacy">
  <div class="fx-head"><h3 class="fx-name">Commands</h3><span class="fx-status is-legacy">Merged into Skills</span></div>
  <p class="fx-lede">Prompt shortcuts, now the flat-file form of a Skill.</p>
  <dl class="fx-fields">
    <div><dt>Stores</dt><dd>Single markdown file with a prompt template, in <code>.claude/commands/</code></dd></div>
    <div><dt>Invoke</dt><dd><code>/command-name</code></dd></div>
    <div><dt>Best for</dt><dd>Quick one-file prompt templates. Existing files keep working, but new work belongs in <code>.claude/skills/&lt;name&gt;/SKILL.md</code>, which can carry scripts and reference files alongside the prompt</dd></div>
  </dl>
  <div class="fx-docs"><a href="https://code.claude.com/docs/en/skills" target="_blank"><span>Guide ·</span> Skills →</a></div>
</article>

<article class="fx-card">
  <div class="fx-head"><h3 class="fx-name">MCP</h3></div>
  <p class="fx-lede">USB-C for AI: connects Claude to real data.</p>
  <dl class="fx-fields">
    <div><dt>Stores</dt><dd>External server definitions in <code>.mcp.json</code> at the <strong>project root</strong>, or <code>~/.claude.json</code> for user scope, never in <code>settings.json</code></dd></div>
    <div><dt>Invoke</dt><dd>Claude picks tools automatically. Add with <code>claude mcp add</code>; check what connected with <code>/mcp</code></dd></div>
    <div><dt>Best for</dt><dd>Querying live databases, creating PRs, reading Slack, anything with real external state</dd></div>
  </dl>
  <div class="fx-docs"><a href="https://code.claude.com/docs/en/mcp" target="_blank"><span>Guide ·</span> MCP overview →</a></div>
</article>

<article class="fx-card">
  <div class="fx-head"><h3 class="fx-name">Hooks</h3></div>
  <p class="fx-lede">Handlers that fire automatically at lifecycle events.</p>
  <dl class="fx-fields">
    <div><dt>Stores</dt><dd>Handlers tied to ~30 events, in <code>settings.json</code> or a plugin's <code>hooks/hooks.json</code>. A handler can be a shell <code>command</code>, an <code>http</code> endpoint, an <code>mcp_tool</code> call, a model <code>prompt</code>, or an <code>agent</code></dd></div>
    <div><dt>Invoke</dt><dd>Never manually; fires automatically on its event. Browse what's configured with <code>/hooks</code> (read-only)</dd></div>
    <div><dt>Best for</dt><dd>Auto-linting, blocking dangerous commands, desktop notifications, test gates. The <code>prompt</code> and <code>agent</code> types cover rules that need judgment rather than a regex</dd></div>
  </dl>
  <div class="fx-docs">
    <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank"><span>Guide ·</span> Hooks guide →</a>
    <a href="https://code.claude.com/docs/en/hooks" target="_blank"><span>Reference ·</span> Hooks reference →</a>
  </div>
</article>

<article class="fx-card">
  <div class="fx-head"><h3 class="fx-name">Plugins</h3></div>
  <p class="fx-lede">Installable bundles containing all of the above (Skills, Commands, MCPs, Hooks).</p>
  <dl class="fx-fields">
    <div><dt>Stores</dt><dd>Optional <code>plugin.json</code> manifest plus <code>skills/</code> <code>agents/</code> <code>hooks/</code> <code>workflows/</code>, <code>.mcp.json</code>, <code>.lsp.json</code>, <code>monitors/</code> and <code>bin/</code>, all at the plugin root, never inside <code>.claude-plugin/</code></dd></div>
    <div><dt>Invoke</dt><dd>Components activate on install, but run <code>/reload-plugins</code> to pick them up mid-session. Skills are namespaced <code>/plugin-name:skill</code></dd></div>
    <div><dt>Best for</dt><dd>Sharing team setups, open-source toolkits, org-wide standards</dd></div>
  </dl>
  <div class="fx-docs">
    <a href="https://code.claude.com/docs/en/discover-plugins" target="_blank"><span>Discover ·</span> Find &amp; install →</a>
    <a href="https://code.claude.com/docs/en/plugins" target="_blank"><span>Build ·</span> Create plugins →</a>
    <a href="https://code.claude.com/docs/en/plugin-marketplaces" target="_blank"><span>Distribute ·</span> Marketplaces →</a>
  </div>
</article>

<article class="fx-card">
  <div class="fx-head"><h3 class="fx-name">Subagents</h3></div>
  <p class="fx-lede">Isolated mini-agents with their own context window.</p>
  <dl class="fx-fields">
    <div><dt>Stores</dt><dd>System prompt plus tool/model config in YAML frontmatter, in <code>.claude/agents/</code> or <code>~/.claude/agents/</code></dd></div>
    <div><dt>Invoke</dt><dd>Natural language, <code>@agent-&lt;name&gt;</code> to guarantee it, or <code>claude --agent &lt;name&gt;</code> for the whole session. <code>/agents</code> no longer opens a creation menu, so ask Claude to write the file instead</dd></div>
    <div><dt>Best for</dt><dd>Delegating heavy subtasks without polluting the main session's context. Built-ins: Explore, Plan, general-purpose</dd></div>
  </dl>
  <div class="fx-docs"><a href="https://code.claude.com/docs/en/sub-agents" target="_blank"><span>Guide ·</span> Subagents →</a></div>
</article>

<article class="fx-card">
  <div class="fx-head"><h3 class="fx-name">Agent teams</h3><span class="fx-status is-exp">Experimental</span></div>
  <p class="fx-lede">Multiple full Claude sessions that collaborate, message each other, and share a task list.</p>
  <dl class="fx-fields">
    <div><dt>Stores</dt><dd>Nothing you author. Runtime state is generated at <code>~/.claude/teams/{team}/config.json</code>; don't hand-edit it, and a project <code>teams.json</code> is <strong>not</strong> recognised as config</dd></div>
    <div><dt>Invoke</dt><dd>Off by default: set <code>CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1</code> first, then ask in natural language. Manage from the agent panel (↑/↓, Enter, Esc)</dd></div>
    <div><dt>Best for</dt><dd>Large parallel work where workers must talk to each other: security + perf + tests reviewing the same module, or competing debugging hypotheses</dd></div>
  </dl>
  <div class="fx-docs"><a href="https://code.claude.com/docs/en/agent-teams" target="_blank"><span>Guide ·</span> Agent teams →</a></div>
</article>

<article class="fx-card">
  <div class="fx-head"><h3 class="fx-name">Workflows</h3></div>
  <p class="fx-lede">A JavaScript script that orchestrates dozens of subagents, with the plan in code instead of in Claude's head.</p>
  <dl class="fx-fields">
    <div><dt>Stores</dt><dd>A script with a <code>meta</code> block and <code>agent()</code> / <code>pipeline()</code> calls, saved to <code>.claude/workflows/</code> or <code>~/.claude/workflows/</code></dd></div>
    <div><dt>Invoke</dt><dd>Ask for one (<code>use a workflow…</code> or the <code>ultracode</code> keyword), then save the run as <code>/&lt;name&gt;</code>. <code>/deep-research</code> ships built in; watch runs with <code>/workflows</code></dd></div>
    <div><dt>Best for</dt><dd>Work too big for one context: repo-wide audits, 500-file migrations, research cross-checked across sources. Intermediate results stay in script variables, so only the final answer reaches your context</dd></div>
  </dl>
  <div class="fx-docs"><a href="https://code.claude.com/docs/en/workflows" target="_blank"><span>Guide ·</span> Dynamic workflows →</a></div>
</article>

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
