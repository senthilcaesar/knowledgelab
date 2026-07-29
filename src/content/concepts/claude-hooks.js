const claudeHooksConcept = {
  id: "claude-hooks",
  title: "Claude Hooks",
  tabs: [
    {
      label: "Overview",
      content: `
        <p style="margin-bottom:1rem; line-height:1.75;">Even a smooth Claude Code workflow accumulates friction points over time. Every time Claude writes a file, Prettier needs to run manually. Every time it runs npm test, the same permission prompt appears. Every session starts with pasting the same boilerplate project context into the first message.</p>

        <p style="margin-bottom:1rem; line-height:1.75;">The good news? <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank" style="color: var(--accent-primary);">Hooks</a> eliminate these friction points. They act as triggers you can configure to fire before or after certain actions, allowing you to inject custom logic, scripts, and commands directly into Claude's operations.</p>

        <p style="margin-bottom:2rem; line-height:1.75;">This article covers advanced configuration for developers already familiar with Claude Code basics. By the end of this article, you'll understand the core hook events, when to use each one, how to configure them, and how to debug them when things go wrong.</p>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">What is a hook?</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">A hook is a handler you register to run automatically when a targeted event occurs in your Claude Code session, such as when Claude is about to write a file or when you submit a prompt. You can designate hooks for a huge range of things: intercepting actions before they execute, injecting agent context, automating approvals, or blocking operations before they happen.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks are configured in your settings files using a JSON structure with event names, matchers (to filter which occurrences trigger the hook), and the handlers to run. Handlers receive information about the triggering event via stdin and communicate back through exit codes and stdout. This gives you precise control over Claude Code behavior without modifying the tool itself.</p>

          <div style="background: rgba(0, 242, 255, 0.06); border: 1px solid var(--accent-primary); border-radius: 10px; padding: 1.1rem 1.25rem; margin-top: 1.25rem;">
            <strong style="color: var(--accent-primary); font-size: 0.9rem;">💡 A hook isn't only a shell command anymore</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">Shell commands (<code>type: "command"</code>) are still the workhorse, but a handler can also POST to an HTTP endpoint, call an MCP tool, evaluate a <strong>prompt</strong> with a fast model, or spawn an <strong>agent</strong> with tools to verify something. That last pair matters: they let you write rules that need judgment rather than a deterministic pattern match. See the Hook Types tab for all five.</p>
          </div>
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
          <p style="margin-bottom: 1.25rem; line-height: 1.75;">Claude Code fires around thirty lifecycle events. You'll spend almost all your time with the eight below — they cover session start, the tool-call cycle, permissions, compaction, and turn completion. The rest are covered further down.</p>
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

          <strong style="display:block; margin: 2rem 0 1rem; font-size:1.05rem; color: var(--accent-primary);">Beyond the core eight</strong>
          <p style="margin-bottom: 1.25rem; line-height: 1.75;">The event list has grown well past the original set. These are the ones worth knowing about once the basics are in place:</p>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; line-height: 1.6;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.65rem 1rem; color: var(--accent-primary); font-weight: 700; white-space: nowrap;">Hook</th>
                  <th style="text-align: left; padding: 0.65rem 1rem; color: var(--accent-primary); font-weight: 700;">When it fires</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">SessionEnd</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When a session terminates — cleanup, final logging</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PostToolUseFailure</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">After a tool call <em>fails</em> — the counterpart to PostToolUse</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PostToolBatch</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">After a full batch of parallel tool calls resolves</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PermissionDenied</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When auto mode's classifier denies a call. Return <code>retry: true</code> to let Claude try again</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">SubagentStart</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When a subagent is spawned — the bookend to SubagentStop</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">Notification</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When Claude Code sends a notification — desktop alerts, sounds</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">FileChanged</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When a watched file changes on disk. The matcher names the files to watch</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">CwdChanged</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When the working directory changes — useful with direnv-style tooling</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PostCompact</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">After compaction completes — re-inject anything the summary dropped</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">StopFailure</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When a turn ends on an API error (rate limit, overload)</td>
                </tr>
                <tr>
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">ConfigChange</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When a config file changes mid-session. Can block the change</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style="margin-top: 1.25rem; line-height: 1.75; color: var(--text-secondary); font-size: 0.95rem;">There are more still — <code>Setup</code>, <code>UserPromptExpansion</code>, <code>MessageDisplay</code>, <code>TaskCreated</code>, <code>TaskCompleted</code>, <code>TeammateIdle</code>, <code>InstructionsLoaded</code>, <code>WorktreeCreate</code>, <code>WorktreeRemove</code>, <code>Elicitation</code> and <code>ElicitationResult</code>. See the <a href="https://code.claude.com/docs/en/hooks" target="_blank" style="color: var(--accent-primary);">hooks reference</a> for the complete list.</p>
        </div>
      `,
    },
    {
      label: "Hook Types",
      content: `
        <p style="margin-bottom:1.5rem; line-height:1.75;">The eight events below cover the full lifecycle of a session, from startup through tool execution to completion, and between them handle the overwhelming majority of real hook use cases. Each fires at a specific moment, giving you precise control over when your automation runs. Choosing the right hook depends on what you want to accomplish.</p>

        <div style="margin-bottom: 2rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.05rem; color: var(--accent-primary);">First: pick a handler type</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75; font-size: 0.95rem;">Every hook entry declares a <code>type</code>. The event decides <em>when</em> your hook runs; the type decides <em>what</em> runs. There are five:</p>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; line-height: 1.6;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.6rem 0.85rem; color: var(--accent-primary); font-weight: 700; white-space: nowrap;">Type</th>
                  <th style="text-align: left; padding: 0.6rem 0.85rem; color: var(--accent-primary); font-weight: 700;">What it does</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">command</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Runs a shell command or script. Event JSON arrives on stdin; you reply with exit codes and stdout. The default choice</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">http</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">POSTs the event JSON to a URL. The response body uses the same output schema as a command hook</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">mcp_tool</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Calls a tool on an already-connected MCP server, with <code>\${tool_input.file_path}</code>-style substitution into its arguments</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">prompt</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Sends a prompt to a fast model for a single-turn judgment call. Use <code>$ARGUMENTS</code> for the hook input. For rules a regex can't express</td>
                </tr>
                <tr>
                  <td style="padding: 0.6rem 0.85rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">agent</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Spawns a subagent <em>with tools</em> to go look at things before deciding. The heavyweight option; experimental</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style="margin: 1rem 0 0; line-height: 1.75; font-size: 0.95rem; color: var(--text-secondary);">The examples below use <code>command</code> and <code>prompt</code>, but any event accepts any type.</p>
        </div>

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
            "command": "jq -r '.tool_input.file_path' | xargs prettier --write"
          }
        ]
      }
    ]
  }
}</code></pre>
          <div style="background: rgba(255, 193, 7, 0.06); border: 1px solid rgba(255, 193, 7, 0.4); border-radius: 10px; padding: 1.1rem 1.25rem; margin-bottom: 1rem;">
            <strong style="color: #f5c842; font-size: 0.9rem;">⚠️ There is no <code>$CLAUDE_TOOL_INPUT_FILE_PATH</code></strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">Claude Code does not expose tool arguments as environment variables. Everything about the event arrives as <strong>JSON on stdin</strong>, so read the path out with <code>jq</code> as above, or capture stdin in a script and parse it there. This trips people up constantly — a hook referencing an invented env var silently formats nothing.</p>
          </div>
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
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">To make Claude keep working rather than stop, the handler returns <code>{"decision": "block", "reason": "..."}</code> — the reason is fed back as instruction for what still needs doing. Exiting with code 2 and writing the reason to stderr does the same thing. Omit <code>decision</code> entirely (or just exit 0) to let Claude stop normally.</p>
          <div style="background: rgba(255, 193, 7, 0.06); border: 1px solid rgba(255, 193, 7, 0.4); border-radius: 10px; padding: 1.1rem 1.25rem; margin-bottom: 1rem;">
            <strong style="color: #f5c842; font-size: 0.9rem;">⚠️ <code>continue</code> does the opposite of what it sounds like</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">The top-level <code>continue</code> field defaults to <code>true</code> and is not how you force continuation — setting <code>continue: false</code> <em>halts Claude entirely</em>. Use <code>decision: "block"</code> to keep it working, and <code>hookSpecificOutput.additionalContext</code> when you want to pass feedback along without blocking.</p>
          </div>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">A prompt handler is a natural fit here, since "is this task actually finished?" is a judgment call:</p>
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
          <p style="margin-bottom: 1rem; line-height: 1.75;">This hook fires whenever a subagent spawned via the Agent tool finishes (the tool was renamed from Task in v2.1.63; old <code>Task(...)</code> references still work as aliases). It works the same way as Stop, but triggers when a subagent completes rather than the main agent — and it accepts a matcher on the <strong>agent type</strong>, so you can target <code>Explore</code>, <code>general-purpose</code>, or one of your own subagents specifically. There's a matching <code>SubagentStart</code> event for the other end. The configuration mirrors the Stop hook structure:</p>
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
      `,
    },
    {
      label: "Configuration",
      content: `
        <div style="margin-bottom: 2rem;">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Configuration and file locations</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks live in JSON settings files at three levels. Project-level hooks go in .claude/settings.json within your repository, making them shareable with your team. User-level hooks go in ~/.claude/settings.json and apply across all your projects. Local project hooks go in .claude/settings.local.json for personal configuration you don't want to commit.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">There are also enterprise-managed policy settings available for organizational control. Hooks from these levels <strong>merge</strong> rather than override — a later source adds its hooks alongside the earlier ones instead of replacing them, so a project hook and a user hook on the same event both fire.</p>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Settings files aren't the only place hooks can come from. Two more sources are worth knowing:</p>
          <ul style="margin: 0 0 1.25rem 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li><strong>Plugins</strong> — a plugin can ship <code>hooks/hooks.json</code>, active whenever that plugin is enabled. This is how you distribute hooks to a team without asking everyone to edit their settings.</li>
            <li><strong>Skill and subagent frontmatter</strong> — a hook declared there is scoped to that component, firing only while it's active. Useful for a rule that should apply to one subagent rather than the whole session.</li>
          </ul>

          <div style="background: rgba(0, 242, 255, 0.06); border: 1px solid var(--accent-primary); border-radius: 10px; padding: 1.1rem 1.25rem; margin-bottom: 1.5rem;">
            <strong style="color: var(--accent-primary); font-size: 0.9rem;">💡 Pro tip</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">This is the same file where you can set granular permissions for Claude actions, at the project, user, or local levels. For example, you can explicitly allow Claude to read all files in a directory so that you don't have to approve it every time, or block any modification of sensitive files.</p>
          </div>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Matcher syntax</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Matchers filter which occurrences of an event trigger your hook. On tool events they match the <strong>tool name</strong> — but matchers are no longer tool-only. Many events accept a matcher, and what it filters depends on the event:</p>

          <div style="overflow-x: auto; margin-bottom: 1.25rem;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; line-height: 1.6;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.6rem 0.85rem; color: var(--accent-primary); font-weight: 700;">Event</th>
                  <th style="text-align: left; padding: 0.6rem 0.85rem; color: var(--accent-primary); font-weight: 700;">Matcher filters</th>
                  <th style="text-align: left; padding: 0.6rem 0.85rem; color: var(--accent-primary); font-weight: 700;">Example values</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Tool name</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">Bash, Edit|Write</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">SessionStart</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">How the session started</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">startup, resume, clear, compact, fork</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">SessionEnd</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Why it ended</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">clear, resume, logout, other</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">PreCompact, PostCompact</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Compaction trigger</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">auto, manual</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">SubagentStart, SubagentStop</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Agent type</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">Explore, general-purpose, code-reviewer</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">Notification</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Notification type</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">permission_prompt, idle_prompt</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">FileChanged</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Filenames to watch</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">.envrc|.env</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">ConfigChange</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Config source</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">user_settings, project_settings</td>
                </tr>
                <tr>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-family: monospace; font-size: 0.82rem;">UserPromptSubmit, Stop, PostToolBatch, CwdChanged and others</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">No matcher support — the hook fires every time</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">—</td>
                </tr>
              </tbody>
            </table>
          </div>

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

          <p style="margin-bottom: 1rem; line-height: 1.75;">MCP tool patterns follow the format "mcp__memory__.*" for Model Context Protocol tools; plugin-provided servers use the longer "mcp__plugin_&lt;plugin&gt;_&lt;server&gt;__&lt;tool&gt;" form.</p>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">How a matcher is interpreted depends on the characters in it:</p>
          <ul style="margin: 0 0 1.25rem 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Only letters, digits, <code>_</code>, <code>-</code>, spaces, <code>,</code> or <code>|</code> → treated as an exact string or a list. <code>"Edit|Write"</code> and <code>"Edit,Write"</code> both work.</li>
            <li>Anything else → treated as an unanchored JavaScript regex. That's what makes <code>"^Notebook"</code> and <code>"mcp__memory__.*"</code> behave as patterns.</li>
            <li><code>"*"</code>, <code>""</code>, or omitting the field entirely → matches everything.</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Narrowing further with <code>if</code></strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">A matcher selects the tool; the <code>if</code> field, set on the individual handler, selects <em>which calls to that tool</em> using permission-rule syntax. This is the current way to key off command arguments — the pattern that used to be written as a matcher like <code>"Bash(npm test*)"</code>.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "if": "Bash(rm *)",
            "command": "\${CLAUDE_PROJECT_DIR}/.claude/hooks/block-rm.sh"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Patterns like <code>"Edit(*.ts)"</code> work the same way for file tools. One caveat: <code>if</code> is only evaluated on tool events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied). Set it on any other event and the hook simply never runs.</p>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Handlers accept a few other useful fields regardless of type:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li><code>timeout</code> — seconds before the handler is cancelled</li>
            <li><code>statusMessage</code> — custom spinner text while it runs</li>
            <li><code>async</code> — run in the background instead of blocking the turn (command hooks)</li>
            <li><code>once</code> — run a single time per session, then drop out</li>
            <li><code>shell</code> — <code>"bash"</code> (default) or <code>"powershell"</code> on Windows</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">What hooks receive</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">All hooks receive JSON via stdin containing session information and event-specific data. Common fields include: <code>session_id</code>, <code>prompt_id</code>, <code>transcript_path</code>, <code>cwd</code>, <code>permission_mode</code>, <code>effort.level</code>, and <code>hook_event_name</code>. When the hook fires inside a subagent you also get <code>agent_id</code> and <code>agent_type</code>.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Additionally, tool-related hooks also receive <code>tool_name</code> and <code>tool_input</code>. This data lets your scripts make informed decisions about how to respond — and, as noted earlier, stdin is the <em>only</em> place this data appears. There are no per-tool environment variables.</p>
        </div>

        <div style="margin-bottom: 0; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">How hooks respond</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Exit codes determine the basic outcome. Exit code 0 means success, and stdout either gets processed for JSON or added to context. Exit code 2 means a blocking error: stderr becomes the error message and the action gets prevented — what "prevented" means depends on the event (PreToolUse blocks the tool call, UserPromptSubmit erases the prompt, Stop refuses to stop, PreCompact cancels compaction).</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Every other exit code is a <em>non-blocking</em> error: stderr is surfaced as a notice and execution continues. Note that this includes exit 1 — a script that fails with the conventional <code>exit 1</code> will not block anything. Use <code>exit 2</code> whenever you mean to enforce a policy.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Beyond exit codes, hooks can exit 0 and print structured JSON to stdout for finer control. The schema splits into universal fields and an event-specific <code>hookSpecificOutput</code> object:</p>

          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "continue": true,
  "systemMessage": "Warning shown to you, not to Claude",
  "suppressOutput": false,
  "decision": "block",
  "reason": "Why the action was blocked",
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Destructive command blocked by hook",
    "additionalContext": "Text injected into Claude's context",
    "updatedInput": { "command": "modified command" }
  }
}</code></pre>

          <div style="overflow-x: auto; margin-bottom: 1rem;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; line-height: 1.6;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.6rem 0.85rem; color: var(--accent-primary); font-weight: 700; white-space: nowrap;">Field</th>
                  <th style="text-align: left; padding: 0.6rem 0.85rem; color: var(--accent-primary); font-weight: 700;">What it does</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; font-family: monospace; color: var(--text-primary); white-space: nowrap;">continue</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Defaults to <code>true</code>. Setting it to <code>false</code> stops Claude entirely — it is <em>not</em> how you force continuation</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.6rem 0.85rem; font-family: monospace; color: var(--text-primary); white-space: nowrap;">decision / reason</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);"><code>"block"</code> prevents the action; <code>reason</code> explains why and is shown to Claude. Omit both to proceed normally</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; font-family: monospace; color: var(--text-primary); white-space: nowrap;">systemMessage</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">A warning surfaced to you in the terminal</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.6rem 0.85rem; font-family: monospace; color: var(--text-primary); white-space: nowrap;">permissionDecision</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">On PreToolUse: <code>allow</code>, <code>deny</code>, <code>ask</code>, or <code>defer</code>. Pair with <code>permissionDecisionReason</code></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.85rem; font-family: monospace; color: var(--text-primary); white-space: nowrap;">additionalContext</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Injects text into Claude's context without blocking anything</td>
                </tr>
                <tr>
                  <td style="padding: 0.6rem 0.85rem; font-family: monospace; color: var(--text-primary); white-space: nowrap;">updatedInput</td>
                  <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary);">Rewrites the tool's arguments before it runs. There's also <code>updatedToolOutput</code> to rewrite a result on PostToolUse</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="background: rgba(255, 193, 7, 0.06); border: 1px solid rgba(255, 193, 7, 0.4); border-radius: 10px; padding: 1.1rem 1.25rem;">
            <strong style="color: #f5c842; font-size: 0.9rem;">⚠️ Note</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;"><code>permissionDecision</code>, <code>additionalContext</code>, <code>updatedInput</code> and friends live <strong>inside</strong> <code>hookSpecificOutput</code>, not at the top level, and that object needs a <code>hookEventName</code> matching the event. Only <code>continue</code>, <code>decision</code>, <code>reason</code>, <code>systemMessage</code> and <code>suppressOutput</code> sit at the top.</p>
          </div>
        </div>
      `,
    },
    {
      label: "Security & Debugging",
      content: `
        <div style="margin-bottom: 2rem;">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Environment and execution</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks have access to environment variables set by Claude Code, alongside the standard ones from your shell:</p>
          <ul style="margin: 0 0 1.25rem 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li><code>CLAUDE_PROJECT_DIR</code> — the project root path</li>
            <li><code>CLAUDE_PLUGIN_ROOT</code> — the plugin's install directory, for hooks shipped inside a plugin</li>
            <li><code>CLAUDE_PLUGIN_DATA</code> — a persistent data directory for that plugin</li>
            <li><code>CLAUDE_EFFORT</code> — the current effort level (<code>low</code> through <code>max</code>)</li>
            <li><code>CLAUDE_CODE_REMOTE</code> — <code>"true"</code> in remote web environments</li>
          </ul>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Note that everything <em>about the event itself</em> — session id, tool name, tool arguments, transcript path — arrives as JSON on stdin, not as environment variables.</p>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Timeouts are configurable per handler, and the defaults vary by type and event rather than being one number:</p>
          <ul style="margin: 0 0 1.25rem 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li><strong>600 seconds</strong> — command, HTTP, and MCP tool handlers</li>
            <li><strong>30 seconds</strong> — prompt handlers, and anything on UserPromptSubmit</li>
            <li><strong>60 seconds</strong> — agent handlers</li>
            <li><strong>10 seconds</strong> — MessageDisplay, which sits in the render path</li>
          </ul>
          <p style="margin-bottom: 1rem; line-height: 1.75;">When multiple hooks match an event they run in parallel, and identical handlers are deduplicated automatically — command hooks by command string and <code>args</code>, HTTP hooks by URL.</p>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Security considerations</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks execute arbitrary shell commands with your user permissions, and they do so without asking. Treat a settings file that defines hooks the same way you'd treat a shell script someone handed you.</p>

          <div style="background: rgba(255, 193, 7, 0.06); border: 1px solid rgba(255, 193, 7, 0.4); border-radius: 10px; padding: 1.1rem 1.25rem; margin-bottom: 1.25rem;">
            <strong style="color: #f5c842; font-size: 0.9rem;">⚠️ <code>/hooks</code> is a viewer, not an approval gate</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">Older guidance said edits to hook configuration had to be reviewed in the <code>/hooks</code> menu before taking effect. That is no longer how it works. <code>/hooks</code> is now a <strong>read-only browser</strong> — it lists every configured event, its matchers, handlers, and which settings file each came from, but you can't approve or edit anything there. Direct edits to a settings file are picked up automatically by the file watcher. So a hook added to a repository's <code>.claude/settings.json</code> can run as soon as you trust that project: review before you trust, not after.</p>
          </div>

          <p style="margin-bottom: 1.25rem; line-height: 1.75;">To turn everything off in one move, set <code>"disableAllHooks": true</code> in your settings. One limit worth knowing: <code>disableAllHooks</code> in user or project settings can't switch off hooks that came from enterprise-managed policy settings — only managed settings can do that.</p>

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
      `,
    },
    {
      label: "Building your own",
      content: `
        <p style="margin-bottom:1.5rem; line-height:1.75;">Start with one simple hook that solves an actual friction point in your workflow. The PostToolUse formatter hook is a good first choice since the feedback is immediate and visible. Once that works, expand based on what you learn.</p>

        <p style="margin-bottom:1.5rem; line-height:1.75;">For complete reference documentation including all available fields and advanced patterns, see the <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank" style="color: var(--accent-primary);">official hooks documentation</a>.</p>

        <p style="margin-bottom:2rem; line-height:1.75;">Hooks let you shape Claude Code to match your workflow rather than adapting your workflow to the tool. When you invest in configuring hooks, it pays off every session.</p>

        <div style="padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Hooks at a glance</strong>
          <p style="margin-bottom: 1.25rem; line-height: 1.75;">The eight events you'll reach for most often. Roughly twenty more exist for narrower cases — see the Overview tab for the second tier and the reference docs for the rest.</p>

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
      `,
    },
  ],
};

export default claudeHooksConcept;
