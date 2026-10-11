export type Page = 'home' | 'library' | 'examples';

// Static entry points work at a custom domain and a GitHub project subpath.
const basePath = location.pathname
  .replace(/(?:examples|library)\/?(?:index\.html)?$|index\.html$/, '')
  .replace(/\/?$/, '/');
export const pageHref = (page: Page) =>
  basePath + (page === 'home' ? '' : `${page}/`);
export const pageFromLocation = (): Page =>
  location.hash === '#library' || /\/library(?:\/|$)/.test(location.pathname)
    ? 'library'
    : /\/examples(?:\/|$)/.test(location.pathname) ||
        location.hash === '#examples'
      ? 'examples'
      : 'home';
