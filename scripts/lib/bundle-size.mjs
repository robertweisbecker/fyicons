import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

export const bundleSizeMarker = '<!-- fyicons-bundle-size -->';
export const bundleLabels = {
  svg: 'SVG collection',
  react: '`fyicons`',
  client: '`fyicons/client`',
};

export function measureBytes(bytes) {
  return { raw: bytes.length, gzip: gzipSync(bytes, { level: 9 }).length };
}

export async function measureBundles(root, rolldown) {
  const directory = path.join(root, 'packages/fyicons');
  const files = (await readdir(path.join(directory, 'svg')))
    .filter((name) => name.endsWith('.svg'))
    .sort();
  if (!files.length) throw new Error('No built SVGs found.');
  const svg = { raw: 0, gzip: 0, count: files.length };
  for (const name of files) {
    const size = measureBytes(
      await readFile(path.join(directory, 'svg', name)),
    );
    svg.raw += size.raw;
    svg.gzip += size.gzip;
  }
  const result = { svg };
  for (const [key, entry] of [
    ['react', 'index'],
    ['client', 'client'],
  ]) {
    const bundle = await rolldown({
      input: path.join(directory, 'dist', `${entry}.js`),
      external: (id) => id === 'react' || id.startsWith('react/'),
      platform: 'neutral',
      onwarn(warning, warn) {
        if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') warn(warning);
      },
    });
    try {
      const { output } = await bundle.generate({
        format: 'esm',
        minify: true,
        sourcemap: false,
      });
      if (output.length !== 1 || output[0].type !== 'chunk')
        throw new Error('Expected a single React bundle.');
      result[key] = {
        ...measureBytes(Buffer.from(output[0].code)),
        count: output[0].exports.length,
      };
    } finally {
      await bundle.close();
    }
  }
  return result;
}

export function validateBundleReport(report) {
  if (
    report?.version !== 1 ||
    !Number.isSafeInteger(report.number) ||
    report.number < 1 ||
    !['base', 'baseTip', 'head', 'workflowSha'].every((key) =>
      /^[a-f0-9]{40}$/.test(report[key]),
    ) ||
    !['node', 'rolldown'].every((key) =>
      /^[\w.+-]{1,40}$/.test(report.tools?.[key]),
    )
  )
    throw new Error('Invalid bundle report metadata.');
  for (const side of ['before', 'after'])
    for (const key of Object.keys(bundleLabels))
      for (const metric of ['raw', 'gzip', 'count']) {
        const value = report[side]?.[key]?.[metric];
        if (!Number.isSafeInteger(value) || value < 0 || value > 1_000_000_000)
          throw new Error('Invalid bundle measurement.');
      }
  return report;
}

function formatBytes(value) {
  return `${value.toLocaleString('en-US')} B`;
}

function comparison(before, after) {
  const delta = after - before;
  const sign = delta > 0 ? '+' : delta < 0 ? '−' : '';
  const direction = delta > 0 ? '🔺' : delta < 0 ? '🟢 ▼' : '—';
  const percent = before
    ? ` (${sign}${((Math.abs(delta) / before) * 100).toFixed(2)}%)`
    : '';
  return `${formatBytes(before)} → ${formatBytes(after)}<br>${direction} **${sign}${formatBytes(Math.abs(delta))}${percent}**`;
}

export function renderBundleComment(report, repository, runId) {
  validateBundleReport(report);
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository) || !/^\d+$/.test(String(runId)))
    throw new Error('Invalid bundle report destination.');
  const rows = Object.entries(bundleLabels).map(
    ([key, label]) =>
      `| ${label} | ${comparison(report.before[key].raw, report.after[key].raw)} | ${comparison(report.before[key].gzip, report.after[key].gzip)} |`,
  );
  return (
    `${bundleSizeMarker}\n## Bundle size\n\n` +
    `\`${report.base.slice(0, 7)}\` → \`${report.head.slice(0, 7)}\` · [Details and JSON report](https://github.com/${repository}/actions/runs/${runId})\n\n` +
    `| Bundle | Raw / minified size · before → after | Gzip size · before → after |\n| --- | --- | --- |\n${rows.join('\n')}\n\n` +
    `<details>\n<summary>Measurement details</summary>\n\n` +
    `SVG: ${report.before.svg.count} → ${report.after.svg.count} files. Sizes sum the published SVG files; gzip compresses each file separately at level 9. This is not a ZIP size.\n\n` +
    `React: minified ESM bundles containing all exports of each entry point, with React and its JSX runtime external. Each row is a separate bundle. Individual imports can be smaller through tree shaking. Types, source maps, metadata, and documentation are excluded.\n\n` +
    `Both revisions use Node ${report.tools.node} and Rolldown ${report.tools.rolldown}. Each package is built with its own lockfile. The base is the PR merge-base.\n\n</details>\n`
  );
}

export function githubApi(token) {
  return async (method, pathname, body) => {
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
}
