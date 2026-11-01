import createMDX from '@next/mdx';
import { fileURLToPath } from 'node:url';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: ['remark-gfm'] },
});

/** @type {import('next').NextConfig} */
const config = {
  agentRules: false,
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: { unoptimized: true },
  turbopack: {
    root: fileURLToPath(new URL('../..', import.meta.url)),
    rules: {
      '*': { condition: { query: '?raw' }, type: 'text' },
    },
  },
};

export default withMDX(config);
