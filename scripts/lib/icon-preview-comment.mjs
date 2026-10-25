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

const groups = ['Added', 'Changed', 'Renamed', 'Removed', 'Metadata only'];
function group(change) {
  if (!change.before) return 'Added';
  if (!change.after) return 'Removed';
  if (change.flags.includes('pixels-changed')) return 'Changed';
  if (change.before !== change.after) return 'Renamed';
  return 'Metadata only';
}

export function renderPreviewComment(
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
  const header =
    `${commentMarker}\n## Icon changes\n\n` +
    `Compared \`${report.base.slice(0, 7)}\` → \`${report.head.slice(0, 7)}\`. **${report.changes.length} icons with changes.**\n\n` +
    `Images show **before → after → overlay** from left to right, each at 16 px and 64 px. Artwork changes include the overlay: **pink = before, blue = after**, each at 50% opacity. Light backgrounds are above dark backgrounds. Added or removed icons have a blank before or after panel and no overlay.\n\n`;
  const sections = groups
    .map((label) => {
      const changes = report.changes.filter(
        (change) => group(change) === label,
      );
      if (!changes.length) return '';
      const hasOverlay = changes.some((change) => change.overlay);
      return (
        `<details>\n<summary>${label} (${changes.length})</summary>\n\n| Before → After${hasOverlay ? ' → Overlay' : ''} |\n| --- |\n` +
        changes
          .map((change) => {
            const name =
              change.before && change.after && change.before !== change.after
                ? `\`${change.before}\` → \`${change.after}\``
                : `\`${change.after ?? change.before}\``;
            const url = `https://raw.githubusercontent.com/${repository}/${imageCommit}/pr-${number}/${change.image}`;
            return `| ${name}<br>![Before and after${change.overlay ? ' with pink and blue overlay' : ''}](${url}) |`;
          })
          .join('\n') +
        '\n\n</details>\n'
      );
    })
    .join('\n');
  let body =
    header +
    sections +
    '\nUpdated automatically after each push. The comparison uses the PR merge-base.\n';
  if (runUrl) {
    if (
      !new RegExp(
        `^https://github\\.com/${repository.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/actions/runs/\\d+$`,
      ).test(runUrl)
    )
      throw new Error('Invalid workflow URL.');
    body += `\n[Workflow run](${runUrl}) · The full interactive HTML report remains available in the release-check artifacts.\n`;
  }
  if (body.length > 65000)
    throw new Error(
      'Preview exceeds the GitHub comment limit; split the icon change into smaller PRs.',
    );
  return body;
}
