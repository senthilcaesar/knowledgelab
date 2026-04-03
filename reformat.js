const fs = require('fs');
let html = fs.readFileSync('public/claude-folder-flowchart.html', 'utf8');

// Mapping of nodes to their new coordinates
const nodes = {
  "q1": { left: 780, top: 40, width: 340 }, // Root. Wait, if width 340, center is 780+170 = 950. Let center be 950.

  // Row 2: top: 200, height: 80
  "instructions": { left: 80, top: 200, width: 340 },   // Branch 1 (center: 250)
  "permissions":  { left: 660, top: 200, width: 340 },  // Branch 2 (center: 830)
  "shortcuts":    { left: 1040, top: 200, width: 340 }, // Branch 3 (center: 1210)
  "organise":     { left: 1420, top: 200, width: 340 }, // Branch 4 (center: 1590)

  // Row 3: top: 420.
  "q2-inst":      { left: 110, top: 420, width: 280 }, // Under instructions
  "global-claudemd": { left: 40, top: 640, width: 300 }, // Under Q2 Left
  "q3-private":   { left: 380, top: 640, width: 280 }, // Under Q2 Right
  "local-claudemd": { left: 210, top: 860, width: 290 }, // Under Q3 Left
  "project-claudemd": { left: 540, top: 860, width: 290 }, // Under Q3 Right

  // Permissions branch
  "q4-perm":      { left: 690, top: 420, width: 280 },
  "global-settings": { left: 510, top: 640, width: 300 },
  "project-settings":{ left: 850, top: 640, width: 300 },

  // Shortcuts branch
  "commands-folder": { left: 1060, top: 420, width: 300 },
  "q5-args-q":    { left: 1070, top: 640, width: 280 },
  "with-args":    { left: 910, top: 860, width: 290 },
  "plain-command":{ left: 1240, top: 860, width: 290 },

  // Organise branch
  "rules-folder": { left: 1440, top: 420, width: 300 },
  "q6-scope":     { left: 1450, top: 640, width: 280 },
  "scoped-rules": { left: 1290, top: 860, width: 290 },
  "always-rules": { left: 1620, top: 860, width: 160 }
};

// Replace node styles directly in HTML
for (const [id, coord] of Object.entries(nodes)) {
  const regex = new RegExp(`(<article[^>]*data-node="${id}"[^>]*style=")([^"]*)(")`, 'g');
  html = html.replace(regex, (match, p1, p2, p3) => {
    // p2 contains things like "--accent:#0a5a5a; top:574px; left:20px; width:300px;"
    // We remove top, left, width and add our own.
    let styles = p2.replace(/top:\s*\d+px;?/g, '')
                   .replace(/left:\s*\d+px;?/g, '')
                   .replace(/width:\s*\d+px;?/g, '')
                   .trim();
    if (!styles.endsWith(';') && styles.length > 0) styles += ';';
    return `${p1}${styles} top:${coord.top}px; left:${coord.left}px; width:${coord.width}px;${p3}`;
  });
}

// Generate edges
const rootTop = 40, rootHeight = 94, rootLeft = 780, rootWidth = 340;
const rootCenterX = rootLeft + rootWidth / 2;
const rootBottomY = rootTop + rootHeight;

// Function to generate bezier curve
function bezi(startX, startY, targetX, targetY) {
  const gap = (targetY - startY) * 0.4;
  return `M ${startX} ${startY} C ${startX} ${startY + gap}, ${targetX} ${targetY - gap}, ${targetX} ${targetY}`;
}

const edges = {
  "q1-instructions": { src: "q1", dst: "instructions" },
  "q1-permissions":  { src: "q1", dst: "permissions" },
  "q1-shortcuts":    { src: "q1", dst: "shortcuts" },
  "q1-organise":     { src: "q1", dst: "organise" },

  "inst-q2":         { src: "instructions", dst: "q2-inst" },
  "q2-global-inst":  { src: "q2-inst", dst: "global-claudemd" },
  "q2-q3":           { src: "q2-inst", dst: "q3-private" },
  "q3-local":        { src: "q3-private", dst: "local-claudemd" },
  "q3-project-claudemd":{ src: "q3-private", dst: "project-claudemd" },

  "perm-q4":         { src: "permissions", dst: "q4-perm" },
  "q4-global-settings":{ src: "q4-perm", dst: "global-settings" },
  "q4-project-settings":{ src: "q4-perm", dst: "project-settings" },

  "shortcuts-commands":{ src: "shortcuts", dst: "commands-folder" },
  "commands-q5":     { src: "commands-folder", dst: "q5-args-q" },
  "q5-args":         { src: "q5-args-q", dst: "with-args" },
  "q5-plain":        { src: "q5-args-q", dst: "plain-command" },

  "organise-rules":  { src: "organise", dst: "rules-folder" },
  "rules-q6":        { src: "rules-folder", dst: "q6-scope" },
  "q6-scoped":       { src: "q6-scope", dst: "scoped-rules" },
  "q6-always":       { src: "q6-scope", dst: "always-rules" }
};

for (const [edgeId, info] of Object.entries(edges)) {
  const src = nodes[info.src];
  const dst = nodes[info.dst];
  if (!src || !dst) continue;
  
  const srcHeight = info.src === "q1" ? 100 : html.match(new RegExp(`data-node="${info.src}".*?node-decision`)) ? 45 : 85; 
  // accurate enough heights!
  
  const startX = src.left + src.width / 2;
  const startY = src.top + srcHeight;
  const targetX = dst.left + dst.width / 2;
  const targetY = dst.top;
  
  const pathData = bezi(startX, startY, targetX, targetY);
  const regex = new RegExp(`(<path[^>]*data-edge="${edgeId}"[^>]*d=")([^"]*)(")`, 'g');
  html = html.replace(regex, `$1${pathData}$3`);
}

// Remove empty data-edge="" (leftover from deleted root)
html = html.replace(/<path class="line" data-edge=.*?d=".*?"\/>/g, '');

// Wait, the viewBox!
// Change to width 1900, height 1134.
html = html.replace(/1480px/g, '2000px');
html = html.replace(/1480/g, '2000'); // viewBox width

// Remove <g transform="..."> from SVG
html = html.replace(/<g transform="translate\(0, -186\)">/g, '');
html = html.replace(/<\/g>\s*<\/svg>/g, '</svg>');

fs.writeFileSync('public/claude-folder-flowchart.html', html);
console.log('Successfully spaced out nodes and regenerated bezier curves!');
