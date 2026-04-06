const claudeDesignerStackConcept = {
  id: 'claude-designer-stack',
  title: 'Claude Designer Stack',
  category: 'Tutorial',
  tags: ['Claude Code', 'Design', 'Skills'],
  tabs: [
    {
      label: 'Overview',
      content: `
<h1 style="margin-bottom: 1rem; color: var(--text-primary);">Claude Code Designer Skills</h1>

<p style="margin-bottom: 0.5rem; line-height: 1.75;">This post covers six design-focused skills from Anthropic's official <a href="https://github.com/anthropics/skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">skills repository</a>. For each skill, we will cover:</p>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li><strong>What it does</strong>: Its core purpose and capabilities</li>
  <li><strong>How to install it</strong>: Setup instructions via CLI or marketplace</li>
  <li><strong>How to call it</strong>: Auto-triggering keywords and manual commands</li>
  <li><strong>Real example prompts</strong>: Practical ways to use it in your workflow</li>
</ul>

<p style="margin-bottom: 1rem; line-height: 1.75;">At the end, we'll see how all six can work together to design a complete site from scratch.</p>
`,
    },
    {
      label: 'What Are Skills?',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">What Are Claude Code Skills?</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;">A skill is simply a folder containing a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">SKILL.md</code> file with YAML frontmatter and markdown instructions. Claude reads it dynamically when the task matches the skill's description. Every skill lives under <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">~/.claude/skills/</code> (global) or <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">./.claude/skills/</code> (project-local).</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Key anatomy:</strong></p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">my-skill/
├── SKILL.md        ← required: metadata + instructions
├── scripts/        ← optional: helper code
├── references/     ← optional: extra docs
└── assets/         ← optional: templates, fonts, icons</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">To get a detailed understanding about Claude skills, check out my skills tutorial: <a href="https://senthilcaesar.github.io/knowledgelab/#claude-skills-tutorial" target="_blank" rel="noopener noreferrer" style="color: var(--accent-primary); text-decoration: underline;">Claude Skills Tutorial</a>.</p>
`,
    },
    {
      label: 'Installing',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">Installing the Skills</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;">Five of the skills can be installed using the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">npx skills</code> CLI, pointing at Anthropic's public GitHub repository. Run these commands in your terminal:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">npx skills add https://github.com/anthropics/skills --skill frontend-design -a claude-code
npx skills add https://github.com/anthropics/skills --skill theme-factory -a claude-code
npx skills add https://github.com/anthropics/skills --skill brand-guidelines -a claude-code
npx skills add https://github.com/anthropics/skills --skill canvas-design -a claude-code
npx skills add https://github.com/anthropics/skills --skill skill-creator -a claude-code</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">You can also install them all at once in the Claude Code terminal using the plugin marketplace:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">/plugin marketplace add anthropics/skills</pre>

`,
    },
    {
      label: '1. frontend-design',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">1. frontend-design</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>What it does:</strong> Generates distinctive, production-ready frontend interfaces — components, landing pages, dashboards, React apps, HTML/CSS layouts — with a strong, intentional aesthetic point of view. It actively avoids the generic "AI slop" look (no purple gradients on white, no Inter/Roboto defaults, no cookie-cutter layouts).</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>How to call it:</strong> Just describe what you want to build. The skill triggers automatically on words like "build," "create a component," "landing page," "dashboard," "React app," "HTML layout," or "beautify this UI."</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Example prompts:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Build me a dark-themed SaaS landing page for a developer tool called Axiom"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Create a React dashboard component for real-time analytics with a brutalist aesthetic"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Design a product card component that feels luxury/high-end"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Make a personal portfolio page — go wild with the aesthetic, I want it memorable"</pre>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Explicit invocation</strong> — call the skill by name for guaranteed triggering:</p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Use frontend-design to build me a landing page for Axiom"</pre>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Slash command with no arguments</strong> — run <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">/frontend-design</code> on its own in Claude Code and Claude will prompt you for the brief interactively:</p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">/frontend-design
→ "What would you like me to build? Tell me about the component,
   page, or application — including purpose, audience, and constraints."
→ You describe your project
→ Claude commits to an aesthetic direction and outputs the code</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">This is the closest thing to a guided walkthrough — useful if you're not sure how to frame your request. Once you answer, Claude makes all remaining design decisions itself (aesthetic direction, fonts, layout, animations) and generates the code without further questions.</p>
`,
    },
    {
      label: '2. theme-factory',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">2. theme-factory</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>What it does:</strong> A toolkit for applying professional font and color themes to any artifact — slide decks, docs, reports, HTML landing pages, and more. It ships with <strong>10 pre-set curated themes</strong> (including "Ocean Depths," a professional maritime palette, and others), each with carefully selected color palettes and font pairings. It can also generate a brand-new custom theme on the fly from a brief description.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>The 10 built-in themes include:</strong> Ocean Depths, plus nine others covering professional, bold, minimalist, warm, and other aesthetic directions — all visible in the bundled <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">theme-showcase.pdf</code>.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>Custom theme generation:</strong> If none of the presets fit, describe what you want in plain language and the skill generates a new theme with matching fonts and colors, shows it for review, then applies it.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>How to call it:</strong> Triggers on words like "apply a theme," "style this," "make this look consistent," "theme my slides/doc/report," or "change the colors and fonts."</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Example prompts:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Apply a theme to this presentation — show me the options first"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Style my HTML landing page with the Ocean Depths theme"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Generate a custom dark theme for my report — think editorial magazine"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Apply consistent styling across all my slides using theme-factory"</pre>
`,
    },
    {
      label: '3. brand-guidelines',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">3. brand-guidelines</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>What it does:</strong> Applies Anthropic's official brand colors, typography, and visual identity to any artifact. Use it when you need your output to carry Anthropic's look-and-feel — whether that's a doc, presentation, HTML page, or any design asset. It's a post-processing / styling layer that wraps around whatever you've already created.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;">Keywords that signal this skill: branding, corporate identity, visual identity, brand colors, typography, Anthropic brand, visual formatting, company design standards.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>How to call it:</strong> Trigger with phrases like "apply Anthropic's brand," "make this match our brand guidelines," "use the official brand colors," "style this with our visual identity," or "brand this doc."</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Example prompts:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Apply Anthropic's brand guidelines to this slide deck"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Restyle this HTML report using our official brand colors and typography"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Make this landing page match Anthropic's visual identity"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Post-process this artifact to align with brand guidelines"</pre>

<div style="padding: 1rem 1.1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 10px; margin: 1rem 0;">
  <p style="margin: 0; line-height: 1.75; color: var(--text-secondary);"><strong>Tip:</strong> This skill is most powerful as a finishing step — build first with <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code> or <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">theme-factory</code>, then apply <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">brand-guidelines</code> as a final pass.</p>
</div>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom: 0.5rem; line-height: 1.75; font-size: 1.25rem;"><strong>[brand-guideline skill example]</strong></p>
<p style="margin-bottom: 1rem; line-height: 1.75;">Your web app can look like it was built by Anthropic — in one prompt.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;">There's an official brand-guidelines skill that knows every Anthropic design token — the coral accent, the warm neutrals, the typography, the spacing system. All of it.</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Step 1 — Install the brand skill</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">npx skills add anthropics/skills --skill brand-guidelines -a claude-code</pre>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Step 2 — Open Claude Code in your project terminal</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">claude</pre>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Step 3 — Run this single prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">Restyle this web app's landing page to match Anthropic's visual identity. Use Anthropic's official brand guidelines colors, typography, and spacing. Preserve all existing functionality and layout structure — only change the visual styling.</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">Claude reads the skill file, pulls the defined hex values and spacing rules — then rewrites your CSS.</p>
`,
    },
    {
      label: '4. canvas-design',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">4. canvas-design</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>What it does:</strong> Creates beautiful, high-fidelity visual art as <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.png</code> and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.pdf</code> files using a two-step design philosophy process. It's for static, visually-rich pieces: posters, art prints, infographics, identity materials, and any output that's 90% visual and 10% text.</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>The two-step workflow:</strong></p>

<p style="margin-bottom: 0.75rem; line-height: 1.75;"><strong>Step 1 — Design Philosophy Creation (.md file):</strong><br>
Claude doesn't jump straight to designing. It first authors a <em>visual manifesto</em> — a named aesthetic movement (e.g., "Brutalist Joy," "Chromatic Silence") with a 4–6 paragraph philosophy articulating how space, color, form, scale, and composition should behave. This becomes the creative DNA of the piece.</p>

<p style="margin-bottom: 0.75rem; line-height: 1.75;"><strong>Step 2 — Canvas Creation (.pdf or .png):</strong><br>
Using that philosophy as a guide, Claude creates the actual artwork — museum-quality, with repeating patterns, perfect shapes, sparse clinical typography, and expert craftsmanship. The SKILL.md explicitly instructs: <em>"Create work that looks like it took countless hours. Make it appear as though someone at the absolute top of their field labored over every detail."</em></p>

<p style="margin-bottom: 1rem; line-height: 1.75;">A built-in self-critique pass ("The user ALREADY said it isn't perfect enough — refine without adding more elements") ensures the final output is pristine.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>How to call it:</strong> Trigger with "create a poster," "design a piece of art," "make a visual," "I want something that looks like it could hang in a museum," or "design a static graphic."</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Example prompts:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Create a poster for a jazz festival — go for something abstract and art-deco"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Design a visual art piece inspired by the concept of machine learning"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Make a multi-page coffee table book spread about the ocean"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Create a minimalist brand identity poster — I want it to feel Bauhaus"</pre>
`,
    },
    {
      label: '5. skill-creator',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">5. skill-creator</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>What it does:</strong> A meta-skill that guides you through creating, testing, iterating on, and packaging your own Claude Code skills. It covers the full lifecycle: intent capture → SKILL.md drafting → test case creation → qualitative review → quantitative benchmarking → iteration → description optimization → packaging as a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.skill</code> file.</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>The core loop:</strong></p>
<ol style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li>Understand what you want the skill to do</li>
  <li>Draft the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">SKILL.md</code></li>
  <li>Run the skill on test prompts</li>
  <li>Review outputs (with or without subagents)</li>
  <li>Refine based on feedback</li>
  <li>Optimize the skill description for better auto-triggering</li>
  <li>Package and distribute</li>
</ol>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>Key insight from the SKILL.md:</strong> The <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">description</code> field is the primary triggering mechanism — it's how Claude decides whether to invoke the skill. Well-crafted descriptions should be slightly "pushy," mentioning both what the skill does <em>and</em> when to use it, including synonyms and edge cases.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>How to call it:</strong> Say "help me create a skill," "I want to turn this workflow into a skill," "improve my existing skill," or "run evals on my skill."</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Example prompts:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Help me create a skill for generating Python data pipeline code"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Turn this conversation into a Claude Code skill for writing PRDs"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"My skill isn't triggering reliably — help me optimize the description"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Run evaluations on my draft skill and help me improve it"</pre>
`,
    },
    {
      label: 'Combine All 5',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">Combining All 6 Skills: Building "Prompt Shelf" from Scratch</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;">Let's walk through a real-world example — <strong>Prompt Shelf</strong>, a web-based repository for storing, searching, and organizing AI prompts.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;">Here's exactly how all six skills are invoked in sequence to go from blank canvas to production-ready app.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Phase 1 — Define the Visual Philosophy (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">canvas-design</code>)</h3>

<p style="margin-bottom: 1rem; line-height: 1.75;">Before touching any code, establish the soul of the app. Prompt Shelf is a personal tool for knowledge workers — it should feel calm, organized, and intellectually focused. Use <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">canvas-design</code> to produce a visual manifesto and reference poster that captures that energy.</p>

<p style="margin-bottom: 0.35rem; line-height: 1.75;"><strong>Prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Use canvas-design to create a visual philosophy and reference poster for \"Prompt Shelf\"
— a web app for organizing AI prompts. The aesthetic should feel like a well-curated
library: structured, editorial, with a quiet confidence. Think archival systems meets
modern developer tooling. Output a .md philosophy file and a .pdf poster."</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">Canvas-design generates a named aesthetic movement — say, <strong>"Archival Precision"</strong> — with a 4–6 paragraph manifesto covering how space, color, typographic weight, and composition should behave throughout the app. The <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.pdf</code> poster becomes your visual north star for every subsequent decision: sidebar proportions, card density, color palette, font choices.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Phase 2 — Lock In a Theme System (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">theme-factory</code>)</h3>

<p style="margin-bottom: 1rem; line-height: 1.75;">With the philosophy established, translate it into a concrete, reusable theme — exact CSS variables, color tokens, and font pairings that will flow consistently through every component.</p>

<p style="margin-bottom: 0.35rem; line-height: 1.75;"><strong>Prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Use theme-factory to generate a custom theme for Prompt Shelf based on the
\"Archival Precision\" philosophy we just created. I need:
- A primary color palette (background, surface, border, text hierarchy)
- An accent color for active sidebar states and interactive elements
- A font pairing: one display font for headings, one monospace-adjacent font
  for prompt content, one clean sans for UI labels
- Output as CSS variables ready to drop into a :root {} block"</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">Theme-factory either matches one of its 10 presets to your philosophy or generates a custom theme from scratch. The output is a named theme — e.g., <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">prompt-shelf-archival</code> — with a complete <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">:root {}</code> CSS variables block. These tokens (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">--color-bg</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">--color-surface</code>, etc.) will be the single source of truth referenced by every component the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code> skill produces.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Phase 3 — Build the Core Application (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code>)</h3>

<p style="margin-bottom: 1rem; line-height: 1.75;">Now invoke the main build. Pass the full specification — architecture, tech stack, features, and the theme tokens from Phase 2 to <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code>.</p>

<p style="margin-bottom: 0.35rem; line-height: 1.75;"><strong>Prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Use frontend-design to build \"Prompt Shelf\" — a React 19 + Vite 8 web app for
storing, searching, and organizing AI prompts.

Tech stack (strict):
- React 19 with the \`use\` API for data and improved Transitions
- Vite 8 as the build tool
- Lucide React for Sidebar and View Toggle icons
- Pure Vanilla CSS — CSS Grid for layout, CSS Variables for the design system

Apply the prompt-shelf-archival theme tokens from our theme-factory output.

Architecture requirements:
1. MainLayout component — CSS Grid defining sidebar + main content areas
2. Sidebar — persistent on desktop, collapsible on mobile; maps through categories
   (Coding, Research, Design, Career, Personal); shows active state
3. Data model — Title, Content, Category, Tags[]
4. Search — real-time keyword search bar synced with sidebar category filter
5. Layout toggle — Grid View (card-based) vs List View (compact rows) via Lucide icons
6. State management — combined filtering logic for category selection + search text

Sidebar CSS specifics: position: sticky, height: 100vh, hover states.

Make it production-grade and visually memorable — not generic."</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">Frontend-design reads the Archival Precision philosophy (indirectly, via the theme tokens and the aesthetic context you've provided), commits to a bold direction, and produces the core components and application logic using clean, vanilla CSS.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Phase 4 — Apply Brand Guidelines (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">brand-guidelines</code>)</h3>

<p style="margin-bottom: 1rem; line-height: 1.75;">With the app built, run a final brand pass to ensure everything — the app itself and its documentation — is visually consistent and on-brand.</p>

<p style="margin-bottom: 0.35rem; line-height: 1.75;"><strong>Prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Apply brand-guidelines to post-process the Prompt Shelf app and its docs.
Ensure the color usage, typography hierarchy, spacing rhythm, and component
styling all align with our visual identity standards. Flag anything that
deviates from the Archival Precision theme we established."</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">brand-guidelines</code> does a systematic review to ensure consistency, correcting any deviations from the established hierarchy and interactive patterns.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Phase 5 — Package the Workflow as a Reusable Skill (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">skill-creator</code>)</h3>

<p style="margin-bottom: 1rem; line-height: 1.75;">Codify this repeatable, high-quality workflow so you can reproduce this entire pipeline with a single skill invocation in the future.</p>

<p style="margin-bottom: 0.35rem; line-height: 1.75;"><strong>Prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Use skill-creator to turn our Prompt Shelf build workflow into a reusable
Claude Code skill called \"prompt-app-builder\".

The skill should:
- Start with a canvas-design philosophy step
- Generate a theme via theme-factory
- Scaffold a React 19 + Vite + Vanilla CSS app via frontend-design
- End with a brand-guidelines polish pass"</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">skill-creator</code> packages the entire process into a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.skill</code> file, optimizing the description for reliable triggering.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h2 style="margin-bottom: 1rem; color: var(--text-primary);">The Full Flow at a Glance</h2>

<pre style="display: block; padding: 1.2rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.9rem; line-height: 1.5;">canvas-design     →  Visual philosophy + reference poster (.md + .pdf)
      ↓
theme-factory     →  CSS variable tokens (palette + fonts)
      ↓
frontend-design   →  React 19 + Vite 8 app (MainLayout, Sidebar, Search, Cards)
      ↓
brand-guidelines  →  Final brand consistency pass
      ↓
skill-creator     →  Whole workflow packaged as "prompt-app-builder.skill"</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">Each skill hands off a concrete artifact to the next: the philosophy informs the theme, the theme feeds the frontend build, brand-guidelines polishes the result, and skill-creator makes the whole pipeline reproducible.</p>
`,
    },
    {
      label: 'Quick Reference',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">Quick Reference: How to Call Each Skill</h2>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Skill</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Auto-triggers on</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Manual override</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code></td>
      <td style="padding: 0.75rem;">"build," "landing page," "component," "dashboard," "React," "UI"</td>
      <td style="padding: 0.75rem;">"Use frontend-design to..."</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">theme-factory</code></td>
      <td style="padding: 0.75rem;">"apply theme," "style this," "consistent colors/fonts"</td>
      <td style="padding: 0.75rem;">"Use theme-factory to..."</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">brand-guidelines</code></td>
      <td style="padding: 0.75rem;">"brand colors," "visual identity," "Anthropic brand," "corporate styling"</td>
      <td style="padding: 0.75rem;">"Apply brand-guidelines to..."</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">canvas-design</code></td>
      <td style="padding: 0.75rem;">"poster," "art," "visual design," "static graphic," "museum quality"</td>
      <td style="padding: 0.75rem;">"Use canvas-design to..."</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">skill-creator</code></td>
      <td style="padding: 0.75rem;">"create a skill," "build a skill," "improve my skill," "run evals"</td>
      <td style="padding: 0.75rem;">"Use skill-creator to..."</td>
    </tr>
  </tbody>
</table>
`,
    },
    {
      label: 'Notes',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">Important Notes</h2>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li><strong>Skills are loaded dynamically</strong> — only the description is always in context. The full instructions load only when the skill triggers, keeping your context window clean.</li>
  <li><strong>Skill descriptions are the routing mechanism.</strong> If a skill isn't triggering automatically, you can always invoke it manually with <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">"Use [skill-name] to..."</code> or the slash command <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">/[skill-name]</code> in Claude Code.</li>
  <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code> and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">canvas-design</code> overlap but are distinct. Frontend-design outputs working code (HTML/CSS/JS/React). Canvas-design outputs <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.png</code> and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.pdf</code> art files — it's for static visuals, not interactive UIs.</li>
  <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">brand-guidelines</code> is a post-processor. Use it <em>after</em> building with other skills, not as a starting point.</li>
  <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">skill-creator</code> works slightly differently in Claude.ai vs Claude Code. In Claude.ai, subagent-based parallel test execution isn't available, so tests run sequentially and quantitative benchmarking is skipped. In Claude Code, the full eval loop with <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">run_loop.py</code> and the description optimizer is available.</li>
</ul>
`,
    },
    {
      label: 'Resources',
      content: `
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">Resources</h2>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li><strong>Anthropic Skills Repo:</strong> <a href="https://github.com/anthropics/skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://github.com/anthropics/skills</a></li>
  <li><strong>What are Skills?</strong> <a href="https://support.claude.com/en/articles/12512176-what-are-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://support.claude.com/en/articles/12512176-what-are-skills</a></li>
  <li><strong>Using Skills in Claude:</strong> <a href="https://support.claude.com/en/articles/12512180-using-skills-in-claude" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://support.claude.com/en/articles/12512180-using-skills-in-claude</a></li>
  <li><strong>Creating Custom Skills:</strong> <a href="https://support.claude.com/en/articles/12512198-creating-custom-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://support.claude.com/en/articles/12512198-creating-custom-skills</a></li>
  <li><strong>Skills API Quickstart:</strong> <a href="https://docs.claude.com/en/api/skills-guide" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://docs.claude.com/en/api/skills-guide</a></li>
  <li><strong>Agent Skills Spec:</strong> <a href="https://agentskills.io" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://agentskills.io</a></li>
</ul>

<p style="margin-bottom: 1rem; line-height: 1.75;"><em>Skills are a living system — Anthropic is actively adding new ones. Check the repo regularly, and use <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">skill-creator</code> to build your own domain-specific workflows on top of these foundations.</em></p>
`,
    },
  ],
  interactiveType: 'custom',
};

export default claudeDesignerStackConcept;
