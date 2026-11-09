import createMDX from '@next/mdx';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const headingsPlugin = fileURLToPath(
  new URL('./src/lib/rehype-doc-headings.mjs', import.meta.url),
);
// Local plugin edits must also invalidate Turbopack's cached MDX output.
const headingsRevision = createHash('sha256')
  .update(readFileSync(headingsPlugin))
  .digest('hex');

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [[headingsPlugin, { sourceHash: headingsRevision }]],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  agentRules: false,
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: { unoptimized: true },
  experimental: {
    // Avoid socket IPC for PostCSS and MDX loader workers.
    turbopackPluginRuntimeStrategy: 'workerThreads',
  },
  turbopack: {
    root: fileURLToPath(new URL('../..', import.meta.url)),
    rules: {
      '*': { condition: { query: '?raw' }, type: 'text' },
    },
  },
};

export default (phase) =>
  withMDX({
    ...config,
    pageExtensions:
      phase === PHASE_DEVELOPMENT_SERVER
        ? ['dev.tsx', ...config.pageExtensions]
        : config.pageExtensions,
  });
