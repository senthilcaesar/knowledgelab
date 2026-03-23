const claudeSubagentsConcept = {
  id: 'claude-subagents',
  title: 'Claude Subagents',
  description: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1.2rem; color: var(--accent-primary);">Tutorial 5 — Subagents (delegating heavy tasks)</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Subagents solve context pollution. They spin up separate AI instances — each with its own system prompt, tool permissions, and even a different model. They work in isolation, then hand back a summary.</p>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 1 — Create a code-reviewer subagent</strong>
  <p style="margin-bottom:0.5rem;">Create the agent manifest in your local agents directory:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;">mkdir -p ~/.claude/agents
cat > ~/.claude/agents/code-reviewer.md << 'EOF'
---
name: code-reviewer
description: Specialized agent for reviewing Python code quality, security, and performance
model: claude-sonnet-4-6
tools: Read, Bash
---
You are an expert Python code reviewer. When given a file or diff to review:

1. Check for security vulnerabilities (SQL injection, hardcoded secrets, etc.)
2. Assess performance (O(n²) loops, unnecessary DB calls, memory leaks)
3. Evaluate code clarity and maintainability
4. Check test coverage adequacy

Return a structured report with severity ratings: Critical / High / Medium / Low.
You have access to Read (to inspect files) and Bash (to run tests/linters).
EOF</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 2 — Invoke it</strong>
  <p style="margin-bottom:0.5rem;">In Claude Code, you can describe the task naturally or use the agents menu:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;"># Natural language request:
"Use the code-reviewer agent to inspect src/payments/stripe_handler.py"

# Or open the interactive agents menu:
/agents</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 3 — Create a second specialized agent for documentation</strong>
  <p style="margin-bottom:0.5rem;">Spin up a specialist for writing docstrings and examples:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;">cat > ~/.claude/agents/doc-writer.md << 'EOF'
---
name: doc-writer
description: Writes Sphinx/Google-style documentation for Python modules
tools: Read
---
You write clear, accurate Python documentation. Given a module path via the task:

1. Read all .py files in the module
2. Generate module-level docstring
3. Generate class and function docstrings in Google style
4. Write a usage example section

Output ready-to-paste Python docstrings.
EOF</code>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: rgba(0, 242, 255, 0.05); border: 1px solid rgba(0, 242, 255, 0.1); border-radius: 8px;">
  <p style="margin:0; line-height:1.6;">Now your main Claude session stays focused while these specialists do the heavy lifting in their own isolated contexts.</p>
</div>
  `,
  interactiveType: 'custom',
};

export default claudeSubagentsConcept;
