(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const L=70,k=160,x=120;class T{constructor(e,r){this.width=e,this.height=r,this.x=Math.random()*e,this.y=Math.random()*r,this.vx=(Math.random()-.5)*.4,this.vy=(Math.random()-.5)*.4,this.baseRadius=1.5+Math.random()*2,this.pulsePhase=Math.random()*Math.PI*2,this.pulseSpeed=.015+Math.random()*.025,this.isHub=Math.random()<.12,this.isHub&&(this.baseRadius*=2)}update(e){this.pulsePhase+=this.pulseSpeed;const r=this.x-e.x,a=this.y-e.y,o=Math.hypot(r,a);if(o<x&&o>0){const d=((x-o)/x)**2*3;this.vx+=r/o*d*.08,this.vy+=a/o*d*.08}this.vx*=.975,this.vy*=.975;const i=Math.hypot(this.vx,this.vy);i>1.5&&(this.vx=this.vx/i*1.5,this.vy=this.vy/i*1.5),this.x+=this.vx,this.y+=this.vy,this.x<0&&(this.x=this.width),this.x>this.width&&(this.x=0),this.y<0&&(this.y=this.height),this.y>this.height&&(this.y=0)}draw(e,r){const a=.5+.5*Math.sin(this.pulsePhase),o=this.baseRadius*(1+a*.6),i=(this.isHub?.7:.4)+a*.4,d=r?`rgba(176, 141, 87, ${i})`:this.isHub?`rgba(180, 100, 255, ${i})`:`rgba(0, 242, 255, ${i})`,m=r?`rgba(176, 141, 87, ${a*.12})`:this.isHub?`rgba(130, 0, 255, ${a*.1})`:`rgba(0, 242, 255, ${a*.1})`;e.beginPath(),e.arc(this.x,this.y,o*5,0,Math.PI*2),e.fillStyle=m,e.fill(),e.beginPath(),e.arc(this.x,this.y,o,0,Math.PI*2),e.fillStyle=d,e.fill()}}class M{constructor(e,r,a,o,i){this.x1=e,this.y1=r,this.x2=a,this.y2=o,this.progress=0,this.speed=.02+Math.random()*.03,this.isLight=i,this.alive=!0}update(){this.progress+=this.speed,this.progress>=1&&(this.alive=!1)}draw(e){const r=this.x1+(this.x2-this.x1)*this.progress,a=this.y1+(this.y2-this.y1)*this.progress,o=1-this.progress;e.beginPath(),e.arc(r,a,3,0,Math.PI*2),e.fillStyle=this.isLight?`rgba(212, 160, 23, ${o})`:`rgba(255, 255, 255, ${o})`,e.fill()}}function P(t){const e=t.getContext("2d");let r=0,a=0,o=[],i=[],d=null;const m={x:-9999,y:-9999};let c=0;function s(){r=t.width=window.innerWidth,a=t.height=window.innerHeight,o=Array.from({length:L},()=>new T(r,a))}function u(p){if(c--,c>0)return;c=30+Math.floor(Math.random()*60);const l=[...o].sort(()=>Math.random()-.5);for(let h=0;h<l.length-1;h++){const y=l[h],g=l[h+1];if(Math.hypot(y.x-g.x,y.y-g.y)<k){i.push(new M(y.x,y.y,g.x,g.y,p));return}}}function b(p,l,h,y){const g=(1-h/k)*(y?.25:.35),f=e.createLinearGradient(p.x,p.y,l.x,l.y),A=y?`rgba(176,141,87,${g*1.5})`:p.isHub?`rgba(150,50,255,${g*1.5})`:`rgba(0,242,255,${g*1.5})`,E=y?`rgba(122,106,83,${g})`:l.isHub?`rgba(150,50,255,${g})`:`rgba(0,200,220,${g})`;f.addColorStop(0,A),f.addColorStop(1,E),e.beginPath(),e.moveTo(p.x,p.y),e.lineTo(l.x,l.y),e.strokeStyle=f,e.lineWidth=y?.6:.8,e.stroke()}function w(){const p=document.documentElement.classList.contains("light-mode");e.clearRect(0,0,r,a);for(let l=0;l<o.length;l++){o[l].update(m);for(let h=l+1;h<o.length;h++){const y=o[l].x-o[h].x,g=o[l].y-o[h].y,f=Math.hypot(y,g);f<k&&b(o[l],o[h],f,p)}}o.forEach(l=>l.draw(e,p)),u(p),i=i.filter(l=>l.alive),i.forEach(l=>{l.update(),l.draw(e)}),d=requestAnimationFrame(w)}function I(){cancelAnimationFrame(d),window.removeEventListener("resize",s),window.removeEventListener("mousemove",C)}function C(p){m.x=p.clientX,m.y=p.clientY}return window.addEventListener("resize",s),window.addEventListener("mousemove",C),s(),w(),{destroy:I}}const B={vite:"^7.3.1"},S={devDependencies:B},v=[{id:"claude-skills-tutorial",title:"Claude Skills",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;">Whether you're a complete beginner looking to build your first website, or an experienced developer looking to speed up your workflow, getting started with Claude Skills is easier than you think. In this simple guide, we'll watch Claude Skills in action as it guides us through building a website, taking our input at each step. Let's go!</p>

<p style="margin-bottom:1rem; line-height:1.75;">A skill is a set of instructions — packaged as a simple folder — that teaches Claude how to handle specific tasks or workflows.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Skills are powerful when you have repeatable workflows: generating frontend designs from specs, conducting research with consistent methodology or creating documents that follow your team's style guide. For more details on Skills check out the <a href="#" data-goto-tab="5" style="color: var(--accent-primary); text-decoration: underline;">resources section</a>.</p>

<p style="line-height:1.75;">Instead of repeating instructions every time you ask Claude to review a pull request or write a commit message, you write a skill once and Claude applies it whenever the task comes up.</p>
`},{label:"Step 1 – Setup",content:`
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
  <img src="/knowledgelab/images/claude-skills.png" alt="Terminal Skills Placement" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.5rem; line-height:1.75;">Skills load on demand — unlike <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> (which loads into every conversation) or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">slash commands</code> (which require explicit invocation).</p>

<p style="line-height:1.75;">If you find yourself explaining the same thing to Claude repeatedly, that's a skill waiting to be written.</p>
`},{label:"Step 2 – Launch Claude",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 2 – Launch Claude in Your Terminal]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">If you are new to Claude Code, please install it by following the instructions at <a href="https://code.claude.com/docs/en/quickstart" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://code.claude.com/docs/en/quickstart</a>.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Usually, you can launch it by simply typing <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">claude</code> in your terminal. For this tutorial, however, I am launching Claude using an open source free model via Ollama with this command:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">ollama launch claude --model glm-4.7:cloud</code>

<p style="margin: 0.5rem 0; line-height:1.75;"><em>Note: Since I am practicing and learning to use Claude Code, I don't want to pay for an Anthropic API key yet. Because of this, I will be launching Claude using an open source free model via Ollama!</em></p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/skill1.png" alt="Terminal Skills Execution" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>
`},{label:"Step 3 – Call a Skill",content:`
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
`},{label:"Step 4 – Find Skills",content:`
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
`},{label:"Resources",content:`
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
`}],interactiveType:"custom"},{id:"claude-mcp",title:"Claude MCP",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;">The Model Context Protocol (<a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">MCP</a>) is an open standard that enables Claude to interact with external tools and data sources. This modular architecture allows you to extend Claude's capabilities with specialized services. Claude Code can connect to hundreds of external tools and data sources through MCP.</p>
<p style="margin-bottom:0.75rem; line-height:1.75;">In this section, we will configure Claude to connect to <strong>two</strong> powerful MCP servers:</p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.5rem;"><strong>21st.dev Magic:</strong> Create modern, production-ready UI components.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Supadata:</strong> Advanced web and video scraping capabilities.</li>
</ul>
`},{label:"21st.dev Magic",content:`
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
`},{label:"Supadata",content:`
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
`},{label:"Tool Reference",content:`
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
`}],interactiveType:"custom"},{id:"build-webapp-ai",title:"Build Web App with AI",category:"",tags:[""],description:`
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
`,interactiveType:"custom"},{id:"ai-engineering",title:"AI Engineering",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:0.75rem; line-height:1.75;">AI Engineering refers to the process of building applications on top of foundation models.</p>
<p style="margin-bottom:1rem; line-height:1.75;">The model as a service makes it easier to leverage AI to build applications. Models are exposed via APIs that receive user queries and return model outputs.
Without these APIs, using an AI model required the infrastructure to host and serve this model. These APIs give you access to powerful models via single API calls.</p>

`},{label:"Fundamental Building Blocks",content:`

This page is currently under development. Please check back soon.

`}],interactiveType:"custom"},{id:"build-app-skill-mcp",title:"Build App with Agent Skills + MCP",category:"Tutorial",tags:["Agentic","Firebase","GitHub"],tabs:[{label:"Overview",content:`
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

  <div style="padding: 1rem 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px;">
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Claude Code + <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.2); border-radius: 4px; font-size: 0.9em;">frontend-design</code> skill</p>
    <p style="margin: 0; line-height:1.65; color: var(--text-secondary); font-size: 0.95rem;">The AI coding agent that writes and refines the app UI. The <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.2); border-radius: 4px;">frontend-design</code> skill — installed to <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.2); border-radius: 4px;">~/.claude/skills</code> — instructs Claude to produce distinctive, production-grade interfaces instead of generic AI-slop designs.</p>
  </div>

  <div style="padding: 1rem 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px;">
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Google Antigravity (AI Coding Agent)</p>
    <p style="margin: 0; line-height:1.65; color: var(--text-secondary); font-size: 0.95rem;">Handles the broader coding tasks and is connected to the <strong>Firebase MCP</strong> — which lets it create a real Firebase project, configure Firestore as our URL data store, and set up cloud security rules, all through natural language. No Firebase console wrestling required.</p>
  </div>

  <div style="padding: 1rem 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid #f59e0b; border-radius: 12px;">
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Gemini CLI</p>
    <p style="margin: 0; line-height:1.65; color: var(--text-secondary); font-size: 0.95rem;">Used to install the <strong>Firebase extension</strong> and the <strong>Superpowers extension</strong> — composable skill bundles that get automatically invoked during app development to handle deployments, git workflows, and more.</p>
  </div>

</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">By the end of this tutorial, you'll have a fully functional ZenShelf app running in the cloud — and a repeatable workflow for shipping any idea using AI agents, skills, and MCP servers.</p>
</div>
`},{label:"1. Setup",content:`
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
  <img src="/knowledgelab/images/skill3.png" alt="Terminal Skills Placement" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
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

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid #f59e0b; border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">⚠️ Manual step required — set the Claude Skills path in Antigravity</p>
  <p style="margin-bottom: 0.75rem; line-height: 1.75; color: var(--text-secondary);">Antigravity needs to know where your Claude skills live. Open <strong>Antigravity</strong>, go to <strong>Settings → Antigravity settings → Customizations → Skills custom path</strong>, and set the path to:</p>
  <code style="display: block; padding: 0.75rem 1rem; background: rgba(0,0,0,0.15); border-radius: 6px; font-family: monospace; font-size: 0.9rem; color: var(--code-text);">~/.claude/skills</code>
</div>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">

<img src="/knowledgelab/images/anti-mcp.png" alt="ZenShelf App Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid #f59e0b; border-radius: 12px; margin: 1.25rem 0;">
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
`},{label:"2. Build",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[3-Stage Development]</strong>

<p style="margin-bottom:0.5rem; font-weight: 600;">Phase 1: The Soul (Logic)</p>
<p style="color: var(--text-secondary); margin-bottom:0.5rem;">Paste this into Antigravity:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem; font-family: monospace; color: var(--code-text);">I want to build a 'ZenShelf' React application using Vite. Use Lucide icons. The app is a URL tracker where users can save links, descriptions, status, categories, and priority levels. Use local storage for now.</code>

<p style="margin-bottom:0.5rem; font-weight: 600;">Phase 2: The Vessel (Design)</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem; font-family: monospace; color: var(--code-text);">Now, give ZenShelf a 'Zen' aesthetic. Use vanilla CSS, high-end dark mode, glassmorphism, and smooth micro-animations. Make it mobile-responsive with a card layout.</code>

<p style="margin-bottom:0.5rem; font-weight: 600;">Phase 3: The Cloud (Firebase)</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--code-text);">/firebase_init. Create 'ZenShelf Tracker'. Replace local storage with Cloud Firestore. Setup security rules and Google Sign-In.</code>
`},{label:"3. Deploy",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Automated Deployment]</strong>

<p style="margin-bottom:0.5rem;"><strong>Step 1: Manual Fix</strong></p>
<p style="color: var(--text-secondary); margin-bottom:1rem;">Go to Firebase Console > Authentication and enable <strong>Google</strong> sign-in provider manually.</p>

<p style="margin-bottom:0.5rem;"><strong>Step 2: Initialize Git</strong></p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem; font-family: monospace; color: var(--code-text);">git init
git remote add origin https://github.com/&lt;user&gt;/repo.git
git add . && git commit -m "initial release" && git push -u origin main</code>

<p style="margin-bottom:0.5rem;"><strong>Step 3: Setup CD</strong></p>
<p style="color: var(--text-secondary);">Ask Antigravity:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--code-text);">Create a GitHub Actions workflow that automatically builds and deploys my app to GitHub Pages whenever I push to main.</code>
`},{label:"Concepts",content:`
<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
  <div style="padding: 1rem; background: var(--surface-color); border-radius: 12px; border-left: 4px solid var(--accent-primary);">
    <strong style="display:block; margin-bottom:0.5rem;">Agent Skills</strong>
    <p style="font-size: 0.9rem; color: var(--text-secondary);">The "Brain" – providing authoritative expertise on specific tech (like Firebase) to ensure best practices.</p>
  </div>
  <div style="padding: 1rem; background: var(--surface-color); border-radius: 12px; border-left: 4px solid var(--accent-secondary);">
    <strong style="display:block; margin-bottom:0.5rem;">MCP Servers</strong>
    <p style="font-size: 0.9rem; color: var(--text-secondary);">The "Hands" – bridging the AI to the real world to create databases, repositories, and UI designs.</p>
  </div>
</div>
`}],interactiveType:"custom"}],n={isActive:!1,isLocked:!1,isMinimized:!1,timer:{duration:1500,remaining:1500,interval:null,isRunning:!1},stats:{streak:0,cardsToday:0,focusMinutes:0,lastStudyDate:null}},z={activeConcept:null,init(){this.renderSidebar(),this.setupEventListeners(),this.initTheme(),this.initStudyMode(),this.initTechStackModal();const t=window.location.hash.substring(1);t&&v.some(e=>e.id===t)?this.selectConcept(t):this.renderWelcome(),P(document.getElementById("constellation-bg"))},renderWelcome(){document.getElementById("constellation-bg").style.display="";const t=this.getConceptOfTheDay(),e=document.getElementById("content-area");e.innerHTML=`
      <div class="cotd-ticker">
        <span class="cotd-label">Skill of the Day</span>
        <div class="ticker-track">
          <span class="ticker-text">${t.title}</span>
        </div>
      </div>
      <div class="welcome-card">
        <h2>Welcome to Knowledge Lab</h2>
        <p>Select a tutorial from the sidebar to begin your interactive learning journey.</p>
      </div>
    `,e.querySelector(".cotd-ticker").addEventListener("click",()=>{this.selectConcept(t.id)});const r=e.querySelector(".ticker-text"),a=e.querySelector(".ticker-track").offsetWidth;r.style.setProperty("--start-x",a+"px")},getConceptOfTheDay(){const t=Math.floor(Date.now()/864e5);return v[t%v.length]},initTheme(){localStorage.getItem("theme")==="light"&&(document.documentElement.classList.add("light-mode"),document.querySelector("#theme-toggle .icon").textContent="☀️"),localStorage.getItem("sidebar")==="collapsed"&&document.getElementById("app").classList.add("sidebar-collapsed")},renderSidebar(){const t=document.getElementById("concept-list");t.innerHTML=v.map(e=>`
      <li class="nav-item" data-id="${e.id}">${e.title}</li>
    `).join("")},isMobile(){return window.innerWidth<=640},closeMobileSidebar(){document.getElementById("app").classList.remove("sidebar-open")},setupEventListeners(){document.getElementById("concept-list").addEventListener("click",t=>{if(t.target.classList.contains("nav-item")){const e=t.target.dataset.id;this.isMobile()&&this.closeMobileSidebar(),this.selectConcept(e)}}),document.getElementById("sidebar-toggle").addEventListener("click",()=>{const t=document.getElementById("app");if(this.isMobile())t.classList.toggle("sidebar-open");else{const e=t.classList.toggle("sidebar-collapsed");localStorage.setItem("sidebar",e?"collapsed":"open")}}),document.getElementById("app").addEventListener("click",t=>{this.isMobile()&&t.target===document.getElementById("app")&&this.closeMobileSidebar()}),document.getElementById("theme-toggle").addEventListener("click",()=>{const t=document.documentElement.classList.toggle("light-mode"),e=document.querySelector("#theme-toggle .icon");e.textContent=t?"☀️":"🌙",localStorage.setItem("theme",t?"light":"dark")}),document.getElementById("home-link").addEventListener("click",()=>{this.activeConcept=null,document.querySelectorAll(".nav-item").forEach(t=>t.classList.remove("active")),this.isMobile()&&this.closeMobileSidebar(),this.renderWelcome()}),document.getElementById("concept-search").addEventListener("input",t=>{const e=t.target.value.toLowerCase();document.querySelectorAll(".nav-item").forEach(a=>{const o=a.textContent.toLowerCase();a.style.display=o.includes(e)?"block":"none"})}),window.addEventListener("hashchange",()=>{const t=window.location.hash.substring(1);t&&v.some(e=>e.id===t)?(!this.activeConcept||this.activeConcept.id!==t)&&this.selectConcept(t):t||(this.activeConcept=null,document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("active")),this.renderWelcome())})},selectConcept(t){const e=v.find(a=>a.id===t);if(!e)return;window.location.hash!==`#${t}`&&(window.location.hash=t),document.getElementById("constellation-bg").style.display="none",this.activeConcept=e,document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active"));const r=document.querySelector(`[data-id="${t}"]`);r&&r.classList.add("active"),this.renderConcept(e)},renderConcept(t){const e=document.getElementById("content-area");if(t.tabs&&t.tabs.length>0){const r=t.tabs.map((o,i)=>`<button class="tutorial-tab-btn${i===0?" active":""}" data-tab="${i}">${o.label}</button>`).join(""),a=t.tabs.map((o,i)=>`<div class="tutorial-tab-panel${i===0?" active":""}" data-panel="${i}">
          <div class="concept-content" id="concept-description-${i}">
            ${o.content}
          </div>
        </div>`).join("");e.innerHTML=`
        <article class="concept-card concept-card--tabs">
          <nav class="tutorial-tabs" role="tablist">${r}</nav>
          <div class="tutorial-tab-content">${a}</div>
        </article>
      `,this.initTabs(),t.tabs.forEach((o,i)=>{const d=document.getElementById(`concept-description-${i}`);d&&this.attachCopyButtonsTo(d)})}else e.innerHTML=`
        <article class="concept-card">
          <h2 class="concept-title">${t.title}</h2>
          <div class="concept-meta">
            <span class="tag">${t.category}</span>
            ${t.tags.map(r=>`<span class="tag">${r}</span>`).join("")}
          </div>
          <div class="concept-content" id="concept-description">
            ${(t.description||"Add your description here...").split(`

`).map(r=>`<p>${r}</p>`).join("")}
          </div>
        </article>
      `,this.attachCopyButtons()},initTabs(){const t=document.querySelectorAll(".tutorial-tab-btn"),e=document.querySelectorAll(".tutorial-tab-panel"),r=a=>{t.forEach(o=>o.classList.remove("active")),e.forEach(o=>o.classList.remove("active")),t[a].classList.add("active"),e[a].classList.add("active"),t[a].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})};t.forEach(a=>{a.addEventListener("click",()=>r(Number(a.dataset.tab)))}),document.querySelectorAll("[data-goto-tab]").forEach(a=>{a.addEventListener("click",o=>{o.preventDefault(),r(Number(a.dataset.gotoTab))})})},attachCopyButtons(){const t=document.getElementById("concept-description");t&&this.attachCopyButtonsTo(t)},attachCopyButtonsTo(t){if(!t)return;t.querySelectorAll("code").forEach(r=>{if(!(r.style.display==="block"||r.textContent.includes(`
`)))return;const o=document.createElement("div");o.className="code-wrapper",r.parentNode.insertBefore(o,r),o.appendChild(r);const i=document.createElement("button");i.className="copy-btn",i.setAttribute("title","Copy to clipboard");const d='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',m='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';i.innerHTML=d,o.appendChild(i),i.addEventListener("click",()=>{const s=r.textContent.replace(/^❯\s+/,"");navigator.clipboard.writeText(s).then(()=>{i.innerHTML=m,i.classList.add("copied"),setTimeout(()=>{i.innerHTML=d,i.classList.remove("copied")},2e3)})})})},initTechStackModal(){const t=document.getElementById("tech-stack-btn"),e=document.getElementById("tech-stack-overlay"),r=document.getElementById("close-tech-stack"),a=document.getElementById("tech-stack-list");if(!t||!e||!r||!a)return;const o={...S.dependencies||{},...S.devDependencies||{}},i=[{name:"Vanilla JavaScript",desc:"Core application logic, ECMAScript modules, DOM manipulation, and dynamic rendering.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M14.5 9h-5l-.5-5h7l-.5 5zm-5 4h5l-.5 4.5-2 1.5-2-1.5-.2-2h2.2l.1 1.2 1 .8 1-.8.2-1.2h-3.8z"></path></svg>'},{name:"Vanilla CSS3 & HTML5",desc:"Custom glassmorphism styling, responsive grid layout, and semantic structure.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M15 9h-6l-.5-4h7.5l-.5 4zm-6 4h6l-.5 4.5-2.5 1.5-2.5-1.5-.2-2h2.2l.1 1.2 1.2.8 1.2-.8.2-1.2h-4.6z"></path></svg>'},{name:"HTML5 Canvas API",desc:"Custom performant animations including the Neural Constellation and Zen Flow backgrounds.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.268-.652-.053-.877.215-.225.542-.31 1.051-.31h2.438c2.66 0 4.853-2.192 4.853-4.853C21.5 6.756 17.244 2 12 2z"></path></svg>'}];o.vite&&i.push({name:"Vite ("+o.vite.replace(/[\^\~]/,"")+")",desc:"Next-generation frontend tooling providing ultra-fast builds and Hot Module Replacement.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'}),i.push({name:"GitHub Pages",desc:"Automated CI/CD deployment via GitHub Actions pipeline using the deployed build.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'}),a.innerHTML=i.map(c=>`
      <li class="tech-stack-item">
        <div class="tech-stack-icon-wrapper">
          ${c.icon}
        </div>
        <div class="tech-stack-info">
          <span class="tech-stack-name">${c.name}</span>
          <span class="tech-stack-desc">${c.desc}</span>
        </div>
      </li>
    `).join("");const d=()=>{e.classList.remove("hidden"),e.offsetWidth,e.classList.add("active")},m=()=>{e.classList.remove("active"),setTimeout(()=>{e.classList.contains("active")||e.classList.add("hidden")},300)};t.addEventListener("click",d),r.addEventListener("click",m),e.addEventListener("click",c=>{c.target===e&&m()})},initStudyMode(){this.loadStudyStats(),this.updateStudyMetrics(),this.initZenFlow(),document.getElementById("study-mode-btn").addEventListener("click",()=>{this.toggleStudyMode()}),document.getElementById("exit-study").addEventListener("click",()=>{this.toggleStudyMode()}),document.getElementById("timer-toggle").addEventListener("click",()=>{this.toggleTimer()}),document.getElementById("timer-reset").addEventListener("click",()=>{this.resetTimer()}),document.querySelectorAll(".preset-btn").forEach(t=>{t.addEventListener("click",e=>{const r=parseInt(e.target.dataset.time);this.setTimerDuration(r)})}),document.getElementById("minimize-study").addEventListener("click",()=>{this.minimizeStudy()}),document.getElementById("expand-study").addEventListener("click",()=>{this.expandStudy()}),document.getElementById("mini-stop-btn").addEventListener("click",()=>{this.expandStudy(),this.toggleStudyMode()}),document.getElementById("lock-screen-btn").addEventListener("click",()=>{this.lockScreen()}),document.getElementById("unlock-screen-btn").addEventListener("click",()=>{this.unlockScreen()})},loadStudyStats(){const t=localStorage.getItem("studyStats");t&&(n.stats=JSON.parse(t),this.updateStreak())},saveStudyStats(){localStorage.setItem("studyStats",JSON.stringify(n.stats))},updateStreak(){const t=new Date().toDateString(),e=n.stats.lastStudyDate;if(e){const r=new Date(e),a=new Date;a.setDate(a.getDate()-1),r.toDateString()===a.toDateString()||r.toDateString()!==t&&(n.stats.streak=0)}},updateStudyMetrics(){const t=document.getElementById("study-streak"),e=document.getElementById("study-cards"),r=document.getElementById("study-minutes");t&&(t.textContent=n.stats.streak),e&&(e.textContent=n.stats.cardsToday),r&&(r.textContent=n.stats.focusMinutes)},toggleStudyMode(){n.isActive=!n.isActive;const t=document.getElementById("study-mode-overlay"),e=document.querySelector(".zen-flow-bg");if(n.isActive){if(n.isMinimized){this.expandStudy();return}t.classList.remove("hidden"),t.classList.add("active"),e.style.opacity="1",this.updateStreak(),this.saveStudyStats()}else this.expandStudy(),t.classList.remove("active"),e.style.opacity="0",this.resetTimer(),setTimeout(()=>{t.classList.add("hidden")},500)},setTimerDuration(t){n.timer.duration=t*60,n.timer.remaining=t*60,document.querySelectorAll(".preset-btn").forEach(e=>{e.classList.toggle("active",parseInt(e.dataset.time)===t)}),this.updateTimerDisplay()},toggleTimer(){n.timer.isRunning?this.pauseTimer():this.startTimer()},startTimer(){n.timer.isRunning=!0,document.getElementById("timer-toggle").textContent="Pause",document.querySelector(".timer-wrapper").classList.add("active"),document.getElementById("lock-screen-btn").classList.remove("hidden"),n.timer.interval=setInterval(()=>{n.timer.remaining--,this.updateTimerDisplay(),n.timer.remaining<=0&&this.completeTimer()},1e3)},pauseTimer(){n.timer.isRunning=!1,document.getElementById("timer-toggle").textContent="Resume",document.querySelector(".timer-wrapper").classList.remove("active"),document.getElementById("lock-screen-btn").classList.add("hidden"),clearInterval(n.timer.interval),n.isLocked&&this.unlockScreen()},resetTimer(){this.pauseTimer(),n.timer.remaining=n.timer.duration,document.getElementById("timer-toggle").textContent="Start Focus",document.getElementById("timer-status").textContent="Ready to focus",document.getElementById("lock-screen-btn").classList.add("hidden"),this.updateTimerDisplay()},completeTimer(){this.pauseTimer(),document.getElementById("timer-status").textContent="Focus complete! Great work!",n.stats.focusMinutes+=Math.floor(n.timer.duration/60),this.updateStreakDate(),this.saveStudyStats(),this.updateStudyMetrics(),"Notification"in window&&Notification.permission==="granted"&&new Notification("Focus Session Complete",{body:"Great job! Take a break.",icon:"/vite.svg"})},updateTimerDisplay(){const t=Math.floor(n.timer.remaining/60),e=n.timer.remaining%60,r=`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`;document.getElementById("timer-minutes").textContent=t.toString().padStart(2,"0"),document.getElementById("timer-seconds").textContent=e.toString().padStart(2,"0"),document.getElementById("mini-timer-display").textContent=r;const a=n.timer.remaining/n.timer.duration*100;document.getElementById("mini-timer-progress").style.width=`${a}%`;const o=n.timer.remaining/n.timer.duration,d=2*Math.PI*130*(1-o);document.getElementById("timer-progress").style.strokeDashoffset=d,n.timer.isRunning?document.getElementById("timer-status").textContent="Stay focused...":document.getElementById("timer-status").textContent="Ready to focus"},minimizeStudy(){n.isMinimized=!0;const t=document.getElementById("study-mode-overlay"),e=document.querySelector(".zen-flow-bg");t.classList.remove("active"),e.style.opacity="0",setTimeout(()=>t.classList.add("hidden"),500),document.getElementById("mini-timer").classList.remove("hidden");const r=Math.floor(n.timer.remaining/60),a=n.timer.remaining%60;document.getElementById("mini-timer-display").textContent=`${r.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`;const o=n.timer.remaining/n.timer.duration*100;document.getElementById("mini-timer-progress").style.width=`${o}%`},expandStudy(){if(n.isMinimized=!1,document.getElementById("mini-timer").classList.add("hidden"),n.isActive){const t=document.getElementById("study-mode-overlay"),e=document.querySelector(".zen-flow-bg");t.classList.remove("hidden"),t.classList.add("active"),e.style.opacity="1"}},lockScreen(){n.isLocked=!0,document.getElementById("study-mode-overlay").classList.add("study-locked"),document.getElementById("unlock-screen-overlay").classList.remove("hidden")},unlockScreen(){n.isLocked=!1,document.getElementById("study-mode-overlay").classList.remove("study-locked"),document.getElementById("unlock-screen-overlay").classList.add("hidden")},updateStreakDate(){const t=new Date().toDateString(),e=n.stats.lastStudyDate;if(e!==t){const r=new Date;r.setDate(r.getDate()-1),e===r.toDateString()?n.stats.streak++:n.stats.streak=1,n.stats.lastStudyDate=t}},initZenFlow(){const t=document.getElementById("zen-flow-canvas"),e=t.getContext("2d");let r,a,o=[];const i=()=>{r=t.width=window.innerWidth,a=t.height=window.innerHeight,d()},d=()=>{o=[];const c=30;for(let s=0;s<c;s++)o.push({x:Math.random()*r,y:Math.random()*a,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,radius:Math.random()*80+40,hue:Math.random()*60+170,alpha:Math.random()*.1+.05,pulse:Math.random()*Math.PI*2})},m=()=>{if(!n.isActive){requestAnimationFrame(m);return}e.clearRect(0,0,r,a);const c=document.documentElement.classList.contains("light-mode");if(o.forEach(s=>{s.x+=s.vx,s.y+=s.vy,s.x<-s.radius&&(s.x=r+s.radius),s.x>r+s.radius&&(s.x=-s.radius),s.y<-s.radius&&(s.y=a+s.radius),s.y>a+s.radius&&(s.y=-s.radius),s.pulse+=.02;const u=e.createRadialGradient(s.x,s.y,0,s.x,s.y,s.radius),b=s.radius*(1+Math.sin(s.pulse)*.1);c?(u.addColorStop(0,`hsla(40, 30%, 70%, ${s.alpha*.5})`),u.addColorStop(.5,`hsla(40, 20%, 80%, ${s.alpha*.2})`),u.addColorStop(1,"transparent")):(u.addColorStop(0,`hsla(${s.hue}, 70%, 50%, ${s.alpha})`),u.addColorStop(.5,`hsla(${s.hue}, 70%, 50%, ${s.alpha*.3})`),u.addColorStop(1,"transparent")),e.beginPath(),e.arc(s.x,s.y,b,0,Math.PI*2),e.fillStyle=u,e.fill()}),n.timer.isRunning){const s=Date.now()/1e3,u=150+Math.sin(s*.5)*20,b=e.createRadialGradient(r/2,a/2,0,r/2,a/2,u);c?(b.addColorStop(0,"hsla(40, 30%, 75%, 0.05)"),b.addColorStop(1,"transparent")):(b.addColorStop(0,"hsla(180, 70%, 50%, 0.03)"),b.addColorStop(1,"transparent")),e.beginPath(),e.arc(r/2,a/2,u,0,Math.PI*2),e.fillStyle=b,e.fill()}requestAnimationFrame(m)};window.addEventListener("resize",i),i(),m()}};document.addEventListener("DOMContentLoaded",()=>z.init());
