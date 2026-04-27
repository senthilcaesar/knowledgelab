const mattPocockSkillsConcept = {
  id: 'matt-pocock-skills',
  title: 'Agent Skills (Matt Pocock)',
  description: `
<div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
  <a href="https://github.com/mattpocock/skills" target="_blank" style="display: inline-block; background: var(--accent-primary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ GitHub: mattpocock/skills</a>
  <a href="https://www.aihero.dev/ai-engineer-workshop-2026~dwnll" target="_blank" style="display: inline-block; background: var(--accent-secondary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ AI Engineer Workshop</a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Agent Skills</strong> by Matt Pocock is a curated collection of real-world <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.claude</code> skills — markdown-based instruction files that extend what Claude Code can do. These are <em>production skills straight from his own <code>.claude</code> directory</em>, built for professional engineers who want to supercharge their AI-assisted workflow.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Who is Matt Pocock?</strong> He's a TypeScript educator and creator of Total TypeScript. His skills represent real patterns used in production — not tutorials, but battle-tested AI workflows.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">What Are Claude Skills?</strong>
  <p style="margin-bottom: 0.75rem; line-height: 1.6;">Skills are Markdown files placed in your <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills/</code> directory. When Claude Code reads them, it can follow the specialized instructions they contain — turning complex workflows into repeatable, single-command actions.</p>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">Each skill has a <code>SKILL.md</code> with a YAML frontmatter (name, trigger, description)</li>
    <li style="margin-bottom: 0.5rem;">Claude reads the skill and follows its step-by-step instructions</li>
    <li>Skills can include helper scripts, templates, and example files</li>
  </ul>
</div>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Example Skills in the Collection</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>git-push</strong> — Stage all changes, write a commit message, and push to GitHub in one shot</li>
    <li style="margin-bottom: 0.5rem;"><strong>review</strong> — Pre-landing PR review for SQL safety, LLM trust boundary violations, and structural issues</li>
    <li style="margin-bottom: 0.5rem;"><strong>qa</strong> — Systematically QA test a web app, find bugs, fix them, and commit each fix atomically</li>
    <li style="margin-bottom: 0.5rem;"><strong>retro</strong> — Weekly engineering retrospective analyzing commit history, work patterns, and code quality</li>
    <li style="margin-bottom: 0.5rem;"><strong>ship</strong> — Full ship workflow: merge base branch, run tests, bump version, update changelog, create PR</li>
    <li><strong>tdd</strong> — Test-driven development with a red-green-refactor loop</li>
  </ul>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Install a Skill</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Clone the repo
git clone https://github.com/mattpocock/skills.git

# Copy a skill to your global .claude directory
cp -r skills/git-push ~/.claude/skills/

# Or copy all skills at once
cp -r skills/* ~/.claude/skills/</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Anatomy of a SKILL.md</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">---
name: git-push
description: |
  Stage all changes, commit with a message,
  and push to GitHub. Use when user wants to
  commit and push code.
---

## Instructions

1. Run \`git status\` to see what changed
2. Stage all changes with \`git add -A\`
3. Write a concise commit message
4. Push to the current branch</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use It in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>Automate repetitive tasks:</strong> "Push this code" → Claude runs git-push skill automatically</li>
    <li style="margin-bottom: 0.5rem;"><strong>QA before shipping:</strong> Ask Claude to run the <em>qa</em> skill on your web app</li>
    <li style="margin-bottom: 0.5rem;"><strong>TDD workflow:</strong> Use the <em>tdd</em> skill to enforce red-green-refactor discipline</li>
    <li style="margin-bottom: 0.5rem;"><strong>Weekly retros:</strong> Run the <em>retro</em> skill to get a summary of your week's commits and patterns</li>
    <li><strong>Create your own:</strong> Model your custom skills on these examples for your unique team workflows</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `,
  interactiveType: 'custom',
};

export default mattPocockSkillsConcept;
