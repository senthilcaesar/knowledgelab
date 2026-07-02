import specKitConcept from './spec-kit.js';
import openSpecConcept from './openspec.js';
import claudeTaskMasterConcept from './claude-task-master.js';
import mattPocockSkillsConcept from './matt-pocock-skills.js';
import claudeCodeSystemPromptsConcept from './claude-code-system-prompts.js';

const aiAgentWorkflowsConcept = {
  id: 'ai-agent-workflows',
  title: 'AI Agent Coding Frameworks',
  category: 'Tutorial',
  tags: ['SDD', 'AI', 'Agents', 'Spec-Driven', 'Frameworks'],
  tabs: [
    {
      label: 'Spec-Kit',
      content: specKitConcept.description + `
<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: OpenSpec <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'OpenSpec',
      content: openSpecConcept.description + `
<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Spec-Kit
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Task Master <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Task Master',
      content: claudeTaskMasterConcept.description + `
<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: OpenSpec
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Agent Skills <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Agent Skills',
      content: mattPocockSkillsConcept.description + `
<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Task Master
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: System Prompts <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'System Prompts',
      content: claudeCodeSystemPromptsConcept.description + `
<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Agent Skills
  </a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">
    Next: Compound Engineering <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Compound Engineering',
      content: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/EveryInc/compound-engineering-plugin" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span>GitHub: EveryInc/compound-engineering-plugin</span>
  </a>
</div>

<p style="margin-bottom:1rem; line-height:1.75;">The official <strong>Compound Engineering</strong> plugin for Claude Code, Codex, Cursor, and other AI coding agents. It brings a structured, compound-action methodology to AI-assisted software development — letting you chain together multi-step engineering tasks into coherent, reproducible workflows.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Core idea:</strong> Instead of firing one-off prompts, you define compound actions that chain spec → implement → test → document as a single agent run — reducing context drift and producing production-ready output every time.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Features</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">🔌 <strong>Multi-editor support</strong> — works with Claude Code, OpenAI Codex CLI, Cursor, and more</li>
    <li style="margin-bottom: 0.5rem;">🔗 <strong>Chained actions</strong> — link spec → code → test → review into a single agent run</li>
    <li style="margin-bottom: 0.5rem;">📋 <strong>Plugin protocol</strong> — standardized API so agents share context across steps</li>
    <li style="margin-bottom: 0.5rem;">🔄 <strong>Iterative refinement</strong> — agents loop back on failing steps automatically</li>
    <li>🧩 <strong>Composable skills</strong> — mix and match engineering sub-skills for custom pipelines</li>
  </ul>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Compound Feature Build</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Install the plugin
npm install -g compound-engineering-plugin

# Run a compound engineering task
compound run feature \\
  --spec "Add user authentication with JWT" \\
  --agent claude-code \\
  --steps spec,implement,test,document</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Chained Refactor + Test</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Chain a refactor with test generation
compound run refactor \\
  --target src/auth/login.ts \\
  --goal "Extract validation logic into a separate service" \\
  --steps refactor,generate-tests,lint-fix</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: PR-Ready Pipeline</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Full pipeline: design → code → test → PR description
compound run pr-ready \\
  --feature "Add rate limiting to /api/users" \\
  --output-pr-body true</pre>
</div>

<div style="height: 10rem;"></div>
<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: System Prompts
  </a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">
    Next: GSD Core <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'GSD Core',
      content: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/open-gsd/gsd-core" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span>GitHub: open-gsd/gsd-core</span>
  </a>
</div>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>GSD Core</strong> is the engine behind the "Git. Ship. Done." philosophy — an opinionated AI agent workflow framework that enforces a tight loop of committing, shipping, and iterating. It is designed for developers who want their AI agents to produce deliverable output on every run, not just exploratory drafts.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Core idea:</strong> Every agent session is a shipping event. Agents must commit changes and mark tasks done before context is released — enforcing accountability and traceability in AI-driven development.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Features</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">🚀 <strong>Ship-first mindset</strong> — every task ends with a deliverable commit or PR</li>
    <li style="margin-bottom: 0.5rem;">📦 <strong>Git-native workflow</strong> — agents operate on branches, commits, and diffs as first-class objects</li>
    <li style="margin-bottom: 0.5rem;">✅ <strong>Done criteria enforcement</strong> — tasks must satisfy explicit done conditions before closing</li>
    <li style="margin-bottom: 0.5rem;">🔁 <strong>Iterative feedback loop</strong> — CI failures automatically re-enter the agent queue</li>
    <li>🧠 <strong>Context-aware</strong> — agents carry git history and PR comments as context</li>
  </ul>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Ship a Feature</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Initialize GSD in your repo
gsd init

# Define a task with done criteria
gsd task create \\
  --title "Add dark mode toggle" \\
  --done-when "tests pass, PR opened, screenshot attached"

# Run the agent
gsd run --task add-dark-mode-toggle --agent claude-code</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: CI-Driven Re-run</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Automatically re-queue agent on CI failure
gsd watch --branch feature/dark-mode \\
  --on-failure rerun-agent \\
  --max-retries 3</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Self-Review Before PR</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Have the agent review its own diff before opening PR
gsd run --task fix-auth-bug \\
  --steps implement,self-review,open-pr</pre>
</div>

<div style="height: 10rem;"></div>
<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="5" class="tutorial-nav-link previous">
    <span>←</span> Previous: Compound Engineering
  </a>
  <a href="#" data-goto-tab="7" class="tutorial-nav-link">
    Next: Superpowers <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Superpowers',
      content: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/obra/superpowers" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span>GitHub: obra/superpowers</span>
  </a>
</div>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Superpowers</strong> is an agentic skills framework and software development methodology that works. It provides a structured way to define, compose, and deploy AI agent skills — making agent behaviour repeatable, testable, and shareable across teams and projects.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Core idea:</strong> Most agent frameworks focus on tool-use. Superpowers focuses on <em>methodology</em> — encoding proven software development practices as skills that agents reliably execute, not just as prompts that sometimes work.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Features</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">⚡ <strong>Skills-as-code</strong> — define agent skills in structured YAML/Markdown with inputs, outputs, and success criteria</li>
    <li style="margin-bottom: 0.5rem;">🧪 <strong>Testable behaviours</strong> — every skill has an associated test harness</li>
    <li style="margin-bottom: 0.5rem;">🔀 <strong>Composable pipelines</strong> — chain skills into multi-step methodologies</li>
    <li style="margin-bottom: 0.5rem;">📖 <strong>Methodology-first</strong> — encodes proven dev practices (TDD, spec-first, review-then-merge)</li>
    <li>🤝 <strong>Agent-agnostic</strong> — works with Claude, GPT, local LLMs, and Codex</li>
  </ul>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Define a Skill</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># skills/write-tests.yaml
name: write-tests
description: Write unit tests for a given module
inputs:
  - module_path: string
  - coverage_target: number (default: 80)
outputs:
  - test_file: string
  - coverage_report: string
success_criteria:
  - all tests pass
  - coverage >= coverage_target
agent_prompt: |
  Write comprehensive unit tests for {{ module_path }}.
  Target {{ coverage_target }}% coverage. Use existing test patterns.</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Compose a Methodology</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># methodologies/tdd-feature.yaml
name: tdd-feature
steps:
  - skill: write-spec
  - skill: write-tests
  - skill: implement-to-pass-tests
  - skill: refactor
  - skill: open-pr</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Run a Methodology</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">superpowers run tdd-feature \\
  --feature "Add email verification" \\
  --agent claude-code</pre>
</div>

<div style="height: 10rem;"></div>
<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="6" class="tutorial-nav-link previous">
    <span>←</span> Previous: GSD Core
  </a>
  <a href="#" data-goto-tab="8" class="tutorial-nav-link">
    Next: Addy Osmani Agent Skills <span>→</span>
  </a>
</div>
`,
    },
    {
      label: 'Addy Osmani Agent Skills',
      content: `
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/addyosmani/agent-skills" target="_blank" class="github-link-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span>GitHub: addyosmani/agent-skills</span>
  </a>
</div>

<p style="margin-bottom:1rem; line-height:1.75;">A curated collection of <strong>production-grade engineering skills</strong> for AI coding agents, authored by Addy Osmani (Chrome team, Google). These skills encode real-world software engineering expertise — performance optimization, accessibility, testing, and code quality — as structured agent instructions that any LLM coding agent can execute reliably.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Core idea:</strong> Generic AI agents know <em>how</em> to write code, but not always the <em>right way</em> for production systems. These skills embed years of real engineering experience into repeatable, reviewable agent behaviours.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Skill Categories</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">🚀 <strong>Performance</strong> — Core Web Vitals, bundle analysis, lazy loading, caching strategies</li>
    <li style="margin-bottom: 0.5rem;">♿ <strong>Accessibility</strong> — WCAG compliance checks, ARIA patterns, keyboard navigation</li>
    <li style="margin-bottom: 0.5rem;">🧪 <strong>Testing</strong> — unit test generation, E2E coverage, snapshot testing workflows</li>
    <li style="margin-bottom: 0.5rem;">🔍 <strong>Code Review</strong> — automated review checklists, security scanning, style consistency</li>
    <li>📐 <strong>Architecture</strong> — component design, API contract review, dependency auditing</li>
  </ul>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Performance Audit Skill</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Run a performance audit skill
agent-skills run performance-audit \\
  --url https://myapp.com \\
  --fix-suggestions true \\
  --agent claude-code

# The agent will:
# 1. Run Lighthouse against the URL
# 2. Identify top 3 performance bottlenecks
# 3. Generate specific code fixes for each
# 4. Open a PR with the changes</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Accessibility Skill</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Check and fix accessibility issues
agent-skills run accessibility-fix \\
  --component src/components/Modal.tsx \\
  --standard WCAG-AA</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Test Coverage Skill</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Bring a module up to 90% test coverage
agent-skills run improve-coverage \\
  --module src/utils/formatters.ts \\
  --target-coverage 90 \\
  --test-framework vitest</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Principles</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">Skills are <strong>opinionated</strong> — they encode best practices, not just possibilities</li>
    <li style="margin-bottom: 0.5rem;">Skills are <strong>composable</strong> — combine them into multi-step engineering workflows</li>
    <li style="margin-bottom: 0.5rem;">Skills are <strong>reviewable</strong> — every agent action produces a human-readable rationale</li>
    <li>Skills are <strong>tested</strong> — each skill has example inputs/outputs for validation</li>
  </ul>
</div>

<div style="height: 10rem;"></div>
<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="7" class="tutorial-nav-link previous">
    <span>←</span> Previous: Superpowers
  </a>
</div>
`,
    },
  ],
  interactiveType: 'custom',
};

export default aiAgentWorkflowsConcept;
