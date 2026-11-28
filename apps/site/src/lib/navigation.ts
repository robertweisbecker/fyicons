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

const withoutTrailingSlash = (path: string) => path.replace(/\/$/, '');

/** The same page, with or without a trailing slash. */
export const isSameRoute = (pathname: string, href: string) =>
  withoutTrailingSlash(pathname) === withoutTrailingSlash(href);

/** The same page, or a page beneath `href`. */
export const isActiveRoute = (pathname: string, href: string) =>
  isSameRoute(pathname, href) || (href !== '/' && pathname.startsWith(href));
