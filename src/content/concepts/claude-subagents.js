const claudeSubagentsConcept = {
  id: 'claude-subagents',
  title: 'Claude Subagents',
  tabs: [
    {
      label: 'Overview',
      content: `
        <p style="margin-bottom:1rem; line-height:1.75;">Subagents are specialized AI assistants that handle specific types of tasks. Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions. They handle discrete tasks independently and return results to the main agent. When Claude encounters a task that matches a subagent’s description, it delegates to that subagent, which works independently and returns results.</p>
        <p style="margin-bottom:1.5rem; font-style: italic; color: var(--text-secondary); line-height:1.6;">
          Note: If you need multiple agents working in parallel and communicating with each other, see agent teams instead. Subagents work within a single session; agent teams coordinate across separate sessions.
        </p>
        <p>Claude uses each subagent’s description to decide when to delegate tasks. When you create a subagent, write a clear description so Claude knows when to use it. The key word is isolation. A subagent is an isolated Claude instance that works on a task independently and returns only the results to your main conversation. Use subagents when you need parallel execution or want to isolate heavy computational work. Best for: preventing context pollution, specialized deep dives.</p>

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
      `
    },
    {
      label: 'Scenario',
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
      `
    },
    {
      label: 'Built-in',
      content: `
        <p>Claude Code includes several built-in subagents that are optimized for common engineering workflows:</p>

        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">1. Explore</strong>
          <p>A fast, read-only agent optimized for searching and analyzing codebases.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Tools:</strong> Read-only tools (no Write/Edit access)</li>
              <li><strong>Purpose:</strong> File discovery, code search, codebase exploration</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Claude delegates to Explore when it needs to search or understand a codebase without making changes. This keeps exploration results out of your main session context.</p>
        </div>
        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">2. Plan</strong>
          <p>A research-focused agent used during plan mode to gather context before presenting a plan.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Tools:</strong> Read-only tools</li>
              <li><strong>Purpose:</strong> Codebase research for planning</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Used when Claude needs to understand your codebase during a planning phase.</p>
        </div>

        <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Viewing Subagents</strong>
          
          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size: 1rem; color: var(--text-primary);">Option 1: The <code>/agents</code> command (recommended)</strong>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.75rem;">Use the <code>/agents</code> slash command inside an interactive session to browse all available subagents.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">/agents</code>
          </div>

          <div>
            <strong style="display:block; margin-bottom:0.75rem; font-size: 1rem; color: var(--text-primary);">Option 2: The <code>claude agents</code> CLI command</strong>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.75rem;">To list all configured subagents from the command line <em>without</em> starting an interactive session, run <code>claude agents</code>.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">claude agents</code>
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
      `
    },
    {
      label: 'Create your own',
      content: `
        <p style="margin-bottom: 2rem; line-height: 1.75;">Subagents are defined in Markdown files with YAML frontmatter. You can create them easily using the <code>/agents</code> command.</p>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">1) Open the subagents interface</strong>
          <p style="margin-bottom: 0.75rem;">In Claude Code, run:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">/agents</code>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">2) Choose a location</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Select <strong>Create new agent</strong>, then choose <strong>Personal</strong>. This saves the subagent to <code>~/.claude/agents/</code> so it’s available in all your projects.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">3) Generate with Claude</strong>
          <p style="margin-bottom: 1rem;">Select <strong>Generate with Claude</strong>. When prompted, describe the subagent:</p>
          <div style="padding: 1rem; background: var(--surface-color); border: 1px dashed var(--accent-primary); border-radius: 8px; font-size: 0.95rem; line-height: 1.6; font-style: italic; color: var(--text-secondary);">
            "A code improvement agent that scans files and suggests improvements for readability, performance, and best practices. It should explain each issue, show the current code, and provide an improved version."
          </div>
          <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-tertiary);">Claude generates the identifier, description, and system prompt for you.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">4) Select tools</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">For a read-only reviewer, deselect everything except <strong>Read-only tools</strong>. If you keep all tools selected, the subagent inherits all tools available to the main conversation.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">5) Select model</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Choose which model the subagent uses. For this example agent, select <strong>Sonnet</strong>, which balances capability and speed for analyzing code patterns.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">6) Choose a color</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Pick a background color for the subagent. This helps you identify which subagent is running in the UI.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">7) Configure memory</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Select <strong>User scope</strong> to give the subagent a persistent memory directory at <code>~/.claude/agent-memory/</code>. The subagent uses this to accumulate insights across conversations. Select <strong>None</strong> if you don’t want the subagent to persist learnings.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">8) Save and try it out</strong>
          <p style="margin-bottom: 1rem;">Review the configuration summary. Press <code>s</code> or <code>Enter</code> to save. The subagent is available immediately. Try it:</p>
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
      `
    },
    {
      label: 'Config',
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
                  <td style="padding: 0.75rem; font-family: monospace;">--agents CLI flag</td>
                  <td style="padding: 0.75rem;">Current session</td>
                  <td style="padding: 0.75rem;">1 (highest)</td>
                  <td style="padding: 0.75rem;">JSON via CLI</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">.claude/agents/</td>
                  <td style="padding: 0.75rem;">Current project</td>
                  <td style="padding: 0.75rem;">2</td>
                  <td style="padding: 0.75rem;">Interactive/Manual</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">~/.claude/agents/</td>
                  <td style="padding: 0.75rem;">All projects</td>
                  <td style="padding: 0.75rem;">3</td>
                  <td style="padding: 0.75rem;">Interactive/Manual</td>
                </tr>
                <tr>
                  <td style="padding: 0.75rem; font-family: monospace;">Plugin directory</td>
                  <td style="padding: 0.75rem;">Plugin enabled</td>
                  <td style="padding: 0.75rem;">4 (lowest)</td>
                  <td style="padding: 0.75rem;">Installed plugin</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="margin-bottom: 2rem;">
            <p style="margin-bottom: 1rem; line-height: 1.6;"><strong style="color: var(--text-primary);">Project subagents (.claude/agents/)</strong> are ideal for subagents specific to a codebase. Check them into version control so your team can use and improve them collaboratively.</p>
            <p style="margin-bottom: 2.5rem; line-height: 1.6;"><strong style="color: var(--text-primary);">User subagents (~/.claude/agents/)</strong> are personal subagents available in all your projects.</p>
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
            <p style="margin-top: 1.5rem; line-height: 1.6;">The <code>--agents</code> flag accepts JSON with the same frontmatter fields as file-based subagents: <code>description</code>, <code>prompt</code>, <code>tools</code>, <code>disallowedTools</code>, <code>model</code>, <code>permissionMode</code>, <code>mcpServers</code>, <code>hooks</code>, <code>maxTurns</code>, <code>skills</code>, <code>initialPrompt</code>, <code>memory</code>, <code>effort</code>, <code>background</code>, and <code>isolation</code>. Use <code>prompt</code> for the system prompt, equivalent to the markdown body in file-based subagents.</p>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">2. Create subagent manually</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Subagent files use YAML frontmatter for configuration, followed by the system prompt in Markdown. Subagents are loaded at session start. If you create a subagent by manually adding a file, restart your session or use <code>/agents</code> to load it immediately.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and provide
specific, actionable feedback on quality, security, and best practices.</code>

            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 1rem 0;">
              <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
                <li><strong style="color: var(--text-primary);">name:</strong> Unique identifier used to invoke the agent.</li>
                <li><strong style="color: var(--text-primary);">description:</strong> Crucial for Claude's routing; explain exactly when this agent should be used.</li>
                <li><strong style="color: var(--text-primary);">model:</strong> The specific Claude model to use for this agent.</li>
                <li><strong style="color: var(--text-primary);">tools:</strong> List of tools the agent can access (e.g., Read, Bash, Search).</li>
              </ul>
            </div>

            <div style="margin-top: 1.5rem;">
              <p style="margin-bottom: 0.75rem; color: var(--accent-primary); font-weight: bold;">Choose a model</p>
              <p style="margin-bottom: 0.75rem; line-height: 1.6;">The model field controls which AI model the subagent uses:</p>
              <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
                <li><strong style="color: var(--text-primary);">Model alias:</strong> Use one of the available aliases: <code>sonnet</code>, <code>opus</code>, or <code>haiku</code></li>
                <li><strong style="color: var(--text-primary);">Full model ID:</strong> Use a full model ID such as <code>claude-opus-4-6</code> or <code>claude-sonnet-4-6</code>.</li>
                <li><strong style="color: var(--text-primary);">inherit:</strong> Use the same model as the main conversation</li>
                <li><strong style="color: var(--text-primary);">Omitted:</strong> If not specified, defaults to <code>inherit</code>.</li>
              </ul>
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
              <p style="margin-bottom: 0.75rem; line-height: 1.6; color: var(--text-secondary);">Subagents can use any of Claude Code’s internal tools. By default, subagents inherit all tools from the main conversation, including MCP tools.</p>
              
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
                <li>Automated context: Includes the first 200 lines of <code>MEMORY.md</code> at startup.</li>
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
      `
    },
    {
      label: 'Working with Subagents',
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
            <p style="margin-bottom: 1rem; line-height: 1.6;">Type <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px;">@</code> and pick the subagent or team from the typeahead. This ensures the correct context window and toolset are used:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">@agent sonnet look at the auth changes
@agent code-reviewer analyze this module</code>
            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">Your full message still goes to Claude, which writes the subagent’s task prompt based on what you asked. The @-mention controls which specialized context Claude invokes, not what prompt it receives.</p>
            <p style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; font-size: 0.9rem; color: var(--text-tertiary); line-height: 1.5;">Subagents provided by an enabled plugin appear in the typeahead as <code style="color: var(--accent-primary);">&lt;plugin-name&gt;:&lt;agent-name&gt;</code>. You can also type mentions manually: <code style="color: var(--accent-magenta);">@agent &lt;name&gt;</code> for agents, or <code style="color: var(--accent-magenta);">@agent &lt;team-name&gt;</code> for agent teams.</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Option 3: Session-wide (CLI flag)</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Pass <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-keyword);">--agent &lt;name&gt;</code> to start a session where the main thread itself takes on that subagent’s system prompt, tool restrictions, and model:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">claude --agent code-reviewer</code>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">The subagent’s system prompt replaces the default Claude Code system prompt entirely. CLAUDE.md files and project memory still load normally. The agent name appears as <code style="color: var(--accent-primary);">@&lt;name&gt;</code> in the startup header so you can confirm it’s active.</p>
          </div>

          <div style="margin-top: 2rem;">
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">For quick access to your configured subagents, you can also use the <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-keyword);">/agents</code> command to see a searchable list and select one to start a session.</p>
          </div>
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
      `
    },
    {
      label: 'Example',
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
      `
    }
  ],
  interactiveType: 'custom',
};

export default claudeSubagentsConcept;
