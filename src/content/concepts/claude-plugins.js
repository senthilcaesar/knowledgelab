const claudePluginsConcept = {
  id: 'claude-plugins',
  title: 'Claude Plugins',
  description: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1.2rem; color: var(--accent-primary);">Tutorial 6 — Plugins (packaging everything to share)</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Plugins solve the "works-on-my-machine" problem. Instead of every team member manually setting up their <code style="color: var(--code-text);">.claude/</code> folders, you package everything into a plugin with a manifest. One install command, identical tooling for everyone.</p>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 1 — Create the plugin directory structure</strong>
  <p style="margin-bottom:0.5rem;">Initialize a clean workspace for your shared tools:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;">mkdir -p my-python-toolkit/.claude-plugin
mkdir -p my-python-toolkit/skills/py-review
mkdir -p my-python-toolkit/skills/py-docs
mkdir -p my-python-toolkit/agents</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 2 — Create the manifest</strong>
  <p style="margin-bottom:0.5rem;">Defines the plugin identity for Claude's installation system:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;">cat > my-python-toolkit/.claude-plugin/plugin.json << 'EOF'
{
  "name": "my-python-toolkit",
  "description": "Python dev toolkit: code review, doc writing, and auto-lint hooks",
  "version": "1.0.0",
  "author": {
    "name": "Your Name"
  }
}
EOF</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 3 — Add a skill</strong>
  <p style="margin-bottom:0.5rem;">Reuse your existing skills from previous sessions:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">cp ~/.claude/skills/py-review/SKILL.md my-python-toolkit/skills/py-review/SKILL.md</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 4 — Add a hook</strong>
  <p style="margin-bottom:0.5rem;">Include automation logic (like auto-linting on file write):</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;">cat > my-python-toolkit/hooks.json << 'EOF'
{
  "PostToolUse": [
    {
      "matcher": "Write",
      "hooks": [
        {
          "type": "command",
          "command": "if [[ \\"$CLAUDE_TOOL_OUTPUT_FILE\\" == *.py ]]; then black \\"$CLAUDE_TOOL_OUTPUT_FILE\\"; fi"
        }
      ]
    }
  ]
}
EOF</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 5 — Test and Install</strong>
  <p style="margin-bottom:0.5rem;">Verify locally before sharing with the team:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;"># Test without installing:
claude --plugin-dir ./my-python-toolkit

# Install permanently:
claude plugin add --path ./my-python-toolkit</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 6 — Share via GitHub</strong>
  <p style="margin-bottom:0.5rem;">Push your toolkit to a repository and let others install it in one command:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;">cd my-python-toolkit && git init && git add . && git commit -m "Initial plugin"
git remote add origin https://github.com/you/my-python-toolkit
git push -u origin main

# Teammates install with:
/plugin install github.com/you/my-python-toolkit</code>
</div>
  `,
  interactiveType: 'custom',
};

export default claudePluginsConcept;
