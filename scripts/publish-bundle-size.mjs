import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import {
  bundleSizeMarker,
  githubApi,
  renderBundleComment,
  validateBundleReport,
} from './lib/bundle-size.mjs';

export async function publishBundleSize({ report, repository, run, api }) {
  validateBundleReport(report);
  if (
    run.conclusion !== 'success' ||
    run.head_repository?.full_name !== repository ||
    !['pull_request', 'workflow_dispatch'].includes(run.event) ||
    (run.event === 'pull_request' ? report.head : report.workflowSha) !==
      run.head_sha
  )
    throw new Error('Report does not match its successful workflow.');
  const body = renderBundleComment(report, repository, run.id);
  const prPath = `/repos/${repository}/pulls/${report.number}`;
  const isCurrent = (pr) =>
    pr.state === 'open' &&
    pr.head.repo?.full_name === repository &&
    pr.base.repo.full_name === repository &&
    pr.head.sha === report.head &&
    pr.base.sha === report.baseTip;
  if (!isCurrent(await api('GET', prPath))) return { skipped: true };
  const comparison = await api(
    'GET',
    `/repos/${repository}/compare/${report.baseTip}...${report.head}`,
  );
  if (comparison.merge_base_commit?.sha !== report.base)
    throw new Error('Invalid comparison base.');
  let previous;
  for (let page = 1; ; page++) {
    const comments = await api(
      'GET',
      `/repos/${repository}/issues/${report.number}/comments?per_page=100&page=${page}`,
    );
    previous ??= comments.find(
      (comment) =>
        comment.user.login === 'github-actions[bot]' &&
        comment.body.startsWith(bundleSizeMarker + '\n'),
    );
    if (comments.length < 100) break;
  }
  if (!isCurrent(await api('GET', prPath))) return { skipped: true };
  const saved = previous
    ? await api(
        'PATCH',
        `/repos/${repository}/issues/comments/${previous.id}`,
        { body },
      )
    : await api(
        'POST',
        `/repos/${repository}/issues/${report.number}/comments`,
        { body },
      );
  return { url: saved.html_url };
}

async function main() {
  const bytes = await readFile(process.argv[2]);
  if (bytes.length > 16_384) throw new Error('Bundle report is too large.');
  const event = JSON.parse(
    await readFile(process.env.GITHUB_EVENT_PATH, 'utf8'),
  );
  const result = await publishBundleSize({
    report: JSON.parse(bytes),
    repository: process.env.GITHUB_REPOSITORY,
    run: event.workflow_run,
    api: githubApi(process.env.GITHUB_TOKEN),
  });
  console.log(
    result.skipped
      ? 'Skipped an outdated bundle comparison.'
      : `Updated bundle sizes: ${result.url}`,
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  await main();
