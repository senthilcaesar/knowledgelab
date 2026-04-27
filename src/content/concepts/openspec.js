const openSpecConcept = {
  id: 'openspec',
  title: 'OpenSpec (Fission-AI)',
  description: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/Fission-AI/OpenSpec" target="_blank" style="display: inline-block; background: var(--accent-primary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ GitHub: Fission-AI/OpenSpec</a>
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
