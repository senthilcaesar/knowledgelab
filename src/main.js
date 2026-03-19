import './style.css';
import { initConstellation } from './constellation.js';
import pkg from '../package.json';

const concepts = [
  {
    id: 'claude-skills-tutorial',
    title: 'Claude Skills',
    category: '',
    tags: [''],
    tabs: [
      {
        label: 'Overview',
        content: `
<p style="margin-bottom:1rem; line-height:1.75;">Whether you're a complete beginner looking to build your first website, or an experienced developer looking to speed up your workflow, getting started with Claude Skills is easier than you think. In this simple guide, we'll watch Claude Skills in action as it guides us through building a website, taking our input at each step. Let's go!</p>

<p style="margin-bottom:1rem; line-height:1.75;">A skill is a set of instructions — packaged as a simple folder — that teaches Claude how to handle specific tasks or workflows.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Skills are powerful when you have repeatable workflows: generating frontend designs from specs, conducting research with consistent methodology or creating documents that follow your team's style guide. For more details on Skills check out the <a href="#" data-goto-tab="5" style="color: var(--accent-primary); text-decoration: underline;">resources section</a>.</p>

<p style="line-height:1.75;">Instead of repeating instructions every time you ask Claude to review a pull request or write a commit message, you write a skill once and Claude applies it whenever the task comes up.</p>
`,
      },
      {
        label: 'Step 1 – Setup',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 1 – Download & Install the Skills Repo]</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;">To kick things off, open your terminal and clone the Claude Skills repo from GitHub:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">git clone https://github.com/anthropics/skills.git</code>

<p style="margin: 0.5rem 0; line-height:1.75;">Next, drop the skills folder into <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/skills</code>. Don't see that folder? Just create it. This is where Claude looks for skills — so this part matters.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Each skill lives in a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">SKILL.md</code> file with a name and description in its frontmatter. Claude uses the description to match skills to requests.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Here's what a skill's frontmatter looks like: The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">  name</code> identifies your skill and the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">description</code> tell Claude when to use it.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">A good description answers two questions:</p>
<ul style="margin: 0 0 0.5rem 1.5rem; color: var(--text-secondary); line-height: 1.6; font-family: monospace; font-size: 1.05rem;">
  <li style="margin-bottom: 0.25rem;">What does this skill do?</li>
  <li style="margin-bottom: 0.25rem;">When should Claude use it?</li>
</ul>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/gitskill.png" alt="Git Skill Frontmatter" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">Personal skills go in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/skills</code> and follow you across all projects. Project skills go in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/skills</code> inside a repository and are shared with anyone who clones it.</p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/public/images/claude-skills.png" alt="Terminal Skills Placement" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.5rem; line-height:1.75;">Skills load on demand — unlike <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> (which loads into every conversation) or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">slash commands</code> (which require explicit invocation).</p>

<p style="line-height:1.75;">If you find yourself explaining the same thing to Claude repeatedly, that's a skill waiting to be written.</p>
`,
      },
      {
        label: 'Step 2 – Launch Claude',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 2 – Launch Claude in Your Terminal]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">If you are new to Claude Code, please install it by following the instructions at <a href="https://code.claude.com/docs/en/quickstart" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://code.claude.com/docs/en/quickstart</a>.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Usually, you can launch it by simply typing <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">claude</code> in your terminal. For this tutorial, however, I am launching Claude using an open source free model via Ollama with this command:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">ollama launch claude --model glm-4.7:cloud</code>

<p style="margin: 0.5rem 0; line-height:1.75;"><em>Note: Since I am practicing and learning to use Claude Code, I don't want to pay for an Anthropic API key yet. Because of this, I will be launching Claude using an open source free model via Ollama!</em></p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/skill1.png" alt="Terminal Skills Execution" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>
`,
      },
      {
        label: 'Step 3 – Call a Skill',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 3 – Call the Skill]</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;">To know what skills are available, just ask Claude in the terminal:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">What skills are available?</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">There are two ways to call a skill:</p>

<p style="margin: 0.75rem 0 0.25rem; font-weight: 600; color: var(--text-primary);">① Slash command — call it explicitly by name</p>
<p style="margin: 0 0 0.5rem; line-height:1.75; color: var(--text-secondary);">Type the skill's name prefixed with a <code style="padding: 0.15rem 0.35rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/</code> and Claude invokes it immediately:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">/frontend-design</code>

<p style="margin: 1rem 0 0.25rem; font-weight: 600; color: var(--text-primary);">② Natural language — Claude picks the right one</p>
<p style="margin: 0 0 0.5rem; line-height:1.75; color: var(--text-secondary);">Just describe what you need, and Claude will find and run the matching skill:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">create a pixel-perfect React contact form with validation</code>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/skill2.png" alt="Natural Language Skills" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text-secondary); white-space: pre-wrap; line-height: 1.5;">❯ /frontend-design

I'll help you create a distinctive, production-grade frontend interface. To get started, please tell me:
   
  1. What would you like to build? (a component, page, dashboard, landing page, application interface, etc.)
  2. What's the purpose and audience? (e.g., portfolio site, admin dashboard, e-commerce checkout, creative agency homepage)
  3. Any technical constraints? (framework preference - React/Vue/vanilla HTML/CSS, accessibility requirements, performance considerations)
  4. Is there a specific aesthetic direction you prefer? (or should I propose something bold and unique?)</code>
<p style="margin: 0 0 0.25rem; font-weight: 600; color: var(--text-primary);">② Natural language — just describe what you want</p>
<p style="margin: 0 0 0.5rem; line-height:1.75; color: var(--text-secondary);">No slash needed. Claude reads your request and automatically matches it to the right skill:</p>
<p style="margin: 0 0 0.75rem; line-height:1.75;"><em>"push the recent changes to GitHub"</em> — Claude picks up the git-push skill and handles it end to end.</p>

<p style="margin: 0.5rem 0; line-height:1.75;">When Claude matches a skill to your request, you'll see it load in the terminal:</p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/callskill.png" alt="Skill Loading in Terminal" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.75rem; line-height:1.75; color: var(--text-primary); font-weight: 600; display: flex; align-items: center; gap: 0.5rem; font-size: 1.15rem;">
    <span>💡</span> When Claude Code starts, it scans four locations for skills:
  </p>
  <ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.6; font-family: monospace; font-size: 1.05rem;">
    <li style="margin-bottom: 0.25rem;">Enterprise (managed settings) - managed-settings.json</li>
    <li style="margin-bottom: 0.25rem;">Personal (your home directory) - ~/.claude/skills</li>
    <li style="margin-bottom: 0.25rem;">Project (your project directory) - .claude/skills</li>
    <li style="margin-bottom: 0;">Plugins (installed plugins) - .claude-plugin/plugin.json</li>
  </ul>
</div>
`,
      },
      {
        label: 'Step 4 – Find Skills',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 4 – Where to Find Skills]</strong>

<p style="margin: 0.5rem 0; line-height:1.75;">You can find more skills to use with Claude Code in the following places:</p>

<ul style="margin: 0.5rem 0 1rem 2rem; color: var(--text-secondary); line-height: 1.6;">
  <li style="margin-bottom: 0.5rem;"><strong>Anthropic official:</strong> <a href="https://github.com/anthropics/skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://github.com/anthropics/skills</a></li>
  <li style="margin-bottom: 0.5rem;"><strong>Community marketplaces:</strong>
    <ol style="margin: 0.5rem 0 0 1.5rem;">
      <li style="margin-bottom: 0.25rem;"><a href="https://skillsmp.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">skillsmp.com</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://skills.sh/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">skills.sh</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://agent37.com/skills/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">agent37.com</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://skillhub.club/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">skillhub.club</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://www.uupm.cc/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">UI UX Pro Max</a></li>
    </ol>
  </li>
  <li style="margin-bottom: 0.5rem;"><strong>GitHub Community Repos:</strong>
    <ul style="margin: 0.5rem 0 0 1.5rem; list-style-type: disc;">
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/affaan-m/everything-claude-code" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">everything-claude-code</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/ComposioHQ/awesome-claude-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">awesome-claude-skills</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/obra/superpowers" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">superpowers</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/PleasePrompto/notebooklm-skill" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">notebooklm-skill</a></li>
    </ul>
  </li>
</ul>
`,
      },
      {
        label: 'Resources',
        content: `
<strong id="resources" style="display:block; margin-bottom:0.75rem; font-size:1rem;">Resources</strong>

<p style="margin-top: 0.25rem; text-align: left;">
  <a href="https://anthropic.skilljar.com/introduction-to-agent-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">Introduction to agent skills</a>
</p>

<p style="margin-top: 0.25rem; text-align: left;">
  <a href="https://agentskills.io/home" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">An Open Standard for AI Agent Skills</a>
</p>
<p style="margin-top: 0.5rem; text-align: left;">
  <a href="https://share.google/9HXMh2Ezc32YiJrVy" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">The Complete Guide to Building Skills for Claude</a>
</p>
<p style="margin-top: 0.25rem; text-align: left;">
  <a href="https://claude.com/blog/improving-frontend-design-through-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">Best practices for building richer, more customized frontend design with Claude and Skills</a>
</p>
`,
      },
    ],
    interactiveType: 'custom',
  },
  {
    id: 'claude-mcp',
    title: 'Claude MCP',
    category: '',
    tags: [''],
    tabs: [
      {
        label: 'Overview',
        content: `
<p style="margin-bottom:1rem; line-height:1.75;">The Model Context Protocol (<a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">MCP</a>) is an open standard that enables Claude to interact with external tools and data sources. This modular architecture allows you to extend Claude's capabilities with specialized services. Claude Code can connect to hundreds of external tools and data sources through MCP.</p>
<p style="margin-bottom:0.75rem; line-height:1.75;">In this section, we will configure Claude to connect to <strong>two</strong> powerful MCP servers:</p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.5rem;"><strong>21st.dev Magic:</strong> Create modern, production-ready UI components.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Supadata:</strong> Advanced web and video scraping capabilities.</li>
</ul>
`,
      },
      {
        label: '21st.dev Magic',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">21st.dev Magic</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">A   <a href="https://21st.dev/home" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">tool</a>
 that helps developers create beautiful, modern UI components instantly through natural language descriptions.</p>

<div style="margin: 1rem 0; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px;">
  <p style="margin-bottom:0.5rem;"><strong>Official Link (Get your API key here):</strong></p>
  <a href="https://21st.dev/magic" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://21st.dev/magic</a>
</div>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Installation Command:</strong></p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text-secondary); white-space: pre-wrap;">claude mcp add magic --scope user --env API_KEY="YOUR_API_KEY" -- npx -y @21st-dev/magic@latest</code>
<p style="margin-top: 0.5rem; margin-bottom: 0.5rem; line-height: 1.75; color: var(--text-secondary);">After installation, you can verify your configuration by reading the <code>~/.claude.json</code> file in your home directory. You can quickly view the entry by running this command in your terminal:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">tail -n 15 /Users/senthilpalanivelu/.claude.json</code>
<p style="margin-top: 0.5rem; margin-bottom: 0.5rem; line-height: 1.75; color: var(--text-secondary);">It should contain the following MCP server entry:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">{
  "mcpServers": {
    "magic": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@21st-dev/magic@latest"
      ],
      "env": {
        "API_KEY": "ab1115bb368968***************c8b2867599589"
      }
    }
  }
}</code>

<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Once installed, try the following example prompt. In the below image, you can see the 21st.dev MCP server is invoked to create a modern navigation bar.</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">create a modern navigation bar with responsive design</code>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/21stdev.png" alt="21st.dev Magic Interface" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>
`,
      },
      {
        label: 'Supadata',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Supadata MCP</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">The Supadata MCP server enables powerful web and video scraping capabilities directly within AI development environments like Claude. This open-source integration allows AI models to extract text transcripts from Youtube videos, scrape web pages, and crawl entire websites to gather context.</p>

<div style="margin: 1rem 0; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px;">
  <p style="margin-bottom:0.5rem;"><strong>Official Link (Get your API key here):</strong></p>
  <a href="https://supadata.ai/" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://supadata.ai/</a>
</div>

<p style="margin-top:1rem; margin-bottom:1rem; line-height:1.75;"><strong>Installation Command:</strong></p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text-secondary); white-space: pre-wrap;">claude mcp add supadata --scope user --env SUPADATA_API_KEY="YOUR_API_KEY" -- npx -y @supadata/mcp</code>

<p style="margin-top:1rem; margin-bottom:0.5rem; line-height: 1.75; color: var(--text-secondary);">Alternatively, you can manually add the configuration by opening your <code>~/.claude.json</code> file and adding the following entry:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">{
  "mcpServers": {
    "supadata": {
      "command": "npx",
      "args": [
        "-y",
        "@supadata/mcp"
      ],
      "env": {
        "SUPADATA_API_KEY": "sd_2816a*************360eb7a803"
      }
    }
  }
}</code>

<p style="margin-top:1rem; margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Once the installation is complete, try pasting a YouTube video URL like the one below in your Claude terminal. You will see the Supadata tool automatically invoked to extract the text transcript:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">https://youtu.be/1em64iUFt3U</code>

<code style="display: block; padding: 1rem; background: #000; border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'Fira Code', monospace; color: #fff; white-space: pre-wrap; line-height: 1.5; font-size: 0.9rem;">
⏺ I'll extract the transcript from that YouTube video for you.

⏺ <span style="color: #ffff00;">supadata - supadata_transcript (MCP)</span>(url: "https://youtu.be/1em64iUFt3U")
  ⎿  ⚠ Large MCP response (~19.6k tokens), this can fill up context quickly
  ⎿  {
       "lang": "en",
       "availableLangs": [
     … +631 lines (ctrl+o to expand)                                                                                                  
   
⏺ The transcript has been extracted. It's quite long (76.9KB), so let me read the full content to provide you with a complete         
                                                                                                                                                                                                                                        
⏺ Transcript Summary

  This is a Lenny's Podcast interview with Zevy Arnowitz, a Product Manager at Meta with zero technical background who learned to build real products using AI tools like Cursor and Claude Code.

  Key Highlights:

  Zevy's Background:
  - Completely non-technical (music in high school, not in tech army unit)
  - Discovered AI coding tools during a trip to Japan when Sonnet 3.5 came out
  - Watched a YouTube video about Bolt/Lovable and felt like he was given "superpowers"

  His AI Coding Journey:
  1. Started with ChatGPT Projects - Created a "CTO" with custom prompts to challenge his ideas
  2. Graduated to Bolt/Lovable - Hit limitations when things got complex
  3. Now uses Cursor with Claude Code - Full control over development

  His Workflow:
  1. Exploration - Use Cursor's Ask mode to explore ideas
  2. Planning - Use /CreatePlan to generate detailed implementation plans
  3. Building - Use Composer (Cursor's fast model) or switch to Gemini for UI work
  4. Code Review - Multi-model review process:
    - Claude Code reviews its own work
    - CodeX (GPT's competitor) also reviews
    - Uses a "peer review" /command to have models debate issues
  5. Learning - /LearningOpportunity to learn from the code
  6. Documentation - Updates prompts/docs when AI makes mistakes

  His Philosophy on Different AI Models:
  - Claude: The perfect CTO - communicative, smart, opinionated but collaborative
  - CodeX/GPT: The best coder in a hoodie - not communicative but fixes hard bugs
  - Gemini: The crazy scientist - great at UI design but terrifying to watch work

  Key Advice:
  - Start gradually: ChatGPT Projects → Bolt/Lovable → Cursor
  - Treat AI as a learning partner, not just a tool
  - "It's not that you'll be replaced by AI, you'll be replaced by someone better at using AI"
  - Best time to be junior - you can build startups on your own now

  His Products:
  - StudyMate - A study companion app (currently being localized)
  - The Vortex - Dictation product for Hebrew speakers in Israel

  Other Interesting Points:
  - Used AI to help him prepare for and pass interviews at Meta
  - Created a quiz game to practice product segmentation questions
  - Emphasizes post-mortems and updating prompts to prevent repeated AI mistakes
  - Believes titles and responsibilities will collapse - "everyone's going to become a builder"

  This conversation is incredibly inspiring for non-technical people showing how AI democratizes software development.
</code>

<p style="margin-top:1rem; margin-bottom:0.5rem;"><strong>Documentation & Integration:</strong></p>
<a href="https://docs.supadata.ai/integrations/mcp" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://docs.supadata.ai/integrations/mcp</a>
`,
      },
      {
        label: 'Tool Reference',
        content: `
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Lists all configured MCP servers in your Claude Code setup (<code>~/.claude.json</code>)</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text);">claude mcp list</code>

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Terminal Output]</strong>

<code style="display: block; padding: 1rem; background: #000; border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'Fira Code', monospace; color: #fff; white-space: pre-wrap; line-height: 1.5; font-size: 0.9rem;">
⏺ Bash(claude mcp list)
  ⎿ Checking MCP server health...

     supadata: npx -y @supadata/mcp - ✓ Connected
     magic: npx -y @21st-dev/magic@latest - ✓ Connected

⏺ MCP Servers (2 connected):

  ┌──────────┬───────────────────────────────┬─────────────┐
  │  Server  │            Command            │   Status    │
  ├──────────┼───────────────────────────────┼─────────────┤
  │ supadata │ npx -y @supadata/mcp          │ ✓ Connected │
  ├──────────┼───────────────────────────────┼─────────────┤
  │ magic    │ npx -y @21st-dev/magic@latest │ ✓ Connected │
  └──────────┴───────────────────────────────┴─────────────┘

  Available Tools

  supadata — Web content extraction:
  - supadata_transcript — Extract transcripts from YouTube, TikTok, Instagram, Twitter, or video files
  - supadata_check_transcript_status — Check transcript job progress
  - supadata_scrape — Scrape web pages to Markdown
  - supadata_map — Crawl website to discover all URLs
  - supadata_crawl — Batch crawl website to extract content from all pages
  - supadata_check_crawl_status — Check crawl job progress

  magic — 21st.dev UI components:
  - 21st_magic_component_builder — Build new UI components from library
  - 21st_magic_component_inspiration — Browse UI component examples
  - 21st_magic_component_refiner — Redesign/improve existing UI components
  - logo_search — Search for company logos in JSX/TSX/SVG formats
</code>
<p style="margin-top:1rem; margin-bottom:0.5rem;"><strong>Official Documentation:</strong></p>
<a href="https://code.claude.com/docs/en/mcp" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://code.claude.com/docs/en/mcp</a>
`,
      },
    ],
    interactiveType: 'custom',
  },
  {
    id: 'build-webapp-ai',
    title: 'Build Web App with AI',
    category: '',
    tags: [''],
    description: `
Build your own Notebook Web App using AI coding — no prior coding experience required.

In this tutorial, you’ll learn how to build and launch the app step-by-step using three tools:

<ol style="margin: 1rem 0 1.5rem 2rem; color: var(--text-secondary);">
  <li style="margin-bottom: 0.5rem;"><strong>GitHub</strong></li>
  <li style="margin-bottom: 0.5rem;"><strong>Antigravity</strong></li>
  <li style="margin-bottom: 0.5rem;"><strong>Firebase</strong></li>
</ol>

We will cover setup, configuration, and deployment so you can publish your app online.

Access the prompts and configuration files here:
<a href="https://github.com/amudhamnaturals/flashcards/blob/main/prompt.md" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://github.com/amudhamnaturals/flashcards/blob/main/prompt.md</a>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/PpvoOyYAMZs" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Build Web App with AI Tutorial"></iframe>
</div>
`,
    interactiveType: 'custom',
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    category: '',
    tags: [''],
    tabs: [
      {
        label: 'Overview',
        content: `
<p style="margin-bottom:0.75rem; line-height:1.75;">AI Engineering refers to the process of building applications on top of foundation models.</p>
<p style="margin-bottom:1rem; line-height:1.75;">The model as a service makes it easier to leverage AI to build applications. Models are exposed via APIs that receive user queries and return model outputs.
Without these APIs, using an AI model required the infrastructure to host and serve this model. These APIs give you access to powerful models via single API calls.</p>

`,
      },
      {
        label: 'Fundamental Building Blocks',
        content: `

This page is currently under development. Please check back soon.

`,
      },
    ],
    interactiveType: 'custom',
  },
  {
    id: 'build-app-skill-mcp',
    title: 'Agent Skills + MCP',
    category: 'Tutorial',
    tags: ['Agentic', 'Firebase', 'GitHub'],
    tabs: [
      {
        label: 'Overview',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Build a URL Tracker App with AI Agents &amp; MCP</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Have you ever saved a bunch of URLs to read later — articles, docs, videos — and then a few days later wondered <em>"where did that link go?"</em> You scroll through tabs, dig through your notes app, check your browser history… and still can't find it.</p>

<p style="margin-bottom:1rem; line-height:1.75;">We're going to <strong>solve that problem ourselves</strong> by building <strong>ZenShelf</strong> — a personal URL tracker app where you can save links with descriptions, track their status, assign categories and priorities, and have all the data safely stored in <strong>Google Cloud (Firebase Firestore)</strong>. No more lost links.</p>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary); font-style: italic;">Below is a preview of what we'll build. The exact design may look different — that's the beauty of AI: it'll surprise you with its own creative take.</p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/zenshelf-preview.png" alt="ZenShelf App Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What We'll Use to Build It</strong>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This tutorial combines three complementary tools that each play a distinct role:</p>

<div style="display: flex; flex-direction: column; gap: 0.75rem; margin: 0.5rem 0 1rem;">

  <div style="flex: 1; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--accent-primary); opacity: 0.02; pointer-events: none;"></div>
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Claude Code + <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.2); border-radius: 4px; font-size: 0.9em;">frontend-design</code> skill</p>
    <p style="margin: 0; line-height: 1.65; color: var(--text-secondary); font-size: 0.95rem;">The AI coding agent that writes and refines the app UI. The <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.2); border-radius: 4px;">frontend-design</code> skill — installed to <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.2); border-radius: 4px;">~/.claude/skills</code> — instructs Claude to produce distinctive, production-grade interfaces instead of generic AI-slop designs.</p>
  </div>

  <div style="flex: 1; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--accent-secondary); opacity: 0.02; pointer-events: none;"></div>
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Google Antigravity (AI Coding Agent)</p>
    <p style="margin: 0; line-height: 1.65; color: var(--text-secondary); font-size: 0.95rem;">Handles the broader coding tasks and is connected to the <strong>Firebase MCP</strong> — which lets it create a real Firebase project, configure Firestore as our URL data store, and set up cloud security rules, all through natural language. No Firebase console wrestling required.</p>
  </div>

  <div style="flex: 1; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--accent-secondary); opacity: 0.02; pointer-events: none;"></div>
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Gemini CLI</p>
    <p style="margin: 0; line-height: 1.65; color: var(--text-secondary); font-size: 0.95rem;">Used to install the <strong>Firebase extension</strong> and the <strong>Superpowers extension</strong> — composable skill bundles that get automatically invoked during app development to handle deployments, git workflows, and more.</p>
  </div>

</div>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary); font-style: regular;">By the end of this tutorial, you'll have a fully functional ZenShelf app running in the cloud — and a repeatable workflow for shipping any idea using AI agents, skills, and MCP servers.</p>

`,
      },
      {
        label: '1. Setup',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[One-Time Setup — Tools &amp; Configuration]</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Complete these four steps once and you'll have everything in place to build, design, and deploy ZenShelf using AI agents, skills, and MCP servers.</p>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Prerequisites</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Make sure the following are installed before continuing:</p>
<ul style="margin: 0 0 0.5rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.35rem;"><strong>Node.js</strong> v18 or higher — <a href="https://nodejs.org/en/download" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">nodejs.org</a></li>
  <li style="margin-bottom: 0.35rem;"><strong>Git</strong> — <a href="https://git-scm.com" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">git-scm.com</a></li>
  <li style="margin-bottom: 0.35rem;"><strong>A Google Account</strong> (for Firebase)</li>
  <li style="margin-bottom: 0.35rem;"><strong>Goole Antigravity</strong> — <a href="https://antigravity.google/download" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">antigravity.google</a></li>
  <li style="margin-bottom: 0.35rem;"><strong>Claude Code</strong> — <a href="https://code.claude.com/docs/en/quickstart" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">code.claude.com</a></li>
</ul>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">0 — Download & Install the Claude Skills Repo</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">To kick things off, open your terminal and clone the Claude Skills repo from GitHub:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">git clone https://github.com/anthropics/skills.git</code>

<p style="margin: 0.5rem 0; line-height:1.75;">Next, drop the skills folder into <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/skills</code>. Don't see that folder? Just create it. This is where Claude looks for skills — so this part matters.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Each skill lives in a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">SKILL.md</code> file with a name and description in its frontmatter. Claude uses the description to match skills to requests.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Here's what a skill's frontmatter looks like: The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">  name</code> identifies your skill and the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">description</code> tell Claude when to use it.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">A good description answers two questions:</p>
<ul style="margin: 0 0 0.5rem 1.5rem; color: var(--text-secondary); line-height: 1.6; font-family: monospace; font-size: 1.05rem;">
  <li style="margin-bottom: 0.25rem;">What does this skill do?</li>
  <li style="margin-bottom: 0.25rem;">When should Claude use it?</li>
</ul>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/gitskill.png" alt="Git Skill Frontmatter" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">Personal skills go in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/skills</code> and follow you across all projects. Project skills go in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/skills</code> inside a repository and are shared with anyone who clones it.</p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/claude-skills.png" alt="Terminal Skills Placement" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.5rem; line-height:1.75;">Skills load on demand — unlike <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> (which loads into every conversation) or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">slash commands</code> (which require explicit invocation).</p>


<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">1 — Install Gemini CLI &amp; Extensions</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">The Gemini CLI brings terminal-based AI to your fingertips. Install it and add two extensions that power our workflow:</p>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Install globally with npm:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: monospace; color: var(--code-text);">npm install -g @google/gemini-cli</code>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Or install with Homebrew (macOS/Linux):</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: monospace; color: var(--code-text);">brew install gemini-cli</code>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Then install the extensions:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap;"># Install the Firebase extension for Gemini CLI
gemini extensions install https://github.com/gemini-cli-extensions/firebase/

# Install the Superpowers extension for Gemini CLI
gemini extensions install https://github.com/obra/superpowers</code>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.25rem; font-weight: 600; color: var(--text-primary);">💡 What is Superpowers?</p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">Superpowers is a complete software development workflow for your coding agents, built on top of a set of composable "skills" and initial instructions that make sure your agent uses them automatically — git pushes, code reviews, docs, and more.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">2 — Configure MCP Servers in Antigravity</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">The Model Context Protocol (MCP) gives your AI agent "hands" to manage cloud infrastructure and UI designs. Open <strong>Antigravity</strong>, go to <strong>Settings → Antigravity settings → Customizations → Add MCP servers</strong>, then install the following from the MCP Store:</p>

<div style="display: grid; gap: 0.5rem; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin: 0.5rem 0 1rem;">
  <div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px;">
    <p style="margin: 0 0 0.2rem; font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">StitchMCP</p>
    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Advanced UI generation</p>
  </div>
  <div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px;">
    <p style="margin: 0 0 0.2rem; font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">cloudrun</p>
    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Containerized deployments</p>
  </div>
  <div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px;">
    <p style="margin: 0 0 0.2rem; font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">firebase-mcp-server</p>
    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Firebase Project Management</p>
  </div>
  <div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px;">
    <p style="margin: 0 0 0.2rem; font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">github-mcp-server</p>
    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Repo management &amp; CI/CD</p>
  </div>
  <div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px;">
    <p style="margin: 0 0 0.2rem; font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">magic</p>
    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Premium UI components</p>
  </div>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">⚠️ Manual step required — set the Claude Skills path in Antigravity</p>
  <p style="margin-bottom: 0.75rem; line-height: 1.75; color: var(--text-secondary);">Antigravity needs to know where your Claude skills live. Open <strong>Antigravity</strong>, go to <strong>Settings → Antigravity settings → Customizations → Skills custom path</strong>, and set the path to:</p>
  <code style="display: block; padding: 0.75rem 1rem; background: rgba(0,0,0,0.15); border-radius: 6px; font-family: monospace; font-size: 0.9rem; color: var(--code-text);">~/.claude/skills</code>
</div>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">

<img src="/knowledgelab/images/anti-mcp.png" alt="ZenShelf App Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">⚠️ Manual step required — add the <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.15); border-radius: 4px; font-family: monospace;">magic</code> MCP server</p>
  <p style="margin-bottom: 0.75rem; line-height: 1.75; color: var(--text-secondary);">The <strong>21st.dev Magic</strong> server must be added manually. Open the file below and add the entry shown:</p>
  <code style="display: block; padding: 0.6rem 0.9rem; background: rgba(0,0,0,0.15); border-radius: 6px; margin-bottom: 0.75rem; font-family: monospace; font-size: 0.85rem; color: var(--code-text);">~/.gemini/antigravity/mcp_config.json</code>
  <p style="margin-bottom: 0.4rem; line-height: 1.75; color: var(--text-secondary);">Add this entry inside the top-level object:</p>
  <code style="display: block; padding: 1rem; background: rgba(0,0,0,0.15); border-radius: 8px; margin-bottom: 0.75rem; font-family: monospace; font-size: 0.85rem; color: var(--code-text); white-space: pre-wrap;">"magic": {
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@21st-dev/magic@latest"
  ],
  "env": {
    "API_KEY": "YOUR_API_KEY_HERE"
  }
}</code>
  <p style="margin: 0; line-height: 1.75; color: var(--text-secondary);">Replace <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.15); border-radius: 4px; font-family: monospace;">YOUR_API_KEY_HERE</code> with your personal API key. Get your key at <a href="https://21st.dev/magic" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">21st.dev/magic</a>.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">


<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">3 — Install &amp; Authenticate Firebase CLI</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">The Firebase CLI is the foundation for all cloud operations. Run these in your terminal:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap;"># Install the Firebase tools globally
npm install -g firebase-tools

# Log in to your Google Account
firebase login</code>

<p style="margin: 0.75rem 0 0.25rem; line-height:1.75; color: var(--text-secondary);">Verify the login succeeded:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">firebase projects:list</code>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">4 — Add Firebase Agent Skills</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Skills give the AI the expertise to write correct Firebase code — security rules, Firestore schema, Firestore database, auth setup, and deployment scripts:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">npx skills add firebase/agent-skills</code>

<p style="margin: 0.75rem 0 0.25rem; line-height:1.75; color: var(--text-secondary);">When you run this command, you'll see an interactive installer like the one below. Select all 11 skills and choose <strong>Antigravity</strong> + <strong>Claude Code</strong> as the agents, with <strong>Global</strong> scope and <strong>Symlink</strong> install method:</p>
<pre style="display: block; padding: 1rem; background: #0d1117; border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; font-size: 0.78rem; color: #7ee787; white-space: pre; overflow-x: auto; line-height: 1.6;">███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝

<span style="color: #58a6ff;">◇  Source:</span> https://github.com/firebase/agent-skills.git
<span style="color: #58a6ff;">◇  Repository cloned</span>
<span style="color: #58a6ff;">◇  Found 11 skills</span>
<span style="color: #58a6ff;">◇  Select skills to install (space to toggle)</span>
   developing-genkit-dart, developing-genkit-js, firebase-ai-logic,
   firebase-app-hosting-basics, firebase-auth-basics, firebase-basics,
   firebase-data-connect, firebase-firestore-enterprise-native-mode,
   firebase-firestore-standard, firebase-hosting-basics, firebase-local-env-setup

<span style="color: #58a6ff;">◇  Which agents do you want to install to?</span>
   Amp, Cline, Codex, Cursor, Gemini CLI, GitHub Copilot, Kimi Code CLI,
   OpenCode, Warp, <span style="color: #ffa657; font-weight: bold;">Antigravity, Claude Code</span>

<span style="color: #58a6ff;">◇  Installation scope</span>  <span style="color: #ffa657;">Global</span>
<span style="color: #58a6ff;">◇  Installation method</span> <span style="color: #ffa657;">Symlink (Recommended)</span>

<span style="color: #58a6ff;">◇  Installation Summary</span>
   ~/.agents/skills/firebase-basics          → Antigravity, Claude Code
   ~/.agents/skills/firebase-auth-basics     → Antigravity, Claude Code
   ~/.agents/skills/firebase-firestore-standard → Antigravity, Claude Code
   ~/.agents/skills/firebase-hosting-basics  → Antigravity, Claude Code
   <span style="color: #6e7681;">... and 7 more</span>

<span style="color: #58a6ff;">◇  Proceed with installation?</span>  Yes

<span style="color: #3fb950;">◇  Installation complete — 11 skills installed</span>
<span style="color: #3fb950;">✓</span> ~/.agents/skills/firebase-basics                           symlinked: Antigravity, Claude Code
<span style="color: #3fb950;">✓</span> ~/.agents/skills/firebase-auth-basics                      symlinked: Antigravity, Claude Code
<span style="color: #3fb950;">✓</span> ~/.agents/skills/firebase-firestore-standard               symlinked: Antigravity, Claude Code
<span style="color: #3fb950;">✓</span> ~/.agents/skills/firebase-app-hosting-basics               symlinked: Antigravity, Claude Code
<span style="color: #3fb950;">✓</span> ~/.agents/skills/firebase-firestore-enterprise-native-mode symlinked: Antigravity, Claude Code
<span style="color: #3fb950;">✓</span> ~/.agents/skills/firebase-local-env-setup                  symlinked: Antigravity, Claude Code
<span style="color: #3fb950;">✓</span> ~/.agents/skills/firebase-hosting-basics                   symlinked: Antigravity, Claude Code
<span style="color: #3fb950;">✓</span> ~/.agents/skills/firebase-data-connect                     symlinked: Antigravity, Claude Code
<span style="color: #3fb950;">✓</span> ~/.agents/skills/firebase-ai-logic                         symlinked: Antigravity, Claude Code
<span style="color: #3fb950;">✓</span> ~/.agents/skills/developing-genkit-js                      symlinked: Antigravity, Claude Code
<span style="color: #3fb950;">✓</span> ~/.agents/skills/developing-genkit-dart                    symlinked: Antigravity, Claude Code

<span style="color: #6e7681;">└  Done!  Review skills before use; they run with full agent permissions.</span></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">

  <p style="margin-bottom: 0.35rem; font-weight: 600; color: var(--text-primary);">You're ready — head to Step 2</p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">With Gemini CLI, MCP servers, Firebase CLI, and the agent skills all in place, proceed to the <strong>Build</strong> tab to start scaffolding ZenShelf.</p>
</div>
`,
      },
      {
        label: '2. Build',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[3-Stage Development]</strong>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">First — Create the Project Folder</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">In your terminal, create and enter the project directory:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">mkdir url-content-tracker
cd url-content-tracker</code>
<p style="margin-bottom:1.25rem; line-height:1.75; color: var(--text-secondary);">Then open this folder in <strong style="color: var(--text-primary);">Antigravity</strong>. This folder will contain the entire app.</p>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.25rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Before you start — invoke the frontend-design skill</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This skill guides the agent to produce production-grade, visually stunning interfaces. Here's how to use it:</p>


<ol style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.9;">
  <li style="margin-bottom: 0.5rem;">Open <strong style="color: var(--text-primary);">Antigravity</strong> and navigate to your project folder.</li>
  <li style="margin-bottom: 0.5rem;">Open the <strong style="color: var(--text-primary);">Agent panel</strong> on the right side of the screen.</li>
  <li style="margin-bottom: 0.5rem;">In the chat window, type <code style="padding: 0.15rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/</code> and search for <code style="padding: 0.15rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">frontend-design</code>.</li>
  <li style="margin-bottom: 0.5rem;">Select the <strong style="color: var(--text-primary);">frontend-design</strong> skill — it loads from <code style="padding: 0.15rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/skills</code> that you configured in Setup.</li>
  <li style="margin-bottom: 0.5rem;">Once selected, enter the prompt below and press <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 4px; font-size: 0.85rem; font-family: monospace;">Enter</kbd>:</li>
</ol>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.5rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">Help me plan build an URL tracker app where users can save links, descriptions, status (Pending, In Progress, Read, Archived), categories, and priority levels. The user should be able to perform create, read, update and delete operations.
Include a search bar.</code>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/anti1.png" alt="Antigravity Agent Panel" style="max-width: 100%; border-radius: 10px; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.25); object-fit: cover;">
  <img src="/knowledgelab/images/anti2.png" alt="Antigravity frontend-design skill" style="max-width: 100%; border-radius: 10px; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.25); object-fit: cover;">
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">💡 What happens next</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Gemini Flash will work on creating an <strong style="color: var(--text-primary);">implementation plan</strong> for the app. Review it, then click <strong style="color: var(--text-primary);">Proceed</strong> to let the AI write all the code.</p>
</div>

<div style="margin: 1rem 0; text-align: center;">
  <img src="/knowledgelab/images/plan.png" alt="Gemini implementation plan" style="max-width: 100%; border-radius: 10px; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.25); object-fit: cover;">
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Preview the app locally</p>
  <p style="margin: 0 0 0.75rem; color: var(--text-secondary); line-height: 1.75;">Once the AI has finished writing all the code, open your terminal, navigate to the project folder, and run:</p>
  <code style="display: block; padding: 0.75rem 1rem; background: var(--bg-color); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--code-text); margin-bottom: 0.75rem;">npm run dev</code>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">This starts a local development server and compiles the app. It will print a local URL (e.g. <code style="padding: 0.1rem 0.35rem; background: var(--bg-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">http://localhost:5173</code>) in the terminal — copy that URL and open it in your browser to see the app live.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Bonus — Add a Light / Dark Mode Toggle</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Now that the app is developed, let's add some UI polish. The first one is a <strong style="color: var(--text-primary);">light mode / dark mode toggle</strong>. Paste the prompt below into the Antigravity chat:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.5rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.6;">I like the design but I think it would greatly benefit from a dark mode toggle. Can you please add one to the top right corner of the app? In the light mode I want to use the sun emoji and in the dark mode I want to use the moon emoji. The app will auto update as you make changes.</code>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Try it — Add your first link!</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Paste a URL into the input field, fill out the description, status, and category, and click <strong style="color: var(--text-primary);">Add Link</strong>. You should see your first card appear immediately with the Zen design you chose!</p>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Full Test — Kick the tyres!</p>
  <p style="margin: 0 0 0.6rem; color: var(--text-secondary); line-height: 1.75;">Now put the whole app through its paces. Check that every feature works as intended:</p>
  <ul style="margin: 0 0 0.75rem 1.25rem; color: var(--text-secondary); line-height: 1.9;">
    <li><strong style="color: var(--text-primary);">Add link</strong> — create a few entries with different statuses, categories, and priorities</li>
    <li><strong style="color: var(--text-primary);">Edit</strong> — update a saved entry and confirm the changes persist</li>
    <li><strong style="color: var(--text-primary);">Delete</strong> — remove an entry and verify it disappears from the list</li>
    <li><strong style="color: var(--text-primary);">Search</strong> — type in the search bar and check that results filter correctly</li>
    <li><strong style="color: var(--text-primary);">Dark / Light toggle</strong> — switch modes and make sure the UI responds cleanly</li>
  </ul>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;"><strong style="color: var(--text-primary);">Found a bug?</strong> Just describe it in plain English to Antigravity — <em>e.g. "When I click the delete button, a confirmation dialog should appear before the card is removed. The dialog should have a clear title like 'Delete this link?', a short warning message, and two buttons — a red 'Delete' button to confirm and a grey 'Cancel' button to dismiss. It should appear centered on screen with a dark overlay behind it."</em>. The more context and detail you give, the quicker the AI can pinpoint and fix it.</p>
</div>

`,
      },
      {
        label: '3. Cloud',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Firebase Integration via MCP]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Now that the app is built and tested locally, it's time to connect it to the cloud. We'll ask the AI to create a Firebase project and store our URL link data in Firestore by invoking the <strong style="color: var(--text-primary);">Firebase MCP server</strong> — no manual Firebase Console clicks needed.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.25rem;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">💡 What the Firebase MCP does</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">The Firebase MCP server gives Antigravity direct access to your Firebase account. When you run the prompt below, the AI will create the project, enable Firestore, configure authentication, and write security rules — all without you leaving your editor.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Prompt 1 — Simple & straightforward</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Start with this prompt. It should work well by invoking the Firebase MCP server and let the AI handle everything automatically:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 0.75rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.6;">Now please upgrade it to use Firebase for cloud storage and Google Sign-In for login. Each user's notes should be private and automatically synced across all their devices. Keep the same design and features — just add the Firebase and Google Sign-In functionality on top.</code>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.5rem;">
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">⚠️ If you encounter any issue with <strong style="color: var(--text-primary);">Firestore database creation</strong>, don't worry — use <strong style="color: var(--text-primary);">Prompt 2</strong> below instead. It gives the AI explicit step-by-step MCP instructions to resolve it.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.25rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Prompt 2 — Detailed MCP fallback</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Use this if Prompt 1 runs into issues. It walks the AI through each Firebase MCP step explicitly:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.25rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.6;">/firebase_init. Use the Firebase MCP tools to create a new project called 'ZenShelf Tracker'. Create a Firestore database in the '(default)' instance (region: us-east1). Integrate Google Sign-In so each user has their own private workspace. Replace local storage with Cloud Firestore for real-time synchronization. Implement Security Rules so users can ONLY access their own data. Finally, use the 'Agent Skills' to ensure the code follows Firebase best practices for React 19.

Follow these steps:

1) Check API Status: Ensure firestore.googleapis.com is enabled for the project. If not, use gcloud or the Google Cloud Console to enable it before proceeding.

2) Create Instance: Create a Firestore Native database named (default) in the us-east1 region.

3) Sync Environment: Update the Firebase CLI/MCP environment to target [PROJECT_ID] explicitly.

4) Initialize Files: Create a firebase.json pointing to a firestore.rules file.
   Create firestore.rules with a base rules_version = '2' and user-scoped match blocks (avoid using ?? syntax).

5) Deploy: Run firebase deploy --only firestore to release the rules.

6) SDK Config: Provide the full Web SDK config object and update the local firebase.js file.</code>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.25rem;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">What Antigravity will set up for you</p>
  <ul style="margin: 0.4rem 0 0 1.25rem; color: var(--text-secondary); line-height: 1.9;">
    <li>A new Firebase project named <strong style="color: var(--text-primary);">ZenShelf Tracker</strong></li>
    <li>A Firestore database in <strong style="color: var(--text-primary);">us-east1</strong> for storing URL entries</li>
    <li><strong style="color: var(--text-primary);">Google Sign-In</strong> so every user gets a private workspace</li>
    <li>Firestore <strong style="color: var(--text-primary);">Security Rules</strong> that restrict each user to their own data</li>
    <li>Code updated to follow <strong style="color: var(--text-primary);">Firebase best practices for React 19</strong></li>
  </ul>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0;">
  <p style="margin: 0 0 0.6rem; font-weight: 600; color: var(--text-primary);">After the MCP finishes</p>
  <p style="margin: 0 0 0.75rem; color: var(--text-secondary); line-height: 1.75;">After MCP completes the setup, we need to enable Google Sign-In authentication for the app. Open the <strong style="color: var(--text-primary);"><a href="https://console.firebase.google.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Firebase Console</a></strong>, select your project, and follow these steps:</p>
  <ol style="margin: 0 0 0.75rem 1.25rem; color: var(--text-secondary); line-height: 1.9;">
    <li>Go to <strong style="color: var(--text-primary);">Security → Authentication</strong></li>
    <li>Click <strong style="color: var(--text-primary);">Get started</strong></li>
    <li>Select the <strong style="color: var(--text-primary);">Sign-in method</strong> tab</li>
    <li>Click <strong style="color: var(--text-primary);">Google</strong></li>
    <li>Toggle it to <strong style="color: var(--text-primary);">Enabled</strong> and click <strong style="color: var(--text-primary);">Save</strong></li>
  </ol>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Now when you reload the app with <code style="padding: 0.1rem 0.35rem; background: var(--bg-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">npm run dev</code>, you will see a <strong style="color: var(--text-primary);">Sign-in Screen</strong> asking you to authenticate with your Google account. Once signed in, your URL data will sync to Firestore in real time.</p>
</div>
`,
      },
      {
        label: '4. Deploy',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Deploy to GitHub Pages]</strong>

<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary);">Now that the app is complete and Firebase-integrated, let's publish it to the web using <strong style="color: var(--text-primary);">GitHub Pages</strong> — free, fast hosting straight from your repository.</p>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 1 — Create a GitHub Repository</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Go to <a href="https://github.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">github.com</a> and create a new repository named <code style="padding: 0.1rem 0.35rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">url-content-tracker</code>. Leave it public and don't add a README.</p>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 2 — Enable GitHub Pages</p>
<p style="margin-bottom:0.4rem; line-height:1.75; color: var(--text-secondary);">In your new repository, go to <strong style="color: var(--text-primary);">Settings → Pages</strong> and set the source to <strong style="color: var(--text-primary);">Deploy from a GitHub Actions</strong> workflow.</p>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.25rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 3 — Push the Code to GitHub</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">In your terminal, run the following to upload the app to your repository:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">git init
git remote add origin https://github.com/&lt;your-username&gt;/url-content-tracker.git
git add . && git commit -m "initial release" && git push -u origin main</code>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.25rem;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">💡 What triggers the deployment</p>
  <p style="margin: 0 0 0.75rem; color: var(--text-secondary); line-height: 1.75;">Once you push, the <code style="padding: 0.1rem 0.35rem; background: var(--bg-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.yml</code> workflow file located in <code style="padding: 0.1rem 0.35rem; background: var(--bg-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.github/workflows/</code> will automatically run and build + deploy the app to GitHub Pages.</p>
  <p style="margin: 0 0 0.5rem; color: var(--text-secondary); line-height: 1.75;"><strong style="color: var(--text-primary);">Don't see a <code style="padding: 0.1rem 0.35rem; background: var(--bg-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.yml</code> file?</strong> Ask Antigravity to create one using this prompt:</p>
  <code style="display: block; padding: 0.85rem 1rem; background: var(--bg-color); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.6;">I have a react app that builds to the dist folder. I want to deploy it on GitHub Pages using GitHub Actions. What additional files (workflow files, configuration, etc.) are required to enable automatic deployment?</code>
</div>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 4 — Check the Actions Tab</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Go to your repository on GitHub and click the <strong style="color: var(--text-primary);">Actions</strong> tab. You'll see the workflow running. Wait for it to show a green ✅ checkmark.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Your app is live!</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Once the workflow completes successfully, visit your app at:<br><a href="#" style="color: var(--accent-primary); text-decoration: underline; font-family: monospace;">https://&lt;your-username&gt;.github.io/url-content-tracker</a></p>
</div>
`,
      },
      {
        label: 'Bonus',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Bonus — Showcase Your Tech Stack]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Want to show off the technologies powering your app? Use the prompt below to ask Antigravity to add a professional 'Tech Stack' modal to your navigation bar. It will dynamically read your <code style="padding: 0.1rem 0.35rem; background: var(--bg-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">package.json</code> and display a beautiful, themed dialog with icons and descriptions.</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.5rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.6;">Please add a 'Tech Stack' button to the main Header/Navigation component of this project.

Requirements:

1. Placement: Place the button in the top navigation bar, ideally next to the theme toggle or user settings. It should blend in with the existing UI aesthetics (e.g., using a ghost, text, or outline variant).

2. Icon: Include a code-related icon (like &lt;Code /&gt; or &lt;/&gt;) inside the button next to the 'Tech Stack' label.

3. Interactivity: When clicked, the button should open a centered Modal/Dialog component. The background behind the modal should be slightly dimmed or blurred to focus the user's attention.

4. Modal Styling: The modal should match the application's current theme (supporting both light and dark mode automatically). It should have rounded corners, a subtle drop shadow, and a close ('X') button in the top right.

5. Modal Content:
- Header: Set the title to 'Project Tech Stack'.
- Introductory Text: Add a short description at the top: 'This app is built using the following technologies:'.
- List of Technologies: Display a stacked vertical layout. Each item in the list should represent a core technology used in this project.
- List Item Layout: For each technology, display:
  - An appropriate icon or logo on the left (with a subtle colored background box or tint if possible).
  - The name of the technology in a bold font.
  - A brief, one-sentence description of what that technology handles in the app (e.g., 'Fast, modern, component-driven UI framework').

6. Implementation: Please dynamically read the project's dependency file (like package.json) to accurately list the primary frontend framework, CSS/UI library, animation library, and any hosting/deployment pipelines currently configured. Build this using the UI components and icons already available in the project.</code>
 
<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.25rem 0; align-items: center;">
  <img src="/knowledgelab/public/images/tech-stack.png" alt="Tech Stack Modal Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>


`,
      },
    ],
    interactiveType: 'custom',
  },
];

// Study Mode State
const studyMode = {
  isActive: false,
  isLocked: false,
  isMinimized: false,
  currentView: 'timer',
  timer: {
    duration: 25 * 60,
    remaining: 25 * 60,
    interval: null,
    isRunning: false,
  },
  flashcards: {
    currentIndex: 0,
    shuffled: [],
    isFlipped: false,
  },
  stats: {
    streak: 0,
    cardsToday: 0,
    focusMinutes: 0,
    lastStudyDate: null,
  },
};

const app = {
  activeConcept: null,

  init() {
    this.renderSidebar();
    this.setupEventListeners();
    this.initTheme();
    this.initStudyMode();
    this.initTechStackModal();

    // Initial routing based on hash
    const hash = window.location.hash.substring(1);
    if (hash && concepts.some((c) => c.id === hash)) {
      this.selectConcept(hash);
    } else {
      this.renderWelcome();
    }

    // Start the neural constellation background
    initConstellation(document.getElementById('constellation-bg'));
  },

  renderWelcome() {
    // Restore constellation on home screen
    document.getElementById('constellation-bg').style.display = '';
    const cotd = this.getConceptOfTheDay();
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
      <div class="cotd-ticker">
        <span class="cotd-label">Skill of the Day</span>
        <div class="ticker-track">
          <span class="ticker-text">${cotd.title}</span>
        </div>
      </div>
      <div class="welcome-card">
        <h2>Welcome to Knowledge Lab</h2>
        <p>Select a tutorial from the sidebar to begin your interactive learning journey.</p>
      </div>
    `;

    // Make the ticker clickable to open the concept
    contentArea.querySelector('.cotd-ticker').addEventListener('click', () => {
      this.selectConcept(cotd.id);
    });

    // Pin the start position to the exact right edge of the track (no dead zone)
    const tickerText = contentArea.querySelector('.ticker-text');
    const trackWidth = contentArea.querySelector('.ticker-track').offsetWidth;
    tickerText.style.setProperty('--start-x', trackWidth + 'px');
  },

  getConceptOfTheDay() {
    // Deterministic: divide epoch ms by ms-per-day to get a stable daily index.
    // Every user on the same calendar day (UTC) sees the exact same concept.
    // Changes automatically at midnight UTC — no localStorage needed.
    const dayIndex = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
    return concepts[dayIndex % concepts.length];
  },

  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-mode');
      document.querySelector('#theme-toggle .icon').textContent = '☀️';
    }
    if (localStorage.getItem('sidebar') === 'collapsed') {
      document.getElementById('app').classList.add('sidebar-collapsed');
    }
  },

  renderSidebar() {
    const list = document.getElementById('concept-list');
    list.innerHTML = concepts
      .map(
        (c) => `
      <li class="nav-item" data-id="${c.id}">${c.title}</li>
    `,
      )
      .join('');
  },

  isMobile() {
    return window.innerWidth <= 640;
  },

  closeMobileSidebar() {
    document.getElementById('app').classList.remove('sidebar-open');
  },

  setupEventListeners() {
    // Concept list: close mobile drawer after selecting
    document.getElementById('concept-list').addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-item')) {
        const id = e.target.dataset.id;
        if (this.isMobile()) this.closeMobileSidebar();
        this.selectConcept(id);
      }
    });

    // Sidebar toggle: overlay drawer on mobile, collapse on desktop
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
      const app = document.getElementById('app');
      if (this.isMobile()) {
        app.classList.toggle('sidebar-open');
      } else {
        const collapsed = app.classList.toggle('sidebar-collapsed');
        localStorage.setItem('sidebar', collapsed ? 'collapsed' : 'open');
      }
    });

    // Backdrop click: close mobile drawer
    document.getElementById('app').addEventListener('click', (e) => {
      if (this.isMobile() && e.target === document.getElementById('app')) {
        this.closeMobileSidebar();
      }
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light-mode');
      const icon = document.querySelector('#theme-toggle .icon');
      icon.textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Home navigation
    document.getElementById('home-link').addEventListener('click', () => {
      this.activeConcept = null;
      document
        .querySelectorAll('.nav-item')
        .forEach((el) => el.classList.remove('active'));
      if (this.isMobile()) this.closeMobileSidebar();
      this.renderWelcome();
    });

    // Search functionality
    document.getElementById('concept-search').addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const items = document.querySelectorAll('.nav-item');
      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
      });
    });

    // Hash navigation listener
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.substring(1);
      if (hash && concepts.some((c) => c.id === hash)) {
        if (!this.activeConcept || this.activeConcept.id !== hash) {
          this.selectConcept(hash);
        }
      } else if (!hash) {
        // Handle direct home navigation via hash removal
        this.activeConcept = null;
        document
          .querySelectorAll('.nav-item')
          .forEach((el) => el.classList.remove('active'));
        this.renderWelcome();
      }
    });
  },

  selectConcept(id) {
    const concept = concepts.find((c) => c.id === id);
    if (!concept) return;

    // Update URL hash
    if (window.location.hash !== `#${id}`) {
      window.location.hash = id;
    }

    // Hide constellation when reading a concept
    document.getElementById('constellation-bg').style.display = 'none';

    // Update UI
    this.activeConcept = concept;
    document
      .querySelectorAll('.nav-item')
      .forEach((el) => el.classList.remove('active'));

    const navItem = document.querySelector(`[data-id="${id}"]`);
    if (navItem) navItem.classList.add('active');

    this.renderConcept(concept);
  },

  renderConcept(concept) {
    const contentArea = document.getElementById('content-area');

    if (concept.tabs && concept.tabs.length > 0) {
      // Render tabbed interface
      const tabButtons = concept.tabs
        .map(
          (tab, i) =>
            `<button class="tutorial-tab-btn${i === 0 ? ' active' : ''}" data-tab="${i}">${tab.label}</button>`,
        )
        .join('');

      const tabPanels = concept.tabs
        .map(
          (tab, i) =>
            `<div class="tutorial-tab-panel${i === 0 ? ' active' : ''}" data-panel="${i}">
          <div class="concept-content" id="concept-description-${i}">
            ${tab.content}
          </div>
        </div>`,
        )
        .join('');

      contentArea.innerHTML = `
        <article class="concept-card concept-card--tabs">
          <nav class="tutorial-tabs" role="tablist">${tabButtons}</nav>
          <div class="tutorial-tab-content">${tabPanels}</div>
        </article>
      `;

      this.initTabs();
      // Attach copy buttons to the first (active) panel
      concept.tabs.forEach((_, i) => {
        const el = document.getElementById(`concept-description-${i}`);
        if (el) this.attachCopyButtonsTo(el);
      });
    } else {
      contentArea.innerHTML = `
        <article class="concept-card">
          <h2 class="concept-title">${concept.title}</h2>
          <div class="concept-meta">
            <span class="tag">${concept.category}</span>
            ${concept.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
          </div>
          <div class="concept-content" id="concept-description">
            ${(concept.description || 'Add your description here...')
              .split('\n\n')
              .map((p) => `<p>${p}</p>`)
              .join('')}
          </div>
        </article>
      `;
      this.attachCopyButtons();
    }
  },

  initTabs() {
    const btns = document.querySelectorAll('.tutorial-tab-btn');
    const panels = document.querySelectorAll('.tutorial-tab-panel');

    const switchToTab = (index) => {
      btns.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      btns[index].classList.add('active');
      panels[index].classList.add('active');

      // Scroll the active tab into the center of the viewport
      btns[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    };

    btns.forEach((btn) => {
      btn.addEventListener('click', () => switchToTab(Number(btn.dataset.tab)));
    });

    // Wire up any in-content links that jump to a specific tab
    document.querySelectorAll('[data-goto-tab]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        switchToTab(Number(link.dataset.gotoTab));
      });
    });
  },

  attachCopyButtons() {
    const conceptDescription = document.getElementById('concept-description');
    if (!conceptDescription) return;
    this.attachCopyButtonsTo(conceptDescription);
  },

  attachCopyButtonsTo(container) {
    if (!container) return;

    // Find all code blocks
    const codeBlocks = container.querySelectorAll('code');

    codeBlocks.forEach((code) => {
      // Only attach to block-level code elements (the ones with inline styles or specifically for commands)
      const isBlock =
        code.style.display === 'block' || code.textContent.includes('\n');
      if (!isBlock) return;

      // Create wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'code-wrapper';

      // Insert wrapper before code
      code.parentNode.insertBefore(wrapper, code);
      // Move code into wrapper
      wrapper.appendChild(code);

      // Add copy button
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.setAttribute('title', 'Copy to clipboard');

      const copyIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
      const checkIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

      btn.innerHTML = copyIcon;

      wrapper.appendChild(btn);

      btn.addEventListener('click', () => {
        const text = code.textContent;
        // Clean up text (remove the leading '❯ ' prompt if it's there, but keep the rest)
        const cleanText = text.replace(/^❯\s+/, '');

        navigator.clipboard.writeText(cleanText).then(() => {
          btn.innerHTML = checkIcon;
          btn.classList.add('copied');

          setTimeout(() => {
            btn.innerHTML = copyIcon;
            btn.classList.remove('copied');
          }, 2000);
        });
      });
    });
  },

  // ========================================
  // TECH STACK MODAL
  // ========================================

  initTechStackModal() {
    const btn = document.getElementById('tech-stack-btn');
    const overlay = document.getElementById('tech-stack-overlay');
    const closeBtn = document.getElementById('close-tech-stack');
    const list = document.getElementById('tech-stack-list');

    if (!btn || !overlay || !closeBtn || !list) return;

    // Check technologies from package.json
    const deps = {
      ...(pkg.dependencies || {}),
      ...(pkg.devDependencies || {}),
    };

    // Core tech stack
    const stack = [
      {
        name: 'Vanilla JavaScript',
        desc: 'Core application logic, ECMAScript modules, DOM manipulation, and dynamic rendering.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M14.5 9h-5l-.5-5h7l-.5 5zm-5 4h5l-.5 4.5-2 1.5-2-1.5-.2-2h2.2l.1 1.2 1 .8 1-.8.2-1.2h-3.8z"></path></svg>',
      },
      {
        name: 'Vanilla CSS3 & HTML5',
        desc: 'Custom glassmorphism styling, responsive grid layout, and semantic structure.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M15 9h-6l-.5-4h7.5l-.5 4zm-6 4h6l-.5 4.5-2.5 1.5-2.5-1.5-.2-2h2.2l.1 1.2 1.2.8 1.2-.8.2-1.2h-4.6z"></path></svg>',
      },
      {
        name: 'HTML5 Canvas API',
        desc: 'Custom performant animations including the Neural Constellation and Zen Flow backgrounds.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.268-.652-.053-.877.215-.225.542-.31 1.051-.31h2.438c2.66 0 4.853-2.192 4.853-4.853C21.5 6.756 17.244 2 12 2z"></path></svg>',
      },
    ];

    if (deps.vite) {
      stack.push({
        name: 'Vite (' + deps.vite.replace(/[\^\~]/, '') + ')',
        desc: 'Next-generation frontend tooling providing ultra-fast builds and Hot Module Replacement.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
      });
    }

    // Hosting logic mapped explicitly
    stack.push({
      name: 'GitHub Pages',
      desc: 'Automated CI/CD deployment via GitHub Actions pipeline using the deployed build.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    });

    list.innerHTML = stack
      .map(
        (tech) => `
      <li class="tech-stack-item">
        <div class="tech-stack-icon-wrapper">
          ${tech.icon}
        </div>
        <div class="tech-stack-info">
          <span class="tech-stack-name">${tech.name}</span>
          <span class="tech-stack-desc">${tech.desc}</span>
        </div>
      </li>
    `,
      )
      .join('');

    const openModal = () => {
      overlay.classList.remove('hidden');
      // trigger reflow
      void overlay.offsetWidth;
      overlay.classList.add('active');
    };

    const closeModal = () => {
      overlay.classList.remove('active');
      setTimeout(() => {
        if (!overlay.classList.contains('active')) {
          overlay.classList.add('hidden');
        }
      }, 300); // match transition duration
    };

    btn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  },

  // ========================================
  // STUDY MODE
  // ========================================

  initStudyMode() {
    // Load stats from localStorage
    this.loadStudyStats();
    this.updateStudyMetrics();
    this.initZenFlow();

    // Study mode button
    document.getElementById('study-mode-btn').addEventListener('click', () => {
      this.toggleStudyMode();
    });

    // Exit study mode
    document.getElementById('exit-study').addEventListener('click', () => {
      this.toggleStudyMode();
    });

    // Timer controls
    document.getElementById('timer-toggle').addEventListener('click', () => {
      this.toggleTimer();
    });

    document.getElementById('timer-reset').addEventListener('click', () => {
      this.resetTimer();
    });

    // Timer presets
    document.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const time = parseInt(e.target.dataset.time);
        this.setTimerDuration(time);
      });
    });

    // Minimize / expand study mode
    document.getElementById('minimize-study').addEventListener('click', () => {
      this.minimizeStudy();
    });

    document.getElementById('expand-study').addEventListener('click', () => {
      this.expandStudy();
    });

    document.getElementById('mini-stop-btn').addEventListener('click', () => {
      this.expandStudy();
      this.toggleStudyMode(); // exit study mode
    });

    // Lock / unlock screen
    document.getElementById('lock-screen-btn').addEventListener('click', () => {
      this.lockScreen();
    });

    document
      .getElementById('unlock-screen-btn')
      .addEventListener('click', () => {
        this.unlockScreen();
      });
  },

  loadStudyStats() {
    const saved = localStorage.getItem('studyStats');
    if (saved) {
      studyMode.stats = JSON.parse(saved);
      this.updateStreak();
    }
  },

  saveStudyStats() {
    localStorage.setItem('studyStats', JSON.stringify(studyMode.stats));
  },

  updateStreak() {
    const today = new Date().toDateString();
    const lastDate = studyMode.stats.lastStudyDate;

    if (lastDate) {
      const lastStudy = new Date(lastDate);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastStudy.toDateString() === yesterday.toDateString()) {
        // Continue streak
      } else if (lastStudy.toDateString() !== today) {
        // Reset streak
        studyMode.stats.streak = 0;
      }
    }
  },

  updateStudyMetrics() {
    // Elements removed from UI — guard against null refs
    const streak = document.getElementById('study-streak');
    const cards = document.getElementById('study-cards');
    const mins = document.getElementById('study-minutes');
    if (streak) streak.textContent = studyMode.stats.streak;
    if (cards) cards.textContent = studyMode.stats.cardsToday;
    if (mins) mins.textContent = studyMode.stats.focusMinutes;
  },

  toggleStudyMode() {
    studyMode.isActive = !studyMode.isActive;
    const overlay = document.getElementById('study-mode-overlay');
    const zenFlowBg = document.querySelector('.zen-flow-bg');

    if (studyMode.isActive) {
      // If coming back from minimized, just expand
      if (studyMode.isMinimized) {
        this.expandStudy();
        return;
      }
      overlay.classList.remove('hidden');
      overlay.classList.add('active');
      zenFlowBg.style.opacity = '1';
      this.updateStreak();
      this.saveStudyStats();
    } else {
      // Fully exit — also clear minimized state
      this.expandStudy(); // ensure mini-timer is hidden
      overlay.classList.remove('active');
      zenFlowBg.style.opacity = '0';
      this.resetTimer();
      setTimeout(() => {
        overlay.classList.add('hidden');
      }, 500);
    }
  },

  // Timer methods
  setTimerDuration(minutes) {
    studyMode.timer.duration = minutes * 60;
    studyMode.timer.remaining = minutes * 60;

    // Update UI
    document.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.classList.toggle('active', parseInt(btn.dataset.time) === minutes);
    });

    this.updateTimerDisplay();
  },

  toggleTimer() {
    if (studyMode.timer.isRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  },

  startTimer() {
    studyMode.timer.isRunning = true;
    document.getElementById('timer-toggle').textContent = 'Pause';
    document.querySelector('.timer-wrapper').classList.add('active');
    document.getElementById('lock-screen-btn').classList.remove('hidden');

    studyMode.timer.interval = setInterval(() => {
      studyMode.timer.remaining--;
      this.updateTimerDisplay();

      if (studyMode.timer.remaining <= 0) {
        this.completeTimer();
      }
    }, 1000);
  },

  pauseTimer() {
    studyMode.timer.isRunning = false;
    document.getElementById('timer-toggle').textContent = 'Resume';
    document.querySelector('.timer-wrapper').classList.remove('active');
    document.getElementById('lock-screen-btn').classList.add('hidden');
    clearInterval(studyMode.timer.interval);
    if (studyMode.isLocked) this.unlockScreen();
  },

  resetTimer() {
    this.pauseTimer();
    studyMode.timer.remaining = studyMode.timer.duration;
    document.getElementById('timer-toggle').textContent = 'Start Focus';
    document.getElementById('timer-status').textContent = 'Ready to focus';
    document.getElementById('lock-screen-btn').classList.add('hidden');
    this.updateTimerDisplay();
  },

  completeTimer() {
    this.pauseTimer();
    document.getElementById('timer-status').textContent =
      'Focus complete! Great work!';

    // Update stats
    studyMode.stats.focusMinutes += Math.floor(studyMode.timer.duration / 60);
    this.updateStreakDate();
    this.saveStudyStats();
    this.updateStudyMetrics();

    // Play notification sound (optional)
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Focus Session Complete', {
        body: 'Great job! Take a break.',
        icon: '/vite.svg',
      });
    }
  },

  updateTimerDisplay() {
    const minutes = Math.floor(studyMode.timer.remaining / 60);
    const seconds = studyMode.timer.remaining % 60;
    const timeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById('timer-minutes').textContent = minutes
      .toString()
      .padStart(2, '0');
    document.getElementById('timer-seconds').textContent = seconds
      .toString()
      .padStart(2, '0');

    // Update mini-timer display
    document.getElementById('mini-timer-display').textContent = timeStr;
    const progressPct =
      (studyMode.timer.remaining / studyMode.timer.duration) * 100;
    document.getElementById('mini-timer-progress').style.width =
      `${progressPct}%`;

    // Update progress ring
    const progress = studyMode.timer.remaining / studyMode.timer.duration;
    const circumference = 2 * Math.PI * 130;
    const offset = circumference * (1 - progress);
    document.getElementById('timer-progress').style.strokeDashoffset = offset;

    // Update status
    if (!studyMode.timer.isRunning) {
      document.getElementById('timer-status').textContent = 'Ready to focus';
    } else {
      document.getElementById('timer-status').textContent = 'Stay focused...';
    }
  },

  // Minimize to floating widget
  minimizeStudy() {
    studyMode.isMinimized = true;
    const overlay = document.getElementById('study-mode-overlay');
    const zenFlowBg = document.querySelector('.zen-flow-bg');
    overlay.classList.remove('active');
    zenFlowBg.style.opacity = '0';
    setTimeout(() => overlay.classList.add('hidden'), 500);
    document.getElementById('mini-timer').classList.remove('hidden');
    // Sync mini display immediately
    const m = Math.floor(studyMode.timer.remaining / 60);
    const s = studyMode.timer.remaining % 60;
    document.getElementById('mini-timer-display').textContent =
      `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    const progressPct =
      (studyMode.timer.remaining / studyMode.timer.duration) * 100;
    document.getElementById('mini-timer-progress').style.width =
      `${progressPct}%`;
  },

  // Expand back to full study mode
  expandStudy() {
    studyMode.isMinimized = false;
    document.getElementById('mini-timer').classList.add('hidden');
    if (studyMode.isActive) {
      const overlay = document.getElementById('study-mode-overlay');
      const zenFlowBg = document.querySelector('.zen-flow-bg');
      overlay.classList.remove('hidden');
      overlay.classList.add('active');
      zenFlowBg.style.opacity = '1';
    }
  },

  // Lock Screen
  lockScreen() {
    studyMode.isLocked = true;
    document.getElementById('study-mode-overlay').classList.add('study-locked');
    document.getElementById('unlock-screen-overlay').classList.remove('hidden');
  },

  unlockScreen() {
    studyMode.isLocked = false;
    document
      .getElementById('study-mode-overlay')
      .classList.remove('study-locked');
    document.getElementById('unlock-screen-overlay').classList.add('hidden');
  },

  updateStreakDate() {
    const today = new Date().toDateString();
    const lastDate = studyMode.stats.lastStudyDate;

    if (lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastDate === yesterday.toDateString()) {
        studyMode.stats.streak++;
      } else {
        studyMode.stats.streak = 1;
      }

      studyMode.stats.lastStudyDate = today;
    }
  },

  // Zen Flow Animation
  initZenFlow() {
    const canvas = document.getElementById('zen-flow-canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = 30;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 80 + 40,
          hue: Math.random() * 60 + 170, // Blue-cyan range
          alpha: Math.random() * 0.1 + 0.05,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = () => {
      if (!studyMode.isActive) {
        requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Get theme colors
      const isLight = document.documentElement.classList.contains('light-mode');

      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        // Update pulse
        p.pulse += 0.02;

        // Draw particle
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius,
        );
        const pulseRadius = p.radius * (1 + Math.sin(p.pulse) * 0.1);

        if (isLight) {
          gradient.addColorStop(0, `hsla(40, 30%, 70%, ${p.alpha * 0.5})`);
          gradient.addColorStop(0.5, `hsla(40, 20%, 80%, ${p.alpha * 0.2})`);
          gradient.addColorStop(1, 'transparent');
        } else {
          gradient.addColorStop(0, `hsla(${p.hue}, 70%, 50%, ${p.alpha})`);
          gradient.addColorStop(
            0.5,
            `hsla(${p.hue}, 70%, 50%, ${p.alpha * 0.3})`,
          );
          gradient.addColorStop(1, 'transparent');
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw breathing aura
      if (studyMode.timer.isRunning) {
        const time = Date.now() / 1000;
        const breathRadius = 150 + Math.sin(time * 0.5) * 20;

        const breathGradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          0,
          width / 2,
          height / 2,
          breathRadius,
        );

        if (isLight) {
          breathGradient.addColorStop(0, 'hsla(40, 30%, 75%, 0.05)');
          breathGradient.addColorStop(1, 'transparent');
        } else {
          breathGradient.addColorStop(0, 'hsla(180, 70%, 50%, 0.03)');
          breathGradient.addColorStop(1, 'transparent');
        }

        ctx.beginPath();
        ctx.arc(width / 2, height / 2, breathRadius, 0, Math.PI * 2);
        ctx.fillStyle = breathGradient;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();
  },
};

document.addEventListener('DOMContentLoaded', () => app.init());
