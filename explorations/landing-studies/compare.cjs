// Extract matching concepts from comparison icon sets into compare.json.
// Packages are unpacked under .cache/ (npm pack <name>; tar -xzf). Run:
//   node explorations/landing-studies/compare.cjs
const fs = require('fs');
const path = require('path');
const CACHE = path.join(__dirname, '.cache');
const dir = (prefix) => {
  const d = fs.readdirSync(CACHE).find((n) => n.startsWith(prefix) && !n.endsWith('.tgz'));
  return { root: path.join(CACHE, d, 'package'), version: d.slice(prefix.length + 1) };
};
const lucide = dir('lucide-static');
const phosphor = dir('phosphor-icons-core');
const remix = dir('remixicon');
const fa = dir('fortawesome-fontawesome-free');
const huge = dir('hugeicons-core-free-icons');

const libs = [
  { id: 'lucide', name: 'Lucide', version: lucide.version, license: 'ISC' },
  { id: 'phosphor', name: 'Phosphor', version: phosphor.version, license: 'MIT', note: 'Regular weight' },
  { id: 'remix', name: 'Remix Icon', version: remix.version, license: 'Apache-2.0' },
  { id: 'huge', name: 'Hugeicons', version: huge.version, license: 'MIT (free set)' },
  { id: 'fa', name: 'Font Awesome', version: fa.version, license: 'CC BY 4.0 (free icons)', note: 'Free set; regular style where the free set has one, solid otherwise' },
];

// [concept, kind, fy, lucide, phosphor, remix, huge, fa]
const concepts = [
  ['arrow-right', 'utility', 'arrow-right', 'arrow-right', 'arrow-right', 'Arrows/arrow-right-line', 'ArrowRight02Icon', 'solid/arrow-right'],
  ['chevron', 'utility', 'chevron-down', 'chevron-down', 'caret-down', 'Arrows/arrow-down-s-line', 'ArrowDown01Icon', 'solid/chevron-down'],
  ['close', 'utility', 'x', 'x', 'x', 'System/close-line', 'Cancel01Icon', 'solid/xmark'],
  ['check', 'utility', 'check', 'check', 'check', 'System/check-line', 'Tick02Icon', 'solid/check'],
  ['add', 'utility', 'plus', 'plus', 'plus', 'System/add-line', 'Add01Icon', 'solid/plus'],
  ['search', 'utility', 'search', 'search', 'magnifying-glass', 'System/search-line', 'Search01Icon', 'solid/magnifying-glass'],
  ['settings', 'utility', 'settings', 'settings', 'gear', 'System/settings-3-line', 'Settings01Icon', 'solid/gear'],
  ['bell', 'utility', 'bell', 'bell', 'bell', 'Media/notification-3-line', 'Notification01Icon', 'regular/bell'],
  ['play', 'utility', 'play-fill', 'play', 'play', 'Media/play-fill', 'PlayIcon', 'solid/play'],
  ['lock', 'utility', 'lock', 'lock', 'lock', 'System/lock-line', 'SquareLock01Icon', 'solid/lock'],
  ['folder', 'utility', 'folder', 'folder', 'folder', 'Document/folder-line', 'Folder01Icon', 'regular/folder'],
  ['calendar', 'utility', 'calendar', 'calendar', 'calendar-blank', 'Business/calendar-line', 'Calendar01Icon', 'regular/calendar'],
  ['trash', 'utility', 'trash', 'trash-2', 'trash', 'System/delete-bin-line', 'Delete02Icon', 'regular/trash-can'],
  ['download', 'utility', 'download', 'download', 'download-simple', 'System/download-line', 'Download01Icon', 'solid/download'],
  ['cat', 'personality', 'cat-face', 'cat', 'cat', null, 'CatIcon', 'solid/cat'],
  ['ghost', 'personality', 'ghost', 'ghost', 'ghost', 'User & Faces/ghost-line', 'GhostIcon', 'solid/ghost'],
  ['skull', 'personality', 'skull', 'skull', 'skull', 'User & Faces/skull-line', 'SkullIcon', 'solid/skull'],
  ['robot', 'personality', 'agent-clank', 'bot', 'robot', 'User & Faces/robot-2-line', 'Robot01Icon', 'solid/robot'],
  ['fish', 'personality', 'fish', 'fish', 'fish', null, 'FishIcon', 'solid/fish'],
  ['penguin', 'personality', 'penguin', null, null, null, null, null],
];

function parseSvg(text) {
  const m = text.match(/<svg([^>]*)>([\s\S]*?)<\/svg>/);
  const attrs = {};
  for (const [, k, v] of m[1].matchAll(/([\w:-]+)="([^"]*)"/g)) attrs[k] = v;
  return { attrs, inner: m[2].replace(/<!--[\s\S]*?-->/g, '').trim() };
}
const keep = ['fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin'];
function symbol(id, viewBox, rootAttrs, inner) {
  const g = keep.filter((k) => rootAttrs[k] != null).map((k) => `${k}="${rootAttrs[k]}"`).join(' ');
  return `<symbol id="${id}" viewBox="${viewBox}"><g ${g}>${inner}</g></symbol>`;
}
function squareViewBox(vb) {
  const [x, y, w, h] = vb.split(/\s+/).map(Number);
  const s = Math.max(w, h);
  return `${x - (s - w) / 2} ${y - (s - h) / 2} ${s} ${s}`;
}
const load = {
  lucide: (n) => { const s = parseSvg(fs.readFileSync(path.join(lucide.root, 'icons', n + '.svg'), 'utf8')); return [s.attrs.viewBox, s.attrs, s.inner]; },
  phosphor: (n) => { const s = parseSvg(fs.readFileSync(path.join(phosphor.root, 'assets/regular', n + '.svg'), 'utf8')); return [s.attrs.viewBox, { fill: 'currentColor', ...s.attrs }, s.inner]; },
  remix: (n) => { const s = parseSvg(fs.readFileSync(path.join(remix.root, 'icons', n + '.svg'), 'utf8')); return [s.attrs.viewBox, { fill: 'currentColor' }, s.inner]; },
  fa: (n) => { const s = parseSvg(fs.readFileSync(path.join(fa.root, 'svgs', n + '.svg'), 'utf8')); return [squareViewBox(s.attrs.viewBox), { fill: 'currentColor' }, s.inner.replace(/fill="[^"]*"/g, '')]; },
  huge: (n) => {
    const nodes = require(path.join(huge.root, 'dist/cjs', n + '.js'));
    const inner = nodes.map(([tag, a]) => `<${tag} ${Object.entries(a).filter(([k]) => k !== 'key').map(([k, v]) => `${k.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())}="${v}"`).join(' ')}/>`).join('');
    return ['0 0 24 24', { fill: 'none' }, inner];
  },
};
const symbols = [];
const out = concepts.map(([id, kind, fy, ...names]) => {
  const icons = {};
  libs.forEach((lib, k) => {
    const n = names[k];
    if (!n) { icons[lib.id] = null; return; }
    const [vb, attrs, inner] = load[lib.id](n);
    const sid = `c-${lib.id}-${id}`;
    symbols.push(symbol(sid, vb, attrs, inner));
    icons[lib.id] = n;
  });
  return { id, kind, fy, icons };
});
fs.writeFileSync(path.join(__dirname, 'compare.json'), JSON.stringify({ libs, concepts: out, symbols: symbols.join('') }));
console.log(`${out.length} concepts, ${symbols.length} symbols`);
