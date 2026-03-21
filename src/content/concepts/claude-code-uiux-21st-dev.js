const claudeCodeUiux21stDevConcept = {
  id: 'claude-code-uiux-21st-dev',
  title: 'Claude UI Stack',
  category: 'Tutorial',
  tags: ['Claude Code', 'UI/UX', '21st.dev'],
  tabs: [
    {
      label: 'Overview',
      content: `
<p style="margin-bottom:1rem; line-height:1.75;">This setup helps you create <strong>production-quality websites</strong> by combining three powerful ingredients:</p>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.35rem;"><strong>Claude Code</strong> for structure, implementation, and execution</li>
  <li style="margin-bottom: 0.35rem;"><strong><a href="https://www.uupm.cc/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">UI/UX Pro Max</a></strong> skill for stronger taste and visual direction</li>
  <li style="margin-bottom: 0.35rem;"><strong><a href="https://21st.dev/magic" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">21st.dev</a></strong> for polished, production-ready components</li>
</ul>

<p style="margin-bottom:1rem; line-height:1.75;">Claude Code <em>may</em> pick some of these up implicitly, but explicitly adding them usually leads to much stronger results.</p>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Install Claude Code <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Install Claude Code',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[First: Install Claude Code]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Begin by installing Claude Code from the official quickstart page:</p>

<p style="margin: 0.25rem 0 0.75rem; line-height:1.75;">
  <a href="https://code.claude.com/docs/en/quickstart" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://code.claude.com/docs/en/quickstart</a>
</p>

<ol style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.85;">
  <li style="margin-bottom: 0.35rem;">Open the quickstart page and copy the install command shown for your operating system.</li>
  <li style="margin-bottom: 0.35rem;">Paste that install command into your regular terminal and press Enter.</li>
  <li style="margin-bottom: 0.35rem;">Wait until the installation finishes completely.</li>
  <li style="margin-bottom: 0.35rem;">Once installation is complete, launch Claude Code from your terminal.</li>
</ol>

<p style="margin-bottom:0.5rem; line-height:1.75;">After installation, use these commands:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">claude

# Optional: verify that the CLI is installed correctly
claude --help</code>

<p style="margin-bottom:0.75rem; line-height:1.75;">If Claude Code opens successfully, you are ready to move on to the next step.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Install UI/UX + 21st.dev <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Install UI/UX + 21st.dev',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Next: Add UI/UX Pro Max and 21st.dev]</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>1. Install the <a href="https://www.uupm.cc/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">UI/UX Pro</a> skill:</strong></p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill</code>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>2. Connect 21st.dev MCP:</strong></p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Before you run the command below, get your 21st.dev Magic API key here:</p>
<p style="margin: 0 0 1rem; line-height:1.75;"><a href="https://21st.dev/magic" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://21st.dev/magic</a></p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">claude mcp add magic --scope user --env API_KEY="34********84c1624bd4be49e2f309ffd5fb4e" -- npx -y @21st-dev/magic@latest</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">To confirm both are installed, run these checks:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">claude plugin list
claude mcp list</code>
<p style="margin-bottom:0.75rem; line-height:1.75;">You should see <code style="padding: 0.15rem 0.35rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">ui-ux-pro-max</code> in the plugin list and <code style="padding: 0.15rem 0.35rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">magic</code> in the MCP list.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">Claude Code may detect and use these automatically, but explicitly installing and referencing them tends to produce much stronger results.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Install Claude Code
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Prompt Template <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Prompt Template',
      content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Prompt Template]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Use this prompt when generating your site:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">Build a modern, high-end website for [DESCRIBE YOUR PRODUCT].

Requirements:
- Use UI/UX Pro Max design system for layout, spacing, and structure
- Use 21st.dev components and assets for UI elements
- Prioritize clean, production-level design (not generic AI styling)
- Include subtle animations/interactions where appropriate
- Ensure mobile responsive

Pages:
- Landing page
- [Other pages if needed]

Style:
- [Minimal / futuristic / SaaS / etc.]

Make it feel like a top-tier product (Stripe / Linear / Apple-level quality).</code>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Notes</p>
  <ul style="margin: 0 0 0 1.25rem; color: var(--text-secondary); line-height: 1.75;">
    <li style="margin-bottom: 0.35rem;">Claude Code may use these tools automatically.</li>
    <li style="margin-bottom: 0.35rem;"><strong>Explicitly mentioning them usually gives significantly better results.</strong></li>
    <li style="margin-bottom: 0;">The real unlock is combining generation, taste, and real components.</li>
  </ul>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Install UI/UX + 21st.dev
  </a>
</div>
`,
    },
  ],
  interactiveType: 'custom',
};

export default claudeCodeUiux21stDevConcept;
