export const commentMarker = '<!-- fyicons-icon-preview -->';
export const previewBranch = 'codex/icon-previews';

const sha = /^[a-f0-9]{40}$/;
const component = /^[A-Za-z_$][A-Za-z0-9_$]{0,199}$/;
const flags = new Set([
  'added',
  'removed',
  'renamed',
  'export-changed',
  'file-renamed',
  'svg-bytes-changed',
  'metadata-changed',
  'name-reassigned',
  'export-reassigned',
  'pixels-changed',
]);

export function validatePreview(report) {
  if (
    !sha.test(report.base) ||
    !sha.test(report.head) ||
    !Array.isArray(report.changes)
  )
    throw new Error('Invalid preview revisions or changes.');
  if (report.changes.length > 5000) throw new Error('Too many preview images.');
  const seen = new Set();
  for (const change of report.changes) {
    if (
      ![change.before, change.after].every(
        (name) => name === null || component.test(name),
      ) ||
      (!change.before && !change.after) ||
      !/^\d{4}\.png$/.test(change.image) ||
      seen.has(change.image) ||
      !Array.isArray(change.flags) ||
      change.flags.some((flag) => !flags.has(flag)) ||
      (change.overlay !== undefined && typeof change.overlay !== 'boolean') ||
      (change.overlay &&
        (!change.before ||
          !change.after ||
          !change.flags.includes('pixels-changed')))
    )
      throw new Error('Invalid preview entry.');
    seen.add(change.image);
  }
  return report;
}

const groups = [
  ['added', 'Added'],
  ['changed', 'Updated artwork'],
  ['renamed', 'Renamed'],
  ['removed', 'Removed'],
  ['metadata', 'Metadata only'],
];
function group(change) {
  if (!change.before) return 'added';
  if (!change.after) return 'removed';
  if (change.flags.includes('pixels-changed')) return 'changed';
  if (change.before !== change.after) return 'renamed';
  return 'metadata';
}

export function getPreviewCommentMarker(body) {
  return (
    /^<!-- fyicons-icon-preview(?::(?:added|changed|renamed|removed|metadata)-[1-9]\d*)? -->(?=\n|$)/.exec(
      body,
    )?.[0] ?? null
  );
}

export function renderPreviewComments(
  report,
  { repository, number, imageCommit, runUrl },
) {
  validatePreview(report);
  if (
    !/^[\w.-]+\/[\w.-]+$/.test(repository) ||
    !Number.isSafeInteger(number) ||
    number < 1 ||
    !sha.test(imageCommit)
  )
    throw new Error('Invalid preview destination.');
  if (
    runUrl &&
    !new RegExp(
      `^https://github\\.com/${repository.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/actions/runs/\\d+$`,
    ).test(runUrl)
  )
    throw new Error('Invalid workflow URL.');

  const comparison = `\`${report.base.slice(0, 7)}\` → \`${report.head.slice(0, 7)}\``;
  const links =
    `[Images](https://github.com/${repository}/tree/${imageCommit}/pr-${number})` +
    (runUrl ? ` · [Run](${runUrl})` : '');
  const comments = [
    {
      marker: commentMarker,
      body: `${commentMarker}\n## Icon changes (${report.changes.length})\n\n${comparison} · ${links}\n`,
    },
  ];

  for (const [key, label] of groups) {
    const changes = report.changes.filter((change) => group(change) === key);
    if (!changes.length) continue;
    const showImages = key === 'added' || key === 'changed';
    const pages = [];
    let rows = [],
      length = 0;
    for (const change of changes) {
      const name =
        change.before && change.after && change.before !== change.after
          ? `\`${change.before}\` → \`${change.after}\``
          : `\`${change.after ?? change.before}\``;
      const url = `https://raw.githubusercontent.com/${repository}/${imageCommit}/pr-${number}/${change.image}`;
      const row = showImages
        ? `| ${name}<br>![${change.overlay ? 'Overlay and before/after at 16 and 64 px' : 'Before/after at 16 and 64 px'}](${url}) |`
        : `- ${name}`;
      // Reserve room for labels and links below GitHub's 65,536-character limit.
      if (length + row.length + 1 > 50000) {
        pages.push(rows);
        rows = [];
        length = 0;
      }
      rows.push(row);
      length += row.length + 1;
    }
    pages.push(rows);
    for (const [index, page] of pages.entries()) {
      const marker = `<!-- fyicons-icon-preview:${key}-${index + 1} -->`;
      const title = `${label} (${changes.length})${pages.length > 1 ? ` · ${index + 1}/${pages.length}` : ''}`;
      const table = showImages ? '| Preview |\n| --- |\n' : '';
      comments.push({
        marker,
        body: `${marker}\n<details>\n<summary>${title}</summary>\n\n${table}${page.join('\n')}\n\n</details>\n`,
      });
    }
  }
  if (comments.some(({ body }) => body.length > 65000))
    throw new Error('Preview exceeds the GitHub comment limit.');
  return comments;
}
