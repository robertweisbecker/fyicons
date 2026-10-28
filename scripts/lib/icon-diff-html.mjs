const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ],
  );

const variants = (previews, render) =>
  Object.entries(previews)
    .map(
      ([view, images]) =>
        `<div class="view" data-view="${view}" style="--view-size:${view.split('-')[1]}px"><p class="render-label">${view.split('-')[1]} px</p>${render(images, view.split('-')[1])}</div>`,
    )
    .join('');

function sourceCell(icon, previews, side) {
  if (!icon) return '<td class="source"><p class="absent">No icon</p></td>';
  return `<td class="source">${variants(
    previews,
    (images) =>
      `<div class="canvas"><img src="${images[side]}" alt="${side === 'before' ? 'Before' : 'After'}: ${escape(icon.name)}"></div>`,
  )}<p class="source-name"><code>${escape(icon.componentName)}</code><br>${escape(icon.filename)}</p></td>`;
}

function comparisonCell(change, previews) {
  if (!change.before)
    return '<td class="comparison"><p><strong>New icon</strong><br>No previous image to compare.</p></td>';
  if (!change.after)
    return '<td class="comparison"><p><strong>Icon removed</strong><br>No new image to compare.</p></td>';
  return `<td class="comparison">${variants(previews, (images, size) => {
    if (!images.changedPixels)
      return `<p class="unchanged">No pixel change at ${size} px.</p>`;
    return `<div class="comparison-images">
      <figure><div class="canvas"><img src="${images.diff}" alt="Changed pixels for ${escape(change.after.name)}"></div><figcaption>Pixel diff</figcaption></figure>
      <figure><div class="canvas overlay" role="img" aria-label="Overlay for ${escape(change.after.name)}. Pink: before. Blue: after."><img class="old-layer" src="${images.overlayBefore}" alt=""><img class="new-layer" src="${images.overlayAfter}" alt=""></div><figcaption><span class="pink-dot" aria-hidden="true"></span>Before + <span class="blue-dot" aria-hidden="true"></span>After</figcaption></figure>
      </div><p class="pixel-count">${images.changedPixels} changed pixels at ${size} px</p>`;
  })}</td>`;
}

export function renderHtml(report, previews) {
  const rows = report.changes
    .map((change, index) => {
      const { before, after } = change;
      const name = after?.name ?? before.name;
      const search = [
        name,
        before?.name,
        before?.componentName,
        after?.componentName,
        ...change.identity,
      ]
        .join(' ')
        .toLowerCase();
      return `<tr data-search="${escape(search)}" data-flags="${change.flags.map(escape).join(' ')}">
      <th scope="row"><h2>${escape(name)}</h2><p class="flags">${change.flags.map((flag) => `<span>${escape(flag)}</span>`).join(' ')}</p>
      <details><summary>Source details</summary><pre>${escape(JSON.stringify(change, null, 2))}</pre></details></th>
      ${sourceCell(before, previews[index], 'before')}${sourceCell(after, previews[index], 'after')}${comparisonCell(change, previews[index])}
    </tr>`;
    })
    .join('\n');
  const flags = [
    ...new Set(report.changes.flatMap((change) => change.flags)),
  ].sort();
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>FYIcons — Icon changes</title>
<style>
  *{box-sizing:border-box}
  :root{--render-size:64px;--zoom:2;--preview-size:calc(var(--render-size)*var(--zoom));--column-size:max(180px,calc(var(--preview-size) + 48px));--old-opacity:.5;--new-opacity:.5}
  body{font:15px/1.5 system-ui,sans-serif;margin:0;color:#202020;background:#f4f4f2;-webkit-font-smoothing:antialiased}
  header,main{padding:24px 32px}header{padding-bottom:0}main{padding-top:12px}
  h1{font-size:30px;letter-spacing:-.04em;margin:0}h2{font-size:15px;line-height:1.4;margin:0;overflow-wrap:anywhere}
  p{margin:8px 0}code,pre{font:12px/1.6 ui-monospace,monospace;overflow-wrap:anywhere}
  .revisions{overflow-wrap:anywhere;color:#666;font-size:12px}.summary{font-variant-numeric:tabular-nums}
  .controls{display:flex;gap:12px 20px;flex-wrap:wrap;align-items:end;margin:20px 0 12px}
  .control{display:flex;flex-direction:column;gap:4px}.control label{font-size:12px;font-weight:600}
  input,select{font:16px/1.4 system-ui,sans-serif;background:white;border:1px solid #bbb;border-radius:6px;padding:8px;max-width:100%;min-width:0;min-height:44px;touch-action:manipulation}
  input[type=search]{width:260px}input[type=range]{width:160px;margin:0;padding:0;border:0;background:none;accent-color:#555}
  .range{display:flex;gap:8px;align-items:center}.range output{font-variant-numeric:tabular-nums;min-width:4ch;font-size:12px}
  :focus-visible{outline:3px solid #555;outline-offset:3px}
  .legend{display:flex;flex-wrap:wrap;gap:8px 24px;font-size:12px;color:#555}.legend p{margin:0}
  .pink-dot,.blue-dot{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:4px}.pink-dot{background:#e03781}.blue-dot{background:#0079d7}
  .notice{border-left:3px solid #777;padding-left:12px;font-size:13px}.help{color:#666;font-size:12px}
  .table-scroll{overflow:auto;max-height:75vh;min-height:260px;border:1px solid #d4d4d4;border-radius:10px;background:white;overscroll-behavior:contain}
  table{width:100%;min-width:calc(220px + var(--column-size)*4);table-layout:fixed;border-spacing:0}
  col.icon-column{width:220px}col.source-column{width:var(--column-size)}col.comparison-column{width:calc(var(--column-size)*2)}
  th,td{padding:20px 24px;vertical-align:top;text-align:left;border-bottom:1px solid #e3e3e3}
  thead th{position:sticky;top:0;z-index:3;background:#f8f8f7;padding:12px 24px;font-size:13px;box-shadow:0 1px 0 #d4d4d4}
  tbody th{position:sticky;left:0;z-index:1;background:white;font-weight:400;border-right:1px solid #eee}
  thead th:first-child{left:0;z-index:4}tbody tr:last-child>*{border-bottom:0}tr[hidden]{display:none}
  .flags{display:flex;gap:4px;flex-wrap:wrap}.flags span{font-size:10px;color:#555;background:#f1f1ef;border-radius:3px;padding:2px 5px}
  .canvas{position:relative;width:var(--preview-size);height:var(--preview-size);flex-shrink:0;background:var(--canvas,#fff);outline:1px solid #e5e5e5}
  .canvas img{display:block;width:100%;height:100%;image-rendering:pixelated}
  body[data-theme=dark]{--canvas:#171717}.overlay img{position:absolute;inset:0}.old-layer{opacity:var(--old-opacity)}.new-layer{opacity:var(--new-opacity)}
  .source-name{font-size:11px;color:#666;overflow-wrap:anywhere;margin-top:12px}.absent,.unchanged{font-size:13px;color:#777}
  .comparison-images{display:flex;gap:48px}figure{margin:0}figcaption{font-size:11px;color:#666;margin-top:8px}.pixel-count{font-size:12px;color:#666;margin-top:12px;font-variant-numeric:tabular-nums}
  .view{display:none;--preview-size:calc(var(--view-size)*var(--zoom));min-height:calc(var(--preview-size) + 104px);padding-bottom:24px}
  .render-label{font-size:11px;line-height:16px;color:#666;margin:0 0 8px}
  .view .pixel-count{margin:12px 0 0}
  ${['light-16', 'light-64', 'dark-16', 'dark-64'].map((view) => `body[data-view="${view}"] .view[data-view="${view}"],body[data-view="${view.split('-')[0]}-both"] .view[data-view="${view}"]{display:block}`).join('\n  ')}
  details{margin-top:12px}summary{cursor:pointer;font-size:12px;min-height:44px;padding-top:12px}pre{white-space:pre-wrap;max-height:300px;overflow:auto;font-weight:400}
  .empty{padding:24px;color:#666}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}
  @media(max-width:760px){header,main{padding:16px}header{padding-bottom:0}.controls{gap:12px}.control{max-width:100%}input[type=search]{width:min(260px,100%)}tbody th{position:static}thead th:first-child{left:auto}.table-scroll{max-height:70vh}h1{font-size:26px}}
</style></head>
<body data-theme="light" data-view="light-both"><header>
  <h1>Icon changes</h1><p class="revisions">${escape(report.base)} → ${escape(report.head)}</p>
  <p class="summary">${report.totals.before} icons before · ${report.totals.after} icons after · ${report.totals.changed} icons with changes</p>
  <p class="help">Pixel checks use source SVG files with foreground colors set for the preview theme. They do not compare generated React components.</p>
  ${report.reactGeneratorChanged ? '<p class="notice">The React generator changed. Do the package tests.</p>' : ''}
  ${report.categoriesChanged ? '<p class="notice">Category rules changed.</p>' : ''}
  ${report.collectionChanged ? '<p class="notice">Collection metadata changed. Read changes.json.</p>' : ''}
  <div class="controls">
    <div class="control"><label for="search">Search</label><input type="search" id="search" placeholder="Name, export, or source ID"></div>
    <div class="control"><label for="filter">Change</label><select id="filter"><option value="">All changes</option>${flags.map((flag) => `<option>${escape(flag)}</option>`).join('')}</select></div>
    <div class="control"><label for="theme">Background</label><select id="theme"><option value="light">Light</option><option value="dark">Dark</option></select></div>
    <div class="control"><label for="size">Render size</label><select id="size"><option value="both" selected>16 px and 64 px</option><option value="16">16 px</option><option value="64">64 px</option></select></div>
    <div class="control"><label for="zoom">Zoom</label><select id="zoom"><option value="1">1×</option><option value="2" selected>2×</option><option value="4">4×</option><option value="8">8×</option></select></div>
    <div class="control"><label for="before-opacity"><span class="pink-dot" aria-hidden="true"></span>Before opacity</label><div class="range"><input type="range" id="before-opacity" min="0" max="100" value="50" aria-valuetext="50%"><output for="before-opacity" aria-hidden="true">50%</output></div></div>
    <div class="control"><label for="after-opacity"><span class="blue-dot" aria-hidden="true"></span>After opacity</label><div class="range"><input type="range" id="after-opacity" min="0" max="100" value="50" aria-valuetext="50%"><output for="after-opacity" aria-hidden="true">50%</output></div></div>
  </div>
  <div class="legend"><p><strong>Overlay:</strong> <span class="pink-dot" aria-hidden="true"></span>Pink = before. <span class="blue-dot" aria-hidden="true"></span>Blue = after.</p><p><strong>Pixel diff:</strong> Red = more color before. Green = other pixel changes.</p></div>
  <p class="help">Use the opacity controls to separate the layers. Added and removed icons have no pixel comparison.</p>
  <p id="count" role="status">${report.totals.changed} icons shown</p>
</header><main>
  <p id="scroll-help" class="help">Scroll the table to see all columns and icons. Focus the table and use the arrow keys to scroll.</p>
  <div class="table-scroll" tabindex="0" role="region" aria-label="Icon comparison table" aria-describedby="scroll-help">
    <table><caption class="sr-only">One row per icon. Before, After, and Changes.</caption>
      <colgroup><col class="icon-column"><col class="source-column"><col class="source-column"><col class="comparison-column"></colgroup>
      <thead><tr><th scope="col">Icon</th><th scope="col">Before</th><th scope="col">After</th><th scope="col">Changes</th></tr></thead><tbody>${rows}</tbody>
    </table><p id="empty" class="empty"${report.changes.length ? ' hidden' : ''}>No matching icons.</p>
  </div>
</main><script>
  const search=document.querySelector('#search'),filter=document.querySelector('#filter'),rows=[...document.querySelectorAll('tbody tr')];
  function update(){let count=0;for(const row of rows){row.hidden=!(row.dataset.search.includes(search.value.toLowerCase())&&(!filter.value||row.dataset.flags.split(' ').includes(filter.value)));if(!row.hidden)count++}document.querySelector('#count').textContent=count+' icons shown';document.querySelector('#empty').hidden=count!==0}
  search.addEventListener('input',update);filter.addEventListener('change',update);
  const theme=document.querySelector('#theme'),size=document.querySelector('#size'),zoom=document.querySelector('#zoom');
  function updateView(){document.body.dataset.theme=theme.value;document.body.dataset.view=theme.value+'-'+size.value;document.documentElement.style.setProperty('--render-size',(size.value==='both'?'64':size.value)+'px');document.documentElement.style.setProperty('--zoom',zoom.value)}
  for(const control of [theme,size,zoom])control.addEventListener('change',updateView);
  for(const [id,property] of [['before-opacity','--old-opacity'],['after-opacity','--new-opacity']]){const control=document.getElementById(id);control.addEventListener('input',()=>{document.documentElement.style.setProperty(property,control.value/100);control.setAttribute('aria-valuetext',control.value+'%');document.querySelector('output[for="'+id+'"]').value=control.value+'%'})}
</script></body></html>\n`;
}
