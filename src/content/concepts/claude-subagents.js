const claudeSubagentsConcept = {
  id: "claude-subagents",
  title: "Claude Subagents",
  tabs: [
    {
      label: "Overview",
      content: `
        <p style="margin-bottom:1rem; line-height:1.75;">A subagent is an isolated Claude instance with its own context window. It takes a task, does the work, and returns only the result. Subagents are self-contained agents that operate with their own context windows. When Claude spawns a subagent, that assistant works independently to read files, explore code, or make changes. When it completes its task, the subagent returns only the relevant results to the main conversation.</p>
        
        <p style="margin-bottom:1rem; line-height:1.75;">Each subagent starts fresh, unburdened by the history of the conversation or invoked skills. Multiple subagents can run in parallel, and each can have different permissions: a research subagent might have read-only access, while an implementation subagent gets full editing capabilities.</p>

        <p style="margin-bottom:1.5rem; font-style: italic; color: var(--text-secondary); line-height:1.6;">
          Note: Subagents work within a single session. To run many independent sessions in parallel and watch them from one place, see background agents (agent view). For sessions that communicate with each other, see agent teams.
        </p>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">When should you use subagents?</strong>
          <p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--text-secondary);">Certain categories of work benefit clearly from subagent delegation. Learning to recognize them makes the feature far more effective.</p>

          <div style="margin-bottom: 1.5rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Research-heavy tasks</strong>
            <p style="margin-bottom: 0.75rem; line-height: 1.6; font-size: 0.95rem;">When understanding how something works is a prerequisite to changing it, a subagent can explore the codebase and return a summary rather than dumping dozens of files into the conversation.</p>
            <p style="margin-bottom: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The signal:</strong> Gathering context requires reading dozens of files.</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The benefit:</strong> The main conversation stays clean, and synthesized findings arrive instead of raw content.</p>
          </div>

          <div style="margin-bottom: 1.5rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Multiple independent tasks</strong>
            <p style="margin-bottom: 0.75rem; line-height: 1.6; font-size: 0.95rem;">When fixing errors across several files, updating patterns in multiple components, or making changes that don't depend on each other, parallel subagents complete the task faster.</p>
            <p style="margin-bottom: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The signal:</strong> Sub-tasks have no dependencies between them.</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The benefit:</strong> Three subagents working simultaneously generally finish the task in less time.</p>
          </div>

          <div style="margin-bottom: 1.5rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Fresh perspective needed</strong>
            <p style="margin-bottom: 0.75rem; line-height: 1.6; font-size: 0.95rem;">When a task benefits from an unbiased look — like auditing code the main conversation just wrote — a subagent starts fresh, free from any assumptions baked into the current context.</p>
            <p style="margin-bottom: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The signal:</strong> You want a second pair of eyes on work already done.</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The benefit:</strong> Catches issues the main conversation might rationalize away.</p>
          </div>

           <div style="margin-bottom: 2rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Pipeline workflows</strong>
            <p style="margin-bottom: 0.75rem; line-height: 1.6; font-size: 0.95rem;">When a task has distinct phases (i.e., design, then implement, then test), each stage benefits from focused attention.</p>
            <p style="margin-bottom: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The signal:</strong> Sequential stages with clear handoffs.</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The benefit:</strong> Each subagent concentrates on its phase, without context from other stages creating noise.</p>
          </div>

          <div style="margin: 1.5rem 0; padding: 1rem 1.25rem; background: rgba(0, 242, 255, 0.05); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0;">
            <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
              <strong style="color: var(--accent-primary);">Pro-tip:</strong> When a task requires exploring ten or more files, or involves three or more independent pieces of work, that's a strong signal to direct Claude toward subagents.
            </p>
          </div>

          <div style="margin-bottom: 2rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Verification before committing</strong>
            <p style="margin-bottom: 0.75rem; line-height: 1.6; font-size: 0.95rem;">Before finalizing changes, an independent subagent can verify the implementation isn't overfitting to tests or missing edge cases.</p>
            <p style="margin-bottom: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The signal:</strong> A second opinion is warranted before committing code.</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The benefit:</strong> Catches issues that familiarity with the code might obscure.</p>
          </div>
        </div>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">How is it Different From Everything Else?</strong>
          <p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--text-secondary);">Here's the mental model for all the pieces:</p>
          
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">CLAUDE.md</code> &mdash; Establish project context and conventions that Claude always knows
            </li>
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">Slash Commands</code> &mdash; Create explicit shortcuts for workflows you want to trigger on demand
            </li>
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">Subagents</code> &mdash; Offload parallel or isolated work to specialized agents
            </li>
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">Hooks</code> &mdash; Enforce rules and automate repetitive actions at key lifecycle events
            </li>
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">MCP</code> &mdash; Connect external systems and make their capabilities available as commands
            </li>
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">Skills</code> &mdash; Define automatic behaviors that activate based on task context
            </li>
          </ul>
        </div>
      `,
    },
    {
      label: "Invocation",
      content: `
        <div style="margin-bottom: 2.5rem;">
          <h2 style="margin-bottom: 1.5rem; color: var(--accent-primary); font-size: 1.4rem;">How to direct subagent usage</h2>
          <p style="margin-bottom: 1.5rem; line-height: 1.75;">Several methods exist for invoking subagents, ranging from simple conversation to automated workflows. The right starting point depends on the workflow, and sophistication can be layered on as patterns emerge.</p>
        </div>

        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--text-primary); font-size: 1.2rem;">Conversational invocation</h3>
          <p style="margin-bottom: 1rem; line-height: 1.75;">The most flexible approach is simply asking Claude to use subagents in conversation. This works across all Claude Code interfaces: terminal, VS Code, JetBrains, the web, and desktop applications.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Natural language patterns that reliably invoke subagents include:</p>

          <ul style="margin: 0 0 1.5rem 0; padding-left: 1.5rem; line-height: 2;">
            <li style="margin-bottom: 0.5rem; color: var(--text-secondary); font-style: italic;">"Use a subagent to explore how authentication works in this codebase"</li>
            <li style="margin-bottom: 0.5rem; color: var(--text-secondary); font-style: italic;">"Have a separate agent review this code for security issues"</li>
            <li style="margin-bottom: 0.5rem; color: var(--text-secondary); font-style: italic;">"Research this in parallel. Check the API routes, database models, and frontend components simultaneously"</li>
            <li style="color: var(--text-secondary); font-style: italic;">"Spin up subagents to fix these TypeScript errors across the different packages"</li>
          </ul>

          <p style="margin-bottom: 1.5rem; line-height: 1.75;">Being explicit matters. Specify the scope, request parallel execution when tasks are independent, and describe the desired output.</p>

          <p style="margin-bottom: 1rem; line-height: 1.75;">Here's an effective prompt structure:</p>

          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">Use subagents to explore this codebase in parallel:

1. Find all API endpoints and summarize their purposes
2. Identify the database schema and relationships
3. Map out the authentication flow

Return a summary of each, not the full file contents.</code>

          <p style="margin-bottom: 1.5rem; line-height: 1.75;">This prompt works because it clearly defines three independent tasks, explicitly requests parallel execution, and specifies the output format. Claude understands the intent and spawns appropriate subagents.</p>

          <p style="margin-bottom: 1rem; line-height: 1.75;">Tips for effective conversational invocation include:</p>

          <ul style="margin: 0 0 1.5rem 0; padding-left: 1.5rem; line-height: 1.8; list-style: none;">
            <li style="margin-bottom: 1rem; padding-left: 0.5rem; border-left: 3px solid var(--accent-primary);">
              <strong style="color: var(--text-primary);">Scope tasks clearly.</strong> <span style="color: var(--text-secondary);">"Explore how payments work" beats "explore everything."</span>
            </li>
            <li style="margin-bottom: 1rem; padding-left: 0.5rem; border-left: 3px solid var(--accent-primary);">
              <strong style="color: var(--text-primary);">Request parallelization explicitly.</strong> <span style="color: var(--text-secondary);">Say "these can run in parallel" or "work on all three simultaneously."</span>
            </li>
            <li style="margin-bottom: 1rem; padding-left: 0.5rem; border-left: 3px solid var(--accent-primary);">
              <strong style="color: var(--text-primary);">Specify what should be returned.</strong> <span style="color: var(--text-secondary);">Summaries, specific findings, or recommendations. Naming the output format helps Claude deliver it.</span>
            </li>
            <li style="margin-bottom: 0; padding-left: 0.5rem; border-left: 3px solid var(--accent-primary);">
              <strong style="color: var(--text-primary);">Ask for fresh context when unbiased analysis matters.</strong> <span style="color: var(--text-secondary);">"Use a subagent that does not see our previous discussion" ensures clean evaluation.</span>
            </li>
          </ul>

          <div style="margin-top: 2rem; padding: 1rem 1.25rem; background: rgba(0, 242, 255, 0.05); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0;">
            <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
              <strong style="color: var(--accent-primary);">Pro-tip:</strong> When a subagent is taking a while, <code>Ctrl+B</code> sends it to the background. The conversation can continue while it runs, and results surface automatically when it finishes. The <code>/tasks</code> command shows anything running in the background.
            </p>
          </div>
        </div>

        <div style="margin-top: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">CLAUDE.md instructions</h3>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Custom subagents define who the specialists are. CLAUDE.md files define the rules for when Claude should reach for them. If every code review should go through a read-only subagent, or every architecture question should trigger a research pass first, CLAUDE.md is where that policy lives. Claude reads it at the start of every conversation, so the behavior stays consistent across sessions and teammates without anyone needing to remember to ask.</p>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">CLAUDE.md is a good fit for subagent instructions when:</p>
          <ul style="margin: 0 0 1.5rem 1.5rem; line-height: 1.75; color: var(--text-secondary);">
            <li style="margin-bottom: 0.4rem;">Code reviews should always use read-only subagents</li>
            <li style="margin-bottom: 0.4rem;">The project has specific research patterns Claude should follow</li>
            <li style="margin-bottom: 0.4rem;">Consistent behavior is needed across team members and sessions</li>
          </ul>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Here's an example of a simple CLAUDE.md file that triggers a subagent given specific conditions:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">## Code review standards

When asked to review code, ALWAYS use a subagent with READ-ONLY access
(Glob, Grep, Read only). The review should ALWAYS check for:
- Security vulnerabilities
- Performance issues
- Adherence to project patterns in /docs/architecture.md

Return findings as a prioritized list with file:line references.</code>

          <p style="margin-bottom: 1rem; line-height: 1.75;">With the above CLAUDE.md file, every code review request automatically uses the defined pattern, eliminating the need to specify it each time.</p>

          <p style="margin-bottom: 2rem; line-height: 1.75; color: var(--text-secondary); font-size: 0.95rem;">For more on CLAUDE.md files, see Customizing Claude Code for your codebase: setting up a CLAUDE.md file and our Claude Code CLAUDE.md file docs.</p>
        </div>

        <div style="margin-top: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">Skills</h3>
          <p style="margin-bottom: 1rem; line-height: 1.75;">For complex multi-step workflows that run repeatedly, skills provide a reusable interface. Define a skill once in <code>.claude/skills/</code>, then invoke it with <code>/skill-name</code> or let Claude load it automatically when a task matches its description.</p>

          <p style="margin-bottom: 1rem; line-height: 1.75;">Skills differ from CLAUDE.md files in scope. CLAUDE.md files are always loaded and shapes every interaction. A skill is loaded on demand, either because it was invoked explicitly or because Claude matched the current task to the skill's description field. That makes skills the right place for workflows that should be available but not applied to every prompt.</p>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Skills fit well when:</p>
          <ul style="margin: 0 0 1.5rem 1.5rem; line-height: 1.75; color: var(--text-secondary);">
            <li style="margin-bottom: 0.4rem;">Certain actions get run regularly</li>
            <li style="margin-bottom: 0.4rem;">Different team members need access to the same complex operation</li>
            <li style="margin-bottom: 0.4rem;">Standardizing how certain tasks are performed across the team matters</li>
          </ul>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Here's an example of a deep-review skill for comprehensive code review:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem;"># .claude/skills/deep-review/SKILL.md

---
name: deep-review
description: Comprehensive code review that checks security,
  performance, and style in parallel. Use when reviewing staged
  changes before a commit or PR.
---

Run three parallel subagent reviews on the staged changes:

1. Security review - check for vulnerabilities, injection risks,
   authentication issues, and sensitive data exposure
2. Performance review - check for N+1 queries, unnecessary iterations,
   memory leaks, and blocking operations
3. Style review - check for consistency with project patterns
   documented in /docs/style-guide.md

Synthesize findings into a single summary with priority-ranked issues.
Each issue should include the file, line number, and recommended fix.</code>

          <p style="margin-bottom: 1rem; line-height: 1.75;">In the code snippet above, <code>/deep-review</code> triggers a three-part subagent analysis on demand. Because the description mentions reviewing staged changes before commits, Claude can also reach for this skill automatically when that context comes up.</p>

          <p style="margin-bottom: 1rem; line-height: 1.75;">A skill is a directory, not a single file. Alongside SKILL.md, it can hold templates Claude fills in, example outputs showing the expected format, or scripts Claude executes as part of the workflow. The legacy <code>.claude/commands/format</code> was a single flat file, so everything had to live in the prompt itself.</p>

          <p style="margin-bottom: 2rem; line-height: 1.75; color: var(--text-secondary); font-size: 0.95rem;">For more on using skills with Claude Code, see our Claude Code skills docs.</p>
        </div>

        <div style="margin-top: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">Hooks</h3>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks are user-defined shell commands, HTTP endpoints, or LLM prompts that execute automatically at specific points in Claude Code's lifecycle. Hooks can automate subagent workflows based on events. Hooks trigger on specific actions and run subagent tasks without manual invocation.</p>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Hooks are the right tool when:</p>
          <ul style="margin: 0 0 1.5rem 1.5rem; line-height: 1.75; color: var(--text-secondary);">
            <li style="margin-bottom: 0.4rem;">Every commit should be reviewed automatically before it's created</li>
            <li style="margin-bottom: 0.4rem;">Security checks should run without anyone remembering to ask</li>
            <li style="margin-bottom: 0.4rem;">CI-like quality gates belong in the local development process</li>
          </ul>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Here is an example of a Stop hook that blocks Claude from ending its turn until a test is passed:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/check-tests.sh"
          }
        ]
      }
    ]
  }
}</code>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">And the script at <code>.claude/hooks/check-tests.sh</code>:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">#!/bin/bash
INPUT=$(cat)
STOP_HOOK_ACTIVE=$(echo "$INPUT" | jq -r '.stop_hook_active // false')

# Don't loop forever — if we already blocked once this turn, let it through
if [ "$STOP_HOOK_ACTIVE" = "true" ]; then
  exit 0
fi

if ! npm test --silent > /dev/null 2>&1; then
  jq -n '{
    decision: "block",
    reason: "Tests are failing. Run \`npm test\` to see the failures and fix them before finishing."
  }'
  exit 0
fi

exit 0</code>

          <p style="margin-bottom: 1rem; line-height: 1.75;">When Claude finishes its turn, the Stop event fires. The script runs the test suite—if tests fail, it returns JSON with <code>decision: "block"</code> and a reason. Claude Code reads that, doesn't let Claude stop, and feeds the reason back into the conversation as instruction to keep working. The <code>stop_hook_active</code> guard at the top prevents infinite loops: if Claude is already continuing because of a previous stop-hook block, the script lets it exit.</p>

          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks represent the most automated approach to subagent orchestration. Conversational invocation or CLAUDE.md instructions are the better starting point; hooks come later, as workflows mature.</p>

          <p style="margin-bottom: 0; line-height: 1.75; color: var(--text-secondary); font-size: 0.95rem;">
            For complete hooks configuration, see
            <a href="https://claude.com/blog/how-to-configure-hooks" target="_blank" rel="noopener noreferrer">
              Claude Code power user customization: how to configure hooks
            </a>
            or
            <a href="https://code.claude.com/docs/en/hooks" target="_blank" rel="noopener noreferrer">
            our Claude Code hooks docs.
            </a>
          </p>

        </div>
      `,
    },
    {
      label: "Scenario",
      content: `
        <div style="margin-bottom: 2.5rem;">
          <h2 style="margin-bottom: 1.5rem; color: var(--accent-primary); font-size: 1.4rem;">The Scenario</h2>
          <p style="margin-bottom: 1.5rem; line-height: 1.6;">You're an <strong>investigative journalist</strong> at the NYT or WSJ. Your editor walks over and says:</p>
          
          <blockquote style="margin: 0 0 2rem 0; padding: 1.25rem 1.5rem; background: var(--surface-color); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0; font-style: italic; line-height: 1.6; color: var(--text-primary);">
            "I need a full investigative piece on the surge in corporate bankruptcies this year &mdash; background research, court document analysis, expert source quotes, a competitor comparison on how we've covered it differently from the other paper, and a polished first draft ready for my desk by 4pm."
          </blockquote>

          <p style="margin-bottom: 2rem; line-height: 1.6;">Five distinct jobs. Let's break each one down.</p>

          <div style="margin: 2rem 0; display: flex; justify-content: center; background: rgba(0,0,0,0.2); border-radius: 12px; padding: 1rem;">
            <img src="/knowledgelab/images/subagent.png" alt="Claude Subagent Mental Model" style="width: 100%; max-width: 800px; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
          </div>
        </div>

        <div style="margin-bottom: 3rem;">
          <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <header style="margin-bottom: 1rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-primary);">Subtask 1 &mdash; Background Research Sweep</h3>
            </header>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>What needs to happen:</strong> Dig through hundreds of news articles, SEC filings, court records, and economic data from the past 18 months to build a factual foundation &mdash; key numbers, timelines, companies involved.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>Use subagent or main?</strong> &rarr; <span style="color: var(--accent-primary); font-weight: bold;">Subagent</span></p>
            <p style="margin-bottom: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);"><strong>Why in plain English:</strong> Imagine your intern spending three hours photocopying records and spreading 400 pages across your desk while you're trying to think about the story's angle. That's what happens in the main conversation. Instead, you send them to the archive room. They come back with a two-page brief: <em>"Here are the 12 biggest bankruptcies, the spike started in Q2, and here are the three root causes cited most often."</em> Your desk never got messy.</p>
          </div>

          <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <header style="margin-bottom: 1rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-primary);">Subtask 2 &mdash; Court Document Analysis</h3>
            </header>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>What needs to happen:</strong> Read through dense legal filings from 8 different bankruptcy cases &mdash; hundreds of pages of exhibits, creditor lists, and judge rulings &mdash; and extract only what's newsworthy.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>Use subagent or main?</strong> &rarr; <span style="color: var(--accent-primary); font-weight: bold;">Subagent, running at the same time as Subtask 1</span></p>
            <p style="margin-bottom: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);"><strong>Why in plain English:</strong> This is the same logic as the archive room, just a different room. Legal documents are noisy, repetitive, and long. You don't want to watch Claude read through boilerplate legalese line by line &mdash; you want the three sentences that matter. A separate colleague handles this simultaneously while the first is in the archive. Both report back at the same time. You've saved hours.</p>
          </div>

          <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <header style="margin-bottom: 1rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-primary);">Subtask 3 &mdash; Competitor Coverage Comparison (NYT vs WSJ)</h3>
            </header>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>What needs to happen:</strong> Pull recent articles from both papers on this topic, map out which angles each took, which sources each cited, and identify the gap your story can fill.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>Use subagent or main?</strong> &rarr; <span style="color: var(--accent-primary); font-weight: bold;">Subagent, also in parallel</span></p>
            <p style="margin-bottom: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);"><strong>Why in plain English:</strong> This is pure reading and comparing &mdash; mechanical work a researcher does, not you. You just need the conclusion: <em>"WSJ focused on retail sector bankruptcies; NYT covered the macro picture; neither has talked to a bankruptcy judge directly."</em> That one sentence tells you exactly what your story's edge is. The subagent read 30 articles to get you there. You read none of them.</p>
          </div>
        </div>

        <div style="margin-bottom: 3rem; border-top: 1px solid var(--border-color); padding-top: 3rem;">
          <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(255, 0, 255, 0.02);">
            <header style="margin-bottom: 1rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-primary);">Subtask 4 &mdash; Drafting Expert Source Quotes</h3>
            </header>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>What needs to happen:</strong> You have three economists and a bankruptcy judge lined up. Claude helps you draft the questions, then shape their responses into tight, attributed quotes that fit the story's narrative.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>Use subagent or main?</strong> &rarr; <span style="color: var(--accent-magenta); font-weight: bold;">Main conversation</span></p>
            <p style="margin-bottom: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);"><strong>Why in plain English:</strong> This is collaborative craft. You might say mid-draft: <em>"That quote is too academic &mdash; make it land harder"</em> or <em>"Actually, move the judge's quote to the lede."</em> This isn't a research job &mdash; it's a writing conversation between you and Claude. You want to see every sentence appear, react to it, and steer it. This belongs on your desk.</p>
          </div>

          <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(255, 0, 255, 0.02);">
            <header style="margin-bottom: 1rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-primary);">Subtask 5 &mdash; Writing the First Draft</h3>
            </header>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>What needs to happen:</strong> Take all the assembled research and write the full 1,200-word article &mdash; lede, nut graf, supporting sections, kicker &mdash; in the publication's house style.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>Use subagent or main?</strong> &rarr; <span style="color: var(--accent-magenta); font-weight: bold;">Main conversation</span></p>
            <p style="margin-bottom: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);"><strong>Why in plain English:</strong> A first draft is not a research task. It's an act of judgment &mdash; choosing which fact leads, which source gets the second paragraph, what the story's emotional core is. You want to read it as it's being written, catch when Claude picks the wrong angle, and redirect in real time. This is the most important thing you're doing today. It stays on your desk.</p>
          </div>
        </div>

        <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
          <h3 style="margin-bottom: 1.5rem; color: var(--text-primary); font-size: 1.2rem;">The Journalist's Decision Table</h3>
          <div style="overflow-x: auto; margin-bottom: 2rem;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
              <thead>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Task</th>
                  <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Where</th>
                  <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem;">Research sweep (400+ sources)</td>
                  <td style="padding: 1rem;"><span style="color: var(--accent-primary); font-weight: bold;">Subagent</span></td>
                  <td style="padding: 1rem;">You want the summary, not the raw pile</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem;">Court document analysis</td>
                  <td style="padding: 1rem;"><span style="color: var(--accent-primary); font-weight: bold;">Subagent</span></td>
                  <td style="padding: 1rem;">Dense, mechanical, run in parallel</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem;">Competitor coverage comparison</td>
                  <td style="padding: 1rem;"><span style="color: var(--accent-primary); font-weight: bold;">Subagent</span></td>
                  <td style="padding: 1rem;">Pure reading work &mdash; just give me the gap</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem;">Shaping expert quotes</td>
                  <td style="padding: 1rem;"><span style="color: var(--accent-magenta); font-weight: bold;">Main conversation</span></td>
                  <td style="padding: 1rem;">Iterative, craft-driven, needs your eye</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem;">Writing the first draft</td>
                  <td style="padding: 1rem;"><span style="color: var(--accent-magenta); font-weight: bold;">Main conversation</span></td>
                  <td style="padding: 1rem;">Too important &mdash; you guide every paragraph</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="padding: 1.5rem; background: rgba(0, 242, 255, 0.05); border: 1px solid var(--border-color); border-radius: 12px; text-align: center;">
            <h4 style="margin-bottom: 0.75rem; color: var(--accent-primary);">The Journalist's Golden Rule</h4>
            <p style="margin: 0; line-height: 1.6; font-size: 1.1rem; color: var(--text-primary);">
              If the task is about <strong>finding and filtering information</strong> &rarr; subagent. If the task is about <strong>judgment, voice, and craft</strong> &rarr; main conversation.
            </p>
            <p style="margin-top: 1rem; font-size: 0.95rem; color: var(--text-secondary); font-style: italic;">
              Research is the back office. Writing is the desk. Great journalism needs both &mdash; but they should never be in the same room at the same time.
            </p>
          </div>
        </div>
      `,
    },
    {
      label: "Built-in",
      content: `
        <p>Claude Code includes built-in subagents that Claude automatically uses when appropriate. Each inherits the parent conversation's permissions, with additional tool restrictions.</p>

        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">1. Explore</strong>
          <p>A fast, read-only agent optimized for searching and analyzing codebases.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Model:</strong> inherits from the main conversation, capped at Opus on the Claude API</li>
              <li><strong>Tools:</strong> Read-only tools (Write and Edit are denied)</li>
              <li><strong>Purpose:</strong> File discovery, code search, codebase exploration</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Claude delegates to Explore when it needs to search or understand a codebase without making changes. This keeps exploration results out of your main session context. When invoking it, Claude specifies a thoroughness level — <strong>quick</strong> for targeted lookups, <strong>medium</strong> for balanced exploration, or <strong>very thorough</strong> for comprehensive analysis.</p>
          <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); margin-top: 0.75rem;">Explore used to always run on Haiku; since v2.1.198 it inherits your session's model instead. To force it back onto a cheaper model, define your own subagent named <code>Explore</code> with <code>model: haiku</code> — a user or project subagent overrides the built-in.</p>
        </div>
        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">2. Plan</strong>
          <p>A research-focused agent used during plan mode to gather context before presenting a plan.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Model:</strong> inherits from the main conversation</li>
              <li><strong>Tools:</strong> Read-only tools (Write and Edit are denied)</li>
              <li><strong>Purpose:</strong> Codebase research for planning</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Used when Claude needs to understand your codebase during a planning phase, so exploration output stays in a separate context window while the main conversation remains read-only.</p>
        </div>

        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">3. General-purpose</strong>
          <p>A capable agent for complex, multi-step tasks that require both exploration and action.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Model:</strong> inherits from the main conversation</li>
              <li><strong>Tools:</strong> Every tool available to subagents</li>
              <li><strong>Purpose:</strong> Complex research, multi-step operations, code modifications</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Claude delegates here when the task requires both exploration <em>and</em> modification, complex reasoning to interpret results, or multiple dependent steps. Unlike Explore and Plan, it can be resumed to continue earlier work.</p>
        </div>

        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">4. Helper agents</strong>
          <p style="margin-bottom: 0.75rem;">Claude Code also ships small helpers that are invoked automatically — you rarely call them directly.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><code>statusline-setup</code> (Sonnet) — runs when you use <code>/statusline</code></li>
              <li><code>claude-code-guide</code> (Haiku) — runs when you ask questions about Claude Code features</li>
            </ul>
          </div>
        </div>

        <div style="margin: 2rem 0; padding: 1rem 1.25rem; background: rgba(0, 242, 255, 0.05); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
            <strong style="color: var(--accent-primary);">Worth knowing:</strong> Explore and Plan deliberately skip your CLAUDE.md files and the session's git status to stay fast and cheap. Every other built-in and custom subagent loads both. If a project rule matters to the research (<em>"ignore the vendor/ directory"</em>), restate it in the prompt you give Claude when delegating.
          </p>
        </div>

        <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Seeing and restricting subagents</strong>

          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size: 1rem; color: var(--text-primary);">Where they live</strong>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.75rem;">Custom subagents are just Markdown files, so the fastest way to see what you have is to look at the directories they load from: <code>.claude/agents/</code> in the project and <code>~/.claude/agents/</code> for your personal ones. Everything available in the session — built-in, custom, and plugin-provided — also shows up in the <code>@</code>-mention typeahead as you type.</p>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Since v2.1.198, <code>/agents</code> no longer opens the old interactive wizard. Running it just prints a reminder to ask Claude to create or manage subagents, or to edit those directories directly. (On v2.1.197 and earlier it opened a <strong>Running</strong> / <strong>Library</strong> interface.) Note that <code>claude agents</code> on the command line is a different thing entirely — it opens <em>agent view</em> for monitoring parallel background sessions, not a list of your subagent definitions.</p>
          </div>

          <div>
            <strong style="display:block; margin-bottom:0.75rem; font-size: 1rem; color: var(--text-primary);">Turning built-ins off</strong>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.75rem;">Built-ins are registered by default. To block one, deny it in settings:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">{
  "permissions": {
    "deny": ["Agent(Explore)", "Agent(my-custom-agent)"]
  }
}</code>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Denying the <code>Agent</code> tool itself stops all delegation. Setting <code>CLAUDE_CODE_DISABLE_EXPLORE_PLAN_AGENTS=1</code> removes just Explore and Plan, so Claude reads files directly instead.</p>
          </div>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <h3 style="margin-bottom: 1.5rem; color: var(--accent-primary); font-size: 1.3rem;">Scenario: Adding a "Dark Mode Toggle" feature</h3>
          <p style="margin-bottom: 2rem; color: var(--text-secondary);">A real-world walkthrough of adding dark mode support to a React + Vite app using subagents.</p>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 1 — Explore: Understand the structure</strong>
            <p style="margin-bottom: 0.75rem;">Type this in your session:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> I want to add a dark mode toggle to this React + Tailwind app. Explore the codebase first.</code>
            <p style="line-height: 1.6;">Claude automatically delegates to the <strong>Explore</strong> subagent, which scans read-only:</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
              <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                <li><code>vite.config.ts</code> — checks build setup</li>
                <li><code>tailwind.config.ts</code> — checks if <code>darkMode: 'class'</code> is set</li>
                <li><code>src/components/</code> — finds existing layout components</li>
                <li><code>src/App.tsx</code> — checks current theme integration</li>
              </ul>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-secondary);">It returns a concise summary, keeping your context clean.</p>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 2 — Plan: Design the implementation</strong>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> /plan Add a dark mode toggle button to the Navbar component with Tailwind dark: classes and localStorage persistence</code>
            <p style="margin-bottom: 0.75rem;">The <strong>Plan</strong> subagent researches and returns a structured plan:</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
              <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8;">
                <li>Update <code>tailwind.config.ts</code> → set <code>darkMode: 'class'</code></li>
                <li>Create <code>src/hooks/useDarkMode.ts</code> → toggle + sync</li>
                <li>Update <code>src/components/Navbar.tsx</code> → add toggle button</li>
                <li>Update <code>index.html</code> → prevent unstyled flash</li>
                <li>Update <code>.github/workflows/ci.yml</code> → add build check</li>
              </ol>
            </div>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 3 — Execute: Final Implementation</strong>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> Implement the dark mode plan we just approved</code>
            <p style="margin-bottom: 1rem;">Claude delegates this task to a General-purpose subagent. A capable agent for complex, multi-step tasks that require both exploration and action:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); font-size: 0.85rem; margin-bottom: 1rem;">// src/hooks/useDarkMode.ts
export function useDarkMode() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  return [dark, setDark] as const;
}</code>
            <p style="font-size: 0.95rem; line-height: 1.6;">CI/CD pipelines and complex configurations are handled automatically based on your project stack.</p>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 4 — Verify: Final Checks</strong>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> Explore and confirm the dark: Tailwind classes are consistent</code>
            <p style="line-height: 1.6;"><strong>Explore</strong> conducts a targeted grep across <code>src/</code> to ensure visual consistency without touching files.</p>
          </div>

          <div style="margin-top: 3rem;">
            <strong style="display:block; margin-bottom:1rem; font-size:1.1rem; color: var(--text-primary);">Division of Work Summary</strong>
            <div style="max-width: 100%;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; border: 1px solid var(--border-color);">
                <thead>
                  <tr style="background: rgba(255, 255, 255, 0.05); border-bottom: 2px solid var(--border-color);">
                    <th style="text-align: left; padding: 1rem; color: var(--accent-primary);">Subagent</th>
                    <th style="text-align: left; padding: 1rem; color: var(--accent-primary);">Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 1rem; font-weight: bold;">Explore</td>
                    <td style="padding: 1rem; color: var(--text-secondary);">Analyzed tailwind/vite config and component tree.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 1rem; font-weight: bold;">Plan</td>
                    <td style="padding: 1rem; color: var(--text-secondary);">Produced the design and step-by-step technical plan.</td>
                  </tr>
                  <tr>
                    <td style="padding: 1rem; font-weight: bold;">General-purpose</td>
                    <td style="padding: 1rem; color: var(--text-secondary);">Implemented the hook, updated Navbar and CI workflows.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style="margin-top: 1.5rem; font-style: italic; color: var(--text-secondary); font-size: 0.9rem;">Claude routes to the right subagent automatically — no manual configuration needed for built-ins.</p>
          </div>
        </div>
      `,
    },
    {
      label: "Create your own",
      content: `
        <p style="margin-bottom: 1.25rem; line-height: 1.75;">Custom subagents live as markdown files in <code>.claude/agents/</code> (project-level, shared with the team) or <code>~/.claude/agents/</code> (user-level, available across all projects). Each one gets its own system prompt, tool permissions, and optionally its own model.</p>

        <p style="margin-bottom: 1.25rem; line-height: 1.75;">Subagents are defined in Markdown files with YAML frontmatter. The fastest way to make one is to ask Claude to write the file for you — describe what you want, then review what it wrote.</p>

        <div style="margin-bottom: 2rem; padding: 1rem 1.25rem; background: rgba(255, 0, 255, 0.05); border-left: 4px solid var(--accent-magenta); border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
            <strong style="color: var(--accent-magenta);">Changed in v2.1.198:</strong> <code>/agents</code> no longer opens an interactive creation wizard. Running it now prints a reminder to ask Claude or edit the agents directories directly. The file format, frontmatter fields, and <code>.claude/agents/</code> and <code>~/.claude/agents/</code> locations are all unchanged — only the terminal wizard is gone. If you're on v2.1.197 or earlier, <code>/agents</code> still opens the old <strong>Running</strong> / <strong>Library</strong> interface.
          </p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">1) Ask Claude to create the subagent</strong>
          <p style="margin-bottom: 1rem;">Describe the subagent you want and where to save it. Naming the location, the tool access, and the model up front means you get the right frontmatter on the first try:</p>
          <div style="padding: 1rem; background: var(--surface-color); border: 1px dashed var(--accent-primary); border-radius: 8px; font-size: 0.95rem; line-height: 1.6; font-style: italic; color: var(--text-secondary);">
            "Create a personal code-improver subagent in ~/.claude/agents/ that scans files and suggests improvements for readability, performance, and best practices. It should explain each issue, show the current code, and provide an improved version. Make it read-only and have it use Sonnet."
          </div>
          <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-tertiary);">Claude writes the file with a <code>name</code>, a <code>description</code>, a <code>tools</code> list, a <code>model</code>, and a system prompt.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">2) Review the file</strong>
          <p style="margin-bottom: 1rem;">Open <code>~/.claude/agents/code-improver.md</code> and confirm the frontmatter matches what you asked for:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">---
name: code-improver
description: Scans files and suggests improvements for readability, performance, and best practices. Use after writing or modifying code.
tools: Read, Grep, Glob
model: sonnet
---

You are a code improvement specialist. For each issue you find, explain
the problem, show the current code, and provide an improved version.</code>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Because the file lives in <code>~/.claude/agents/</code>, the subagent is available in every project on your machine. To scope it to one project instead, move it to that project's <code>.claude/agents/</code> directory.</p>
          <p style="margin-top: 0.75rem; line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Claude Code watches both directories, so edits take effect within a few seconds with no restart. The one exception: if the <code>agents</code> directory didn't exist when the session started, restart Claude Code so the watcher picks it up.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">3) Try it out</strong>
          <p style="margin-bottom: 1rem;">Ask Claude to delegate to the new subagent:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">Use the code-improver agent to suggest improvements for the file "index.html"</code>
          
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">⏺ code-improver(Review index.html for improvements)
  ⎿  Done (3 tool uses · 18.2k tokens · 1m 38s)
  (ctrl+o to expand)

⏺ The code-improver agent completed its review of index.html. Here's a summary:

  Key Findings

  Total Issues Found: 12
  - High Priority: 6 (Accessibility, SEO, Icons, Landmarks, Forms, Modals)
  - Medium Priority: 3 (Timer accessibility, Modal overlays, Element clarity)
  - Low Priority: 3 (DOCTYPE case, Quote consistency, Data attributes)

  Top Recommendations

  1. Accessibility — Add ARIA labels, roles, and states throughout (e.g., aria-label, role="dialog", aria-expanded)
  2. Icon Consistency — Replace Unicode emojis (🌙, ⏱️ , ✕) with inline SVGs for consistent rendering
  3. SEO Meta Tags — Add meta description, Open Graph tags, and Twitter Card meta tags
  4. Landmark Roles — Add role="main", role="navigation", role="banner" for screen reader navigation
  5. Modal Accessibility — Add role="dialog", aria-modal="true", and proper focus management

  CSS Additions Needed

  The review also suggests adding these CSS classes:
  .sr-only { /* Screen reader only text */ }
  .skip-link { /* Keyboard skip navigation */ }

  The code is structurally sound but needs accessibility improvements to meet WCAG 2.1 AA standards. Would you like me to implement any of these suggestions?</code>
          <p style="font-size: 0.95rem; line-height: 1.6;">Claude delegates to your new subagent, which scans the specific file and returns a detailed summary of findings and recommendations.</p>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">You now have a subagent you can use in any project on your machine to analyze codebases and suggest improvements.</p>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.9rem;">You can also create subagents manually as Markdown files, define them via CLI flags, or distribute them through plugins. The next sections covers few of the configuration options.</p>
        </div>

        <div style="margin-top: 2rem; padding: 1rem 1.25rem; background: rgba(0, 242, 255, 0.05); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
            <strong style="color: var(--accent-primary);">Pro-tip:</strong> The <code>description</code> field is what Claude uses to decide when to delegate. Be specific about the trigger conditions, not just the capability. <em>"Reviews code for security issues before commits"</em> routes better than <em>"security expert."</em>
          </p>
        </div>

        <p style="margin-top: 1.25rem; line-height: 1.75; font-size: 0.95rem; color: var(--text-secondary);">
          For the full configuration reference, including permission modes and how project and user subagents interact, see
          <a href="https://code.claude.com/docs/en/sub-agents" target="_blank" rel="noopener noreferrer" style="color: var(--accent-primary); text-decoration: none; border-bottom: 1px solid currentColor;">Claude Code subagents docs</a>.
        </p>
      `,
    },
    {
      label: "Config",
      content: `
        <div style="margin-top: 0.5rem;">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">1. Choose the subagent scope</h3>
          <p style="margin-bottom: 1.5rem; line-height: 1.6;">Subagents are Markdown files with YAML frontmatter. Store them in different locations depending on scope. When multiple subagents share the same name, the higher-priority location wins.</p>
          
          <div style="margin-bottom: 2rem; max-width: 100%;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; border: 1px solid var(--border-color);">
              <thead>
                <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Location</th>
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Scope</th>
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Priority</th>
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Creation</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">Managed settings</td>
                  <td style="padding: 0.75rem;">Organization-wide</td>
                  <td style="padding: 0.75rem;">1 (highest)</td>
                  <td style="padding: 0.75rem;">Deployed by admins</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">--agents CLI flag</td>
                  <td style="padding: 0.75rem;">Current session</td>
                  <td style="padding: 0.75rem;">2</td>
                  <td style="padding: 0.75rem;">JSON via CLI</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">.claude/agents/</td>
                  <td style="padding: 0.75rem;">Current project</td>
                  <td style="padding: 0.75rem;">3</td>
                  <td style="padding: 0.75rem;">Ask Claude, or write the file</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">~/.claude/agents/</td>
                  <td style="padding: 0.75rem;">All your projects</td>
                  <td style="padding: 0.75rem;">4</td>
                  <td style="padding: 0.75rem;">Ask Claude, or write the file</td>
                </tr>
                <tr>
                  <td style="padding: 0.75rem; font-family: monospace;">Plugin agents/ directory</td>
                  <td style="padding: 0.75rem;">Where plugin is enabled</td>
                  <td style="padding: 0.75rem;">5 (lowest)</td>
                  <td style="padding: 0.75rem;">Installed plugin</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="margin-bottom: 2rem;">
            <p style="margin-bottom: 1rem; line-height: 1.6;"><strong style="color: var(--text-primary);">Project subagents (.claude/agents/)</strong> are ideal for subagents specific to a codebase. Check them into version control so your team can use and improve them collaboratively.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6;"><strong style="color: var(--text-primary);">User subagents (~/.claude/agents/)</strong> are personal subagents available in all your projects.</p>
            <p style="margin-bottom: 2.5rem; line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Both directories are scanned recursively, so you can organize definitions into subfolders like <code>agents/review/</code>. The path doesn't affect identity — that comes only from the <code>name</code> field — so keep names unique across the whole tree. Project subagents are also discovered by walking up from your working directory, and when nested directories declare the same name, the one closest to the working directory wins.</p>
          </div>

          <div style="margin-bottom: 2rem;">
            <h4 style="margin-bottom: 1rem; color: var(--accent-primary);">CLI-defined subagents</h4>
            <p style="margin-bottom: 1rem; line-height: 1.6;">CLI-defined subagents are passed as JSON when launching Claude Code. They exist only for that session and aren’t saved to disk, making them useful for quick testing or automation scripts. You can define multiple subagents in a single <code>--agents</code> call:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">claude --agents '{
  "code-reviewer": {
    "description": "Expert code reviewer. Use proactively after code changes.",
    "prompt": "You are a senior code reviewer. Focus on code quality, security, and best practices.",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  },
  "debugger": {
    "description": "Debugging specialist for errors and test failures.",
    "prompt": "You are an expert debugger. Analyze errors, identify root causes, and provide fixes."
  }
}'</code>
            <p style="margin-top: 1.5rem; line-height: 1.6;">The <code>--agents</code> flag accepts JSON with the same frontmatter fields as file-based subagents: <code>description</code>, <code>prompt</code>, <code>tools</code>, <code>disallowedTools</code>, <code>model</code>, <code>permissionMode</code>, <code>mcpServers</code>, <code>hooks</code>, <code>maxTurns</code>, <code>skills</code>, <code>initialPrompt</code>, <code>memory</code>, <code>effort</code>, <code>background</code>, <code>isolation</code>, and <code>color</code>. Use <code>prompt</code> for the system prompt, equivalent to the markdown body in file-based subagents.</p>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">2. Create subagent manually</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Subagent files use YAML frontmatter for configuration, followed by the system prompt in Markdown. Claude Code watches <code>.claude/agents/</code> and <code>~/.claude/agents/</code>: add or edit a file and the next delegation uses the updated definition within a few seconds, no restart needed. Two cases still need a restart — creating a scope's very first agent file in a directory that didn't exist at session start, and sessions launched with <code>--disable-slash-commands</code>.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and provide
specific, actionable feedback on quality, security, and best practices.</code>

            <p style="margin-top: 1.5rem; margin-bottom: 1rem; line-height: 1.6;">Only <code>name</code> and <code>description</code> are required. The full set of supported fields:</p>
            <div style="margin: 1rem 0; max-width: 100%; overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; border: 1px solid var(--border-color);">
                <thead>
                  <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
                    <th style="text-align: left; padding: 0.6rem; color: var(--accent-primary);">Field</th>
                    <th style="text-align: left; padding: 0.6rem; color: var(--accent-primary);">What it does</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">name</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);"><strong>Required.</strong> Unique identifier, lowercase and hyphens. Can't contain <code>:</code> — that's reserved for plugin-scoped names. The filename doesn't have to match.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">description</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);"><strong>Required.</strong> When Claude should delegate to this subagent. This is the routing signal.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">tools</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);">Allowlist of tools. Inherits everything available to subagents if omitted.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">disallowedTools</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);">Denylist, removed from the inherited or specified list.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">model</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);"><code>sonnet</code>, <code>opus</code>, <code>haiku</code>, <code>fable</code>, a full model ID, or <code>inherit</code>. Defaults to <code>inherit</code>.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">permissionMode</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);"><code>default</code>, <code>acceptEdits</code>, <code>auto</code>, <code>dontAsk</code>, <code>bypassPermissions</code>, or <code>plan</code>.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">maxTurns</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);">Cap on agentic turns before the subagent stops.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">skills</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);">Skills to preload into context at startup (full content, not just the description).</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">mcpServers</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);">MCP servers scoped to this subagent, inline or by name.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">hooks</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);">Lifecycle hooks that run only while this subagent is active.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">memory</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);">Persistent memory scope: <code>user</code>, <code>project</code>, or <code>local</code>.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">background</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);"><code>true</code> to always run as a background task. Unset lets Claude choose (background by default since v2.1.198).</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">effort</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);">Reasoning effort while this subagent is active: <code>low</code> → <code>max</code>. Inherits the session level by default.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">isolation</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);"><code>worktree</code> runs the subagent in a temporary git worktree with its own copy of the repo. Cleaned up automatically if it makes no changes.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">color</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);">Display color in the task list and transcript: red, blue, green, yellow, purple, orange, pink, or cyan.</td>
                  </tr>
                  <tr>
                    <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">initialPrompt</td>
                    <td style="padding: 0.6rem; color: var(--text-secondary);">Auto-submitted as the first user turn when this agent runs as the main session (<code>--agent</code> or the <code>agent</code> setting).</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style="margin-top: 1rem; line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary);">For security reasons, plugin-provided subagents ignore <code>hooks</code>, <code>mcpServers</code>, and <code>permissionMode</code>. If you need those, copy the agent file into <code>.claude/agents/</code> or <code>~/.claude/agents/</code>.</p>

            <div style="margin-top: 1.5rem;">
              <p style="margin-bottom: 0.75rem; color: var(--accent-primary); font-weight: bold;">Choose a model</p>
              <p style="margin-bottom: 0.75rem; line-height: 1.6;">The model field controls which AI model the subagent uses:</p>
              <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
                <li><strong style="color: var(--text-primary);">Model alias:</strong> Use one of the available aliases: <code>sonnet</code>, <code>opus</code>, <code>haiku</code>, or <code>fable</code></li>
                <li><strong style="color: var(--text-primary);">Full model ID:</strong> Use a full model ID such as <code>claude-opus-5</code> or <code>claude-sonnet-5</code>.</li>
                <li><strong style="color: var(--text-primary);">inherit:</strong> Use the same model as the main conversation</li>
                <li><strong style="color: var(--text-primary);">Omitted:</strong> If not specified, defaults to <code>inherit</code>.</li>
              </ul>
              <p style="margin-top: 1rem; line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary);">Resolution order when several sources set a model: the <code>CLAUDE_CODE_SUBAGENT_MODEL</code> environment variable, then the per-invocation <code>model</code> parameter Claude passes, then the frontmatter, then the main conversation's model. Subagents also inherit the main conversation's extended thinking setting.</p>
            </div>

            <p style="margin-top: 1.5rem; line-height: 1.6;">The frontmatter defines the subagent’s metadata and configuration. The body becomes the system prompt that guides the subagent’s behavior. Subagents receive only this system prompt (plus basic environment details like working directory), not the full Claude Code system prompt.</p>

            <div style="margin-top: 1.5rem;">
              <h4 style="margin-bottom: 0.75rem; color: var(--accent-primary);">Plugin subagents</h4>
              <p style="line-height: 1.6; color: var(--text-secondary);">Plugin subagents come from plugins you’ve installed. They appear in <code>/agents</code> alongside your custom subagents. See the plugin components reference for details on creating plugin subagents.</p>
            </div>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">3. Control subagent capabilities</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">You can control what subagents can do through tool access, permission modes, and conditional rules.</p>
            
            <div style="margin-top: 1rem;">
              <h4 style="margin-bottom: 0.5rem; color: var(--accent-primary);">Available tools</h4>
              <p style="margin-bottom: 0.75rem; line-height: 1.6; color: var(--text-secondary);">By default, subagents inherit the built-in and MCP tools available in the main conversation, narrowed by two filters. The first drops a handful of tools from every subagent — including <code>AskUserQuestion</code>, <code>EnterPlanMode</code>, and <code>ExitPlanMode</code> (unless <code>permissionMode: plan</code>) — because they only make sense in the main conversation. The second applies to background subagents, which is now the default: they keep every MCP tool but only a core set of built-ins (<code>Read</code>, <code>Grep</code>, <code>Glob</code>, <code>Bash</code>, <code>Edit</code>, <code>Write</code>, <code>WebFetch</code>, <code>WebSearch</code>, <code>Skill</code>, and a few others). The same definition can therefore resolve to different tools in the foreground and the background.</p>
              
              <p style="margin-bottom: 0.75rem; line-height: 1.6;">To restrict tools, use either the <code>tools</code> field (allowlist) or the <code>disallowedTools</code> field (denylist). This example uses <code>tools</code> to exclusively allow Read, Grep, Glob, and Bash:</p>
              <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: safe-researcher
description: Research agent with restricted capabilities
tools: Read, Grep, Glob, Bash
---</code>

              <p style="margin-top: 1.25rem; margin-bottom: 0.75rem; line-height: 1.6;">This example uses <code>disallowedTools</code> to inherit every tool from the main conversation except Write and Edit:</p>
              <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: no-writes
description: Inherits every tool except file writes
disallowedTools: Write, Edit
---</code>
              <p style="margin-top: 1rem; line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary);">If both are set, <code>disallowedTools</code> is applied first, then <code>tools</code> is resolved against the remaining pool. A tool listed in both is removed.</p>
            </div>

            <div style="margin-top: 2.5rem;">
              <h4 style="margin-bottom: 0.5rem; color: var(--accent-primary);">Permission modes</h4>
              <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">The <code>permissionMode</code> field controls how the subagent handles permission prompts. Subagents inherit the main conversation's permission context and can override the mode — except that a parent in <code>bypassPermissions</code>, <code>acceptEdits</code>, or <code>auto</code> takes precedence and the frontmatter value is ignored.</p>
              <div style="max-width: 100%; overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; border: 1px solid var(--border-color);">
                  <thead>
                    <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
                      <th style="text-align: left; padding: 0.6rem; color: var(--accent-primary);">Mode</th>
                      <th style="text-align: left; padding: 0.6rem; color: var(--accent-primary);">Behavior</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">default</td>
                      <td style="padding: 0.6rem; color: var(--text-secondary);">Standard permission checking with prompts</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">acceptEdits</td>
                      <td style="padding: 0.6rem; color: var(--text-secondary);">Auto-accept file edits and common filesystem commands inside the working directory</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">auto</td>
                      <td style="padding: 0.6rem; color: var(--text-secondary);">A background classifier reviews commands and protected-directory writes</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">dontAsk</td>
                      <td style="padding: 0.6rem; color: var(--text-secondary);">Auto-deny permission prompts; explicitly allowed tools still work</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">bypassPermissions</td>
                      <td style="padding: 0.6rem; color: var(--text-secondary);">Skip permission prompts — use with caution</td>
                    </tr>
                    <tr>
                      <td style="padding: 0.6rem; font-family: monospace; color: var(--text-primary);">plan</td>
                      <td style="padding: 0.6rem; color: var(--text-secondary);">Plan mode (read-only exploration)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div style="margin-top: 2.5rem;">
              <h4 style="margin-bottom: 0.5rem; color: var(--accent-primary);">Restrict which subagents can be spawned</h4>
              <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">When an agent runs as the main thread via <code>claude --agent</code>, it can spawn subagents with the Agent tool. Use <code>Agent(type, type)</code> in the <code>tools</code> field as an allowlist:</p>
              <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: coordinator
description: Coordinates work across specialized agents
tools: Agent(worker, researcher), Read, Bash
---</code>
              <p style="margin-top: 1rem; line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary);">Bare <code>Agent</code> allows any type; omitting it entirely stops the agent from spawning subagents at all. Inside a subagent definition, the type list in parentheses is ignored — listing <code>Agent</code> simply lets it nest while the depth limit allows.</p>
            </div>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">4. Scope MCP servers to a subagent</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Use the <code>mcpServers</code> field to give a subagent access to MCP servers that aren’t available in the main conversation. Inline servers defined here are connected when the subagent starts and disconnected when it finishes. String references share the parent session’s connection.</p>
            
            <p style="margin-bottom: 1rem; line-height: 1.6;">Each entry in the list is either an inline server definition or a string referencing an MCP server already configured in your session:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: browser-tester
description: Tests features in a real browser using Playwright
mcpServers:
  # Inline definition: scoped to this subagent only
  - playwright:
      type: stdio
      command: npx
      args: ["-y", "@playwright/mcp@latest"]
  # Reference by name: reuses an already-configured server
  - github
---</code>
            <p style="margin-top: 1rem; line-height: 1.6; color: var(--text-secondary);">To keep an MCP server out of the main conversation entirely and avoid its tool descriptions consuming context there, define it inline here rather than in <code>.mcp.json</code>. The subagent gets the tools; the parent conversation does not.</p>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">5. Preload skills into subagents</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Use the <code>skills</code> field to inject skill content into a subagent’s context at startup. This gives the subagent domain knowledge without requiring it to discover and load skills during execution.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: api-developer
description: Implement API endpoints following team conventions
skills:
  - api-conventions
  - error-handling-patterns
---</code>
            <p style="margin-top: 1rem; line-height: 1.6; color: var(--text-secondary);">The full content of each skill is injected into the subagent’s context, not just made available for invocation. Subagents don’t inherit skills from the parent conversation; you must list them explicitly.</p>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">6. Enable persistent memory</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">The <code>memory</code> field gives the subagent a persistent directory that survives across conversations. Use this to build up knowledge over time, such as codebase patterns and architectural decisions.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: code-reviewer
description: Reviews code for quality and best practices
memory: user
---</code>

            <div style="margin: 1.5rem 0; max-width: 100%;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; border: 1px solid var(--border-color);">
                <thead>
                  <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
                    <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Scope</th>
                    <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Location</th>
                    <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Use when...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.75rem; font-family: monospace;">user</td>
                    <td style="padding: 0.75rem; font-size: 0.8rem;">~/.claude/agent-memory/&lt;name&gt;/</td>
                    <td style="padding: 0.75rem;">Learn across all projects</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.75rem; font-family: monospace;">project</td>
                    <td style="padding: 0.75rem; font-size: 0.8rem;">.claude/agent-memory/&lt;name&gt;/</td>
                    <td style="padding: 0.75rem;">Shareable via version control</td>
                  </tr>
                  <tr>
                    <td style="padding: 0.75rem; font-family: monospace;">local</td>
                    <td style="padding: 0.75rem; font-size: 0.8rem;">.claude/agent-memory-local/&lt;name&gt;/</td>
                    <td style="padding: 0.75rem;">Project-specific, not shared</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="padding: 1rem; background: var(--surface-color); border-radius: 4px; margin-top: 1.5rem;">
              <h4 style="margin-bottom: 0.75rem; color: var(--accent-primary);">Memory mechanics</h4>
              <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.9rem; color: var(--text-secondary);">
                <li>Automated context: Includes the first 200 lines or 25KB of <code>MEMORY.md</code> at startup, whichever comes first.</li>
                <li>Self-management: <code>Read</code>, <code>Write</code>, and <code>Edit</code> tools are auto-enabled for memory management.</li>
                <li>Proactive learning: Instruct your agent to update its memory in its markdown prompt.</li>
              </ul>
            </div>

            <div style="margin-top: 2rem; padding: 1.25rem; background: rgba(0, 242, 255, 0.03); border: 1px solid rgba(0, 242, 255, 0.1); border-radius: 8px;">
              <p style="margin: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);">
                There are many more customizable subagent configurations available. For more details on advanced settings, check out the official documentation: 
                <a href="https://code.claude.com/docs/en/sub-agents#configure-subagents" target="_blank" style="color: var(--accent-primary); text-decoration: none; font-weight: bold; border-bottom: 1px dashed var(--accent-primary);">Configure Subagents</a>.
              </p>
            </div>
          </div>
        </div>
      `,
    },
    {
      label: "Working with Subagents",
      content: `
        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Understand automatic delegation</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">Claude automatically delegates tasks based on the task description in your request, the description field in subagent configurations, and current context. To encourage proactive delegation, include phrases like <code style="padding: 0.15rem 0.35rem; background: var(--surface-color); border-radius: 4px; color: var(--accent-primary);">“use proactively”</code> in your subagent’s description field.</p>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Invoke subagents explicitly</strong>
          <p style="margin-bottom: 2rem; line-height: 1.6; color: var(--text-secondary);">When automatic delegation isn’t enough, you can request a subagent yourself using three main patterns:</p>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Option 1: Natural language</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Simply name the subagent in your prompt; Claude decides whether a subagent call is the most efficient way to proceed. There’s no special syntax required:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">Use the test-runner subagent to fix failing tests
Have the code-reviewer subagent look at my recent changes</code>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Option 2: @-mention (Guaranteed invocation)</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Type <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px;">@</code> and pick the subagent from the typeahead, the same way you @-mention files. This guarantees that specific subagent runs rather than leaving the choice to Claude. The picker inserts the quoted form:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">@"code-reviewer (agent)" look at the auth changes</code>
            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">Your full message still goes to Claude, which writes the subagent’s task prompt based on what you asked. The @-mention controls which subagent Claude invokes, not what prompt it receives.</p>
            <p style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; font-size: 0.9rem; color: var(--text-tertiary); line-height: 1.5;">You can also type the mention by hand — note the hyphen: <code style="color: var(--accent-magenta);">@agent-&lt;name&gt;</code>, for example <code style="color: var(--accent-magenta);">@agent-code-reviewer</code>. Plugin subagents use their scoped name (<code style="color: var(--accent-primary);">@agent-my-plugin:code-reviewer</code>). While you type this form the typeahead shows file matches instead of agents, but the mention still resolves on submit. Named background subagents currently running in the session also appear in the typeahead with their status.</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Option 3: Session-wide (CLI flag)</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Pass <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-keyword);">--agent &lt;name&gt;</code> to start a session where the main thread itself takes on that subagent’s system prompt, tool restrictions, and model:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">claude --agent code-reviewer</code>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1rem;">The subagent’s system prompt replaces the default Claude Code system prompt entirely. CLAUDE.md files and project memory still load normally. The agent name appears as <code style="color: var(--accent-primary);">@&lt;name&gt;</code> in the startup header so you can confirm it’s active, and the choice persists when you resume the session.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6;">To make it the default for every session in a project, set <code>agent</code> in <code>.claude/settings.json</code> — the CLI flag wins if both are present:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">{
  "agent": "code-reviewer"
}</code>
          </div>
        </div>

        <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Foreground or background</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;"><strong style="color: var(--text-primary);">Foreground subagents</strong> block the main conversation until they finish, and permission prompts pass straight through to you. <strong style="color: var(--text-primary);">Background subagents</strong> run concurrently while you keep working; when one hits a tool call needing permission, the prompt surfaces in your main session and names the subagent asking. Approve it, or press <code>Esc</code> to deny that one call without killing the subagent.</p>
          <p style="margin-bottom: 1rem; line-height: 1.6;">Since v2.1.198, <strong>subagents run in the background by default</strong> — Claude only uses the foreground when it needs the result before it can continue. Background subagents run with a smaller built-in tool set than foreground ones, so the same definition can resolve to slightly different tools depending on where it runs.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 1rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
              <li>Ask Claude directly to run a task in the background or foreground</li>
              <li>Press <code>Ctrl+B</code> to background a task that's already running</li>
              <li><code>/tasks</code> lists running work; completed subagents stay listed, marked done, until the session cleans up</li>
              <li>Set <code>background: true</code> in frontmatter to force it for a given subagent</li>
            </ul>
          </div>
        </div>

        <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Resume a subagent instead of respawning</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">Every invocation normally creates a fresh instance. To continue earlier work instead, just ask Claude to keep going — it resumes the subagent by ID with its full history of tool calls, results, and reasoning intact:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">Use the code-reviewer subagent to review the authentication module
[agent completes]

Continue that code review and now analyze the authorization logic
[Claude resumes the same subagent with its previous context]</code>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">The built-in <strong>Explore</strong> and <strong>Plan</strong> agents are one-shot and return no agent ID, so they can't be resumed — use <code>general-purpose</code> or a custom subagent when you may want to continue. Subagent transcripts live in separate files from the main conversation, so compaction doesn't touch them, and they persist for <code>cleanupPeriodDays</code> (30 by default).</p>
        </div>

        <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Nesting and limits</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A subagent can spawn subagents of its own, up to three layers below the main conversation. This suits a delegated task that itself splits into parallel subtasks — a reviewer that dispatches a verifier per finding, say — because the intermediate output never reaches your main conversation. Only the top-level summary comes back.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 1rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
              <li><strong style="color: var(--text-primary);">Depth:</strong> 3 layers, set by <code>CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH</code> (<code>1</code> turns nesting off)</li>
              <li><strong style="color: var(--text-primary);">Per session:</strong> 200 subagents total, set by <code>CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION</code>. <code>/clear</code> resets the count</li>
              <li><strong style="color: var(--text-primary);">Concurrent:</strong> 20 running at once, set by <code>CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS</code></li>
            </ul>
          </div>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">To stop one subagent from delegating further — a reviewer that should stay read-only, for instance — omit <code>Agent</code> from its <code>tools</code> list or add it to <code>disallowedTools</code>.</p>
        </div>

        <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Forks: the opposite trade-off</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A <strong>fork</strong> is a subagent that inherits the entire conversation so far instead of starting fresh. It sees the same system prompt, tools, model, and message history as the main session, so you can hand it a side task without re-explaining anything. Its tool calls still stay out of your conversation and only the final result comes back, so your context window stays clean.</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">/subtask draft unit tests for the parser changes so far</code>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Use a fork when a named subagent would need too much background to be useful, or to try several approaches in parallel from the same starting point. The fork runs in the background and its result arrives as a message in your main conversation. (The command was <code>/fork</code> before v2.1.212; <code>/fork</code> now copies the whole session into a separate background session instead.)</p>
        </div>

        <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Common patterns</strong>
          
          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Isolate high-volume operations</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">One of the most effective uses for subagents is isolating operations that produce large amounts of output. By delegating these to a subagent, the verbose output stays in the subagent’s context while only the relevant summary returns to your main conversation.</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-left: 3px solid var(--accent-primary); border-radius: 0 4px 4px 0; font-style: italic; font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
              "Use a subagent to run the test suite and report only the failing tests with their error messages"
            </div>
          </div>

          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Run parallel research</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">For independent investigations, spawn multiple subagents to work simultaneously:</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-left: 3px solid var(--accent-primary); border-radius: 0 4px 4px 0; font-style: italic; font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;">
              "Research the authentication, database, and API modules in parallel using separate subagents"
            </div>
            <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">Each subagent explores its area independently, then Claude synthesizes the findings. This works best when the research paths don’t depend on each other. When subagents complete, their results return to your main conversation. Running many subagents that each return detailed results can consume significant context.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">For tasks that need sustained parallelism or exceed your context window, agent teams give each worker its own independent context.</p>
          </div>

          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Chain subagents</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">For multi-step workflows, ask Claude to use subagents in sequence. Each subagent completes its task and returns results to Claude, which then passes relevant context to the next subagent.</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-left: 3px solid var(--accent-primary); border-radius: 0 4px 4px 0; font-style: italic; font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
              "Use the code-reviewer subagent to find performance issues, then use the optimizer subagent to fix them"
            </div>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
            <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Choose between subagents and main conversation</strong>
            
            <p style="margin-bottom: 2rem; padding: 1rem 1.25rem; background: var(--surface-color); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0; font-style: italic; line-height: 1.6; color: var(--text-secondary); font-size: 1rem;">
              "Think of your main conversation as your desk &mdash; the space where you do your main work and think clearly. A subagent is like sending a colleague to another room to do some research or grunt work. They go away, do the job, and come back with only the answer you need. Your desk stays clean the whole time."
            </p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
              <div style="padding: 1.25rem; background: rgba(0, 242, 255, 0.03); border: 1px solid rgba(0, 242, 255, 0.1); border-radius: 8px;">
                <h4 style="margin-bottom: 0.75rem; color: var(--text-primary); font-size: 1rem;">Use the main conversation when:</h4>
                <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary);">
                  <li style="margin-bottom: 0.5rem;">The task needs frequent back-and-forth or iterative refinement</li>
                  <li style="margin-bottom: 0.5rem;">Multiple phases share significant context (planning &rarr; implementation &rarr; testing)</li>
                  <li style="margin-bottom: 0.5rem;">You’re making a quick, targeted change</li>
                  <li>Latency matters (subagents start fresh and may need time to gather context)</li>
                </ul>
              </div>
              <div style="padding: 1.25rem; background: rgba(112, 0, 255, 0.03); border: 1px solid rgba(112, 0, 255, 0.1); border-radius: 8px;">
                <h4 style="margin-bottom: 0.75rem; color: var(--text-primary); font-size: 1rem;">Use subagents when:</h4>
                <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary);">
                  <li style="margin-bottom: 0.5rem;">The task produces verbose output you don’t need in your main context</li>
                  <li style="margin-bottom: 0.5rem;">You want to enforce specific tool restrictions or permissions</li>
                  <li style="margin-bottom: 0.5rem;">The work is self-contained and can return a summary</li>
                  <li>You need to isolate environment variables or process state</li>
                </ul>
              </div>
            </div>

            <div style="padding: 1rem; background: var(--surface-color); border-radius: 8px; font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">
              <p style="margin-bottom: 0.75rem;">Consider <strong style="color: var(--accent-primary);">Skills</strong> instead when you want reusable prompts or workflows that run in the main conversation context rather than isolated subagent context.</p>
              <p>For a quick question about something already in your conversation, use <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px;">/btw</code> instead of a subagent. It sees your full context but has no tool access, and the answer is discarded rather than added to history.</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      label: "Example",
      content: `
        <div style="margin-bottom: 3rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Documentation writer</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A complete example of a <code>doc-writer</code> subagent specialized for Python documentation:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: doc-writer
description: Writes Sphinx/Google-style documentation for Python modules
tools: Read
---
You write clear, accurate Python documentation. Given a module path via the task:

1. Read all .py files in the module
2. Generate module-level docstring
3. Generate class and function docstrings in Google style
4. Write a usage example section

Output ready-to-paste Python docstrings.</code>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Code reviewer</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A read-only subagent that reviews code without modifying it. This example shows how to design a focused subagent with limited tool access (no <code>Edit</code> or <code>Write</code>) and a detailed prompt that specifies exactly what to look for and how to format output.</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: code-reviewer
description: Expert code review specialist. Proactively reviews code for quality, security, and maintainability. Use immediately after writing or modifying code.
tools: Read, Grep, Glob, Bash
model: inherit
---

You are a senior code reviewer ensuring high standards of code quality and security.

When invoked:
1. Run git diff to see recent changes
2. Focus on modified files
3. Begin review immediately

Review checklist:
- Code is clear and readable
- Functions and variables are well-named
- No duplicated code
- Proper error handling
- No exposed secrets or API keys
- Input validation implemented
- Good test coverage
- Performance considerations addressed

Provide feedback organized by priority:
- Critical issues (must fix)
- Warnings (should fix)
- Suggestions (consider improving)

Include specific examples of how to fix issues.</code>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Debugger</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A subagent that can both analyze and fix issues. Unlike the code reviewer, this one includes <code>Edit</code> because fixing bugs requires modifying code. The prompt provides a clear workflow from diagnosis to verification.</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: debugger
description: Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when encountering any issues.
tools: Read, Edit, Bash, Grep, Glob
---

You are an expert debugger specializing in root cause analysis.

When invoked:
1. Capture error message and stack trace
2. Identify reproduction steps
3. Isolate the failure location
4. Implement minimal fix
5. Verify solution works

Debugging process:
- Analyze error messages and logs
- Check recent code changes
- Form and test hypotheses
- Add strategic debug logging
- Inspect variable states

For each issue, provide:
- Root cause explanation
- Evidence supporting the diagnosis
- Specific code fix
- Testing approach
- Prevention recommendations

Focus on fixing the underlying issue, not the symptoms.</code>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Data scientist</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A domain-specific subagent for data analysis work. This example shows how to create subagents for specialized workflows outside of typical coding tasks. It explicitly sets <code>model: sonnet</code> for more capable analysis.</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: data-scientist
description: Data analysis expert for SQL queries, BigQuery operations, and data insights. Use proactively for data analysis tasks and queries.
tools: Bash, Read, Write
model: sonnet
---

You are a data scientist specializing in SQL and BigQuery analysis.

When invoked:
1. Understand the data analysis requirement
2. Write efficient SQL queries
3. Use BigQuery command line tools (bq) when appropriate
4. Analyze and summarize results
5. Present findings clearly

Key practices:
- Write optimized SQL queries with proper filters
- Use appropriate aggregations and joins
- Include comments explaining complex logic
- Format results for readability
- Provide data-driven recommendations

For each analysis:
- Explain the query approach
- Document any assumptions
- Highlight key findings
- Suggest next steps based on data

Always ensure queries are efficient and cost-effective.</code>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Database query validator</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A subagent that allows Bash access but validates commands to permit only read-only SQL queries. This example shows how to use <code>PreToolUse</code> hooks for conditional validation when you need finer control than the <code>tools</code> field provides.</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: db-reader
description: Execute read-only database queries. Use when analyzing data or generating reports.
tools: Bash
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./scripts/validate-readonly-query.sh"
---

You are a database analyst with read-only access. Execute SELECT queries to answer questions about the data.

When asked to analyze data:
1. Identify which tables contain the relevant data
2. Write efficient SELECT queries with appropriate filters
3. Present results clearly with context

You cannot modify data. If asked to INSERT, UPDATE, DELETE, or modify schema, explain that you only have read access.</code>
          <p style="margin-top: 1.5rem; margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">Claude Code passes hook input as JSON via stdin to hook commands. The validation script reads this JSON, extracts the command being executed, and checks it against a list of SQL write operations. If a write operation is detected, the script exits with code 2 to block execution and returns an error message to Claude via stderr.</p>
          <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">Create the validation script anywhere in your project. The path must match the <code>command</code> field in your hook configuration:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">#!/bin/bash
# Blocks SQL write operations, allows SELECT queries

# Read JSON input from stdin
INPUT=$(cat)

# Extract the command field from tool_input using jq
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

if [ -z "$COMMAND" ]; then
  exit 0
fi

# Block write operations (case-insensitive)
if echo "$COMMAND" | grep -iE '\b(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|TRUNCATE|REPLACE|MERGE)\b' > /dev/null; then
  echo "Blocked: Write operations not allowed. Use SELECT queries only." >&2
  exit 2
fi

exit 0</code>
          <p style="margin-top: 1rem; margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">Make the script executable:</p>
          <code style="display: block; padding: 0.75rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5;">chmod +x ./scripts/validate-readonly-query.sh</code>
          <p style="margin-top: 1rem; line-height: 1.6; color: var(--text-tertiary); font-size: 0.9rem;">The hook receives JSON via stdin with the Bash command in <code>tool_input.command</code>. Exit code 2 blocks the operation and feeds the error message back to Claude. See <a href="#" style="color: var(--accent-primary);">Hooks</a> for details on exit codes and <a href="#" style="color: var(--accent-primary);">Hook input</a> for the complete input schema.</p>
        </div>
      `,
    },
    {
      label: "Practical patterns",
      content: `
        <div style="margin-bottom: 0.5rem;">
          <p style="margin-bottom: 2rem; line-height: 1.75;">The following patterns demonstrate subagent direction applied to common scenarios.</p>

          <div style="margin-bottom: 3rem;">
            <h3 style="margin-bottom: 0.75rem; color: var(--accent-primary); font-size: 1.2rem;">Research before implementing</h3>
            <p style="margin-bottom: 1rem; line-height: 1.75;">When adding a feature to unfamiliar code, delegating research to a subagent first keeps the implementation discussion informed rather than exploratory, for example:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.25rem;">Before I implement user notifications, use a subagent to research:
- How are emails currently sent in this codebase?
- What notification patterns already exist?
- Where should new notification logic live based on the current architecture?

Summarize findings, then we'll plan the implementation together.</code>
            <p style="line-height: 1.75; color: var(--text-secondary);">A synthesized summary arrives instead of twenty files of raw context, and the implementation discussion starts from a solid foundation.</p>
          </div>

          <div style="margin-bottom: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
            <h3 style="margin-bottom: 0.75rem; color: var(--accent-primary); font-size: 1.2rem;">Parallel modifications</h3>
            <p style="margin-bottom: 1rem; line-height: 1.75;">When the same pattern needs updating across multiple files, parallel subagents finish faster and maintain focus, for example:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.25rem;">Use parallel subagents to update the error handling in these files:
- src/api/users.ts
- src/api/orders.ts
- src/api/products.ts

Each should follow the pattern established in src/api/auth.ts.
Work on all three simultaneously.</code>
            <p style="line-height: 1.75; color: var(--text-secondary);">Three subagents working in parallel complete in roughly the time one would take. Each focuses on its file without context from the others creating confusion or inconsistency.</p>
          </div>

          <div style="margin-bottom: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
            <h3 style="margin-bottom: 0.75rem; color: var(--accent-primary); font-size: 1.2rem;">Independent review</h3>
            <p style="margin-bottom: 1rem; line-height: 1.75;">After implementing something complex, verification from a subagent that hasn't been influenced by the implementation journey catches what familiarity obscures, for example:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.25rem;">Use a fresh subagent with read-only access to review my implementation of the payment flow. It should not see our previous discussion. I want an unbiased review.

Check for: security vulnerabilities, unhandled edge cases, and error handling gaps. Be critical.</code>
            <p style="line-height: 1.75; color: var(--text-secondary);">The review subagent evaluates the code without knowing what tradeoffs were considered, what approaches were rejected, or what assumptions were made. This outside perspective surfaces issues the main conversation might miss.</p>
          </div>

          <div style="padding-top: 2rem; border-top: 1px solid var(--border-color);">
            <h3 style="margin-bottom: 0.75rem; color: var(--accent-primary); font-size: 1.2rem;">Pipeline workflow</h3>
            <p style="margin-bottom: 1rem; line-height: 1.75;">For multi-stage tasks, chaining subagents with explicit handoffs between phases keeps each stage focused, for example:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.25rem;">Let's build this feature as a pipeline:

1. First subagent: Design the API contract and write it to docs/api-spec.md
2. Second subagent: Implement the backend endpoints based on that spec
3. Third subagent: Write integration tests for the implementation

Each stage should complete before the next begins. Use the output
files as the handoff mechanism between stages.</code>
            <p style="line-height: 1.75; color: var(--text-secondary);">Using a pipeline workflow, each stage in the task receives focused context. The design subagent isn't distracted by implementation concerns, the implementation subagent works from a clean spec, and the testing subagent evaluates the result independently.</p>
          </div>
        </div>
      `,
    },
  ],
  interactiveType: "custom",
};

export default claudeSubagentsConcept;
