const openSpecConcept = {
  id: 'openspec',
  title: 'OpenSpec (Fission-AI)',
  description: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/Fission-AI/OpenSpec" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span>GitHub: Fission-AI/OpenSpec</span>
  </a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>OpenSpec</strong> is a lightweight, open-source framework for <strong>Spec-Driven Development (SDD)</strong> designed specifically for AI coding assistants. Unlike rigid planning tools, OpenSpec is built on a philosophy of being <em>fluid, iterative, and easy</em> — and it works with 25+ AI tools you already use.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>The Problem:</strong> AI coding assistants are powerful but unpredictable when requirements live only in chat history. OpenSpec adds a lightweight spec layer so you agree on <em>what to build before any code is written</em>.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Core Workflow: Propose → Apply → Archive</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">You: /opsx:propose add-dark-mode

AI: Created openspec/changes/add-dark-mode/
  ✓ proposal.md  — why we're doing this, what's changing
  ✓ specs/       — requirements and scenarios
  ✓ design.md    — technical approach
  ✓ tasks.md     — implementation checklist

You: /opsx:apply

AI: Implementing tasks...
  ✓ 1.1 Add theme context provider
  ✓ 1.2 Create toggle component
  ✓ 2.1 Add CSS variables
  ✓ 2.2 Wire up localStorage
  All tasks complete!

You: /opsx:archive

AI: Archived to openspec/changes/archive/2025-01-23-add-dark-mode/
  Specs updated. Ready for the next feature.</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Install OpenSpec</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Install globally
npm install -g @fission-ai/openspec@latest

# Navigate to your project and initialize
cd your-project
openspec init

# Tell your AI to start:
/opsx:propose &lt;what-you-want-to-build&gt;</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Slash Commands</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:propose</code> — Create a change folder with proposal, specs, design, and tasks</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:apply</code> — Execute all tasks in the implementation checklist</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:archive</code> — Archive the completed change, update living specs</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:new</code> — Start a new feature from scratch</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:verify</code> — Check implementation against the spec</li>
    <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:onboard</code> — Help AI understand your existing project</li>
  </ul>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">OpenSpec vs Spec-Kit Comparison</strong>
  <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
    <thead>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <th style="text-align: left; padding: 0.5rem; color: var(--accent-secondary);">Feature</th>
        <th style="text-align: left; padding: 0.5rem; color: var(--accent-secondary);">OpenSpec</th>
        <th style="text-align: left; padding: 0.5rem; color: var(--accent-secondary);">Spec-Kit (GitHub)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.5rem;">Setup</td>
        <td style="padding: 0.5rem;">npm install, no Python needed</td>
        <td style="padding: 0.5rem;">uv/pipx, Python-based</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.5rem;">Workflow</td>
        <td style="padding: 0.5rem;">Fluid, iterate anytime</td>
        <td style="padding: 0.5rem;">Structured phase gates</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.5rem;">Brownfield support</td>
        <td style="padding: 0.5rem;">✅ First-class</td>
        <td style="padding: 0.5rem;">Primarily greenfield</td>
      </tr>
      <tr>
        <td style="padding: 0.5rem;">Stars</td>
        <td style="padding: 0.5rem;">43k+</td>
        <td style="padding: 0.5rem;">91k+</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use It in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>Before any feature:</strong> Run <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:propose</code> to create structured change artifacts</li>
    <li style="margin-bottom: 0.5rem;"><strong>During coding:</strong> AI reads <code>tasks.md</code> and works through checklist items predictably</li>
    <li style="margin-bottom: 0.5rem;"><strong>After completion:</strong> <code>/opsx:archive</code> archives the change and keeps specs as living docs</li>
    <li><strong>Best models:</strong> Works best with Opus 4.5 and GPT 5.2 for planning and implementation</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `,
  interactiveType: 'custom',
};

export default openSpecConcept;
