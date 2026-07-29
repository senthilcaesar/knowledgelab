const claudeCommandsConcept = {
  id: "claude-commands",
  title: "Claude Commands",
  description: `
<p style="margin-bottom:1rem; line-height:1.75;">Claude Commands (also called slash commands) are a feature of Claude Code. Think of them like custom keyboard shortcuts or macros, but for your AI workflow.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Instead of typing out a long, detailed instruction every time you want Claude to do something repetitive, you save that instruction as a simple Markdown file and call it up with a quick <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/command-name</code>.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style: italic; opacity: 0.8;"><strong>Real-world analogy:</strong> Imagine you always ask a new intern the same 5-step process to review code before every commit. Instead of explaining it every single time, you write it down once in a document and just say "follow the checklist." That document is a slash command.</p>

<div style="margin-bottom: 2rem; padding: 1rem 1.25rem; background: rgba(255, 193, 7, 0.06); border: 1px solid rgba(255, 193, 7, 0.4); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.05rem; color: #f5c842;">⚠️ Read this first: commands are now skills</strong>
  <p style="margin-bottom:0.75rem; line-height:1.75;">Custom commands have been <strong>merged into skills</strong>. A file at <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.claude/commands/deploy.md</code> and a skill at <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.claude/skills/deploy/SKILL.md</code> both create <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/deploy</code> and behave identically. They share the same frontmatter and the same argument handling.</p>
  <p style="margin-bottom:0.75rem; line-height:1.75;">Your existing <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.claude/commands/</code> files keep working — nothing to migrate. But <strong>for anything new, prefer the skills layout</strong>: a skill is a <em>directory</em>, so it can carry scripts, templates and reference docs alongside the prompt, and Claude can load it automatically when a task matches its description. A flat command file has to fit everything in the prompt.</p>
  <p style="margin-bottom:0; line-height:1.75;">Everything below applies to both. Where the two differ, it's called out.</p>
</div>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Two Types of Commands</strong>
  <p style="margin-bottom:0.75rem;">Commands come in two main flavors:</p>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong style="color: var(--accent-secondary);">Built-in</strong> — Standard tools that ship with Claude Code for managing your session: <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/clear</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/help</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/context</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/memory</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/model</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/plan</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/doctor</code></li>
    <li style="margin-bottom: 0.5rem;"><strong style="color: var(--accent-secondary);">Bundled skills</strong> — Ready-made workflows Anthropic ships, invoked the same way: <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/code-review</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/deep-research</code></li>
    <li><strong style="color: var(--accent-secondary);">Custom</strong> — Commands you build yourself for your own repetitive workflows</li>
  </ul>
</div>

<strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Where they live</strong>
<div style="overflow-x:auto; margin-bottom:1.5rem;">
  <table style="width:100%; border-collapse: collapse; font-size:0.88rem; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); text-align:left;">Scope</th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); text-align:left;">Path</th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); text-align:left;">Available in</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Personal</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.82rem; color:var(--code-text);">~/.claude/skills/&lt;name&gt;/SKILL.md</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">All your projects</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Project</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.82rem; color:var(--code-text);">.claude/skills/&lt;name&gt;/SKILL.md</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">This project — commit it to share with the team</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Plugin</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.82rem; color:var(--code-text);">&lt;plugin&gt;/skills/&lt;name&gt;/SKILL.md</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Wherever the plugin is enabled. Namespaced as <code style="color:var(--code-text);">/plugin-name:skill</code></td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Legacy</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.82rem; color:var(--code-text);">.claude/commands/&lt;name&gt;.md</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Same as project scope — the flat-file form</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:1.5rem; line-height:1.75;">Personal beats project when names collide, and a <em>skill</em> beats a <em>command</em> of the same name. Plugin skills are namespaced, so they can never conflict. Handy detail while you're iterating: Claude Code watches these directories, so adding or editing a skill takes effect within the current session — no restart, unless you just created the top-level directory itself.</p>
<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 1 — Create a project-level command</strong>
  <p style="margin-bottom:0.5rem;">Create a directory for the skill. The <strong>directory name becomes the command name</strong>:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">mkdir -p .claude/skills/explain</pre>

  <p style="margin-top: 1rem; margin-bottom:0.5rem;">Then write <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> inside it:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">cat > .claude/skills/explain/SKILL.md << 'EOF'
---
description: Explain unfamiliar code in plain English
argument-hint: [file path]
allowed-tools: Read, Grep
---

Explain the following code in simple English. Assume the reader knows the basics
of the programming language but is new to this codebase. Show a one-paragraph summary,
then a bullet list of what each major section does.

Code to explain:
$ARGUMENTS
EOF</pre>

  <p style="margin-top: 1rem; margin-bottom:0.5rem; line-height:1.75;">The older flat-file form does exactly the same thing, if you prefer it — same frontmatter, same body:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">mkdir -p .claude/commands   # then write the same content to .claude/commands/explain.md</pre>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">The frontmatter fields worth knowing</strong>
  <p style="margin-bottom:0.75rem; line-height:1.75;">Frontmatter is optional — a bare prompt works fine. But a few fields earn their place quickly. All of these work in both layouts:</p>
  <div style="overflow-x:auto; margin-bottom:1rem;">
    <table style="width:100%; border-collapse: collapse; font-size:0.88rem; border: 1px solid var(--border-color);">
      <thead>
        <tr style="background: var(--surface-color);">
          <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); text-align:left;">Field</th>
          <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); text-align:left;">What it does</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">description</td>
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Shows in the <code style="color:var(--code-text);">/</code> autocomplete, <em>and</em> is what Claude reads to decide whether to run this automatically. Write it as "what it does and when to use it"</td>
        </tr>
        <tr style="background: var(--surface-color);">
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">argument-hint</td>
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Placeholder shown after the name while you type, e.g. <code style="color:var(--code-text);">[file path]</code></td>
        </tr>
        <tr>
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">disable-model-invocation</td>
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Set <code style="color:var(--code-text);">true</code> to make it manual-only, so Claude never fires it on its own. Use this for anything destructive</td>
        </tr>
        <tr style="background: var(--surface-color);">
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">allowed-tools</td>
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Tools pre-approved for the turn that invokes it — no permission prompt. The grant clears on your next message</td>
        </tr>
        <tr>
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">model / effort</td>
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Run this one on a different model or reasoning level, just for that turn</td>
        </tr>
        <tr style="background: var(--surface-color);">
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">context: fork</td>
          <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color);">Run the whole thing in a subagent so its output never lands in your main context</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Passing arguments</strong>
  <p style="margin-bottom:0.75rem; line-height:1.75;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">$ARGUMENTS</code> expands to everything you typed after the command name. For finer control:</p>
  <ul style="margin-left: 1.25rem; line-height: 1.8;">
    <li style="margin-bottom: 0.4rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">$0</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">$1</code> — individual positional arguments. These are <strong>zero-based</strong>: <code style="color: var(--code-text);">$0</code> is the first argument, not <code style="color: var(--code-text);">$1</code>. They're shorthand for <code style="color: var(--code-text);">$ARGUMENTS[0]</code> and <code style="color: var(--code-text);">$ARGUMENTS[1]</code>.</li>
    <li style="margin-bottom: 0.4rem;">Quote multi-word values: <code style="color: var(--code-text);">/my-skill "hello world" second</code> makes <code style="color: var(--code-text);">$0</code> the whole phrase.</li>
    <li style="margin-bottom: 0.4rem;">Declare an <code style="color: var(--code-text);">arguments: [issue, branch]</code> frontmatter list and you can write <code style="color: var(--code-text);">$issue</code> and <code style="color: var(--code-text);">$branch</code> instead of counting positions.</li>
    <li><code style="color: var(--code-text);">\${CLAUDE_SKILL_DIR}</code> and <code style="color: var(--code-text);">\${CLAUDE_PROJECT_DIR}</code> resolve to the skill's own folder and the project root — the reliable way to call a bundled script.</li>
  </ul>
  <p style="margin-top:1rem; margin-bottom:0.5rem; line-height:1.75;">You can also inject live shell output into the prompt <em>before</em> Claude sees it, with <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">!</code> followed by a backticked command. This is what makes a good <code style="color: var(--code-text);">/commit</code>:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">---
description: Write a conventional commit message for the staged changes
allowed-tools: Bash(git *)
---

Here is the staged diff:

!\`git diff --cached\`

Write a conventional commit message (feat/fix/chore/docs/refactor/test) and commit it.</pre>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 2 — Use it</strong>
  <p style="margin-bottom:0.5rem;">Typing the slash followed by the command name in Claude code:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.9rem;">/explain src/utils/logger.js</pre>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Why Is This Useful?</strong>
  <p style="margin-bottom:1rem; line-height:1.75;">The real power is how slash commands turn a clunky, multi-step process into one quick action. Some popular uses include:</p>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/commit</code> — Claude analyzes your changes and writes a proper commit message</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/test</code> — runs your test suite and auto-fixes failures</li>
    <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/pr</code> — generates a pull request description from your recent commits</li>
  </ul>
</div>
<div style="height: 10rem;"></div>
  `,
  interactiveType: "custom",
};

export default claudeCommandsConcept;
