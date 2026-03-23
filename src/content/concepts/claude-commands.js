const claudeCommandsConcept = {
  id: 'claude-commands',
  title: 'Claude Commands',
  description: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1.2rem; color: var(--accent-primary);">Tutorial 4 — Slash Commands (quick prompt shortcuts)</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Claude commands <code style="color: var(--code-text);">.claude/commands/</code> are the simplest entry point — a single markdown file becomes a slash command.</p>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 1 — Create a project-level command</strong>
  <p style="margin-bottom:0.5rem;">Run this in your terminal to create a command:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;">mkdir -p .claude/commands
cat > .claude/commands/explain.md << 'EOF'
Explain the following code in simple English. Assume the reader knows Python basics 
but is new to this codebase. Show a one-paragraph summary, then a bullet list of 
what each major section does.

Code to explain:
$ARGUMENTS
EOF</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 2 — Use it</strong>
  <p style="margin-bottom:0.5rem;">Typing the slash followed by the command name in Claude:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">/explain src/auth/jwt_handler.py</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 3 — Share it with your team</strong>
  <p style="line-height:1.75;">Share it with your team by committing <code style="color: var(--code-text);">.claude/commands/</code> to your repository. Everyone on the team gets the same slash commands automatically.</p>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: rgba(0, 242, 255, 0.05); border: 1px solid rgba(0, 242, 255, 0.1); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1rem; color: var(--accent-primary);">Practical Python examples to create:</strong>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;"># .claude/commands/docstring.md  — generate Google-style docstrings
# .claude/commands/test.md       — generate pytest tests for a function
# .claude/commands/changelog.md  — write a changelog entry from recent commits
# .claude/commands/type-hints.md — add type hints to a Python file</code>
</div>
  `,
  interactiveType: 'custom',
};

export default claudeCommandsConcept;
