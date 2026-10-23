import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import {
  readSnapshot,
  compareSnapshots,
  renderMarkdown,
} from './lib/icon-diff.mjs';
import { compareImages } from './lib/icon-diff-images.mjs';
import { renderHtml } from './lib/icon-diff-html.mjs';

const { values } = parseArgs({
  options: {
    base: { type: 'string' },
    head: { type: 'string', default: 'HEAD' },
    output: { type: 'string', default: 'artifacts/icon-diff' },
  },
});
if (!values.base)
  throw new Error(
    'Supply --base <commit-or-tag>, or --base empty for the first release.',
  );
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const before = readSnapshot(root, values.base),
  after = readSnapshot(root, values.head);
const report = compareSnapshots(before, after);
const old = new Map(before.icons.map((icon) => [icon.id, icon]));
const next = new Map(after.icons.map((icon) => [icon.id, icon]));
const previews = report.changes.map((change) => {
  const images = compareImages(
    change.before && old.get(change.before.id).svg,
    change.after && next.get(change.after.id).svg,
  );
  change.pixels =
    change.before && change.after
      ? Object.fromEntries(
          Object.entries(images).map(([view, image]) => [
            view,
            image.changedPixels,
          ]),
        )
      : null;
  if (change.pixels && Object.values(change.pixels).some(Boolean))
    change.flags.push('pixels-changed');
  return images;
});
report.renderer = {
  name: '@resvg/resvg-js',
  version: '2.6.2',
  sizes: [16, 64],
  source: 'original SVG bytes',
  systemFonts: false,
};
const output = path.resolve(root, values.output);
await mkdir(output, { recursive: true });
await writeFile(
  path.join(output, 'changes.json'),
  JSON.stringify(report, null, 2) + '\n',
);
await writeFile(path.join(output, 'summary.md'), renderMarkdown(report));
await writeFile(path.join(output, 'index.html'), renderHtml(report, previews));
console.log(
  `Compared ${report.base} → ${report.head}: ${report.totals.changed} icons with changes. See ${output}/index.html.`,
);
