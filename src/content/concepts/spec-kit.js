const specKitConcept = {
  id: 'spec-kit',
  title: 'Spec-Kit (GitHub)',
  description: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/github/spec-kit" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span>GitHub: github/spec-kit</span>
  </a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Spec-Kit</strong> is an open-source toolkit created by GitHub that helps developers adopt <strong>Spec-Driven Development (SDD)</strong> — a methodology where detailed specifications become the primary driver of code, rather than ad-hoc "vibe coding" from scratch.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Core idea:</strong> Instead of jumping straight into code, you write a clear specification first. Then your AI coding agent reads that spec and builds the implementation predictably — reducing hallucinations and surprises.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">What Problem Does It Solve?</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">AI agents given vague prompts produce inconsistent and unpredictable code.</li>
    <li style="margin-bottom: 0.5rem;">Teams waste time re-explaining intent to AI tools repeatedly.</li>
    <li>Specs traditionally get discarded — Spec-Kit makes them <em>executable</em>.</li>
  </ul>
</div>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">The 5-Step Spec-Kit Workflow</strong>
  <ol style="margin-left: 1.25rem; line-height: 1.8;">
    <li style="margin-bottom: 0.5rem;"><strong>Install Specify CLI</strong> — the command-line tool that powers the workflow</li>
    <li style="margin-bottom: 0.5rem;"><strong>/speckit.constitution</strong> — Define your project's guiding principles (quality standards, testing rules, UX consistency)</li>
    <li style="margin-bottom: 0.5rem;"><strong>/speckit.specify</strong> — Describe <em>what</em> you want to build in plain language (focus on outcomes, not tech)</li>
    <li style="margin-bottom: 0.5rem;"><strong>/speckit.plan</strong> — Provide the technical stack and architecture decisions</li>
    <li><strong>/speckit.tasks → /speckit.implement</strong> — Break work into tasks and execute them</li>
  </ol>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Install the CLI</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Install via uv (recommended)
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git

# Or via pipx
pipx install git+https://github.com/github/spec-kit.git

# Verify
specify version</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Start a New Project</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Create a new project
specify init MyProject

# Or initialize in an existing project with GitHub Copilot integration
specify init . --integration copilot</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Build a Photo Album App</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">/speckit.specify Build an app to organize photos into albums,
grouped by date, with drag-and-drop reordering.

/speckit.plan Use Vite with vanilla HTML/CSS/JS.
SQLite for local metadata storage.

/speckit.tasks
/speckit.implement</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Features</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">⭐ <strong>91k+ GitHub stars</strong> — highly adopted in the AI dev community</li>
    <li style="margin-bottom: 0.5rem;">🤖 Integrates with Claude Code, GitHub Copilot, Cursor, and 20+ AI tools</li>
    <li style="margin-bottom: 0.5rem;">🧩 Community extensions for docs, code review, CI/CD, and Azure DevOps</li>
    <li style="margin-bottom: 0.5rem;">📋 Community presets for rapid project bootstrapping</li>
    <li>🔧 Extensions are categorized as: <em>docs, code, process, integration, visibility</em></li>
  </ul>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use It in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>New feature?</strong> Write a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/speckit.specify</code> before touching any code.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Onboarding AI?</strong> Use the constitution to give the agent project context upfront.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Large projects?</strong> Break work down with <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/speckit.tasks</code> so the AI works one step at a time.</li>
    <li><strong>Team collaboration?</strong> Commit the spec files alongside code — they serve as living documentation.</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `,
  interactiveType: 'custom',
};

export default specKitConcept;
