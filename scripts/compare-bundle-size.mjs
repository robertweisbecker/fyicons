import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { rolldown } from 'rolldown';
import {
  githubApi,
  measureBundles,
  renderBundleComment,
  validateBundleReport,
} from './lib/bundle-size.mjs';

const repository = process.env.GITHUB_REPOSITORY;
const number = Number(process.env.BUNDLE_PR);
if (
  !/^[\w.-]+\/[\w.-]+$/.test(repository) ||
  !Number.isSafeInteger(number) ||
  number < 1
)
  throw new Error('A repository and PR number are required.');
const api = githubApi(process.env.GITHUB_TOKEN);
const pr = await api('GET', `/repos/${repository}/pulls/${number}`);
if (
  pr.state !== 'open' ||
  pr.base.repo.full_name !== repository ||
  pr.head.repo?.full_name !== repository
)
  throw new Error('Bundle comments require an open PR in this repository.');
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();
for (const sha of [pr.base.sha, pr.head.sha]) {
  if (!/^[a-f0-9]{40}$/.test(sha)) throw new Error('Invalid PR revision.');
  git('fetch', '--no-tags', 'origin', sha);
}
const base = git('merge-base', pr.base.sha, pr.head.sha);
const root = await mkdtemp(path.join(tmpdir(), 'fyicons-bundle-'));
const report = {
  version: 1,
  number,
  base,
  baseTip: pr.base.sha,
  head: pr.head.sha,
  workflowSha: process.env.GITHUB_SHA,
  tools: {
    node: process.versions.node,
    rolldown: JSON.parse(
      await readFile(
        new URL('../node_modules/rolldown/package.json', import.meta.url),
        'utf8',
      ),
    ).version,
  },
};
try {
  for (const [side, sha] of [
    ['before', base],
    ['after', pr.head.sha],
  ]) {
    const directory = path.join(root, side);
    git('worktree', 'add', '--detach', directory, sha);
    try {
      for (const args of [
        ['ci', '--no-audit', '--no-fund'],
        ['run', 'build:package'],
      ])
        execFileSync('npm', args, { cwd: directory, stdio: 'inherit' });
      report[side] = await measureBundles(directory, rolldown);
    } finally {
      git('worktree', 'remove', '--force', directory);
    }
  }
  validateBundleReport(report);
  const output = path.resolve('artifacts/bundle-size');
  await mkdir(output, { recursive: true });
  await writeFile(
    path.join(output, 'report.json'),
    JSON.stringify(report, null, 2) + '\n',
  );
  const markdown = renderBundleComment(
    report,
    repository,
    process.env.GITHUB_RUN_ID,
  );
  await writeFile(path.join(output, 'summary.md'), markdown);
  if (process.env.GITHUB_STEP_SUMMARY)
    await writeFile(process.env.GITHUB_STEP_SUMMARY, markdown);
  console.log(markdown);
} finally {
  await rm(root, { recursive: true, force: true });
}
