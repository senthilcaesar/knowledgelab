import specKitConcept from './spec-kit.js';
import openSpecConcept from './openspec.js';
import claudeTaskMasterConcept from './claude-task-master.js';
import mattPocockSkillsConcept from './matt-pocock-skills.js';
import claudeCodeSystemPromptsConcept from './claude-code-system-prompts.js';

const aiAgentWorkflowsConcept = {
  id: 'ai-agent-workflows',
  title: 'AI Agent Workflows',
  category: 'Tutorial',
  tags: ['SDD', 'AI', 'Agents', 'Spec-Driven'],
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
<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Agent Skills
  </a>
</div>
`,
    },
  ],
  interactiveType: 'custom',
};

export default aiAgentWorkflowsConcept;
