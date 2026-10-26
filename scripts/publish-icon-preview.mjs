import { readFile, mkdtemp, writeFile, mkdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  getPreviewCommentMarker,
  previewBranch,
  renderPreviewComments,
  validatePreview,
} from './lib/icon-preview-comment.mjs';

export function isCurrentPreview(pr, report, repository) {
  return (
    pr.state === 'open' &&
    pr.head.repo?.full_name === repository &&
    pr.base.repo.full_name === repository &&
    pr.head.sha === report.head
  );
}

export async function publishPreview({
  report,
  repository,
  number,
  api,
  upload,
  runUrl,
}) {
  validatePreview(report);
  const prPath = `/repos/${repository}/pulls/${number}`;
  const initial = await api('GET', prPath);
  if (!isCurrentPreview(initial, report, repository)) return { skipped: true };
  // Validate all comments before uploading anything.
  renderPreviewComments(report, {
    repository,
    number,
    imageCommit: report.head,
    runUrl,
  });
  const imageCommit = report.changes.length ? await upload() : report.head;
  const current = await api('GET', prPath);
  if (
    !isCurrentPreview(current, report, repository) ||
    current.base.sha !== initial.base.sha
  )
    return { skipped: true };
  const existing = [];
  for (let page = 1; ; page++) {
    const comments = await api(
      'GET',
      `/repos/${repository}/issues/${number}/comments?per_page=100&page=${page}`,
    );
    existing.push(
      ...comments.filter(
        (comment) =>
          comment.user.login === 'github-actions[bot]' &&
          getPreviewCommentMarker(comment.body),
      ),
    );
    if (comments.length < 100) break;
  }
  const comments = renderPreviewComments(report, {
    repository,
    number,
    imageCommit,
    runUrl,
  });
  const retained = new Set(),
    urls = [];
  for (const { marker, body } of comments) {
    const previous = existing.find(
      (comment) => getPreviewCommentMarker(comment.body) === marker,
    );
    const saved = previous
      ? await api(
          'PATCH',
          `/repos/${repository}/issues/comments/${previous.id}`,
          { body },
        )
      : await api('POST', `/repos/${repository}/issues/${number}/comments`, {
          body,
        });
    if (previous) retained.add(previous.id);
    urls.push(saved.html_url);
  }
  // A smaller comparison can leave unused pages. Remove only our marked bot comments.
  for (const comment of existing)
    if (!retained.has(comment.id))
      await api('DELETE', `/repos/${repository}/issues/comments/${comment.id}`);
  return { url: urls[0], urls };
}

// Publish only validated PNGs to a data-only branch. No package installation,
// downloaded scripts, or PR SVG execution happens in this write-permission job.
async function uploadImages(directory, report, repository, number, token) {
  const root = await mkdtemp(path.join(tmpdir(), 'fyicons-preview-'));
  const credentials = Buffer.from(`x-access-token:${token}`).toString('base64');
  const env = {
    ...process.env,
    GIT_CONFIG_COUNT: '1',
    GIT_CONFIG_KEY_0: 'http.https://github.com/.extraheader',
    GIT_CONFIG_VALUE_0: `AUTHORIZATION: basic ${credentials}`,
    GIT_TERMINAL_PROMPT: '0',
    GIT_AUTHOR_NAME: 'github-actions[bot]',
    GIT_AUTHOR_EMAIL: '41898282+github-actions[bot]@users.noreply.github.com',
    GIT_COMMITTER_NAME: 'github-actions[bot]',
    GIT_COMMITTER_EMAIL:
      '41898282+github-actions[bot]@users.noreply.github.com',
  };
  const git = (...args) =>
    execFileSync('git', args, {
      cwd: root,
      env,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
  try {
    git('init', '--quiet');
    git('remote', 'add', 'origin', `https://github.com/${repository}.git`);
    const ref = `refs/heads/${previewBranch}`;
    const previous = git('ls-remote', 'origin', ref).split(/\s/)[0];
    if (previous) {
      git('fetch', '--quiet', '--depth=1', 'origin', ref);
      git('read-tree', 'FETCH_HEAD');
      // Other PRs remain in the tree. Old URLs use commit SHAs, so removing
      // outdated images here cannot change an earlier comment's artwork.
      git('rm', '--cached', '-r', '--ignore-unmatch', `pr-${number}`);
    }
    await mkdir(path.join(root, `pr-${number}`));
    for (const change of report.changes) {
      const bytes = await readFile(path.join(directory, change.image));
      if (
        bytes.length > 256 * 1024 ||
        bytes.length < 24 ||
        !bytes.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex')) ||
        bytes.readUInt32BE(16) !== (change.overlay ? 576 : 384) ||
        bytes.readUInt32BE(20) !== 192
      )
        throw new Error(`Invalid PNG preview: ${change.image}`);
      await writeFile(path.join(root, `pr-${number}`, change.image), bytes);
    }
    await writeFile(
      path.join(root, 'README.md'),
      '# Icon preview images\n\nGenerated PNG comparisons for pull request comments. This branch contains no package or website source. Image URLs use immutable commit revisions.\n',
    );
    git('add', '--', 'README.md', `pr-${number}`);
    const tree = git('write-tree');
    const parent = previous ? git('rev-parse', 'FETCH_HEAD') : null;
    if (parent && tree === git('rev-parse', 'FETCH_HEAD^{tree}')) return parent;
    const commit = git(
      'commit-tree',
      tree,
      ...(parent ? ['-p', parent] : []),
      '-m',
      `[codex] chore(previews): update icons for PR #${number}`,
    );
    // Never force-push. The workflow serializes publishers across PRs.
    git('push', '--quiet', 'origin', `${commit}:${ref}`);
    return commit;
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}

async function main() {
  const repository = process.env.GITHUB_REPOSITORY;
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is required.');
  const directory = path.resolve(
    process.argv[2] ?? 'artifacts/icon-diff/pr-preview',
  );
  const report = validatePreview(
    JSON.parse(await readFile(path.join(directory, 'manifest.json'), 'utf8')),
  );
  const api = async (method, pathname, body) => {
    const response = await fetch(`https://api.github.com${pathname}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      ...(body && { body: JSON.stringify(body) }),
    });
    if (!response.ok)
      throw new Error(`GitHub ${method} ${pathname}: ${response.status}`);
    return response.status === 204 ? null : response.json();
  };
  const event = JSON.parse(
    await readFile(process.env.GITHUB_EVENT_PATH, 'utf8'),
  );
  const run = event.workflow_run;
  if (
    run?.event !== 'pull_request' ||
    run.conclusion !== 'success' ||
    run.head_repository?.full_name !== repository ||
    run.head_sha !== report.head
  )
    throw new Error('Preview does not match the successful source workflow.');
  const prs = await api(
    'GET',
    `/repos/${repository}/commits/${report.head}/pulls?per_page=100`,
  );
  for (const pr of prs.filter((pr) =>
    isCurrentPreview(pr, report, repository),
  )) {
    const number = pr.number;
    const result = await publishPreview({
      report,
      repository,
      number,
      api,
      upload: () => uploadImages(directory, report, repository, number, token),
      runUrl: `https://github.com/${repository}/actions/runs/${process.env.GITHUB_RUN_ID}`,
    });
    console.log(
      result.skipped
        ? 'Skipped an outdated or ineligible PR preview.'
        : `Updated icon preview: ${result.url}`,
    );
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  await main();
