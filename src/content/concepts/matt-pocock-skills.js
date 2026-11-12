const mattPocockSkillsConcept = {
  id: 'matt-pocock-skills',
  title: 'Agent Skills (Matt Pocock)',
  description: `
<div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
  <a href="https://github.com/mattpocock/skills" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span>GitHub: mattpocock/skills</span>
  </a>
  <a href="https://www.aihero.dev/ai-engineer-workshop-2026~dwnll" target="_blank" class="github-link-btn" style="border-color: var(--accent-secondary); background: linear-gradient(135deg, rgba(140, 170, 238, 0.15) 0%, rgba(202, 158, 230, 0.15) 100%);">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="transform: none;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/></svg>
    <span>AI Engineer Workshop</span>
  </a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Agent Skills</strong> by Matt Pocock is a curated collection of real-world <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.claude</code> skills — markdown-based instruction files that extend what Claude Code can do. These are <em>production skills straight from his own <code>.claude</code> directory</em>, built for professional engineers who want to supercharge their AI-assisted workflow.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Who is Matt Pocock?</strong> He's a TypeScript educator and creator of Total TypeScript. His skills represent real patterns used in production — not tutorials, but battle-tested AI workflows.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">What Are Claude Skills?</strong>
  <p style="margin-bottom: 0.75rem; line-height: 1.6;">Skills are folders, each holding a <code>SKILL.md</code>, placed in your <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills/</code> directory. When Claude Code reads them, it can follow the specialized instructions they contain — turning complex workflows into repeatable, single-command actions.</p>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">Each skill is a directory with a <code>SKILL.md</code> whose YAML frontmatter holds a <code>description</code> (plus optional <code>when_to_use</code>); <code>name</code> is optional and defaults to the folder name</li>
    <li style="margin-bottom: 0.5rem;">Claude reads the skill and follows its step-by-step instructions</li>
    <li>Skills can include helper scripts, templates, and example files</li>
  </ul>
</div>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Example Skills in the Collection</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>grill-me</strong> — Get relentlessly interviewed about a plan or design until every branch is resolved</li>
    <li style="margin-bottom: 0.5rem;"><strong>grill-with-docs</strong> — A grilling session that also builds your domain glossary and ADRs</li>
    <li style="margin-bottom: 0.5rem;"><strong>to-spec</strong> — Turn the current conversation into a spec and publish it to your issue tracker</li>
    <li style="margin-bottom: 0.5rem;"><strong>improve-codebase-architecture</strong> — Survey a codebase for deepening opportunities</li>
    <li style="margin-bottom: 0.5rem;"><strong>diagnosing-bugs</strong> — Disciplined diagnosis loop for hard bugs and performance regressions</li>
    <li style="margin-bottom: 0.5rem;"><strong>retro</strong> — Suggest improvements to the agent's environment after a session</li>
    <li><strong>tdd</strong> — Test-driven development with a red-green-refactor loop</li>
  </ul>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Install the Skills</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Claude Code: install as a plugin (updates itself)
claude plugin install mattpocock-skills@claude-plugins-official

# Or copy editable files into your project
npx skills@latest add mattpocock/skills

# Or copy one skill folder by hand (skills are nested by category)
git clone https://github.com/mattpocock/skills.git
cp -r skills/skills/engineering/tdd ~/.claude/skills/

# Then, once per repo, inside Claude Code
/setup-matt-pocock-skills</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Anatomy of a SKILL.md</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">---
name: grill-me
description: A relentless interview to sharpen a plan or design.
disable-model-invocation: true
---

Call the Skill tool with "grilling".</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use It in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>Align before coding:</strong> Run <em>/grill-me</em> or <em>/grill-with-docs</em> before every change</li>
    <li style="margin-bottom: 0.5rem;"><strong>Plan the work:</strong> Use <em>/to-spec</em> then <em>/to-tickets</em> to turn a discussion into tracer-bullet tickets</li>
    <li style="margin-bottom: 0.5rem;"><strong>TDD workflow:</strong> Use the <em>tdd</em> skill to enforce red-green-refactor discipline</li>
    <li style="margin-bottom: 0.5rem;"><strong>Session retros:</strong> Run the <em>retro</em> skill to get suggested improvements to your agent's environment</li>
    <li><strong>Create your own:</strong> Model your custom skills on these examples for your unique team workflows</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `,
  interactiveType: 'custom',
};

export default mattPocockSkillsConcept;
