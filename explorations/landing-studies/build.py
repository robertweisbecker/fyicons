#!/usr/bin/env python3
"""Build landing-studies.html from the repository icons, categories, and fonts.

Run from the repository root:  python3 explorations/landing-studies/build.py
Each template becomes one self-contained HTML file next to this script.
Run compare.cjs first to refresh compare.json for the second page.
"""
import base64
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent

manifest = json.loads((ROOT / 'icons/manifest.json').read_text())
config = json.loads((ROOT / 'apps/site/public/icon-categories.json').read_text())
summary = json.loads((ROOT / 'apps/site/src/data/catalog-summary.json').read_text())


def norm(value):
    return re.sub(r'^-|-$', '', re.sub(r'[^a-z0-9]+', '-', value.lower()))


# Mirror apps/site/src/lib/icon-categories.ts categorizeIcons().
rules = [
    (c['id'], [f"-{norm(k)}-" for k in c['keywords']], {norm(n) for n in c.get('exactNames', [])})
    for c in config['categories']
]

icons = []
symbols = []
id_re = re.compile(r'\bid="([^"]+)"')
for entry in manifest['icons']:
    name = entry['name']
    svg = (ROOT / 'icons' / entry['filename']).read_text()
    inner = re.sub(r'^<svg[^>]*>|</svg>\s*$', '', svg.strip())
    # Prefix definition IDs so mask and clip references stay unique in one sprite.
    ids = id_re.findall(inner)
    for old in ids:
        new = f"{name}__{old}"
        inner = inner.replace(f'id="{old}"', f'id="{new}"')
        inner = inner.replace(f'url(#{old})', f'url(#{new})')
        inner = inner.replace(f'href="#{old}"', f'href="#{new}"')
    # Keep the root fill="none": open stroked paths rely on it instead of the default black fill.
    symbols.append(f'<symbol id="i-{name}" viewBox="0 0 16 16"><g fill="none">{inner}</g></symbol>')
    n = norm(name)
    cats = [cid for cid, kws, exact in rules if n in exact or any(k in f"-{n}-" for k in kws)]
    icons.append({
        'n': name,
        'c': cats,
        'f': entry.get('variantProperties', {}).get('fill') == 'true',
        'b': entry.get('baseName', name),
    })

data = {
    'count': summary['count'],
    'version': summary['version'],
    'icons': icons,
    'categories': [{'id': c['id'], 'name': c['name'], 'icon': c['icon']} for c in config['categories']],
}

fonts_dir = ROOT / 'apps/site/src/assets/fonts'


def font(path):
    return 'data:font/woff2;base64,' + base64.b64encode((fonts_dir / path).read_bytes()).decode()


compare_path = HERE / 'compare.json'
compare = json.loads(compare_path.read_text()) if compare_path.exists() else {'libs': [], 'concepts': [], 'symbols': ''}
sprite = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' + ''.join(symbols) + '</svg>'
csprite = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' + compare['symbols'] + '</svg>'
compare_data = {'libs': compare['libs'], 'concepts': compare['concepts']}

for src, dst in [('template.html', 'landing-studies.html'), ('template-2.html', 'landing-studies-2.html')]:
    if not (HERE / src).exists():
        continue
    out = (
        (HERE / src).read_text()
        .replace('/*FONT_ALLO*/', font('AlloVariable.woff2'))
        .replace('/*FONT_MONO*/', font('PaperMono-Variable.woff2'))
        .replace('<!--SPRITE-->', sprite)
        .replace('<!--CSPRITE-->', csprite)
        .replace('/*DATA*/', json.dumps(data, separators=(',', ':')))
        .replace('/*COMPARE*/', json.dumps(compare_data, separators=(',', ':')))
    )
    (HERE / dst).write_text(out)
    print(f"{len(icons)} icons, {len(out) / 1e6:.2f} MB -> {HERE / dst}")
