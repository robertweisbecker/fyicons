export const githubHref = 'https://github.com/robertweisbecker/fyicons';
export const npmHref = 'https://www.npmjs.com/package/fyicons';
export const siteUrl = 'https://fyicons.com';
export const siteNavigation = [
  { href: '/icons/', label: 'Icons' },
  { href: '/examples/', label: 'Examples' },
  { href: '/docs/', label: 'Docs' },
] as const;

// Next's Link and router apply basePath themselves. Plain fetches and History
// API URLs need this prefix explicitly, including on nested docs pages.
export const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;

export const isActiveRoute = (pathname: string, href: string) =>
  pathname.replace(/\/$/, '') === href.replace(/\/$/, '') ||
  (href !== '/' && pathname.startsWith(href));
