const buildAppSkillMcpConcept = {
    id: 'build-app-skill-mcp',
    title: 'Agent Skills + MCP',
    category: 'Tutorial',
    tags: ['Agentic', 'Firebase', 'GitHub'],
    tabs: [
      {
        label: 'Overview',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Build a URL Tracker App with AI Agents Skills &amp; MCP</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Have you ever saved a bunch of URLs to read later — articles, docs, videos — and then a few days later wondered <em>"where did that link go?"</em> You scroll through tabs, dig through your notes app, check your browser history… and still can't find it.</p>

<p style="margin-bottom:1rem; line-height:1.75;">We're going to <strong>solve that problem ourselves</strong> by building <strong>ZenShelf</strong> — a personal URL tracker app where you can save links with descriptions, track their status, assign categories and priorities, and have all the data safely stored in <strong>Google Cloud (Firebase Firestore)</strong>. No more lost links.</p>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary); font-style: italic;">Below is a preview of what we'll build. The exact design may look different — that's the beauty of AI: it'll surprise you with its own creative take.</p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/zenshelf-preview1.png" alt="ZenShelf App Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What We'll Use to Build It</strong>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This tutorial combines three complementary tools that each play a distinct role:</p>

<div style="display: flex; flex-direction: column; gap: 0.75rem; margin: 0.5rem 0 1rem;">

  <div style="flex: 1; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--accent-primary); opacity: 0.02; pointer-events: none;"></div>
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Claude Code + <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-size: 0.9em; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">frontend-design</code> skill</p>
    <p style="margin: 0; line-height: 1.65; color: var(--text-secondary); font-size: 0.95rem;">The AI coding agent that develops the app UI. The <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">frontend-design</code> skill — installed to <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills</code> — instructs Claude to produce distinctive, production-grade interfaces instead of generic AI-slop designs.</p>
  </div>

  <div style="flex: 1; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--accent-secondary); opacity: 0.02; pointer-events: none;"></div>
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Google Antigravity (AI Coding Agent)</p>
    <p style="margin: 0; line-height: 1.65; color: var(--text-secondary); font-size: 0.95rem;">Handles the broader coding tasks and is connected to the <strong>Firebase MCP</strong> — which lets it create a real Firebase project, configure Firestore to store URLs data, and set up cloud security rules, all through natural language. No Firebase console wrestling required.</p>
  </div>

  <div style="flex: 1; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--accent-secondary); opacity: 0.02; pointer-events: none;"></div>
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Gemini CLI</p>
    <p style="margin: 0; line-height: 1.65; color: var(--text-secondary); font-size: 0.95rem;">Used to install the <strong>Firebase extension</strong> and the <strong>Superpowers extension</strong> — composable skill bundles that get automatically invoked during app development to handle deployments, git workflows, and more.</p>
  </div>

</div>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary); font-style: regular;">By the end of this tutorial, you'll have a fully functional ZenShelf app running in the cloud — and a repeatable workflow for shipping any idea using AI agents, skills, and MCP servers.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-concept="claude-skills-tutorial" class="tutorial-nav-link previous">
    <span>←</span> Previous: Claude Skills
  </a>
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Step 1 – Setup <span>→</span>
  </a>
</div>

`,
      },
      {
        label: '1. Setup',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[One-Time Setup — Tools &amp; Configuration]</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Complete these four steps once and you'll have everything in place to build, design, and deploy apps using AI agents, skills, and MCP servers. This is a one-time setup that is well worth your time, as you can reuse these same configurations to develop and deploy apps for all your future projects.</p>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Prerequisites</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Make sure the following are installed before continuing:</p>
<ul style="margin: 0 0 0.5rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.35rem;"><strong>Node.js</strong> v18 or higher — <a href="https://nodejs.org/en/download" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">nodejs.org</a></li>
  <li style="margin-bottom: 0.35rem;"><strong>Git</strong> — <a href="https://git-scm.com" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">git-scm.com</a></li>
  <li style="margin-bottom: 0.35rem;"><strong>A Google Account</strong> (for Firebase)</li>
  <li style="margin-bottom: 0.35rem;"><strong>Google Antigravity</strong> — <a href="https://antigravity.google/download" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">antigravity.google</a></li>
  <li style="margin-bottom: 0.35rem;"><strong>Claude Code</strong> — <a href="https://code.claude.com/docs/en/quickstart" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">code.claude.com</a></li>
</ul>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">0 — Download & Install the Claude Skills Repo</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">To kick things off, clone the Claude Skills repo and copy the skill folders into <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills</code>:</p>

<p style="margin: 0.5rem 0; line-height:1.75;">If the directory does not exist yet, create it first:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">mkdir -p ~/.claude/skills</pre>

<p style="margin: 0.5rem 0; line-height:1.75;">Then run:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">git clone https://github.com/anthropics/skills.git
cp -R skills/* ~/.claude/skills/</pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Each skill lives in a <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> file with a name and description in its frontmatter. Claude uses the description to match skills to requests.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Here's what a skill's frontmatter looks like: The <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">name</code> identifies your skill and the <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">description</code> tell Claude when to use it.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">A good description answers two questions:</p>
<ul style="margin: 0 0 0.5rem 1.5rem; color: var(--text-secondary); line-height: 1.6; font-family: monospace; font-size: 1.05rem;">
  <li style="margin-bottom: 0.25rem;">What does this skill do?</li>
  <li style="margin-bottom: 0.25rem;">When should Claude use it?</li>
</ul>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/gitskill.png" alt="Git Skill Frontmatter" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">Personal skills go in <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills</code> and follow you across all projects. Project skills go in <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.claude/skills</code> inside a repository and are shared with anyone who clones it.</p>
<p style="margin-bottom:0.75rem; line-height:1.75;">You can find more skills to use with Claude Code and Gemini at <a href="https://senthilcaesar.github.io/knowledgelab/#claude-skills-tutorial" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Skills Library</a> <strong style="color: var(--accent-primary); font-family: 'Fira Code', monospace; background: rgba(0, 242, 255, 0.1); padding: 0.1rem 0.4rem; border-radius: 4px; border: 1px solid rgba(0, 242, 255, 0.2); font-size: 0.85rem; vertical-align: middle; margin-left: 0.25rem;">Step 4 - Find Skills</strong></p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/claude-skills.png" alt="Terminal Skills Placement" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.5rem; line-height:1.75;">Skills load on demand — unlike <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">CLAUDE.md</code> (which loads into every conversation) or <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">slash commands</code> (which require explicit invocation).</p>


<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">1 — Install Gemini CLI &amp; Extensions</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">The <a href="https://geminicli.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Gemini CLI</a> brings terminal-based AI to your fingertips. Install it and add two extensions that power our workflow:</p>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Install globally with npm:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">npm install -g @google/gemini-cli</pre>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Or install with Homebrew (macOS/Linux):</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">brew install gemini-cli</pre>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Then install the extensions:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"># Install the Firebase extension for Gemini CLI
gemini extensions install https://github.com/gemini-cli-extensions/firebase/

# Install the Superpowers extension for Gemini CLI
gemini extensions install https://github.com/obra/superpowers</pre>

<p style="margin-top:0.75rem; margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">The Firebase extension is updated frequently, so you should regularly update the installed version:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1.25rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">gemini extensions update firebase</pre>

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
  <pre style="display: block; padding: 0.75rem 1rem; background: var(--syntax-bg); border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); border: 1px solid var(--border-color);">~/.claude/skills</pre>
</div>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">

<img src="/knowledgelab/images/anti-mcp.png" alt="ZenShelf App Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">⚠️ Manual step required — add the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: monospace; color: var(--syntax-text);">magic</code> MCP server</p>
  <p style="margin-bottom: 0.75rem; line-height: 1.75; color: var(--text-secondary);">The <strong>21st.dev Magic</strong> server must be added manually. Open the file below and add the entry shown:</p>
  <pre style="display: block; padding: 0.6rem 0.9rem; background: var(--syntax-bg); border-radius: 6px; margin-bottom: 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); border: 1px solid var(--border-color);">~/.gemini/antigravity/mcp_config.json</pre>
  <p style="margin-bottom: 0.4rem; line-height: 1.75; color: var(--text-secondary);">Add this entry inside the top-level object:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border-radius: 8px; margin-bottom: 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; border: 1px solid var(--border-color); line-height: 1.5;">"magic": {
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@21st-dev/magic@latest"
  ],
  "env": {
    "API_KEY": "YOUR_API_KEY_HERE"
  }
}</pre>
  <p style="margin: 0; line-height: 1.75; color: var(--text-secondary);">Replace <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">YOUR_API_KEY_HERE</code> with your personal API key. Get your key at <a href="https://21st.dev/magic" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">21st.dev/magic</a>.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">


<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">3 — Install &amp; Authenticate Firebase CLI</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">The Firebase CLI is the foundation for all cloud operations. Run these in your terminal:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"># Install the Firebase tools globally
npm install -g firebase-tools

# Log in to your Google Account
firebase login</pre>

<p style="margin: 0.75rem 0 0.25rem; line-height:1.75; color: var(--text-secondary);">Verify the login succeeded:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">firebase projects:list</pre>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">4 — Add Firebase Agent Skills</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Skills give the AI the expertise to write correct Firebase code — security rules, Firestore schema, Firestore database, auth setup, and deployment scripts. You can read more in the <a href="https://firebase.google.com/docs/ai-assistance/agent-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Firebase agent skills documentation</a>:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">npx skills add firebase/agent-skills</pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 0.75rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">💡 Pro Tip: Inspect your skills</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.6;">You can always view your installed Gemini and Antigravity skills at these paths:</p>
  <ul style="margin: 0.4rem 0 0 1.25rem; color: var(--text-secondary); line-height: 1.6; font-family: monospace; font-size: 0.85rem;">
    <li>/Users/senthilpalanivelu/.gemini/skills</li>
    <li>/Users/senthilpalanivelu/.gemini/antigravity/skills</li>
  </ul>
</div>








<p style="margin: 0.75rem 0 0.25rem; line-height:1.75; color: var(--text-secondary);">When you run this command, you'll see an interactive installer like the one below. Select all 11 skills and choose <strong>Antigravity</strong> + <strong>Claude Code</strong> as the agents, with <strong>Global</strong> scope and <strong>Symlink</strong> install method:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre; overflow-x: auto; line-height: 1.6;">███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝

<span style="color: var(--syntax-keyword);">◇  Source:</span> https://github.com/firebase/agent-skills.git
<span style="color: var(--syntax-keyword);">◇  Repository cloned</span>
<span style="color: var(--syntax-keyword);">◇  Found 11 skills</span>
<span style="color: var(--syntax-keyword);">◇  Select skills to install (space to toggle)</span>
   developing-genkit-dart, developing-genkit-js, firebase-ai-logic,
   firebase-app-hosting-basics, firebase-auth-basics, firebase-basics,
   firebase-data-connect, firebase-firestore-enterprise-native-mode,
   firebase-firestore-standard, firebase-hosting-basics, firebase-local-env-setup

<span style="color: var(--syntax-keyword);">◇  Which agents do you want to install to?</span>
   Amp, Cline, Codex, Cursor, Gemini CLI, GitHub Copilot, Kimi Code CLI,
   OpenCode, Warp, <span style="color: var(--syntax-string); font-weight: bold;">Antigravity, Claude Code</span>

<span style="color: var(--syntax-keyword);">◇  Installation scope</span>  <span style="color: var(--syntax-string);">Global</span>
<span style="color: var(--syntax-keyword);">◇  Installation method</span> <span style="color: var(--syntax-string);">Symlink (Recommended)</span>

<span style="color: var(--syntax-keyword);">◇  Installation Summary</span>
   ~/.agents/skills/firebase-basics          → Antigravity, Claude Code
   ~/.agents/skills/firebase-auth-basics     → Antigravity, Claude Code
   ~/.agents/skills/firebase-firestore-standard → Antigravity, Claude Code
   ~/.agents/skills/firebase-hosting-basics  → Antigravity, Claude Code
   <span style="color: var(--syntax-comment);">... and 7 more</span>

<span style="color: var(--syntax-keyword);">◇  Proceed with installation?</span>  Yes

<span style="color: var(--syntax-function);">◇  Installation complete — 11 skills installed</span>
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-basics                           symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-auth-basics                      symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-firestore-standard               symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-app-hosting-basics               symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-firestore-enterprise-native-mode symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-local-env-setup                  symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-hosting-basics                   symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-data-connect                     symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-ai-logic                         symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/developing-genkit-js                      symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/developing-genkit-dart                    symlinked: Antigravity, Claude Code

<span style="color: var(--syntax-comment);">└  Done!  Review skills before use; they run with full agent permissions.</span></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; margin: 1.5rem 0;">
  <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">💡 Skills vs. Extensions: What's the difference?</p>
  <p style="margin-bottom: 0.75rem; line-height: 1.75; color: var(--text-secondary);">You might notice we use <code>gemini extensions</code> in Step 1 and <code>npx skills</code> in Step 4. Here's the distinction:</p>
  <ul style="margin: 0 0 0.75rem 1.25rem; color: var(--text-secondary); line-height: 1.75;">
    <li><strong>Extensions</strong> (<code>gemini extensions install</code>) are <strong>Gemini-specific</strong>. They are all-in-one bundles that add new slash commands and tools directly to the Gemini terminal CLI.</li>
    <li><strong>Skills</strong> (<code>npx skills add</code>) are the primary way to add expertise to <strong>Antigravity</strong> and <strong>Claude Code</strong>. They are universal and provide the instruction sets that teach these agents how to code correctly.</li>
  </ul>
  <p style="margin: 0; line-height: 1.75; color: var(--text-secondary);">Think of <strong>Extensions</strong> as giving your agent "new tools," while <strong>Skills</strong> give your agent "the instruction manual" on how to use them effectively.</p>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">

  <p style="margin-bottom: 0.35rem; font-weight: 600; color: var(--text-primary);">You're ready — head to Step 2</p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">With Gemini CLI, MCP servers, Firebase CLI, and the agent skills all in place, proceed to the <strong>Build</strong> tab to start scaffolding ZenShelf.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Step 2 – Build <span>→</span>
  </a>
</div>
`,
      },
      {
        label: '2. Build',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[3-Stage Development]</strong>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">First — Create the Project Folder</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">In your terminal, create and enter the project directory:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">mkdir url-content-tracker
cd url-content-tracker</pre>
<p style="margin-bottom:1.25rem; line-height:1.75; color: var(--text-secondary);">Then open this folder in <strong style="color: var(--text-primary);">Antigravity</strong>. This folder will contain the entire app.</p>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.25rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Before you start — invoke the frontend-design skill</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This skill guides the agent to produce production-grade, visually stunning interfaces. Here's how to use it:</p>


<ol style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.9;">
  <li style="margin-bottom: 0.5rem;">Open <strong style="color: var(--text-primary);">Antigravity</strong> and navigate to your project folder.</li>
  <li style="margin-bottom: 0.5rem;">Open the <strong style="color: var(--text-primary);">Agent panel</strong> on the right side of the screen.</li>
  <li style="margin-bottom: 0.5rem;">In the chat window, type <code style="padding: 0.15rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/</code> and search for <code style="padding: 0.15rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">frontend-design</code>.</li>
  <li style="margin-bottom: 0.5rem;">Select the <strong style="color: var(--text-primary);">frontend-design</strong> skill — it loads from <code style="padding: 0.15rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills</code> that you configured in Setup.</li>
  <li style="margin-bottom: 0.5rem;">Once selected, enter the prompt below and press <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 4px; font-size: 0.85rem; font-family: monospace;">Enter</kbd>:</li>
</ol>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.5rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">Help me plan build an URL tracker app where users can save links, descriptions, status (Pending, In Progress, Read, Archived), categories, and priority levels. The user should be able to perform create, read, update and delete operations.
Include a search bar.</pre>

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
  <pre style="display: block; padding: 0.75rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); margin-bottom: 0.75rem; font-size: 0.85rem; line-height: 1.5;">npm run dev</pre>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">This starts a local development server and compiles the app. It will print a local URL (e.g. <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">http://localhost:5173</code>) in the terminal — copy that URL and open it in your browser to see the app live.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Bonus — Add a Light / Dark Mode Toggle</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Now that the app is developed, let's add some UI polish. The first one is a <strong style="color: var(--text-primary);">light mode / dark mode toggle</strong>. Paste the prompt below into the Antigravity chat:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.5rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">I like the design but I think it would greatly benefit from a dark mode toggle. Can you please add one to the top right corner of the app? In the light mode I want to use the sun emoji and in the dark mode I want to use the moon emoji. The app will auto update as you make changes.</pre>


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

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 1
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Step 3 – Cloud <span>→</span>
  </a>
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

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">Now please upgrade it to use Firebase for cloud storage and Google Sign-In for login. Each user's notes should be private and automatically synced across all their devices. Keep the same design and features — just add the Firebase and Google Sign-In functionality on top.</pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.5rem;">
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">⚠️ If you encounter any issue with <strong style="color: var(--text-primary);">Firestore project setup</strong>, don't worry — use <strong style="color: var(--text-primary);">Prompt 2</strong> below instead. It gives the AI explicit step-by-step MCP instructions to resolve it.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.25rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Prompt 2 — Detailed MCP fallback</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Use this if Prompt 1 runs into issues. It walks the AI through each Firebase MCP step explicitly:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.25rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">/firebase_init. Use the Firebase MCP tools to create a new project called 'ZenShelf Tracker'. Create a Firestore database in the '(default)' instance (region: us-east1). Integrate Google Sign-In so each user has their own private workspace. Replace local storage with Cloud Firestore for real-time synchronization. Implement Security Rules so users can ONLY access their own data. Finally, use the 'Agent Skills' to ensure the code follows Firebase best practices for React 19.

Follow these steps:

1) Check API Status: Ensure firestore.googleapis.com is enabled for the project. If not, use gcloud or the Google Cloud Console to enable it before proceeding.

2) Create Instance: Create a Firestore Native database named (default) in the us-east1 region.

3) Sync Environment: Update the Firebase CLI/MCP environment to target [PROJECT_ID] explicitly.

4) Initialize Files: Create a firebase.json pointing to a firestore.rules file.
   Create firestore.rules with a base rules_version = '2' and user-scoped match blocks (avoid using ?? syntax).

5) Deploy: Run firebase deploy --only firestore to release the rules.

6) SDK Config: Provide the full Web SDK config object and update the local firebase.js file.</pre>

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
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Now when you reload the app with <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">npm run dev</code>, you will see a <strong style="color: var(--text-primary);">Sign-in Screen</strong> asking you to authenticate with your Google account. Once signed in, your URL data will sync to Firestore in real time.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 2
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Step 4 – Deploy <span>→</span>
  </a>
</div>
`,
      },
      {
        label: '4. Deploy',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Deploy to GitHub Pages]</strong>

<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary);">Now that the app is complete and Firebase-integrated, let's publish it to the web using <strong style="color: var(--text-primary);">GitHub Pages</strong> — free, fast hosting straight from your repository.</p>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 1 — Create a GitHub Repository</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Go to <a href="https://github.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">github.com</a> and create a new repository named <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">url-content-tracker</code>. Leave it public and don't add a README.</p>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 2 — Enable GitHub Pages</p>
<p style="margin-bottom:0.4rem; line-height:1.75; color: var(--text-secondary);">In your new repository, go to <strong style="color: var(--text-primary);">Settings → Pages</strong> and set the source to <strong style="color: var(--text-primary);">Deploy from a GitHub Actions</strong> workflow.</p>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.25rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 3 — Push the Code to GitHub</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">In your terminal, run the following to upload the app to your repository:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">git init
git remote add origin https://github.com/&lt;your-username&gt;/url-content-tracker.git
git add . && git commit -m "initial release" && git push -u origin main</pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.25rem;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">💡 What triggers the deployment</p>
  <p style="margin: 0 0 0.75rem; color: var(--text-secondary); line-height: 1.75;">Once you push, the <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.yml</code> workflow file located in <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.github/workflows/</code> will automatically run and build + deploy the app to GitHub Pages.</p>
  <p style="margin: 0 0 0.5rem; color: var(--text-secondary); line-height: 1.75;"><strong style="color: var(--text-primary);">Don't see a <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.yml</code> file?</strong> Ask Antigravity to create one using this prompt:</p>
  <pre style="display: block; padding: 0.85rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">I have a react app that builds to the dist folder. I want to deploy it on GitHub Pages using GitHub Actions. What additional files (workflow files, configuration, etc.) are required to enable automatic deployment?</pre>
</div>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 4 — Check the Actions Tab</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Go to your repository on GitHub and click the <strong style="color: var(--text-primary);">Actions</strong> tab. You'll see the workflow running. Wait for it to show a green ✅ checkmark.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Important Firebase step</p>
  <p style="margin: 0 0 0.75rem; color: var(--text-secondary); line-height: 1.75;">After the GitHub Actions deployment completes, go to your project in <strong style="color: var(--text-primary);">Google Firebase</strong>, then open <strong style="color: var(--text-primary);">Security → Authentication → Settings → Authorized domains</strong>.</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Click <strong style="color: var(--text-primary);">Add domain</strong>, enter <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">&lt;your-github-username&gt;.github.io</code>, save it as an authorized domain in Firebase, and then visit your app.</p>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Your app is live!</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Visit your app at:<br><a href="#" style="color: var(--accent-primary); text-decoration: underline; font-family: monospace;">https://&lt;your-username&gt;.github.io/url-content-tracker</a></p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 3
  </a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">
    Next: Bonus <span>→</span>
  </a>
</div>
`,
      },
      {
        label: 'Bonus',
        content: `
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Bonus — Showcase Your Tech Stack]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Want to show off the technologies powering your app? Use the prompt below to ask Antigravity to add a professional 'Tech Stack' modal to your navigation bar. It will dynamically read your <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">package.json</code> and display a beautiful, themed dialog with icons and descriptions.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.5rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">Please add a 'Tech Stack' button to the main Header/Navigation component of this project.

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

6. Implementation: Please dynamically read the project's dependency file (like package.json) to accurately list the primary frontend framework, CSS/UI library, animation library, and any hosting/deployment pipelines currently configured. Build this using the UI components and icons already available in the project.</pre>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.25rem 0; align-items: center;">
  <img src="/knowledgelab/images/tech-stack.png" alt="Tech Stack Modal Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 4
  </a>
</div>


`,
      },
    ],
    interactiveType: 'custom',
  };

export default buildAppSkillMcpConcept;
