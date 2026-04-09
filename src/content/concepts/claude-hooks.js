const claudeHooksConcept = {
  id: 'claude-hooks',
  title: 'Claude Hooks',
  tabs: [
    {
      label: 'Overview',
      content: `
        <p style="margin-bottom:1rem; line-height:1.75;">Even a smooth Claude Code workflow accumulates friction points over time. Every time Claude writes a file, Prettier needs to run manually. Every time it runs npm test, the same permission prompt appears. Every session starts with pasting the same boilerplate project context into the first message.</p>

        <p style="margin-bottom:1rem; line-height:1.75;">The good news? <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank" style="color: var(--accent-primary);">Hooks</a> eliminate these friction points. They act as triggers you can configure to fire before or after certain actions, allowing you to inject custom logic, scripts, and commands directly into Claude's operations.</p>

        <p style="margin-bottom:2rem; line-height:1.75;">This article covers advanced configuration for developers already familiar with Claude Code basics. By the end of this article, you'll understand the eight hook types, when to use each one, how to configure them, and how to debug them when things go wrong.</p>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">What is a hook?</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">A hook is a custom shell command that you create to execute automatically when a targeted event occurs in your Claude Code session, such as when Claude is about to write a file or when you submit a prompt. You can designate hooks for a huge range of things: intercepting actions before they execute, injecting agent context, automating approvals, or blocking operations before they happen.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks are configured in your settings files using a JSON structure with event names, matchers (to filter which tools trigger the hook), and the commands to run. They execute in your local environment with your user permissions, receiving information about the triggering event via stdin and communicating back through exit codes and stdout. This gives you precise control over Claude Code behavior without modifying the tool itself.</p>
        </div>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Why use hooks in Claude Code?</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks solve three categories of problems.</p>

          <div style="margin-bottom: 1.25rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Eliminate repetitive manual steps</strong>
            <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">Instead of running your formatter after every file change, a PostToolUse hook handles it automatically. Instead of approving npm test for the hundredth time, a PermissionRequest hook auto-approves it.</p>
          </div>

          <div style="margin-bottom: 1.25rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Enforce project-specific rules automatically</strong>
            <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">You can block dangerous commands before they execute, validate file paths before writes, or ensure naming conventions are followed. These guardrails run every time, not only when you remember to check.</p>
          </div>

          <div style="margin-bottom: 0; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Inject dynamic context without manual effort</strong>
            <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">A SessionStart hook can feed Claude your current git status and TODO list. A UserPromptSubmit hook can append your sprint priorities to every request. Claude stays informed without you repeating yourself.</p>
          </div>
        </div>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Hook reference</strong>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; line-height: 1.6;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.65rem 1rem; color: var(--accent-primary); font-weight: 700; white-space: nowrap;">Hook</th>
                  <th style="text-align: left; padding: 0.65rem 1rem; color: var(--accent-primary); font-weight: 700;">When it fires</th>
                  <th style="text-align: left; padding: 0.65rem 1rem; color: var(--accent-primary); font-weight: 700;">Common uses</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PreToolUse</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Before a tool executes</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Block dangerous commands, validate file paths, auto-approve safe operations</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PermissionRequest</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Before a permission dialog appears</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Auto-approve test commands, block access to sensitive files</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PostToolUse</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">After a tool completes</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Run formatters, trigger linters, log file changes</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PreCompact</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Before context compaction</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Back up transcripts, preserve important decisions</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">SessionStart</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When a session begins or resumes</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Inject git status, load TODO lists, set environment context</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">Stop</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When Claude finishes responding</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Verify task completion, run tests, generate summaries</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">SubagentStop</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When a subagent completes</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Validate subagent output, trigger follow-up actions</td>
                </tr>
                <tr>
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">UserPromptSubmit</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When you submit a prompt</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Inject sprint context, validate requests, add dynamic context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      label: 'Hook Types',
      content: `
        <p style="margin-bottom:1.5rem; line-height:1.75;">Claude Code provides eight hook events that cover the full lifecycle of a session, from startup through tool execution to completion. Each fires at a specific moment, giving you precise control over when your automation runs. Choosing the right hook depends on what you want to accomplish.</p>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">PreToolUse</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">This is the most commonly used hook, firing after Claude chooses a tool to use but before the tool actually executes. Your script can inspect the planned action and approve it, block it, request user confirmation, or modify the parameters, using a matcher to filter which tools trigger this hook.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">This PreToolUse hook example evaluates file writes before they execute. Claude reviews the planned action against the specified criteria and can approve, block, or flag concerns based on the prompt logic.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/validate-file-path.sh"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use PreToolUse:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Blocking dangerous Bash commands like rm -rf or force pushes</li>
            <li>Auto-approving safe, repetitive operations to reduce prompt fatigue</li>
            <li>Validating file paths before writes to prevent accidental overwrites</li>
            <li>Modifying tool inputs to inject project-specific defaults</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">PermissionRequest</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">This hook fires when Claude would normally show a permission dialog. This hook intercepts the moment before you would see a confirmation prompt, letting your script decide whether to allow, deny, or still ask the user.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PermissionRequest": [
      {
        "matcher": "Bash(npm test*)",
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/validate-test-command.sh"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">This example auto-approves any Bash command starting with npm test. The matcher pattern can include arguments for finer control.</p>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use PermissionRequest:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Auto-approving test commands you run dozens of times per session</li>
            <li>Blocking write access to production configuration files</li>
            <li>Allowing read operations on specific directories without prompts</li>
            <li>Denying any command that matches a dangerous pattern</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">PostToolUse</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Fires immediately after a tool completes successfully. Your script receives information about what happened, including the tool output, using matchers to filter which tools trigger it.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">This example of PostToolUse runs Prettier on any file Claude writes or edits. The pipe syntax in the matcher means it triggers for both Write and Edit tools.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "prettier --write \\"$CLAUDE_TOOL_INPUT_FILE_PATH\\""
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use PostToolUse:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Running Prettier, Black, or gofmt after every file write to enforce formatting</li>
            <li>Logging all file modifications to an audit trail</li>
            <li>Triggering linters and showing warnings after code changes</li>
            <li>Sending notifications when certain operations complete</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">PreCompact</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Fires before Claude compacts the conversation context to free up space. Compaction summarizes older parts of the conversation, which means some details get lost. This hook gives you a chance to preserve information before that happens.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">This PreCompact example backs up the transcript before automatic compaction. The matcher can be "auto" or "manual" so you can distinguish between automatic compaction and user-triggered compaction events.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PreCompact": [
      {
        "matcher": "auto",
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/backup-transcript.sh"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use PreCompact:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Backing up the full transcript to a file before summarization</li>
            <li>Extracting and saving important decisions or code snippets</li>
            <li>Logging session milestones for later review</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">SessionStart</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Fires when Claude Code starts a new session or resumes an existing one. Whatever your script outputs gets added to the conversation context, so Claude starts with that information already loaded.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "git status --short &amp;&amp; echo '---' &amp;&amp; cat TODO.md"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">Every session starts with Claude knowing your current git status and TODO list. Stdout automatically becomes context.</p>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use SessionStart:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Feeding Claude your current git branch and recent commits</li>
            <li>Loading the contents of your TODO list or sprint backlog</li>
            <li>Injecting environment-specific configuration details</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">Stop</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Fires when Claude finishes responding and would normally wait for your next input. Your script can inspect what Claude produced and decide whether the task is truly complete.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">The script can return JSON with "continue": true to make Claude continue working, which is useful for multi-step workflows:</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Review whether the task is complete. If all requirements are met, respond with 'complete'. If work remains, respond with 'continue' and specify what still needs to be done."
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use Stop:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Forcing Claude to continue until all items in a checklist are done</li>
            <li>Verifying that tests pass before considering a task complete</li>
            <li>Triggering summary generation at the end of a session</li>
            <li>Checking that generated code compiles before stopping</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">SubagentStop</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">This hook fires whenever a subagent created via the Task tool finishes. Works the same way as Stop, but triggers specifically when a subagent completes its action (rather than the main agent). The configuration of SubagentStop mirrors the Stop hook structure:</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "SubagentStop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Evaluate the subagent's output. Verify the task was completed correctly and the results meet quality standards. If the output is satisfactory, respond with 'accept'. If issues exist, respond with 'reject' and explain what needs to be fixed."
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use SubagentStop:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Validating that subagent output meets quality criteria</li>
            <li>Triggering follow-up actions based on subagent results</li>
            <li>Logging subagent activity for debugging or auditing</li>
          </ul>
        </div>

        <div style="margin-bottom: 0; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">UserPromptSubmit</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Fires when you submit a prompt, before Claude processes it. Whatever your script outputs via stdout gets added to Claude's context along with your prompt, which makes UserPromptSubmit useful for dynamically injecting information that Claude should consider.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">In this example, every time you submit a prompt, Claude receives the contents of your sprint context file. This keeps Claude informed about current priorities without you needing to restate them.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "cat ./current-sprint-context.md"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use UserPromptSubmit:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Injecting current sprint context or project priorities with every prompt</li>
            <li>Validating prompts before they reach Claude</li>
            <li>Blocking certain types of requests based on content</li>
            <li>Adding dynamic context like recent error logs or test results</li>
          </ul>
        </div>
      `
    },
    {
      label: 'Configuration',
      content: `
        <div style="margin-bottom: 2rem;">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Configuration and file locations</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks live in JSON settings files at three levels. Project-level hooks go in .claude/settings.json within your repository, making them shareable with your team. User-level hooks go in ~/.claude/settings.json and apply across all your projects. Local project hooks go in .claude/settings.local.json for personal configuration you don't want to commit.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Project-level settings take precedence over user-level settings. There are also enterprise-managed policy settings available for organizational control. For complete details, see the Claude Code settings information.</p>

          <div style="background: rgba(0, 242, 255, 0.06); border: 1px solid var(--accent-primary); border-radius: 10px; padding: 1.1rem 1.25rem; margin-bottom: 1.5rem;">
            <strong style="color: var(--accent-primary); font-size: 0.9rem;">💡 Pro tip</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">This is the same file where you can set granular permissions for Claude actions, at the project, user, or local levels. For example, you can explicitly allow Claude to read all files in a directory so that you don't have to approve it every time, or block any modification of sensitive files.</p>
          </div>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Matcher syntax</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Matchers are how you filter which tools can trigger your hook. They only apply to PreToolUse, PostToolUse, and PermissionRequest hooks.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">Simple string matching works exactly as you'd expect: "Write" matches only the Write tool.</p>
          <p style="margin-bottom: 0.5rem; line-height: 1.6;">For example:</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "your-command-here"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 1rem; line-height: 1.75;">The pipe syntax lets you match multiple tools: "Write|Edit" triggers for either, whereas wildcards match everything: "*" or an empty string matches all tools.</p>

          <div style="background: rgba(255, 193, 7, 0.06); border: 1px solid rgba(255, 193, 7, 0.4); border-radius: 10px; padding: 1.1rem 1.25rem; margin-bottom: 1.5rem;">
            <strong style="color: #f5c842; font-size: 0.9rem;">⚠️ Note</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">Matchers are case sensitive, so "bash" won't be matched to the Bash tool.</p>
          </div>

          <p style="margin-bottom: 1rem; line-height: 1.75;">For finer control, argument patterns like "Bash(npm test*)" can match specific command arguments. MCP tool patterns follow the format "mcp__memory__.*" for Model Context Protocol tools.</p>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">What hooks receive</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">All hooks receive JSON via stdin containing session information and event-specific data. Common fields include: session_id, transcript_path, cwd, permission_mode, and hook_event_name.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Additionally, tool-related hooks also receive tool_name and tool_input. This data lets your scripts make informed decisions about how to respond.</p>
        </div>

        <div style="margin-bottom: 0; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">How hooks respond</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Exit codes determine the basic outcome. Exit code 0 means success, and stdout either gets processed for JSON or added to context. Exit code 2 means a blocking error: stderr becomes the error message and the action gets prevented.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Other exit codes indicate non-blocking errors, with stderr shown in verbose mode.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Beyond exit codes, hooks can return structured JSON for more control. Fields include: decision (approve, block, allow, or deny), reason (explanation shown to Claude), continue (for Stop hooks to force continuation), and updatedInput (to modify tool parameters before execution).</p>
        </div>
      `
    },
    {
      label: 'Security & Debugging',
      content: `
        <div style="margin-bottom: 2rem;">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Environment and execution</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks have access to environment variables, including: CLAUDE_PROJECT_DIR for the project root path, CLAUDE_CODE_REMOTE which is true for web environments, and CLAUDE_ENV_FILE for SessionStart hooks to persist variables. Standard environment variables from your shell are also accessible.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Also of note: Hooks have a 60-second default timeout, configurable per hook. When multiple hooks match an event, they run in parallel. Identical commands are automatically deduplicated.</p>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Security considerations</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks execute arbitrary shell commands with your user permissions. Claude Code includes a safeguard: direct edits to hook configuration files require review in the /hooks menu before taking effect. This prevents malicious code from silently adding hooks to your configuration.</p>
          <p style="margin-bottom: 1.25rem; line-height: 1.75;">However, if you configure and approve hooks, they will execute at your permission levels.</p>

          <div style="background: rgba(0, 242, 255, 0.06); border: 1px solid var(--accent-primary); border-radius: 10px; padding: 1.1rem 1.25rem; margin-bottom: 1.5rem;">
            <strong style="color: var(--accent-primary); font-size: 0.9rem;">💡 Pro tip</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">Before you run any commands in an environment, consider the risks. If you're going to run commands with hooks, consider good practices like: validating and sanitizing inputs from stdin, quoting shell variables to prevent injection, using absolute paths for scripts, and avoiding processing sensitive files like .env or credentials.</p>
          </div>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Debugging and testing</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Claude Code logs everything to transcript files, which provides visibility into tool calls and responses without any setup. Every hook receives a transcript_path field pointing to a JSONL file containing the full session history. You can use a SessionStart hook to log where each transcript lives:</p>

          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '\"Session: \" + .transcript_path' >> ~/.claude/sessions.log"
          }
        ]
      }
    ]
  }
}</code></pre>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Then tail that transcript to watch Claude work in real time:</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1.25rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">tail -f /path/to/transcript.jsonl | jq</code></pre>

          <p style="margin-bottom: 1rem; line-height: 1.75;">For hook-specific debugging, add logging to your hook scripts. The transcript files will show what Claude did, but not why your hook took the action to approve or block something.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.75;">With a little extra effort you can add a small bash script that will wrap your tools and log the additional information. For example, log-wrapper.sh:</p>

          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">#!/bin/bash
LOG=~/.claude/hooks.log
INPUT=$(cat)
TOOL=$(echo "$INPUT" | jq -r '.tool_name // "n/a"')
EVENT=$(echo "$INPUT" | jq -r '.hook_event_name // "n/a"')
echo "=== $(date) | $EVENT | $TOOL ===" >> "$LOG"
echo "$INPUT" | "$1"
CODE=$?
echo "Exit: $CODE" >> "$LOG"
exit $CODE</code></pre>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">This small wrapper script captures stdin into a variable, logs the timestamp and tool name, then pipes the input to your actual tool.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Once you have log-wrapper.sh written, you would then prepend it to the tool call in the hook:</p>

          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "log-wrapper.sh your-tool-command.py"
          }
        ]
      }
    ]
  }
}</code></pre>

          <div style="background: rgba(0, 242, 255, 0.06); border: 1px solid var(--accent-primary); border-radius: 10px; padding: 1.1rem 1.25rem;">
            <strong style="color: var(--accent-primary); font-size: 0.9rem;">💡 Pro tip</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">For more debugging tips, check out the <a href="https://code.claude.com/docs/en/debugging" target="_blank" style="color: var(--accent-primary);">Claude Code debugging documentation</a>.</p>
          </div>
        </div>
      `
    },
    {
      label: 'Building your own',
      content: `
        <p style="margin-bottom:1.5rem; line-height:1.75;">Start with one simple hook that solves an actual friction point in your workflow. The PostToolUse formatter hook is a good first choice since the feedback is immediate and visible. Once that works, expand based on what you learn.</p>

        <p style="margin-bottom:1.5rem; line-height:1.75;">For complete reference documentation including all available fields and advanced patterns, see the <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank" style="color: var(--accent-primary);">official hooks documentation</a>.</p>

        <p style="margin-bottom:2rem; line-height:1.75;">Hooks let you shape Claude Code to match your workflow rather than adapting your workflow to the tool. When you invest in configuring hooks, it pays off every session.</p>

        <div style="padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Hooks at a glance</strong>

          <div style="overflow-x: auto; margin-bottom: 2rem;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.75rem 1rem; color: var(--text-secondary); font-weight: 600; white-space: nowrap;">Hook</th>
                  <th style="text-align: left; padding: 0.75rem 1rem; color: var(--text-secondary); font-weight: 600;">When it fires</th>
                  <th style="text-align: left; padding: 0.75rem 1rem; color: var(--text-secondary); font-weight: 600;">Primary use</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">PreToolUse</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Before a tool executes</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Block, approve, or modify planned actions</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">PermissionRequest</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Before a permission dialog appears</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Auto-approve or deny permission requests</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">PostToolUse</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">After a tool completes</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Run formatters, linters, audit logs</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">PreCompact</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Before context compaction</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Back up transcripts, save decisions</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">SessionStart</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">When a session begins or resumes</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Inject git status, TODOs, environment info</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">Stop</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">When Claude finishes responding</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Verify task completion, force continuation</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">SubagentStop</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">When a subagent finishes</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Validate subagent output quality</td>
                </tr>
                <tr>
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">UserPromptSubmit</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">When you submit a prompt</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Inject sprint context, validate prompts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style="margin-top: 1.5rem; line-height: 1.75; color: var(--text-secondary);">Start using hooks to customize your Claude Code workflows today. See the <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank" style="color: var(--accent-primary);">official hooks documentation</a> for the full configuration reference.</p>
        </div>
      `
    }
  ]
};

export default claudeHooksConcept;
