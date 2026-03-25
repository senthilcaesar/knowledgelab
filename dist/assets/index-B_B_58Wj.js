(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const T=70,x=160,k=120;class E{constructor(e,r){this.width=e,this.height=r,this.x=Math.random()*e,this.y=Math.random()*r,this.vx=(Math.random()-.5)*.4,this.vy=(Math.random()-.5)*.4,this.baseRadius=1.5+Math.random()*2,this.pulsePhase=Math.random()*Math.PI*2,this.pulseSpeed=.015+Math.random()*.025,this.isHub=Math.random()<.12,this.isHub&&(this.baseRadius*=2)}update(e){this.pulsePhase+=this.pulseSpeed;const r=this.x-e.x,a=this.y-e.y,o=Math.hypot(r,a);if(o<k&&o>0){const d=((k-o)/k)**2*3;this.vx+=r/o*d*.08,this.vy+=a/o*d*.08}this.vx*=.975,this.vy*=.975;const i=Math.hypot(this.vx,this.vy);i>1.5&&(this.vx=this.vx/i*1.5,this.vy=this.vy/i*1.5),this.x+=this.vx,this.y+=this.vy,this.x<0&&(this.x=this.width),this.x>this.width&&(this.x=0),this.y<0&&(this.y=this.height),this.y>this.height&&(this.y=0)}draw(e,r){const a=.5+.5*Math.sin(this.pulsePhase),o=this.baseRadius*(1+a*.6),i=(this.isHub?.7:.4)+a*.4,d=r?`rgba(176, 141, 87, ${i})`:this.isHub?`rgba(180, 100, 255, ${i})`:`rgba(0, 242, 255, ${i})`,p=r?`rgba(176, 141, 87, ${a*.12})`:this.isHub?`rgba(130, 0, 255, ${a*.1})`:`rgba(0, 242, 255, ${a*.1})`;e.beginPath(),e.arc(this.x,this.y,o*5,0,Math.PI*2),e.fillStyle=p,e.fill(),e.beginPath(),e.arc(this.x,this.y,o,0,Math.PI*2),e.fillStyle=d,e.fill()}}class M{constructor(e,r,a,o,i){this.x1=e,this.y1=r,this.x2=a,this.y2=o,this.progress=0,this.speed=.02+Math.random()*.03,this.isLight=i,this.alive=!0}update(){this.progress+=this.speed,this.progress>=1&&(this.alive=!1)}draw(e){const r=this.x1+(this.x2-this.x1)*this.progress,a=this.y1+(this.y2-this.y1)*this.progress,o=1-this.progress;e.beginPath(),e.arc(r,a,3,0,Math.PI*2),e.fillStyle=this.isLight?`rgba(212, 160, 23, ${o})`:`rgba(255, 255, 255, ${o})`,e.fill()}}function L(t){const e=t.getContext("2d");let r=0,a=0,o=[],i=[],d=null;const p={x:-9999,y:-9999};let c=0;function l(){r=t.width=window.innerWidth,a=t.height=window.innerHeight,o=Array.from({length:T},()=>new E(r,a))}function u(m){if(c--,c>0)return;c=30+Math.floor(Math.random()*60);const n=[...o].sort(()=>Math.random()-.5);for(let y=0;y<n.length-1;y++){const h=n[y],g=n[y+1];if(Math.hypot(h.x-g.x,h.y-g.y)<x){i.push(new M(h.x,h.y,g.x,g.y,m));return}}}function b(m,n,y,h){const g=(1-y/x)*(h?.25:.35),v=e.createLinearGradient(m.x,m.y,n.x,n.y),P=h?`rgba(176,141,87,${g*1.5})`:m.isHub?`rgba(150,50,255,${g*1.5})`:`rgba(0,242,255,${g*1.5})`,A=h?`rgba(122,106,83,${g})`:n.isHub?`rgba(150,50,255,${g})`:`rgba(0,200,220,${g})`;v.addColorStop(0,P),v.addColorStop(1,A),e.beginPath(),e.moveTo(m.x,m.y),e.lineTo(n.x,n.y),e.strokeStyle=v,e.lineWidth=h?.6:.8,e.stroke()}function w(){const m=document.documentElement.classList.contains("light-mode");e.clearRect(0,0,r,a);for(let n=0;n<o.length;n++){o[n].update(p);for(let y=n+1;y<o.length;y++){const h=o[n].x-o[y].x,g=o[n].y-o[y].y,v=Math.hypot(h,g);v<x&&b(o[n],o[y],v,m)}}o.forEach(n=>n.draw(e,m)),u(m),i=i.filter(n=>n.alive),i.forEach(n=>{n.update(),n.draw(e)}),d=requestAnimationFrame(w)}function I(){cancelAnimationFrame(d),window.removeEventListener("resize",l),window.removeEventListener("mousemove",C)}function C(m){p.x=m.clientX,p.y=m.clientY}return window.addEventListener("resize",l),window.addEventListener("mousemove",C),l(),w(),{destroy:I}}const F={vite:"^7.3.1"},z={three:"^0.183.2"},S={devDependencies:F,dependencies:z},j={id:"claude-skills-tutorial",title:"Claude Skills",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;">Whether you're a complete beginner looking to build your first website, or an experienced developer looking to speed up your workflow, getting started with Claude Skills is easier than you think. In this simple guide, we'll watch Claude Skills in action as it guides us through building a website, taking our input at each step. Let's go!</p>

<p style="margin-bottom:1rem; line-height:1.75;">A skill is a set of instructions — packaged as a simple folder — that teaches Claude how to handle specific tasks or workflows.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Skills are powerful when you have repeatable workflows: generating frontend designs from specs, conducting research with consistent methodology or creating documents that follow your team's style guide. For more details on Skills check out the <a href="#" data-goto-tab="6" style="color: var(--accent-primary); text-decoration: underline;">resources section</a>.</p>
<p style="line-height:1.75;">Instead of repeating instructions every time you ask Claude to review a pull request or write a commit message, you write a skill once and Claude applies it whenever the task comes up.</p>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Step 1 – Setup <span>→</span>
  </a>
</div>
`},{label:"Step 1 – Setup",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 1 – Download & Install the Skills Repo]</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;">To kick things off, clone the Claude Skills repo and copy the skill folders into <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/skills</code>:</p>

<p style="margin: 0.5rem 0; line-height:1.75;">If the directory does not exist yet, create it first:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: monospace; color: var(--code-text);">mkdir -p ~/.claude/skills</code>

<p style="margin: 0.5rem 0; line-height:1.75;">Then run:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">git clone https://github.com/anthropics/skills.git
cp -R skills/* ~/.claude/skills/</code>

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

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Step 2 – Launch Claude <span>→</span>
  </a>
</div>
`},{label:"Step 2 – Launch Claude",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 2 – Launch Claude in Your Terminal]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">If you are new to Claude Code, please install it by following the instructions at <a href="https://code.claude.com/docs/en/quickstart" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://code.claude.com/docs/en/quickstart</a>.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Usually, you can launch it by simply typing <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">claude</code> in your terminal. For this tutorial, however, I am launching Claude using an open source free model via Ollama with this command:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">ollama launch claude --model glm-4.7:cloud</code>

<p style="margin: 0.5rem 0; line-height:1.75;"><em>Note: Since I am practicing and learning to use Claude Code, I don't want to pay for an Anthropic API key yet. Because of this, I will be launching Claude using an open source free model via Ollama!</em></p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/skill1.png" alt="Terminal Skills Execution" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 1
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Step 3 – Call a Skill <span>→</span>
  </a>
</div>
`},{label:"Step 3 – Call a Skill",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 3 – Call the Skill]</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;">To know what skills are available, just ask Claude in the terminal:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">What skills are available?</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">There are two ways to call a skill:</p>

<p style="margin: 0.75rem 0 0.25rem; font-weight: 600; color: var(--text-primary);">① Slash command — call it explicitly by name</p>
<p style="margin: 0 0 0.5rem; line-height:1.75; color: var(--text-secondary);">Type the skill's name prefixed with a <code style="padding: 0.15rem 0.35rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/</code> and Claude invokes it immediately:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">/frontend-design</code>

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

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 2
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Step 4 – Create a Skill <span>→</span>
  </a>
</div>
`},{label:"Step 4 – Create a skill",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 4 – Create Your Own Skill]</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Building your first skill is the best way to understand how Claude thinks. Let's create a <strong>Python Code Reviewer</strong> skill.</p>

<strong style="display:block; margin-top: 1.5rem; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 1 — Create the directory structure</strong>
<p style="margin-bottom:0.5rem;">Run this in your terminal to create the skill folder:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">mkdir -p ~/.claude/skills/py-review</code>

<strong style="display:block; margin-top: 1.5rem; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 2 — Create the SKILL.md file</strong>
<p style="margin-bottom:0.5rem;">Create the manifest file with instructions for Claude:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;">cat > ~/.claude/skills/py-review/SKILL.md << 'EOF'
---
name: py-review
description: Reviews Python code for style, bugs, and best practices
---
You are reviewing Python code. For any file or snippet provided via $ARGUMENTS:
1. Check for PEP 8 style violations
2. Identify potential bugs (off-by-one, mutable defaults, etc.)
3. Suggest more Pythonic rewrites if applicable
4. Check for missing type hints
5. Report: LGTM / Minor issues / Major issues
Be concise — use a bullet per issue, not paragraphs.
EOF</code>

<strong style="display:block; margin-top: 1.5rem; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 3 — Test it inside Claude Code</strong>
<p style="margin-bottom:0.5rem;">Launch Claude and call your new skill explicitly:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">claude  # open Claude Code
# then type:
/py-review utils/parser.py</code>

<div style="padding: 1rem; background: rgba(0, 242, 255, 0.05); border: 1px solid rgba(0, 242, 255, 0.1); border-radius: 8px; margin: 1.5rem 0;">
  <p style="margin:0; line-height:1.6;">Claude will now read <code style="color: var(--code-text);">utils/parser.py</code> and give you a structured review.</p>
</div>

<p style="margin-top: 1rem; line-height:1.75;">
  <strong>Pro tip:</strong> Add a <code style="color: var(--code-text);">scripts/</code> subfolder in your skill directory for Python helper scripts. Claude will run them externally — only the output enters the context window, not the script itself.
</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 3
  </a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">
    Next: Step 5 – Find Skills <span>→</span>
  </a>
</div>
`},{label:"Step 5 – Find Skills",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 5 – Where to Find Skills]</strong>

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
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/sickn33/antigravity-awesome-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">antigravity-awesome-skills</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/affaan-m/everything-claude-code" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">everything-claude-code</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/ComposioHQ/awesome-claude-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">awesome-claude-skills</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/obra/superpowers" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">superpowers</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/PleasePrompto/notebooklm-skill" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">notebooklm-skill</a></li>
    </ul>
  </li>
</ul>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 4
  </a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">
    Next: Resources <span>→</span>
  </a>
</div>
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
`}],interactiveType:"custom"},B={id:"claude-mcp",title:"Claude MCP",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;">The Model Context Protocol (<a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">MCP</a>) is an open standard that enables Claude to interact with external tools and data sources. This modular architecture allows you to extend Claude's capabilities with specialized services.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;">In this section, we will configure Claude to connect to <strong>three</strong> powerful MCP servers:</p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.5rem;"><strong>21st.dev Magic:</strong> Create modern, production-ready UI components.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Supadata:</strong> Advanced web and video scraping capabilities.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Stitch:</strong> Generates UIs for mobile and web applications.</li>
</ul>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: 21st.dev Magic <span>→</span>
  </a>
</div>
`},{label:"21st.dev Magic",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">21st.dev Magic</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">A tool that helps developers create beautiful, modern UI components instantly through natural language descriptions.</p>

<div style="margin: 1rem 0; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px;">
  <p style="margin-bottom:0.5rem;"><strong>Official Link (Get your API key here):</strong></p>
  <a href="https://21st.dev/magic" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://21st.dev/magic</a>
</div>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Installation Command:</strong></p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text-secondary); white-space: pre-wrap;">claude mcp add magic --scope user --env API_KEY="YOUR_API_KEY" -- npx -y @21st-dev/magic@latest</code>
<p style="margin-top: 0.5rem; margin-bottom: 0.5rem; line-height: 1.75; color: var(--text-secondary);">After installation, you can verify your configuration by reading the <code>~/.claude.json</code> file in your home directory. It should contain the following MCP server entries:</p>

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

<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Once installed, try the following example prompt. In the below image, you can see the 21st.dev MCP server is invoked.</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">create a modern navigation bar with responsive design</code>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/21stdev.png" alt="21st.dev Magic Interface" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Supadata <span>→</span>
  </a>
</div>
`},{label:"Supadata",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Supadata MCP</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">The Supadata MCP server enables powerful web and video scraping capabilities directly within AI development environments like Claude. This open-source integration allows AI models to extract transcripts, scrape web pages, and crawl entire websites to gather context.</p>

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

<p style="margin-top:1rem; margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Once the installation is complete, try pasting a YouTube video URL like the one below in your Claude terminal. You will see the Supadata tool automatically invoked to extract the transcript:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">https://youtu.be/Dp6u0pel-Rs</code>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0; align-items: center;">
  <img src="/knowledgelab/images/supa1.png" alt="Supadata Step 1" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
  <img src="/knowledgelab/images/supa2.png" alt="Supadata Step 2" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
  <img src="/knowledgelab/images/supa3.png" alt="Supadata Step 3" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-top:1rem; margin-bottom:0.5rem;"><strong>Documentation & Integration:</strong></p>
<a href="https://docs.supadata.ai/integrations/mcp" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://docs.supadata.ai/integrations/mcp</a>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: 21st.dev Magic
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Stitch <span>→</span>
  </a>
</div>
`},{label:"Stitch",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Stitch MCP</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Stitch helps you generate polished UI concepts and app flows that you can bring directly into your Claude workflow.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">First, go to the Stitch website and get your API key:</p>
<p style="margin: 0 0 1rem; line-height:1.75;"><a href="https://stitch.withgoogle.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://stitch.withgoogle.com/</a></p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Installation Command:</strong></p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text-secondary); white-space: pre-wrap;">claude mcp add stitch --transport http https://stitch.googleapis.com/mcp --header "X-Goog-Api-Key: AQ.Ab8***********R_TsknDvKmw" -s user</code>

<p style="margin-bottom:0.75rem; line-height:1.75;">Once Stitch is connected, you can use it from Claude to explore and generate app ideas. For example, try a prompt like this in your Claude terminal:</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">Design a modern reading-list web app for saving articles and YouTube links. Create a clean dashboard, an add-link form, a category filter, and a mobile-friendly layout. Make it feel polished and production-ready.</code>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is especially useful when you want Claude to help generate the overall look and structure of a web app before you start refining the code.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Supadata
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Tool Reference <span>→</span>
  </a>
</div>
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

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Stitch
  </a>
</div>
`}],interactiveType:"custom"},_={id:"claude-code-uiux-21st-dev",title:"Claude UI Stack",category:"Tutorial",tags:["Claude Code","UI/UX","21st.dev"],tabs:[{label:"Overview",content:`
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
`},{label:"Install Claude Code",content:`
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
`},{label:"Install UI/UX + 21st.dev",content:`
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
`},{label:"Prompt Template",content:`
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
`}],interactiveType:"custom"},O={id:"build-webapp-ai",title:"Build Web App with AI",category:"",tags:[""],description:`
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
`,interactiveType:"custom"},R={id:"ai-engineering",title:"AI Engineering",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:0.75rem; line-height:1.75;">AI Engineering refers to the process of building applications on top of foundation models.</p>
<p style="margin-bottom:1rem; line-height:1.75;">The model as a service makes it easier to leverage AI to build applications. Models are exposed via APIs that receive user queries and return model outputs.
Without these APIs, using an AI model required the infrastructure to host and serve this model. These APIs give you access to powerful models via single API calls.</p>

`},{label:"Fundamental Building Blocks",content:`

This page is currently under development. Please check back soon.

`}],interactiveType:"custom"},U={id:"build-app-skill-mcp",title:"Agent Skills + MCP",category:"Tutorial",tags:["Agentic","Firebase","GitHub"],tabs:[{label:"Overview",content:`
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
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Claude Code + <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.2); border-radius: 4px; font-size: 0.9em;">frontend-design</code> skill</p>
    <p style="margin: 0; line-height: 1.65; color: var(--text-secondary); font-size: 0.95rem;">The AI coding agent that develops the app UI. The <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.2); border-radius: 4px;">frontend-design</code> skill — installed to <code style="padding: 0.15rem 0.35rem; background: rgba(0,0,0,0.2); border-radius: 4px;">~/.claude/skills</code> — instructs Claude to produce distinctive, production-grade interfaces instead of generic AI-slop designs.</p>
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

`},{label:"1. Setup",content:`
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

<p style="margin-bottom:0.5rem; line-height:1.75;">To kick things off, clone the Claude Skills repo and copy the skill folders into <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/skills</code>:</p>

<p style="margin: 0.5rem 0; line-height:1.75;">If the directory does not exist yet, create it first:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: monospace; color: var(--code-text);">mkdir -p ~/.claude/skills</code>

<p style="margin: 0.5rem 0; line-height:1.75;">Then run:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">git clone https://github.com/anthropics/skills.git
cp -R skills/* ~/.claude/skills/</code>

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
<p style="margin-bottom:0.75rem; line-height:1.75;">You can find more skills to use with Claude Code and Gemini at <a href="https://senthilcaesar.github.io/knowledgelab/#claude-skills-tutorial" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Skills Library</a> <strong style="color: var(--accent-primary); font-family: 'Fira Code', monospace; background: rgba(0, 242, 255, 0.1); padding: 0.1rem 0.4rem; border-radius: 4px; border: 1px solid rgba(0, 242, 255, 0.2); font-size: 0.85rem; vertical-align: middle; margin-left: 0.25rem;">Step 4 - Find Skills</strong></p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/claude-skills.png" alt="Terminal Skills Placement" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.5rem; line-height:1.75;">Skills load on demand — unlike <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> (which loads into every conversation) or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">slash commands</code> (which require explicit invocation).</p>


<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">1 — Install Gemini CLI &amp; Extensions</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">The <a href="https://geminicli.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Gemini CLI</a> brings terminal-based AI to your fingertips. Install it and add two extensions that power our workflow:</p>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Install globally with npm:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: monospace; color: var(--code-text);">npm install -g @google/gemini-cli</code>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Or install with Homebrew (macOS/Linux):</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: monospace; color: var(--code-text);">brew install gemini-cli</code>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Then install the extensions:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap;"># Install the Firebase extension for Gemini CLI
gemini extensions install https://github.com/gemini-cli-extensions/firebase/

# Install the Superpowers extension for Gemini CLI
gemini extensions install https://github.com/obra/superpowers</code>

<p style="margin-top:0.75rem; margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">The Firebase extension is updated frequently, so you should regularly update the installed version:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1.25rem; font-family: monospace; color: var(--code-text);">gemini extensions update firebase</code>

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
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Skills give the AI the expertise to write correct Firebase code — security rules, Firestore schema, Firestore database, auth setup, and deployment scripts. You can read more in the <a href="https://firebase.google.com/docs/ai-assistance/agent-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Firebase agent skills documentation</a>:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">npx skills add firebase/agent-skills</code>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 0.75rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">💡 Pro Tip: Inspect your skills</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.6;">You can always view your installed Gemini and Antigravity skills at these paths:</p>
  <ul style="margin: 0.4rem 0 0 1.25rem; color: var(--text-secondary); line-height: 1.6; font-family: monospace; font-size: 0.85rem;">
    <li>/Users/senthilpalanivelu/.gemini/skills</li>
    <li>/Users/senthilpalanivelu/.gemini/antigravity/skills</li>
  </ul>
</div>








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
`},{label:"2. Build",content:`
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

`},{label:"3. Cloud",content:`
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
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">⚠️ If you encounter any issue with <strong style="color: var(--text-primary);">Firestore project setup</strong>, don't worry — use <strong style="color: var(--text-primary);">Prompt 2</strong> below instead. It gives the AI explicit step-by-step MCP instructions to resolve it.</p>
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

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 2
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Step 4 – Deploy <span>→</span>
  </a>
</div>
`},{label:"4. Deploy",content:`
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

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Important Firebase step</p>
  <p style="margin: 0 0 0.75rem; color: var(--text-secondary); line-height: 1.75;">After the GitHub Actions deployment completes, go to your project in <strong style="color: var(--text-primary);">Google Firebase</strong>, then open <strong style="color: var(--text-primary);">Security → Authentication → Settings → Authorized domains</strong>.</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Click <strong style="color: var(--text-primary);">Add domain</strong>, enter <code style="padding: 0.1rem 0.35rem; background: var(--bg-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">&lt;your-github-username&gt;.github.io</code>, save it as an authorized domain in Firebase, and then visit your app.</p>
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
`},{label:"Bonus",content:`
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
  <img src="/knowledgelab/images/tech-stack.png" alt="Tech Stack Modal Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 4
  </a>
</div>


`}],interactiveType:"custom"},D={id:"claude-extension",title:"Claude Extension",category:"",tags:[],tabs:[{label:"Features",content:`
<style>
.cc-table-wrap { width:100%; margin-top:1.5rem; border-radius:12px; overflow: visible; }
.cc-table { width:100%; border-collapse:collapse; font-size:15px; font-family:'Outfit', sans-serif; line-height:1.5; table-layout:auto; letter-spacing:0.01em; }
.cc-table th { padding:12px 12px;text-align:left;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;font-size:12px;color:var(--text-secondary);border-bottom:1px solid var(--border-color);background:rgba(0,0,0,0.2) }
.cc-table td { padding:24px 12px;border-bottom:1px solid var(--border-color);vertical-align:top;color:var(--text-primary); }
.cc-table td p { margin: 0; padding: 0; line-height: 1.5; }
.cc-table td code { 
  vertical-align: top; 
  display: inline-block;
  padding: 0.15rem 0.4rem; 
  background: var(--surface-color); 
  border: 1px solid var(--border-color); 
  border-radius: 4px; 
  font-family: 'Inter', monospace; 
  font-size: 12.5px; 
  color: var(--code-text); 
  white-space: pre-wrap; 
  word-break: break-word; 
  overflow-wrap: break-word;
  line-height: 1.5;
  box-sizing: border-box;
}
.cc-table tr:last-child td { border-bottom:none }
.cc-table tr:hover td { background:var(--surface-hover) }
.badge { display:inline-block;padding:0 10px;border-radius:6px;font-size:12.5px;font-weight:700;white-space:nowrap; border: 1px solid var(--border-color); letter-spacing: 0.02em; line-height: 24px; vertical-align: top; margin: 0; box-sizing: border-box; }
.doc-links { display:grid; gap: 4px; }
.doc-links a { font-size:13.5px;color:var(--accent-primary);text-decoration:none;white-space:nowrap; transition: 0.2s ease; }
.doc-links a:hover { text-decoration:underline; opacity: 0.8; }
.doc-label { font-size:12px;color:var(--text-secondary);display:block;margin:0;font-weight:700;letter-spacing:0.02em;padding:0;text-transform:uppercase; line-height: 26px; vertical-align: top; }

@media (max-width: 1024px) {
  .cc-table-wrap {
    overflow: visible;
  }

  .cc-table,
  .cc-table thead,
  .cc-table tbody,
  .cc-table tr,
  .cc-table th,
  .cc-table td {
    display: block;
  }

  .cc-table thead {
    display: none;
  }

  .cc-table tr {
    margin-bottom: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.12);
  }

  .cc-table td {
    padding: 0.9rem 1rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .cc-table td:last-child {
    border-bottom: none;
  }

  .cc-table td::before {
    content: attr(data-label);
    display: block;
    margin-bottom: 0.45rem;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--text-secondary);
  }

  .cc-table td p,
  .doc-label,
  .badge,
  .cc-table td code {
    height: auto;
    line-height: 1.5;
  }

  .doc-links {
    gap: 0.3rem;
  }

  .doc-links a {
    white-space: normal;
  }
}

:root.light-mode .cc-table th { background: rgba(0,0,0,0.03); }
:root.light-mode .badge { border-color: rgba(67, 52, 34, 0.2); }
</style>

<div class="cc-table-wrap">
<table class="cc-table">
<thead>
<tr>
<th>Feature</th>
<th>One-liner</th>
<th>What it stores</th>
<th>How to invoke</th>
<th>Best used for</th>
<th>Official docs</th>
</tr>
</thead>
<tbody>
<tr>
<td data-label="Feature"><span class="badge">Skills</span></td>
<td data-label="One-liner"><p>Teaches Claude how to handle specific tasks or workflows</p></td>
<td data-label="What it stores"><p>Instructions, scripts, reference files in a folder</p></td>
<td data-label="How to invoke"><p><code>/skill-name</code></p></td>
<td data-label="Best used for"><p>Codifying repeatable workflows: code review, deployments, doc generation</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://code.claude.com/docs/en/skills" target="_blank">Skills →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Commands</span></td>
<td data-label="One-liner"><p>Prompt shortcuts</p></td>
<td data-label="What it stores"><p>Single markdown file with prompt template</p></td>
<td data-label="How to invoke"><p><code>/command-name</code></p></td>
<td data-label="Best used for"><p>Quick prompt templates: /fix-bug, /explain-code, /summarize</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/slash-commands" target="_blank">Slash commands →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">MCP</span></td>
<td data-label="One-liner"><p>USB-C for AI — connects Claude to real data</p></td>
<td data-label="What it stores"><p>External tool definitions (21st.dev, Supadata, Stitch..)</p></td>
<td data-label="How to invoke"><p>Claude picks tools automatically</p></td>
<td data-label="Best used for"><p>Querying live databases, creating PRs, reading Slack, anything with real external state</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/mcp" target="_blank">MCP overview →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Hooks</span></td>
<td data-label="One-liner"><p>Scripts that fire automatically at lifecycle events</p></td>
<td data-label="What it stores"><p>Shell commands tied to events (PostToolUse etc.)</p></td>
<td data-label="How to invoke"><p>Never manually — fires automatically on event</p></td>
<td data-label="Best used for"><p>Auto-linting, blocking dangerous commands, desktop notifications, test gates</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/hooks-guide" target="_blank">Hooks guide →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Plugins</span></td>
<td data-label="One-liner"><p>Installable bundles containing all of the above (Skills, Commands, MCPs, Hooks)</p></td>
<td data-label="What it stores"><p>plugin.json manifest + skills/ agents/ hooks/ MCPs</p></td>
<td data-label="How to invoke"><p>All components auto-activate on install</p></td>
<td data-label="Best used for"><p>Sharing team setups, open-source toolkits, org-wide standards</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Discover</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/plugins" target="_blank">Find &amp; install plugins →</a>
    <span class="doc-label">Build</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/create-plugins" target="_blank">Create plugins →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Subagents</span></td>
<td data-label="One-liner"><p>Isolated mini-agents with their own context window</p></td>
<td data-label="What it stores"><p>Agent system prompt + tool/model config in YAML</p></td>
<td data-label="How to invoke"><p>Natural language or <code>/agents</code> menu</p></td>
<td data-label="Best used for"><p>Delegating heavy subtasks without polluting main session context</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/sub-agents" target="_blank">Subagents →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Agent teams</span></td>
<td data-label="One-liner"><p>Multiple Claude sessions that collaborate and cross-check</p></td>
<td data-label="What it stores"><p>Defined through prompts; teams.json for fine-tuning</p></td>
<td data-label="How to invoke"><p>Prompt-driven; keyboard shortcuts to manage</p></td>
<td data-label="Best used for"><p>Large parallel work: security + perf + tests reviewing the same module</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/agent-teams" target="_blank">Agent teams →</a>
  </div>
</td>
</tr>
</tbody>
</table>
</div>
      `},{label:"Decision Flow",content:`
<div class="flowchart-embed" style="width: 100%; height: calc(100vh - 160px); min-height: 700px; overflow: hidden; background: var(--surface-color); border-radius: 12px; border: 1px solid var(--border-color);">
  <iframe src="/knowledgelab/flowchart.html" style="width: 100%; height: 100%; border: none;" title="Decision Flowchart" allow="fullscreen" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
</div>
      `}],interactiveType:"custom"},W={id:"claude-commands",title:"Claude Commands",description:`
<p style="margin-bottom:1rem; line-height:1.75;">Claude Commands (also called slash commands) are a feature of Claude Code. Think of them like custom keyboard shortcuts or macros, but for your AI workflow.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Instead of typing out a long, detailed instruction every time you want Claude to do something repetitive, you save that instruction as a simple Markdown file and call it up with a quick <code style="color: var(--code-text);">/command-name</code>.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style: italic; opacity: 0.8;"><strong>Real-world analogy:</strong> Imagine you always ask a new intern the same 5-step process to review code before every commit. Instead of explaining it every single time, you write it down once in a document and just say "follow the checklist." That document is a slash command.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Two Types of Commands</strong>
  <p style="margin-bottom:0.75rem;">Commands come in two main flavors:</p>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong style="color: var(--accent-secondary);">Built-in</strong> — Standard tools that ship with Claude Code for managing your session (like <code style="color: var(--code-text);">/clear</code>, <code style="color: var(--code-text);">/help</code>, etc.)</li>
    <li><strong style="color: var(--accent-secondary);">Custom</strong> — Commands you build yourself for your own repetitive workflows</li>
  </ul>
</div>

<p style="margin-bottom:1.5rem; line-height:1.75;">Commands can be stored in <strong>globally</strong> (<code style="color: var(--code-text);">~/.claude/commands/</code>) to work across all your projects, or inside a <strong>specific project's</strong> <code style="color: var(--code-text);">(.claude/commands/)</code> folder to share with teammates.</p>
<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 1 — Create a project-level command</strong>
  <p style="margin-bottom:0.5rem;">First, create the command directory:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;">mkdir -p .claude/commands</code>

  <p style="margin-top: 1rem; margin-bottom:0.5rem;">Then, create the command file:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.4;">cat > .claude/commands/explain.md << 'EOF'
Explain the following code in simple English. Assume the reader knows the basics 
of the programming language but is new to this codebase. Show a one-paragraph summary, 
then a bullet list of what each major section does.

Code to explain:
$ARGUMENTS
EOF</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 2 — Use it</strong>
  <p style="margin-bottom:0.5rem;">Typing the slash followed by the command name in Claude code:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: monospace; color: var(--code-text);">/explain src/utils/logger.js</code>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Why Is This Useful?</strong>
  <p style="margin-bottom:1rem; line-height:1.75;">The real power is how slash commands turn a clunky, multi-step process into one quick action. Some popular uses include:</p>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><code style="color: var(--code-text);">/commit</code> — Claude analyzes your changes and writes a proper commit message</li>
    <li style="margin-bottom: 0.5rem;"><code style="color: var(--code-text);">/test</code> — runs your test suite and auto-fixes failures</li>
    <li><code style="color: var(--code-text);">/pr</code> — generates a pull request description from your recent commits</li>
  </ul>
</div>
<div style="height: 10rem;"></div>
  `,interactiveType:"custom"},q={id:"claude-subagents",title:"Claude Subagents",description:`
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
  `,interactiveType:"custom"},N={id:"claude-plugins",title:"Claude Plugins",category:"Tutorial",tags:["Plugins","Marketplace","Claude Code"],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Claude Plugins</strong> are like app bundles — a single package that installs multiple commands, tools, and behaviors all at once.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Plugins can bundle MCPs, skills, hooks, and commands into a single download. Instead of installing each piece separately, you get everything you need in one package.</p>

<p style="margin-bottom:1rem; line-height:1.75;">This tutorial walks you through building a complete Claude Code plugin from scratch.</p>

<div style="margin-top: 1.5rem; margin-bottom: 2rem;">
  <strong style="display:block; margin-bottom:1rem; font-size:1.05rem; color: var(--accent-primary);">What Can a Plugin Contain?</strong>
  <p style="margin-bottom:1rem; line-height:1.75;">A Claude plugin can include slash commands, MCPs, hooks, and skills — all packaged together and shared across projects or teams.</p>

  <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
    <thead>
      <tr style="background: rgba(0, 242, 255, 0.05);">
        <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">Ingredient</th>
        <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">What it does</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Skills</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Instructions that guide Claude on how to perform a task</td>
      </tr>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Commands</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Slash commands you can trigger manually, like <code style="color: var(--code-text);">/review</code></td>
      </tr>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>MCPs</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Connections to external tools, APIs, databases, and services</td>
      </tr>
      <tr>
        <td style="padding: 1rem;"><strong>Hooks</strong></td>
        <td style="padding: 1rem;">Automatic behaviors that run when specific events happen</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px; margin: 1rem 0;">
  <p style="margin: 0 0 0.75rem; font-weight: 600; color: var(--text-primary);">What you will build</p>
  <p style="margin: 0 0 0.75rem; line-height:1.75; color: var(--text-secondary);"><strong>py-helper</strong> — a Python code review plugin that includes:</p>
  <ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.75;">
    <li style="margin-bottom: 0.35rem;"><strong>Skill:</strong> auto-review Python files</li>
    <li style="margin-bottom: 0.35rem;"><strong>Command:</strong> manually fix style issues</li>
    <li style="margin-bottom: 0.35rem;"><strong>Hook:</strong> run automatic safety checks</li>
    <li style="margin-bottom: 0;"><strong>MCP:</strong> connect Claude to Context7</li>
  </ul>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">By the end, you will have a plugin that can review code, fix formatting, warn about secrets, and interact with Context7 for live Python documentation.</p>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Prerequisites <span>→</span>
  </a>
</div>
`},{label:"1. Prerequisites",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Before You Start]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">You need two things installed before building any plugin.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 1 — Install Node.js</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">You can install Claude Code using npm. To use npm, install the LTS version from <a href="https://nodejs.org" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">nodejs.org</a>.</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">node --version
# You should see something like: v22.0.0</code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 2 — Install Claude Code</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Install Claude Code globally with npm:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">npm install -g @anthropic-ai/claude-code</code>
<p style="margin-top: 1rem; margin-bottom: 0.5rem; line-height: 1.75; color: var(--text-secondary);">Verify the installation:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">claude --version</code>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">You will also need a Claude API key or an authenticated Claude account. Claude Code will ask you to sign in the first time you run it.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Launch Claude</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Type <code style="color: var(--code-text);">claude</code> in your terminal to get started:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text);">claude</code>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Folder Plan <span>→</span>
  </a>
</div>
`},{label:"2. Folder Plan",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[What We Are Building]</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Before creating files, it helps to understand the complete plugin structure.</p>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background: rgba(0, 242, 255, 0.05);">
      <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">Component</th>
      <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">Name</th>
      <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">What it does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Skill</td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>py-review</strong></td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Automatically checks for bugs, PEP 8 style issues, missing type hints, and docstrings whenever you ask Claude to review, audit, or check a Python file. It runs automatically based on natural language. When you say something like "review this file" or "check my Python code," Claude detects the intent and triggers it without any special syntax. It's passive and context-aware. py-review is read-only — it finds and reports issues with line numbers and suggested fixes, but doesn't touch your files.</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Command</td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>py-fix</strong></td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">A manual slash command (<code style="color: var(--code-text);">/py-helper:py-fix</code>) that instantly fixes style violations, adds missing docstrings, and applies type hints across the entire open file. It runs manually via an explicit slash command. You have to deliberately invoke it. It won't activate from conversation alone. py-fix is destructive (in the good sense) — it actually modifies the file and then summarizes what changed.</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Hook</td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>hooks.json</strong></td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Runs background safety checks: scans for hardcoded secrets keys, passwords <strong>before</strong> any file write, and performs an automatic syntax check <strong>after</strong> every edit.</td>
    </tr>
    <tr>
      <td style="padding: 1rem;">MCP</td>
      <td style="padding: 1rem;"><strong>context7</strong></td>
      <td style="padding: 1rem;">Context7 is a documentation lookup tool that plugs into Claude Code. When you ask Claude how to use a Python library, it fetches the real, up-to-date documentation directly from the library's source before answering — so you always get accurate, version-specific code instead of potentially outdated suggestions.</td>
    </tr>
  </tbody>
</table>

<p style="margin: 1rem 0 0.75rem; line-height:1.75;">Final folder structure:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap; line-height: 1.45;">my-claude-marketplace/
└── py-helper-marketplace/
    ├── .claude-plugin/
    │   └── marketplace.json
    └── plugins/
        └── py-helper/
            ├── .claude-plugin/
            │   └── plugin.json
            ├── skills/
            │   └── py-review/
            │       └── SKILL.md
            ├── commands/
            │   └── py-fix.md
            ├── hooks/
            │   └── hooks.json
            └── .mcp.json</code>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>Important:</strong> the <code style="color: var(--code-text);">py-helper</code> plugin folder must live inside the <code style="color: var(--code-text);">py-helper-marketplace</code> folder under a <code style="color: var(--code-text);">plugins/</code> subfolder.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Prerequisites
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Create Folders <span>→</span>
  </a>
</div>
`},{label:"3. Create Folders",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Create All Folders]</strong>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 1 — Create your Python project</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">This is where your actual Python code will live. Create the folder and enter it:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">mkdir my-python-project</code>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cd my-python-project</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">Create a test file:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">touch app.py</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">Open <code style="color: var(--code-text);">app.py</code> and paste in this intentionally messy example:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">def add_numbers(a,b):
    x=a+b
    return x
 
def greet(name):
    print("Hello "+name)
 
result=add_numbers(5,10)
greet("Alice")</code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 2 — Create the marketplace and plugin folders</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Go back to your parent folder and create the plugin structure:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cd ..</code>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">mkdir -p my-claude-marketplace/py-helper-marketplace/.claude-plugin
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks</code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Verify the folders</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">find my-claude-marketplace -type d</code>

<p style="margin-bottom:0.75rem; line-height:1.75;">If your folder tree matches the intended layout, you are ready to create the files.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Folder Plan
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Marketplace + Plugin Files <span>→</span>
  </a>
</div>
`},{label:"4. Core Files",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Create the Core Files]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Run each block one at a time.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 1 — marketplace.json</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cat > my-claude-marketplace/py-helper-marketplace/.claude-plugin/marketplace.json << 'EOF'
{
  "name": "py-helper-marketplace",
  "owner": {
    "name": "Your Name"
  },
  "plugins": [
    {
      "name": "py-helper",
      "version": "1.0.0",
      "description": "Python coding toolkit with review, fix, and safety checks",
      "source": "./plugins/py-helper"
    }
  ]
}
EOF</code>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="color: var(--code-text);">marketplace.json</code> — Marketplace Registry File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the registry file for the <code style="color: var(--code-text);">py-helper-marketplace</code> — a Claude marketplace (a collection of one or more plugins). It serves as the top-level catalog that tells Claude what plugins are available within this marketplace, where to find them, and who owns the marketplace itself.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It defines four key pieces of information:</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="color: var(--code-text);">name</code></strong> — the unique identifier for the marketplace (<code style="color: var(--code-text);">py-helper-marketplace</code>), distinguishing it from the individual plugins it contains</li>
    <li><strong><code style="color: var(--code-text);">owner</code></strong> — credits the person or organization that maintains the marketplace</li>
    <li><strong><code style="color: var(--code-text);">plugins</code></strong> — an array listing every plugin available in this marketplace, with each entry containing:
      <ul style="margin: 0.25rem 0 0.25rem 1rem;">
        <li><code style="color: var(--code-text);">name</code> — the plugin's identifier (<code style="color: var(--code-text);">py-helper</code>)</li>
        <li><code style="color: var(--code-text);">version</code> — the version to load (<code style="color: var(--code-text);">1.0.0</code>)</li>
        <li><code style="color: var(--code-text);">description</code> — a short summary shown in listings</li>
        <li><code style="color: var(--code-text);">source</code> — the <strong>relative path</strong> to the plugin folder (<code style="color: var(--code-text);">./plugins/py-helper</code>)</li>
      </ul>
    </li>
  </ul>
  
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">No logic or behavior is defined here — it is purely a directory and routing file.</p>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from <code style="color: var(--code-text);">plugin.json</code>:</strong> while <code style="color: var(--code-text);">plugin.json</code> is the ID card for a single plugin, <code style="color: var(--code-text);">marketplace.json</code> is the index for the entire collection. It sits one level above and points <em>to</em> the <code style="color: var(--code-text);">plugin.json</code> files beneath it.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 2 — plugin.json</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin/plugin.json << 'EOF'
{
  "name": "py-helper",
  "version": "1.0.0",
  "description": "Python coding toolkit with review, fix, and safety checks",
  "author": {
    "name": "Your Name"
  }
}
EOF</code>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="color: var(--code-text);">plugin.json</code> — Plugin Manifest File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the manifest file for the <code style="color: var(--code-text);">py-helper</code> Claude plugin. It serves as the plugin's identity card, providing essential metadata that the Claude marketplace and runtime use to recognize, register, and load the plugin as a valid package.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It defines four key pieces of information:</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="color: var(--code-text);">name</code></strong> — the unique identifier (<code style="color: var(--code-text);">py-helper</code>), which also becomes the namespace prefix for all slash commands (e.g. <code style="color: var(--code-text);">/py-helper:py-fix</code>)</li>
    <li><strong><code style="color: var(--code-text);">version</code></strong> — tracks the release version (<code style="color: var(--code-text);">1.0.0</code>) for updates and compatibility</li>
    <li><strong><code style="color: var(--code-text);">description</code></strong> — a human-readable summary of the plugin's purpose, displayed in the marketplace listing</li>
    <li><strong><code style="color: var(--code-text);">author</code></strong> — credits the creator of the plugin</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">This file contains no logic or behavior of its own — it does not define any skills, commands, or code. It simply declares that the folder it lives in is a named, versioned, attributable plugin package. Think of it as the equivalent of a <code style="color: var(--code-text);">package.json</code> in Node.js or a <code style="color: var(--code-text);">pyproject.toml</code> in Python.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 3 — SKILL.md</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review/SKILL.md << 'EOF'
---
name: py-review
description: >
  Reviews Python code for quality issues. Auto-trigger when the user
  asks to review, check, audit, or improve a Python file.
---
 
When reviewing Python code, always check for:
 
1. **Bugs** — logic errors, off-by-one mistakes, unhandled exceptions
2. **Style** — PEP 8 violations (spacing, naming conventions)
3. **Type hints** — missing annotations on functions
4. **Docstrings** — missing documentation on classes and functions
 
For each issue, show:
- The line number
- What the problem is
- A corrected version of the code
EOF</code>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="color: var(--code-text);">SKILL.md</code> — Skill Definition File for <code style="color: var(--code-text);">py-review</code></p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the skill definition file for the <code style="color: var(--code-text);">py-review</code> skill within the <code style="color: var(--code-text);">py-helper</code> plugin. It is a Markdown file with a YAML frontmatter header that together define both the <strong>identity</strong> and the <strong>behavior</strong> of the skill — making it the most functional of the three files, as it contains actual instructions that Claude executes.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It is split into two distinct sections:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Frontmatter (YAML header <code style="color: var(--code-text);">---</code>)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="color: var(--code-text);">name</code></strong> — the skill's unique identifier (<code style="color: var(--code-text);">py-review</code>), used to reference it within the plugin</li>
    <li><strong><code style="color: var(--code-text);">description</code></strong> — a natural language trigger definition that tells Claude <em>when</em> to automatically activate this skill. The phrase "auto-trigger when the user asks to review, check, audit, or improve a Python file" is what enables intent-based activation — no slash command needed.</li>
  </ul>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Body (Markdown instructions)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li>This is the actual prompt/behavior Claude follows when the skill fires. It instructs Claude to check for four specific categories of issues — bugs, PEP 8 style violations, missing type hints, and missing docstrings</li>
    <li>It also defines the <strong>output format</strong> Claude must follow for every issue found: the line number, a description of the problem, and a corrected version of the code</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from the other files:</strong> unlike <code style="color: var(--code-text);">marketplace.json</code> and <code style="color: var(--code-text);">plugin.json</code> which are purely metadata, <code style="color: var(--code-text);">SKILL.md</code> contains executable instructions. It is both a configuration file (frontmatter) and a behavior file (body) in one, giving the plugin its actual intelligence and usefulness.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 4 — Verify these files</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Make sure these three critical files were created successfully and have the correct contents:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cat my-claude-marketplace/py-helper-marketplace/.claude-plugin/marketplace.json
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin/plugin.json
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review/SKILL.md</code>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Create Folders
  </a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">
    Next: Commands, Hooks, MCP <span>→</span>
  </a>
</div>
`},{label:"5. Commands + MCP",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Create the Remaining Files]</strong>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 4 — commands/py-fix.md</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands/py-fix.md << 'EOF'
---
description: "Automatically fix PEP 8 issues in a Python file"
---
 
Look at the Python file at $ARGUMENTS (or the currently open file if no path is provided) and:
 
1. Fix all PEP 8 style violations
2. Add missing type hints to all functions
3. Add docstrings to any functions that are missing them
4. Show a summary of every change you made and why
EOF</code>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="color: var(--code-text);">py-fix.md</code> — Command Definition File for <code style="color: var(--code-text);">py-fix</code></p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the command definition file for the <code style="color: var(--code-text);">py-fix</code> slash command within the <code style="color: var(--code-text);">py-helper</code> plugin. Like <code style="color: var(--code-text);">SKILL.md</code>, it is a Markdown file with a YAML frontmatter header, combining identity and behavior in one file. However, unlike the skill, this file defines a <strong>manually triggered command</strong> rather than an auto-activating skill.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It is split into two distinct sections:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Frontmatter (YAML header <code style="color: var(--code-text);">---</code>)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="color: var(--code-text);">description</code></strong> — a short summary of what the command does ("Automatically fix PEP 8 issues in a Python file"), used for display purposes in the marketplace and command palette. Notably, there is <strong>no auto-trigger definition</strong> here — this command only fires when explicitly invoked via <code style="color: var(--code-text);">/py-helper:py-fix</code></li>
  </ul>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Body (Markdown instructions)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="color: var(--code-text);">$ARGUMENTS</code></strong> — a special placeholder that captures whatever the user types after the slash command (typically a file path). If nothing is provided, Claude falls back to the currently open file. This is what makes the command flexible and reusable across different files</li>
    <li>The instructions tell Claude to perform three <strong>destructive (file-modifying) actions</strong>: fix PEP 8 violations, add missing type hints, and add missing docstrings</li>
    <li>It also requires Claude to produce a <strong>change summary</strong> explaining every modification made and why</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from <code style="color: var(--code-text);">SKILL.md</code>:</strong> while <code style="color: var(--code-text);">SKILL.md</code> is read-only and report-based, <code style="color: var(--code-text);">py-fix.md</code> is action-based and modifies actual files. It also uses <code style="color: var(--code-text);">$ARGUMENTS</code> for explicit file targeting. The absence of an auto-trigger means the user retains full control over when fixes are applied — appropriate given that this command directly alters code.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 5 — hooks/hooks.json</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks/hooks.json << 'EOF'
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Before writing this Python file, check: does it contain any hardcoded passwords, API keys, or secrets? If yes, warn the user and suggest using environment variables instead."
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "prompt",
            "prompt": "After editing this Python file, quickly check if any obvious syntax errors were introduced. If yes, point them out immediately."
          }
        ]
      }
    ]
  }
}
EOF</code>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="color: var(--code-text);">hooks.json</code> — Hooks Configuration File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the hooks configuration file for the <code style="color: var(--code-text);">py-helper</code> plugin. It defines <strong>automatic background checks</strong> that fire silently around file write and edit operations — before and after Claude touches a Python file. Unlike the skill and command files, hooks are not triggered by the user at all; they run invisibly as a safety layer wrapped around Claude's own tool usage.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It is organized around two lifecycle events:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);"><code style="color: var(--code-text);">PreToolUse</code> (Before writing/editing)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="color: var(--code-text);">matcher</code></strong> — <code style="color: var(--code-text);">"Write|Edit"</code> tells Claude to intercept any Write or Edit tool call before it executes</li>
    <li><strong><code style="color: var(--code-text);">prompt</code></strong> — instructs Claude to scan the file for hardcoded passwords, API keys, or secrets <em>before</em> writing, and if found, warn the user and recommend environment variables instead</li>
    <li>This acts as a <strong>security gate</strong> — catching sensitive data leaks before they are committed to disk</li>
  </ul>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);"><code style="color: var(--code-text);">PostToolUse</code> (After writing/editing)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="color: var(--code-text);">matcher</code></strong> — same <code style="color: var(--code-text);">"Write|Edit"</code> pattern, but fires <em>after</em> the tool call completes</li>
    <li><strong><code style="color: var(--code-text);">prompt</code></strong> — instructs Claude to immediately check whether the edit introduced any obvious syntax errors, and flag them if so</li>
    <li>This acts as a <strong>quality gate</strong> — catching accidental breakage introduced during a fix or edit</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from the other files:</strong> <code style="color: var(--code-text);">SKILL.md</code> and <code style="color: var(--code-text);">py-fix.md</code> are user-facing and user-initiated. <code style="color: var(--code-text);">hooks.json</code> is entirely <strong>system-facing and automatic</strong>. The user never calls it directly; it wraps around Claude's own actions to enforce security and correctness passively. Together with the skill and command, it completes the plugin's three-layer approach: review on request, fix on demand, and guard automatically.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 6 — .mcp.json</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Context7 addresses one of the most frustrating challenges in AI-assisted development: outdated or inaccurate library documentation. By fetching real-time documentation directly from source repositories, it ensures Claude always provides current, version-specific code examples and API usage patterns.</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.mcp.json << 'EOF'
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
EOF</code>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="color: var(--code-text);">.mcp.json</code> — MCP Server Configuration File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the MCP (Model Context Protocol) server configuration file for the <code style="color: var(--code-text);">py-helper</code> plugin. It connects Claude to <a href="https://context7.com/" target="_blank" style="color: var(--accent-primary); text-decoration: none; font-weight: 700;">Context7</a>, an external real-time documentation server, giving the plugin access to up-to-date, version-specific library documentation pulled directly from source repositories. Unlike all the other files in this plugin, <code style="color: var(--code-text);">.mcp.json</code> reaches <em>outside</em> the plugin itself and wires Claude into a live external service.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It contains a single configuration block:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);"><code style="color: var(--code-text);">mcpServers</code></p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="color: var(--code-text);">context7</code></strong> — the name given to this MCP server connection, used to reference it internally</li>
    <li><strong><code style="color: var(--code-text);">command</code></strong> — <code style="color: var(--code-text);">npx</code> tells Claude to use Node's package runner to launch the server</li>
    <li><strong><code style="color: var(--code-text);">args</code></strong> — <code style="color: var(--code-text);">["-y", "@upstash/context7-mcp"]</code> automatically installs and runs the Context7 MCP package without requiring manual setup. The <code style="color: var(--code-text);">-y</code> flag bypasses confirmation prompts, making it seamless on first use</li>
  </ul>
  
  <p style="margin-bottom:0.5rem; font-weight:700; color: var(--text-primary);">What Context7 actually does</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li>Solves a core problem in AI-assisted development: Claude's training data has a knowledge cutoff, meaning library documentation it knows may be outdated or version-mismatched</li>
    <li>Context7 fetches <strong>live documentation</strong> directly from source repositories at the moment it's needed, ensuring Claude suggests current API patterns, not deprecated ones</li>
    <li>For a Python toolkit plugin like <code style="color: var(--code-text);">py-helper</code>, this is especially valuable — when reviewing or fixing code that uses third-party libraries, Claude can reference the actual current docs rather than relying on potentially stale training knowledge</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from the other files:</strong> every other file in this plugin defines what Claude <em>does</em>. <code style="color: var(--code-text);">.mcp.json</code> defines what Claude <em>knows</em> — extending its context with real-time external knowledge. It is the plugin's connection to the outside world, making the difference between Claude guessing at library usage and Claude knowing it with certainty.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Verify these files</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Make sure these three remaining logic files were created successfully and have the correct contents:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands/py-fix.md
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks/hooks.json
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.mcp.json</code>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Core Files
  </a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">
    Next: Verify Files <span>→</span>
  </a>
</div>
`},{label:"6. Verify",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Verify Your Files]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Before installing the plugin, make sure every file is in the correct place.</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">find my-claude-marketplace -type f</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see these files:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin/plugin.json
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review/SKILL.md
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands/py-fix.md
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks/hooks.json
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.mcp.json
my-claude-marketplace/py-helper-marketplace/.claude-plugin/marketplace.json</code>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="5" class="tutorial-nav-link previous">
    <span>←</span> Previous: Commands + MCP
  </a>
  <a href="#" data-goto-tab="7" class="tutorial-nav-link">
    Next: Install the Plugin <span>→</span>
  </a>
</div>
`},{label:"7. Install",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Install the Plugin]</strong>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 1 — Go to your Python project</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Enter your project directory and launch Claude:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cd my-python-project</code>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">claude</code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 2 — Register your marketplace</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Inside Claude Code, use the absolute path to your marketplace:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">/plugin marketplace add <span style="color: var(--accent-primary); font-weight: bold;">/absolute/path/to</span>/my-claude-marketplace/py-helper-marketplace</code>
<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary); font-style: italic;">(Make sure to replace the highlighted <code style="color: var(--code-text);">/absolute/path/to</code> part with your actual absolute path.)</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">To get the absolute path, open another terminal tab and run:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cd my-claude-marketplace/py-helper-marketplace && pwd</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see a success message like this:</p>
<code style="display: block; padding: 1rem; background: #1a1a1a; border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: #00ff00; white-space: pre-wrap;">❯ /plugin marketplace add /Users/senthilpalanivelu/Downloads/my-claude-marketplace/py-helper-marketplace                                                       
  ⎿  Successfully added marketplace: py-helper-marketplace</code>
  
<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Install and reload</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">/plugin install py-helper@py-helper-marketplace</code>

<p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--text-secondary); font-size: 0.9rem; padding-left: 0.5rem; border-left: 2px solid var(--accent-primary);">
  Where:<br>
  <code style="color: var(--code-text);">py-helper</code> is the plugin you want to install<br>
  <code style="color: var(--code-text);">py-helper-marketplace</code> is the marketplace it comes from
</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see a confirmation message like this:</p>
<code style="display: block; padding: 1rem; background: #1a1a1a; border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: #00ff00; white-space: pre-wrap;"> /plugin install py-helper@py-helper-marketplace                                                                                                            
  ⎿  ✓ Installed py-helper. Run /reload-plugins to activate..</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">Then, reload your plugins to activate the changes:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text);">/reload-plugins</code>


<p style="margin-bottom:0.5rem; line-height:1.75;">To confirm the plugin is installed, open the plugin panel:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text);">/plugin</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see <code style="color: var(--code-text);">py-helper</code> listed in your marketplaces:</p>
<code style="display: block; padding: 1rem; background: #1a1a1a; border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: #00ff00; white-space: pre-wrap;">❯ /plugin                                                                                                                                          
                                                                                                                                                   
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  Plugins  Discover   Installed   <span style="background: var(--accent-primary); color: var(--bg-color); padding: 0 4px; border-radius: 2px; font-weight: bold;">Marketplaces</span>   Errors                                                                                            
                                                                                                                                                 
  Manage marketplaces                                                                                                                            
                                                                                                                                                   
  ❯ + Add Marketplace                                                                                                                              
                                                                                                                                                   
    ● claude-code-plugins                                                                                                                          
      anthropics/claude-code                                                                                                                       
      13 available • Updated 3/24/2026                                                                                                             
                                                                                                                                                   
    ● ✻ claude-plugins-official ✻                                                                                                                  
      anthropics/claude-plugins-official                                                                                                           
      118 available • 2 installed • Updated 3/24/2026                                                                                              
                                                                                                                                                   
    ● everything-claude-code                                                                                                                       
      affaan-m/everything-claude-code                                                                                                              
      1 available • 1 installed • Updated 3/17/2026                                                                                                
                                                                                                                                                   
    <span style="color: var(--accent-primary); font-weight: bold;">● py-helper-marketplace
      /Users/senthilpalanivelu/Downloads/my-claude-marketplace/py-helper-marketplace                                                                          
      1 available • 1 installed • Updated 3/24/2026</span>
                                                                                                                                                   
    ● ui-ux-pro-max-skill                                                                                                                          
      nextlevelbuilder/ui-ux-pro-max-skill                                                                                                         
      1 available • 1 installed • Updated 3/15/2026</code>
<p style="margin-top: 1.25rem; margin-bottom: 0.5rem; line-height: 1.75; font-weight: 500;">Now that you have installed the plugin, it's time to test it!</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="6" class="tutorial-nav-link previous">
    <span>←</span> Previous: Verify
  </a>
  <a href="#" data-goto-tab="8" class="tutorial-nav-link">
    Next: Test the Plugin <span>→</span>
  </a>
</div>
`},{label:"8. Test",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Test Each Component]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Now test all four parts of the plugin one by one inside Claude Code.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 1 — Skill</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><code style="color: var(--code-text);">py-review</code> operates on whatever code is in the conversation context.</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text);">can you review app.py?</code>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Claude should auto-apply the <code style="color: var(--code-text);">py-review</code> skill. You will see a <strong>Tool Use</strong> indicator in the terminal:</p>
<code style="display: block; padding: 1rem; background: #1a1a1a; border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: #00ff00; white-space: pre-wrap;"> 🔧 py-helper: py-review(path: "app.py")</code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 2 — Command</p>
<p style="margin-bottom:0.75rem; line-height:1.75;"><code style="color: var(--code-text);">py-fix</code> uses <code style="color: var(--code-text);">$ARGUMENTS</code> — meaning it takes a file path as input, making it suitable for operating on files outside the current context.</p>

<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text);">/py-helper:py-fix app.py</code>
<code style="display: block; padding: 1rem; background: #1a1a1a; border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: #00ff00; white-space: pre-wrap;">❯ /py-helper:py-fix app.py                                                                                                                         
                                                                                                                                                   
<span style="background: rgba(0, 255, 0, 0.15); border-radius: 4px; padding: 0 2px;">⏺ Skill(py-helper:py-fix)</span>                                                                                                                          
<span style="background: rgba(0, 255, 0, 0.15); border-radius: 4px; padding: 0 2px;">  ⎿  Successfully loaded skill</span>                                                                                                                     
                                                                                                                                                   
⏺ I have read app.py. Let me apply the fixes:                                                                                           
                                                                                                                                                   
⏺ Update(app.py)

⏺ Summary of Changes                          
                                                                                          
  PEP 8 Fixes                                                                                                                                      
                                                                                                                                                   
<div style="margin: 0.5rem 0 1rem; border-radius: 8px; border: 1px solid #333; background: #1a1a1a; overflow-x: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
  <table style="width: 100%; border-collapse: collapse; font-family: 'Fira Code', monospace; font-size: 0.82rem; color: #7ee787; min-width: 800px; line-height: 1.4;">
    <thead>
      <tr style="border-bottom: 1px dotted #444; background: rgba(255,255,255,0.03);">
        <th style="padding: 0.6rem 0.8rem; text-align: left; border-right: 1px dotted #444; color: #fff; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem; width: 60px;">Line</th>
        <th style="padding: 0.6rem 0.8rem; text-align: left; border-right: 1px dotted #444; color: #fff; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem; width: 180px;">Before</th>
        <th style="padding: 0.6rem 0.8rem; text-align: left; border-right: 1px dotted #444; color: #fff; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem; width: 280px;">After</th>
        <th style="padding: 0.6rem 0.8rem; text-align: left; color: #fff; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem;">Why</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #2a2a2a;">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; color: #888;">01</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; white-space: nowrap;"><code style="background: transparent; color: #f87171; padding: 0; white-space: nowrap;">def add_numbers(a,b):</code></td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; white-space: nowrap;"><code style="background: transparent; color: #4ade80; padding: 0; white-space: nowrap;">def add_numbers(a: int, b: int):</code></td>
        <td style="padding: 0.6rem 0.8rem; color: #9ca3af;">Added space after comma and type hints</td>
      </tr>
      <tr style="border-bottom: 1px solid #2a2a2a;">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; color: #888;">02</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; white-space: nowrap;"><code style="background: transparent; color: #f87171; padding: 0; white-space: nowrap;">x=a+b</code></td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; white-space: nowrap;"><code style="background: transparent; color: #4ade80; padding: 0; white-space: nowrap;">return a + b</code></td>
        <td style="padding: 0.6rem 0.8rem; color: #9ca3af;">Added spaces around operators; removed unused variable <code style="color: #888;">x</code></td>
      </tr>
      <tr style="border-bottom: 1px solid #2a2a2a;">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; color: #888;">03-04</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; color: #f87171; white-space: nowrap;">Trailing whitespace</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; color: #4ade80; white-space: nowrap;">Removed</td>
        <td style="padding: 0.6rem 0.8rem; color: #9ca3af;">PEP 8: no trailing whitespace</td>
      </tr>
      <tr style="border-bottom: 1px solid #2a2a2a;">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; color: #888;">05</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; white-space: nowrap;"><code style="background: transparent; color: #f87171; padding: 0; white-space: nowrap;">def greet(name):</code></td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; white-space: nowrap;"><code style="background: transparent; color: #4ade80; padding: 0; white-space: nowrap;">def greet(name: str) -> None:</code></td>
        <td style="padding: 0.6rem 0.8rem; color: #9ca3af;">Added type hints</td>
      </tr>
      <tr>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; color: #888;">08-09</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; color: #f87171; white-space: nowrap;">Module-level code</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted #444; white-space: nowrap;"><code style="background: transparent; color: #4ade80; padding: 0; white-space: nowrap;">if __name__ == "__main__":</code></td>
        <td style="padding: 0.6rem 0.8rem; color: #9ca3af;">Prevents execution on import</td>
      </tr>
    </tbody>
  </table>
</div>
                  
  Type Hints Added                                                                                                                                 
                  
  - add_numbers(a: int, b: int) -> int - Parameters and return type                                                                                
  - greet(name: str) -> None - Parameter and return type
                                                                                                                                                   
  Docstrings Added                                                                                                                                 
                                                                                                                                                   
  - add_numbers: "Add two numbers and return the result."                                                                                          
  - greet: "Print a greeting message to the console."
                                                                                                                                                   
  Additional Improvements                                                                                                                          
                                                                                                                                                   
  - Removed intermediate variable x in add_numbers (direct return is cleaner)                                                                      
  - Added proper blank line between functions (PEP 8 requires 2 blank lines)

  The updated code now follows Python best practices and is more maintainable, readable, and professional.</code>


<p style="margin-bottom:0.75rem; line-height:1.75;">The intended workflow is sequential: run <code style="color: var(--code-text);"> /py-review </code> first to understand the problems, then run <code style="color: var(--code-text);"> /py-fix app.py </code> when you're ready to apply the fixes.</p>


<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 3 — Hook</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">add password="abc123" to app.py</code>
<code style="display: block; padding: 1rem; background: #1a1a1a; border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: #00ff00; white-space: pre-wrap;">❯ add password="abc123" to app.py                                                                                                                  
                                  
⏺ I'll add the password variable to app.py. Let me first check the current content of the file and then make the update.                           
                                                                                                                                                   
  Read 1 file (ctrl+o to expand)                                                                                                                   
           
⏺ Now I'll add the password variable to the file. I'll place it near the top of the file, after the imports (though there are no imports in this   
  file). I'll add it right after the module docstring (which doesn't exist yet) or at the beginning of the file.

⏺ Update(app.py)                                                                                                                                   
  ⎿  <span style="color: #ff4d4d;">Error: PreToolUse:Edit hook error: Prompt hook condition was not met: The edit introduces a hardcoded password ('abc123') which is a security risk. Hardcoded secrets should be avoided and instead be loaded from environment variables or secure configuration management systems.</span>
                                                                                          
⏺ I understand the security concern. The hook is preventing me from adding a hardcoded password, which is actually a good security practice.
  Hardcoding passwords in source code is a security risk because:                                                                                  
   
  1. The password would be visible to anyone with access to the code                                                                               
  2. It would be difficult to change the password without modifying the code
  3. It could accidentally be committed to version control systems                                                                                 
                                                                                                                                                   
  Instead of adding the password directly to the file, I recommend one of these more secure approaches:                                            
                                                                                                                                                   
  1. Environment Variables: Store the password in an environment variable and read it in the code:                                                 
  import os       
  password = os.getenv('APP_PASSWORD', 'default_password')                                                                                         
  2. Configuration File: Store the password in a separate configuration file that is not committed to version control:                             
  import json                                                                                                                                      
  with open('config.json') as f:                                                                                                                   
      config = json.load(f)                                                                                                                        
      password = config.get('password')                                                                                                            
  3. Command Line Arguments: Pass the password as a command line argument when running the script.</span></code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 4 — MCP Context7 Connection</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">First, verify the MCP server is loaded</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">/mcp</code>
<code style="display: block; padding: 1rem; background: #1a1a1a; border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: #00ff00; white-space: pre-wrap;">❯ /mcp                                                                                                                                             
                                                                                                                                                   
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  Manage MCP servers                                                                                                                               
  4 servers                                                                                                                                        
                                                                                                                                                   
    User MCPs (/Users/senthilpalanivelu/.claude.json)                                                                                              
  ❯ magic · ✔ connected                                                                                                                            
    stitch · ✔ connected                                                                                                                           
    supadata · ✔ connected

    Built-in MCPs (always available)
    plugin:py-helper:context7 · ✔ connected

  https://code.claude.com/docs/en/mcp for help</code>

<p style="margin-top:1.5rem; margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1.1rem;">How to Use It</p>
<p style="margin-bottom:0.75rem; line-height:1.75;">Just add <code style="color: var(--code-text);">use context7</code> to any Python question:</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background: var(--surface-color); border-bottom: 1px solid var(--border-color);">
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">What you say</th>
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">What Claude does</th>
    </tr>
  </thead>
  <tbody style="line-height:1.6; color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">how do I use pandas groupby? use context7</code></td>
      <td style="padding: 0.75rem;">Fetches live pandas docs and gives you current syntax</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">what's new in FastAPI 0.115? use context7</code></td>
      <td style="padding: 0.75rem;">Pulls the actual FastAPI changelog and summarises it</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">how do I use pytest fixtures? use context7</code></td>
      <td style="padding: 0.75rem;">Gets real pytest docs, not training data from months ago</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">show me latest asyncio syntax use context7</code></td>
      <td style="padding: 0.75rem;">Fetches current Python asyncio docs</td>
    </tr>
  </tbody>
</table>

<p style="margin: 1.5rem 0; line-height:1.75; color: var(--text-secondary); font-style: italic;">Context7 is useful on literally every Python coding session — the moment you touch <code style="color: var(--code-text);">requests</code>, <code style="color: var(--code-text);">pandas</code>, <code style="color: var(--code-text);">FastAPI</code>, <code style="color: var(--code-text);">pytest</code> or any other library, it's working for you in the background.</p>

<p style="margin-top:2.5rem; margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">The Problem It Solves</p>
<p style="margin-bottom:0.75rem; line-height:1.75;">When you ask Claude (or any AI) how to use a Python library, Claude answers based on its <strong>training data</strong> — which has a cutoff date. Libraries like <code style="color: var(--code-text);">pandas</code>, <code style="color: var(--code-text);">FastAPI</code>, and <code style="color: var(--code-text);">pytest</code> update constantly. This means Claude might give you:</p>

<ul style="margin: 0.75rem 0 1.25rem 1.25rem; line-height:1.75; color: var(--text-secondary);">
  <li>A method that was <strong>renamed</strong> in the latest version</li>
  <li>A parameter that was <strong>removed</strong></li>
  <li>An old way of doing something that now has a <strong>better approach</strong></li>
  <li>Code that flat out <strong>doesn't work</strong> on your installed version</li>
</ul>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

<p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">What Context7 Does</p>
<p style="margin-bottom:1rem; line-height:1.75;">Context7 sits between you and Claude. Every time you ask about a library, it:</p>

<ol style="margin: 0.75rem 0 1.25rem 1.25rem; line-height:1.75; color: var(--text-secondary);">
  <li><strong>Looks up the real, live documentation</strong> directly from the library's source</li>
  <li><strong>Feeds it to Claude</strong> before Claude answers you</li>
  <li><strong>Claude then answers using current docs</strong> instead of potentially stale training data</li>
</ol>

<p style="margin-bottom:0.75rem; line-height:1.75; font-style: italic;">Think of it like giving Claude the ability to read the actual manual before answering — every single time.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

<p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">A Concrete Example</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-secondary); font-size:0.95rem;">Without Context7:</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1.25rem; font-family: monospace; color: var(--text-secondary); white-space: pre-wrap;">You: how do I read a CSV in pandas?
Claude: Use pd.read_csv() with the parse_dates parameter...
        (might be based on pandas 1.x docs, but you're running 2.x)</code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:0.95rem;">With Context7:</p>
<code style="display: block; padding: 1rem; background: #1a1a1a; border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1.5rem; font-family: monospace; color: #00ff00; white-space: pre-wrap;">You: how do I read a CSV in pandas? use context7
⏺ I'll help you learn how to read a CSV file in pandas using the Context7 documentation service. Let me look up the relevant documentation for you.
                                                                                                                                                   
⏺ plugin:py-helper:context7 - resolve-library-id (MCP)(query: "How to read a CSV file in pandas", libraryName: "pandas")                           
  ⎿  Available Libraries:                                                                                                                          
                                                                                                                                                   
     - Title: pandas                                                                                                                               
     … +34 lines (ctrl+o to expand)                                                                                                                
                                                                                                                                                   
⏺ Now I'll query the documentation for reading CSV files in pandas:                                                                                
                                                                                                                                                   
⏺ <span style="background: rgba(255, 152, 0, 0.2); border-radius: 4px; padding: 0 2px;">plugin:py-helper:context7 - query-docs (MCP)</span>(libraryId: "/websites/pandas_pydata", query: "How to read a CSV file into a pandas DataFrame")      
  ⎿  ### Read CSV data into pandas DataFrame                                                                                                       
                                                                                                                                                   
     Source: https://pandas.pydata.org/docs/getting_started/intro_tutorials/09_timeseries                                                          
     … +49 lines (ctrl+o to expand)                                                                                                                
                                                                                                                                                   
⏺ Based on the documentation from Context7, here's how to read a CSV file in pandas:                                                               
                                                                                                                                                   
  Basic CSV Reading                                                                                                                                
                                                                                                                                                   
  The most common way to read a CSV file in pandas is using the pd.read_csv() function:                                                            
                                                                                                                                                   
  import pandas as pd                                                                                                                              
                                                                                                                                                   
  # Basic usage                                                                                                                                    
  df = pd.read_csv('filename.csv')                                                                                                                 
                                                                                                                                                   
  # Example with a specific file                                                                                                                   
  titanic = pd.read_csv("data/titanic.csv")                                                                                                        
                                                                                                                                                   
  Common Parameters                                                                                                                                
                                                                                                                                                   
  The read_csv() function has many useful parameters:                                                                                              
                  
  import pandas as pd                                                                                                                              
                                                                                                                                                   
  # Read CSV with specific options                                                                                                                 
  df = pd.read_csv(                                                                                                                                
      'filename.csv',                                                                                                                              
      index_col=0,           # Set first column as index                                                                                           
      parse_dates=True,       # Parse index column as dates                                                                                        
      sep=',',               # Specify separator (default is comma)                                                                                
      header=0,              # Row to use as column names                                                                                          
      usecols=['col1', 'col2']  # Only read specific columns                                                                                       
  )                                                                                                                                                
                                                                                                                                                   
  Simple Example                                                                                                                                   
                                                                                                                                                   
  Here's a complete example:                                                                                                                       
                  
  import pandas as pd                                                                                                                              
                                                                                                                                                   
  # Read a CSV file into a DataFrame                                                                                                               
  df = pd.read_csv('data.csv')                                                                                                                     
                                                                                                                                                   
  # Display the first few rows                                                                                                                     
  print(df.head())                                                                                                                                 
                                                                                                                                                   
  # Get basic info about the DataFrame                                                                                                             
  print(df.info())                                                                                                                                 
                                                                                                                                                   
  This is the standard way to load CSV data into pandas for analysis. The function automatically handles most CSV formatting, but you can customize its behavior with the various parameters when needed.</code>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

<p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">Why It Fits the py-helper Plugin Perfectly</p>
<p style="margin-bottom:1rem; line-height:1.75;">Our plugin is all about <strong>Python code quality</strong>. Context7 completes that picture:</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">Plugin Component</th>
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">What it handles</th>
    </tr>
  </thead>
  <tbody style="line-height:1.6; color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--text-primary);">Skill (py-review)</td>
      <td style="padding: 0.75rem;">Finds bugs and style issues</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--text-primary);">Command (py-fix)</td>
      <td style="padding: 0.75rem;">Fixes PEP 8 violations</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--text-primary);">Hook</td>
      <td style="padding: 0.75rem;">Guards against secrets and syntax errors</td>
    </tr>
    <tr style="background: rgba(0, 242, 255, 0.05);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-primary);">MCP (Context7)</td>
      <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-primary);">Ensures library usage is always up to date</td>
    </tr>
  </tbody>
</table>

<p style="margin-top: 1.25rem; margin-bottom: 1.5rem; line-height: 1.75; color: var(--text-secondary);">Without Context7, Claude could review and fix your code perfectly — but still suggest a library pattern that's outdated. With it, the entire plugin becomes <strong>version-aware</strong>.</p>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">If something is not working, the fastest fallback is usually <code style="color: var(--code-text);">/reload-plugins</code>.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="7" class="tutorial-nav-link previous">
    <span>←</span> Previous: Install
  </a>
  <a href="#" data-goto-tab="9" class="tutorial-nav-link">
    Next: Share With Your Team <span>→</span>
  </a>
</div>
`},{label:"9. Share",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Share With Your Team]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Once the plugin works locally, you can publish the marketplace and share it with your team.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Push the marketplace to GitHub</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">cd my-claude-marketplace/py-helper-marketplace
git init
git add .
git commit -m "Initial plugin"
git remote add origin https://github.com/yourname/py-helper.git
git push -u origin main</code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Teammates install it with two commands inside Claude Code</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">/plugin marketplace add yourname/py-helper
/plugin install py-helper@py-helper-marketplace</code>

<div style="padding: 1.25rem; background: rgba(0, 242, 255, 0.03); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0 0 0.75rem; font-weight: 600; color: var(--text-primary);">You are done</p>
  <ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.75;">
    <li style="margin-bottom: 0.35rem;">A skill that auto-reviews Python code</li>
    <li style="margin-bottom: 0.35rem;">A command that fixes style issues on demand</li>
    <li style="margin-bottom: 0.35rem;">Hooks that guard every file save</li>
    <li style="margin-bottom: 0;">An MCP connection to Context7 for live Python documentation</li>
  </ul>
</div>

<div style="padding: 1.5rem; background: linear-gradient(135deg, rgba(0, 242, 255, 0.1), rgba(112, 0, 255, 0.1)); border: 1px solid var(--accent-primary); border-radius: 12px; margin: 2rem 0; text-align: center;">
  <p style="margin: 0 0 0.5rem; font-size: 1.25rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em;">Congratulations!</p>
  <p style="margin: 0; line-height: 1.6; color: var(--text-secondary);">You've successfully built and shared your first high-quality Claude Plugin. Your Python development workflow is now powered by custom skills, automated style fixes, security-first hooks, and live documentation via MCP. <strong>Go build something amazing!</strong></p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="8" class="tutorial-nav-link previous">
    <span>←</span> Previous: Test
  </a>
  <a href="#" data-goto-tab="9" class="tutorial-nav-link">
    Next: Additional <span>→</span>
  </a>
</div>
`},{label:"10. Additional",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Maintenance & Troubleshooting]</strong>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-top: 4px solid var(--accent-secondary); border-radius: 8px; margin: 1.5rem 0;">
  <p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1.1rem;">How to remove a Marketplace plugin from Claude</p>
  <p style="margin-bottom:0.5rem; line-height:1.75;">Inside Claude Code, first list what's registered:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); border-left: 2px solid var(--accent-secondary);">/plugin marketplace list</code>
  <code style="display: block; padding: 1rem; background: #1a1a1a; border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: #00ff00; white-space: pre-wrap;">❯ /plugin marketplace list                                                                                                                         
  ⎿  Configured marketplaces:                                                                                                                      
       • claude-plugins-official                                                                                                                   
       • claude-code-plugins
       • ui-ux-pro-max-skill
       • everything-claude-code
       • <span style="background: rgba(0, 242, 255, 0.2); border-radius: 4px; padding: 0 4px; color: #00f2ff; font-weight: bold;">py-helper-marketplace</span></code>
  <p style="margin-bottom:0.5rem; line-height:1.75;">You can remove it by using the following command:</p>
  <code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); border-left: 2px solid var(--accent-secondary);">/plugin marketplace remove py-helper-marketplace</code>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="9" class="tutorial-nav-link previous">
    <span>←</span> Previous: Share
  </a>
</div>
`}],interactiveType:"custom"},f=[D,W,q,N,j,B,_,U,O,R],s={isActive:!1,isLocked:!1,isMinimized:!1,timer:{duration:1500,remaining:1500,interval:null,isRunning:!1},stats:{streak:0,cardsToday:0,focusMinutes:0,lastStudyDate:null}},G={activeConcept:null,resetContentScroll(){const t=document.getElementById("content-area");t&&(t.scrollTop=0);const e=document.querySelector(".tutorial-tab-content");e&&(e.scrollTop=0)},init(){this.renderSidebar(),this.setupEventListeners(),this.initTheme(),this.initStudyMode(),this.initTechStackModal();const t=window.location.hash.substring(1);t&&f.some(e=>e.id===t)?this.selectConcept(t):this.renderWelcome(),L(document.getElementById("constellation-bg"))},renderWelcome(){document.getElementById("constellation-bg").style.display="";const t=this.getConceptOfTheDay(),e=document.getElementById("content-area");e.classList.remove("content-area--tabbed"),e.innerHTML=`
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
    `,e.querySelector(".cotd-ticker").addEventListener("click",()=>{this.selectConcept(t.id)});const r=e.querySelector(".ticker-text"),a=e.querySelector(".ticker-track").offsetWidth;r.style.setProperty("--start-x",a+"px")},getConceptOfTheDay(){const t=Math.floor(Date.now()/864e5);return f[t%f.length]},initTheme(){localStorage.getItem("theme")==="light"&&(document.documentElement.classList.add("light-mode"),document.querySelector("#theme-toggle .icon").textContent="☀️"),localStorage.getItem("sidebar")==="collapsed"&&document.getElementById("app").classList.add("sidebar-collapsed")},renderSidebar(){const t=document.getElementById("concept-list");t.innerHTML=f.map(e=>`
      <li class="nav-item" data-id="${e.id}">${e.title}</li>
    `).join("")},isMobile(){return window.innerWidth<=640},closeMobileSidebar(){document.getElementById("app").classList.remove("sidebar-open")},setupEventListeners(){document.getElementById("concept-list").addEventListener("click",t=>{if(t.target.classList.contains("nav-item")){const e=t.target.dataset.id;this.isMobile()&&this.closeMobileSidebar(),this.selectConcept(e)}}),document.getElementById("sidebar-toggle").addEventListener("click",()=>{const t=document.getElementById("app");if(this.isMobile())t.classList.toggle("sidebar-open");else{const e=t.classList.toggle("sidebar-collapsed");localStorage.setItem("sidebar",e?"collapsed":"open")}}),document.getElementById("app").addEventListener("click",t=>{this.isMobile()&&t.target===document.getElementById("app")&&this.closeMobileSidebar()}),document.getElementById("theme-toggle").addEventListener("click",()=>{const t=document.documentElement.classList.toggle("light-mode"),e=document.querySelector("#theme-toggle .icon");e.textContent=t?"☀️":"🌙",localStorage.setItem("theme",t?"light":"dark")}),document.getElementById("home-link").addEventListener("click",()=>{this.activeConcept=null,document.querySelectorAll(".nav-item").forEach(t=>t.classList.remove("active")),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search),this.isMobile()&&this.closeMobileSidebar(),this.renderWelcome()}),document.getElementById("concept-search").addEventListener("input",t=>{const e=t.target.value.toLowerCase();document.querySelectorAll(".nav-item").forEach(a=>{const o=a.textContent.toLowerCase();a.style.display=o.includes(e)?"block":"none"})}),window.addEventListener("hashchange",()=>{const t=window.location.hash.substring(1);t&&f.some(e=>e.id===t)?(!this.activeConcept||this.activeConcept.id!==t)&&this.selectConcept(t):t||(this.activeConcept=null,document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("active")),this.renderWelcome())}),window.addEventListener("message",async t=>{if(t.origin!==window.location.origin||t.data?.type!=="knowledgeLabFlowchartFullscreenToggle")return;const e=document.querySelector(".flowchart-embed");if(e)try{document.fullscreenElement===e?await document.exitFullscreen():document.fullscreenElement||await e.requestFullscreen()}catch(r){console.error("Flowchart fullscreen toggle failed:",r)}finally{e.querySelector("iframe")?.contentWindow?.postMessage({type:"knowledgeLabFlowchartFullscreenState",isFullscreen:document.fullscreenElement===e},window.location.origin)}}),document.addEventListener("fullscreenchange",()=>{const t=document.querySelector(".flowchart-embed");t?.querySelector("iframe")?.contentWindow?.postMessage({type:"knowledgeLabFlowchartFullscreenState",isFullscreen:document.fullscreenElement===t},window.location.origin)})},selectConcept(t){const e=f.find(a=>a.id===t);if(!e)return;window.location.hash!==`#${t}`&&(window.location.hash=t),document.getElementById("constellation-bg").style.display="none",this.activeConcept=e,document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active"));const r=document.querySelector(`[data-id="${t}"]`);r&&r.classList.add("active"),this.renderConcept(e),this.resetContentScroll()},renderConcept(t){const e=document.getElementById("content-area");if(t.tabs&&t.tabs.length>0){e.classList.add("content-area--tabbed");const r=t.tabs.map((o,i)=>`<button class="tutorial-tab-btn${i===0?" active":""}" data-tab="${i}">${o.label}</button>`).join(""),a=t.tabs.map((o,i)=>`<div class="tutorial-tab-panel${i===0?" active":""}" data-panel="${i}">
          <div class="concept-content" id="concept-description-${i}">
            ${o.content}
          </div>
        </div>`).join("");e.innerHTML=`
        <article class="concept-card concept-card--tabs">
          <nav class="tutorial-tabs" role="tablist">${r}</nav>
          <div class="tutorial-tab-content">${a}</div>
        </article>
      `,this.initTabs(),t.tabs.forEach((o,i)=>{const d=document.getElementById(`concept-description-${i}`);d&&this.attachCopyButtonsTo(d)})}else{e.classList.remove("content-area--tabbed");const r=t.description||"Add your description here...",a=r.trim().startsWith("<")?r:r.split(`

`).map(o=>`<p>${o}</p>`).join("");e.innerHTML=`
        <article class="concept-card">
          <h2 class="concept-title">${t.title}</h2>
          ${t.category||t.tags&&t.tags.length>0?`
          <div class="concept-meta">
            ${t.category?`<span class="tag">${t.category}</span>`:""}
            ${t.tags?t.tags.map(o=>`<span class="tag">${o}</span>`).join(""):""}
          </div>`:""}
          <div class="concept-content" id="concept-description">
            ${a}
          </div>
        </article>
      `,this.attachCopyButtons()}},initTabs(){const t=document.querySelectorAll(".tutorial-tab-btn"),e=document.querySelectorAll(".tutorial-tab-panel"),r=a=>{t.forEach(o=>o.classList.remove("active")),e.forEach(o=>o.classList.remove("active")),t[a].classList.add("active"),e[a].classList.add("active"),t[a].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.resetContentScroll()};t.forEach(a=>{a.addEventListener("click",()=>r(Number(a.dataset.tab)))}),document.querySelectorAll("[data-goto-tab]").forEach(a=>{a.addEventListener("click",o=>{o.preventDefault(),r(Number(a.dataset.gotoTab))})}),document.querySelectorAll("[data-goto-concept]").forEach(a=>{a.addEventListener("click",o=>{o.preventDefault(),typeof this.selectConcept=="function"&&this.selectConcept(a.dataset.gotoConcept)})})},attachCopyButtons(){const t=document.getElementById("concept-description");t&&this.attachCopyButtonsTo(t)},attachCopyButtonsTo(t){if(!t)return;t.querySelectorAll("code").forEach(r=>{if(!(r.style.display==="block"||r.textContent.includes(`
`)))return;const o=document.createElement("div");o.className="code-wrapper",r.parentNode.insertBefore(o,r),o.appendChild(r);const i=document.createElement("button");i.className="copy-btn",i.setAttribute("title","Copy to clipboard");const d='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',p='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';i.innerHTML=d,o.appendChild(i),i.addEventListener("click",()=>{const l=r.textContent.replace(/^❯\s+/,"");navigator.clipboard.writeText(l).then(()=>{i.innerHTML=p,i.classList.add("copied"),setTimeout(()=>{i.innerHTML=d,i.classList.remove("copied")},2e3)})})})},initTechStackModal(){const t=document.getElementById("tech-stack-btn"),e=document.getElementById("tech-stack-overlay"),r=document.getElementById("close-tech-stack"),a=document.getElementById("tech-stack-list");if(!t||!e||!r||!a)return;const o={...S.dependencies||{},...S.devDependencies||{}},i=[{name:"Vanilla JavaScript",desc:"Core application logic, ECMAScript modules, DOM manipulation, and dynamic rendering.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M14.5 9h-5l-.5-5h7l-.5 5zm-5 4h5l-.5 4.5-2 1.5-2-1.5-.2-2h2.2l.1 1.2 1 .8 1-.8.2-1.2h-3.8z"></path></svg>'},{name:"Vanilla CSS3 & HTML5",desc:"Custom glassmorphism styling, responsive grid layout, and semantic structure.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M15 9h-6l-.5-4h7.5l-.5 4zm-6 4h6l-.5 4.5-2.5 1.5-2.5-1.5-.2-2h2.2l.1 1.2 1.2.8 1.2-.8.2-1.2h-4.6z"></path></svg>'},{name:"HTML5 Canvas API",desc:"Custom performant animations including the Neural Constellation and Zen Flow backgrounds.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.268-.652-.053-.877.215-.225.542-.31 1.051-.31h2.438c2.66 0 4.853-2.192 4.853-4.853C21.5 6.756 17.244 2 12 2z"></path></svg>'}];o.vite&&i.push({name:"Vite ("+o.vite.replace(/[\^\~]/,"")+")",desc:"Next-generation frontend tooling providing ultra-fast builds and Hot Module Replacement.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'}),i.push({name:"GitHub Pages",desc:"Automated CI/CD deployment via GitHub Actions pipeline using the deployed build.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'}),a.innerHTML=i.map(c=>`
      <li class="tech-stack-item">
        <div class="tech-stack-icon-wrapper">
          ${c.icon}
        </div>
        <div class="tech-stack-info">
          <span class="tech-stack-name">${c.name}</span>
          <span class="tech-stack-desc">${c.desc}</span>
        </div>
      </li>
    `).join("");const d=()=>{e.classList.remove("hidden"),e.offsetWidth,e.classList.add("active")},p=()=>{e.classList.remove("active"),setTimeout(()=>{e.classList.contains("active")||e.classList.add("hidden")},300)};t.addEventListener("click",d),r.addEventListener("click",p),e.addEventListener("click",c=>{c.target===e&&p()})},initStudyMode(){this.loadStudyStats(),this.updateStudyMetrics(),this.initZenFlow(),document.getElementById("study-mode-btn").addEventListener("click",()=>{this.toggleStudyMode()}),document.getElementById("exit-study").addEventListener("click",()=>{this.toggleStudyMode()}),document.getElementById("timer-toggle").addEventListener("click",()=>{this.toggleTimer()}),document.getElementById("timer-reset").addEventListener("click",()=>{this.resetTimer()}),document.querySelectorAll(".preset-btn").forEach(t=>{t.addEventListener("click",e=>{const r=parseInt(e.target.dataset.time);this.setTimerDuration(r)})}),document.getElementById("minimize-study").addEventListener("click",()=>{this.minimizeStudy()}),document.getElementById("expand-study").addEventListener("click",()=>{this.expandStudy()}),document.getElementById("mini-stop-btn").addEventListener("click",()=>{this.expandStudy(),this.toggleStudyMode()}),document.getElementById("lock-screen-btn").addEventListener("click",()=>{this.lockScreen()}),document.getElementById("unlock-screen-btn").addEventListener("click",()=>{this.unlockScreen()})},loadStudyStats(){const t=localStorage.getItem("studyStats");t&&(s.stats=JSON.parse(t),this.updateStreak())},saveStudyStats(){localStorage.setItem("studyStats",JSON.stringify(s.stats))},updateStreak(){const t=new Date().toDateString(),e=s.stats.lastStudyDate;if(e){const r=new Date(e),a=new Date;a.setDate(a.getDate()-1),r.toDateString()===a.toDateString()||r.toDateString()!==t&&(s.stats.streak=0)}},updateStudyMetrics(){const t=document.getElementById("study-streak"),e=document.getElementById("study-cards"),r=document.getElementById("study-minutes");t&&(t.textContent=s.stats.streak),e&&(e.textContent=s.stats.cardsToday),r&&(r.textContent=s.stats.focusMinutes)},toggleStudyMode(){s.isActive=!s.isActive;const t=document.getElementById("study-mode-overlay"),e=document.querySelector(".zen-flow-bg");if(s.isActive){if(s.isMinimized){this.expandStudy();return}t.classList.remove("hidden"),t.classList.add("active"),e.style.opacity="1",this.updateStreak(),this.saveStudyStats()}else this.expandStudy(),t.classList.remove("active"),e.style.opacity="0",this.resetTimer(),setTimeout(()=>{t.classList.add("hidden")},500)},setTimerDuration(t){s.timer.duration=t*60,s.timer.remaining=t*60,document.querySelectorAll(".preset-btn").forEach(e=>{e.classList.toggle("active",parseInt(e.dataset.time)===t)}),this.updateTimerDisplay()},toggleTimer(){s.timer.isRunning?this.pauseTimer():this.startTimer()},startTimer(){s.timer.isRunning=!0,document.getElementById("timer-toggle").textContent="Pause",document.querySelector(".timer-wrapper").classList.add("active"),document.getElementById("lock-screen-btn").classList.remove("hidden"),s.timer.interval=setInterval(()=>{s.timer.remaining--,this.updateTimerDisplay(),s.timer.remaining<=0&&this.completeTimer()},1e3)},pauseTimer(){s.timer.isRunning=!1,document.getElementById("timer-toggle").textContent="Resume",document.querySelector(".timer-wrapper").classList.remove("active"),document.getElementById("lock-screen-btn").classList.add("hidden"),clearInterval(s.timer.interval),s.isLocked&&this.unlockScreen()},resetTimer(){this.pauseTimer(),s.timer.remaining=s.timer.duration,document.getElementById("timer-toggle").textContent="Start Focus",document.getElementById("timer-status").textContent="Ready to focus",document.getElementById("lock-screen-btn").classList.add("hidden"),this.updateTimerDisplay()},completeTimer(){this.pauseTimer(),document.getElementById("timer-status").textContent="Focus complete! Great work!",s.stats.focusMinutes+=Math.floor(s.timer.duration/60),this.updateStreakDate(),this.saveStudyStats(),this.updateStudyMetrics(),"Notification"in window&&Notification.permission==="granted"&&new Notification("Focus Session Complete",{body:"Great job! Take a break.",icon:"/vite.svg"})},updateTimerDisplay(){const t=Math.floor(s.timer.remaining/60),e=s.timer.remaining%60,r=`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`;document.getElementById("timer-minutes").textContent=t.toString().padStart(2,"0"),document.getElementById("timer-seconds").textContent=e.toString().padStart(2,"0"),document.getElementById("mini-timer-display").textContent=r;const a=s.timer.remaining/s.timer.duration*100;document.getElementById("mini-timer-progress").style.width=`${a}%`;const o=s.timer.remaining/s.timer.duration,d=2*Math.PI*130*(1-o);document.getElementById("timer-progress").style.strokeDashoffset=d,s.timer.isRunning?document.getElementById("timer-status").textContent="Stay focused...":document.getElementById("timer-status").textContent="Ready to focus"},minimizeStudy(){s.isMinimized=!0;const t=document.getElementById("study-mode-overlay"),e=document.querySelector(".zen-flow-bg");t.classList.remove("active"),e.style.opacity="0",setTimeout(()=>t.classList.add("hidden"),500),document.getElementById("mini-timer").classList.remove("hidden");const r=Math.floor(s.timer.remaining/60),a=s.timer.remaining%60;document.getElementById("mini-timer-display").textContent=`${r.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`;const o=s.timer.remaining/s.timer.duration*100;document.getElementById("mini-timer-progress").style.width=`${o}%`},expandStudy(){if(s.isMinimized=!1,document.getElementById("mini-timer").classList.add("hidden"),s.isActive){const t=document.getElementById("study-mode-overlay"),e=document.querySelector(".zen-flow-bg");t.classList.remove("hidden"),t.classList.add("active"),e.style.opacity="1"}},lockScreen(){s.isLocked=!0,document.getElementById("study-mode-overlay").classList.add("study-locked"),document.getElementById("unlock-screen-overlay").classList.remove("hidden")},unlockScreen(){s.isLocked=!1,document.getElementById("study-mode-overlay").classList.remove("study-locked"),document.getElementById("unlock-screen-overlay").classList.add("hidden")},updateStreakDate(){const t=new Date().toDateString(),e=s.stats.lastStudyDate;if(e!==t){const r=new Date;r.setDate(r.getDate()-1),e===r.toDateString()?s.stats.streak++:s.stats.streak=1,s.stats.lastStudyDate=t}},initZenFlow(){const t=document.getElementById("zen-flow-canvas"),e=t.getContext("2d");let r,a,o=[];const i=()=>{r=t.width=window.innerWidth,a=t.height=window.innerHeight,d()},d=()=>{o=[];const c=30;for(let l=0;l<c;l++)o.push({x:Math.random()*r,y:Math.random()*a,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,radius:Math.random()*80+40,hue:Math.random()*60+170,alpha:Math.random()*.1+.05,pulse:Math.random()*Math.PI*2})},p=()=>{if(!s.isActive){requestAnimationFrame(p);return}e.clearRect(0,0,r,a);const c=document.documentElement.classList.contains("light-mode");if(o.forEach(l=>{l.x+=l.vx,l.y+=l.vy,l.x<-l.radius&&(l.x=r+l.radius),l.x>r+l.radius&&(l.x=-l.radius),l.y<-l.radius&&(l.y=a+l.radius),l.y>a+l.radius&&(l.y=-l.radius),l.pulse+=.02;const u=e.createRadialGradient(l.x,l.y,0,l.x,l.y,l.radius),b=l.radius*(1+Math.sin(l.pulse)*.1);c?(u.addColorStop(0,`hsla(40, 30%, 70%, ${l.alpha*.5})`),u.addColorStop(.5,`hsla(40, 20%, 80%, ${l.alpha*.2})`),u.addColorStop(1,"transparent")):(u.addColorStop(0,`hsla(${l.hue}, 70%, 50%, ${l.alpha})`),u.addColorStop(.5,`hsla(${l.hue}, 70%, 50%, ${l.alpha*.3})`),u.addColorStop(1,"transparent")),e.beginPath(),e.arc(l.x,l.y,b,0,Math.PI*2),e.fillStyle=u,e.fill()}),s.timer.isRunning){const l=Date.now()/1e3,u=150+Math.sin(l*.5)*20,b=e.createRadialGradient(r/2,a/2,0,r/2,a/2,u);c?(b.addColorStop(0,"hsla(40, 30%, 75%, 0.05)"),b.addColorStop(1,"transparent")):(b.addColorStop(0,"hsla(180, 70%, 50%, 0.03)"),b.addColorStop(1,"transparent")),e.beginPath(),e.arc(r/2,a/2,u,0,Math.PI*2),e.fillStyle=b,e.fill()}requestAnimationFrame(p)};window.addEventListener("resize",i),i(),p()}};document.addEventListener("DOMContentLoaded",()=>G.init());
