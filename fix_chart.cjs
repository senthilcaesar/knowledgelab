const fs = require('fs');
let html = fs.readFileSync('public/claude-folder-flowchart.html', 'utf8');

// 1. Remove root->q1 edge from JS
html = html.replace(/\s*root:\s*\["root-q1"\],/, '');
html = html.replace(/"root-q1",?/g, ''); // remove from q1's array

// 2. Remove root->q1 edge from SVG
html = html.replace(/\s*<!-- Root → Q1 \(what are you trying to do\?\) -->\s*<path class="line" data-edge="root-q1" d="M 740 118 L 740 210"\/>/, '');

// 3. Remove ROOT node HTML
html = html.replace(/\s*<!-- ROOT -->\s*<article class="node node-root active" data-node="root"[\s\S]*?<\/article>/, '');

// 4. Transform Q1 into the new root node styling but keep data-node="q1" so JS doesn't break?
// Actually, let's keep data-node="q1" but change its classes and style.
html = html.replace(
  /<article class="node node-decision" data-node="q1" style="--accent:#4a4070; top:210px; left:600px;">\s*<button type="button" aria-pressed="false">\s*<span class="node-title">What are you trying to do\?<\/span>\s*<span class="node-subtitle">Choose a path below<\/span>\s*<\/button>\s*<\/article>/,
  `<!-- Q1 DECISION (Now ROOT) -->
      <article class="node node-root active" data-node="q1" style="--accent:#5e4a9a; top:210px; left:570px; width:340px;">
        <button type="button" aria-pressed="true">
          <span class="node-title">What are you trying to do?</span>
          <span class="node-subtitle">Choose a path below</span>
          <span class="node-meta">~/.claude/  &amp;  .claude/</span>
        </button>
      </article>`
);

// 5. Shift all heights and Y coords.
// 1320 -> 1134
html = html.replace(/1320px/g, '1134px');
html = html.replace(/1320/g, '1134');

// Group the SVG connections to shift them.
html = html.replace(/<svg class="connections" viewBox="0 0 1480 1134" preserveAspectRatio="none" aria-hidden="true">\s*<defs>/,
  '<svg class="connections" viewBox="0 0 1480 1134" preserveAspectRatio="none" aria-hidden="true">\n      <g transform="translate(0, -186)">\n      <defs>'
);
html = html.replace(/<\/svg>/, '      </g>\n    </svg>');

// Replace `top: Xpx;` in the file.
html = html.replace(/top:(\d+)px;/g, (match, p1) => {
  return `top:${parseInt(p1) - 186}px;`;
});

// Make q1 the default active node
html = html.replace(/renderDetails\("root"\);/, 'renderDetails("q1");');

fs.writeFileSync('public/claude-folder-flowchart.html', html);
console.log('Done modifying the chart!');
