import { readFile, writeFile } from 'node:fs/promises';
import { parseArgs } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { values } = parseArgs({
  options: {
    report: { type: 'string', default: 'artifacts/icon-diff/changes.json' },
    output: { type: 'string' },
  },
});
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const report = JSON.parse(
  await readFile(path.resolve(root, values.report), 'utf8'),
);
if (
  report.schemaVersion !== 1 ||
  !/^[a-f0-9]{40}$/.test(report.head) ||
  !(report.base === 'empty' || /^[a-f0-9]{40}$/.test(report.base))
)
  throw new Error('Expected a fixed-revision icon report.');
if (
  !report.changes.length &&
  !report.categoriesChanged &&
  !report.collectionChanged &&
  !report.reactGeneratorChanged
)
  throw new Error('The report has no changes.');
const count = (flag) =>
  report.changes.filter((change) => change.flags.includes(flag)).length;
const minorChange = report.changes.some((change) =>
  change.flags.some((flag) =>
    [
      'added',
      'removed',
      'renamed',
      'export-changed',
      'file-renamed',
      'name-reassigned',
      'export-reassigned',
    ].includes(flag),
  ),
);
const lines = [
  '---',
  `"fyicons": ${minorChange ? 'minor' : 'patch'}`,
  '---',
  '',
  'Update the icon collection.',
  '',
];
for (const [flag, verb] of [
  ['added', 'Add'],
  ['removed', 'Remove'],
  ['svg-bytes-changed', 'Change the SVG source for'],
])
  if (count(flag)) lines.push(`- ${verb} ${count(flag)} icons.`);
if (report.categoriesChanged) lines.push('- Change the category rules.');
if (report.reactGeneratorChanged)
  lines.push('- Change the React component generator.');
for (const change of report.changes) {
  if (change.flags.includes('export-changed'))
    lines.push(
      `- Replace \`${change.before.componentName}\` imports with \`${change.after.componentName}\`.`,
    );
  if (change.flags.includes('removed'))
    lines.push(
      `- Remove \`${change.before.componentName}\` imports. This icon is no longer available.`,
    );
  if (
    change.flags.includes('name-reassigned') ||
    change.flags.includes('export-reassigned')
  )
    lines.push(
      `- The \`${change.after.componentName}\` name now refers to a different source icon. Review its use in your application.`,
    );
}
lines.push('', `Source comparison: ${report.base} to ${report.head}.`, '');
const output = values.output
  ? path.resolve(root, values.output)
  : path.join(
      root,
      '.changeset',
      `icons-${report.base.slice(0, 12)}-${report.head.slice(0, 12)}.md`,
    );
await writeFile(output, lines.join('\n'), { flag: 'wx' });
console.log(
  `Created ${output}. Review the wording and migration steps before versioning.`,
);
