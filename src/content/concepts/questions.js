const questionsConcept = {
  id: 'questions',
  title: 'Questions',
  category: '',
  tags: ['questions', 'mcp', 'agents'],
  tabs: [
    {
      label: 'AI Agents',
      content: `
<style>
  .question-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.9rem 1.2rem;
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .question-item:hover {
    transform: translateY(-2px);
    border-color: var(--accent-primary);
    background-color: var(--surface-hover);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }
  .question-item > span {
    flex: 1;
    min-width: 0;
  }
  .question-copy-btn {
    flex-shrink: 0;
    padding: 0.35rem 0.75rem;
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    color: var(--text-secondary);
    font-size: 0.8rem;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
  }
  .question-copy-btn:hover {
    color: var(--text-primary);
    border-color: var(--accent-primary);
    background: var(--surface-color);
  }
</style>

<div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin: 0.5rem 0;">
  
  <div class="question-item">
    <span style="font-size: 1rem; color: var(--text-primary); line-height: 1.5;">How does an AI agent perceive and interact with a tool?</span>
    <button 
      class="question-copy-btn"
      onclick="(function(btn){
        var text = btn.parentElement.querySelector('span').innerText;
        navigator.clipboard.writeText(text);
        var orig = btn.innerHTML;
        btn.innerHTML = '<span style=\\'color:#15803d; font-weight:bold; margin-right:4px;\\'>✓✓</span> Copied';
        btn.style.borderColor = '#15803d';
        setTimeout(function(){ 
          btn.innerHTML = orig; 
          btn.style.borderColor = '';
        }, 1500);
      })(this)">
      Copy
    </button>
  </div>

</div>
`,
    },
    {
      label: 'MCP',
      content: `
<style>
  .question-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.9rem 1.2rem;
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .question-item:hover {
    transform: translateY(-2px);
    border-color: var(--accent-primary);
    background-color: var(--surface-hover);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }
  .question-item > span {
    flex: 1;
    min-width: 0;
  }
  .question-copy-btn {
    flex-shrink: 0;
    padding: 0.35rem 0.75rem;
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    color: var(--text-secondary);
    font-size: 0.8rem;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
  }
  .question-copy-btn:hover {
    color: var(--text-primary);
    border-color: var(--accent-primary);
    background: var(--surface-color);
  }
</style>

<div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin: 0.5rem 0;">
  
  <div class="question-item">
    <span style="font-size: 1rem; color: var(--text-primary); line-height: 1.5;">How does MCP server work alongside REST APIs?</span>
    <button 
      class="question-copy-btn"
      onclick="(function(btn){
        var text = btn.parentElement.querySelector('span').innerText;
        navigator.clipboard.writeText(text);
        var orig = btn.innerHTML;
        btn.innerHTML = '<span style=\\'color:#15803d; font-weight:bold; margin-right:4px;\\'>✓✓</span> Copied';
        btn.style.borderColor = '#15803d';
        setTimeout(function(){ 
          btn.innerHTML = orig; 
          btn.style.borderColor = '';
        }, 1500);
      })(this)">
      Copy
    </button>
  </div>

  <div class="question-item">
    <span style="font-size: 1rem; color: var(--text-primary); line-height: 1.5;">What does &quot;Skills over MCP&quot; mean in the context of AI agents?</span>
    <button 
      class="question-copy-btn"
      onclick="(function(btn){
        var text = btn.parentElement.querySelector('span').innerText;
        navigator.clipboard.writeText(text);
        var orig = btn.innerHTML;
        btn.innerHTML = '<span style=\\'color:#15803d; font-weight:bold; margin-right:4px;\\'>✓✓</span> Copied';
        btn.style.borderColor = '#15803d';
        setTimeout(function(){ 
          btn.innerHTML = orig; 
          btn.style.borderColor = '';
        }, 1500);
      })(this)">
      Copy
    </button>
  </div>

  <div class="question-item">
    <span style="font-size: 1rem; color: var(--text-primary); line-height: 1.5;">What does progressive tool discovery mean in MCP?</span>
    <button 
      class="question-copy-btn"
      onclick="(function(btn){
        var text = btn.parentElement.querySelector('span').innerText;
        navigator.clipboard.writeText(text);
        var orig = btn.innerHTML;
        btn.innerHTML = '<span style=\\'color:#15803d; font-weight:bold; margin-right:4px;\\'>✓✓</span> Copied';
        btn.style.borderColor = '#15803d';
        setTimeout(function(){ 
          btn.innerHTML = orig; 
          btn.style.borderColor = '';
        }, 1500);
      })(this)">
      Copy
    </button>
  </div>

  <div class="question-item">
    <span style="font-size: 1rem; color: var(--text-primary); line-height: 1.5;">How can MCP be used within CI/CD workflows such as GitHub Actions?</span>
    <button 
      class="question-copy-btn"
      onclick="(function(btn){
        var text = btn.parentElement.querySelector('span').innerText;
        navigator.clipboard.writeText(text);
        var orig = btn.innerHTML;
        btn.innerHTML = '<span style=\\'color:#15803d; font-weight:bold; margin-right:4px;\\'>✓✓</span> Copied';
        btn.style.borderColor = '#15803d';
        setTimeout(function(){ 
          btn.innerHTML = orig; 
          btn.style.borderColor = '';
        }, 1500);
      })(this)">
      Copy
    </button>
  </div>

  <div class="question-item">
    <span style="font-size: 1rem; color: var(--text-primary); line-height: 1.5;">How can MCP be used to build event-driven AI agents?</span>
    <button 
      class="question-copy-btn"
      onclick="(function(btn){
        var text = btn.parentElement.querySelector('span').innerText;
        navigator.clipboard.writeText(text);
        var orig = btn.innerHTML;
        btn.innerHTML = '<span style=\\'color:#15803d; font-weight:bold; margin-right:4px;\\'>✓✓</span> Copied';
        btn.style.borderColor = '#15803d';
        setTimeout(function(){ 
          btn.innerHTML = orig; 
          btn.style.borderColor = '';
        }, 1500);
      })(this)">
      Copy
    </button>
  </div>

  <div class="question-item">
    <span style="font-size: 1rem; color: var(--text-primary); line-height: 1.5;">How do you build MCP applications using FastMCP?</span>
    <button 
      class="question-copy-btn"
      onclick="(function(btn){
        var text = btn.parentElement.querySelector('span').innerText;
        navigator.clipboard.writeText(text);
        var orig = btn.innerHTML;
        btn.innerHTML = '<span style=\\'color:#15803d; font-weight:bold; margin-right:4px;\\'>✓✓</span> Copied';
        btn.style.borderColor = '#15803d';
        setTimeout(function(){ 
          btn.innerHTML = orig; 
          btn.style.borderColor = '';
        }, 1500);
      })(this)">
      Copy
    </button>
  </div>

  <div class="question-item">
    <span style="font-size: 1rem; color: var(--text-primary); line-height: 1.5;">How does authorization work in MCP using DCR and EMA?</span>
    <button 
      class="question-copy-btn"
      onclick="(function(btn){
        var text = btn.parentElement.querySelector('span').innerText;
        navigator.clipboard.writeText(text);
        var orig = btn.innerHTML;
        btn.innerHTML = '<span style=\\'color:#15803d; font-weight:bold; margin-right:4px;\\'>✓✓</span> Copied';
        btn.style.borderColor = '#15803d';
        setTimeout(function(){ 
          btn.innerHTML = orig; 
          btn.style.borderColor = '';
        }, 1500);
      })(this)">
      Copy
    </button>
  </div>

  <div class="question-item">
    <span style="font-size: 1rem; color: var(--text-primary); line-height: 1.5;">How do you build MCP servers using Visual Studio Code?</span>
    <button 
      class="question-copy-btn"
      onclick="(function(btn){
        var text = btn.parentElement.querySelector('span').innerText;
        navigator.clipboard.writeText(text);
        var orig = btn.innerHTML;
        btn.innerHTML = '<span style=\\'color:#15803d; font-weight:bold; margin-right:4px;\\'>✓✓</span> Copied';
        btn.style.borderColor = '#15803d';
        setTimeout(function(){ 
          btn.innerHTML = orig; 
          btn.style.borderColor = '';
        }, 1500);
      })(this)">
      Copy
    </button>
  </div>

</div>
`,
    },
  ],
  interactiveType: 'custom',
};

export default questionsConcept;
