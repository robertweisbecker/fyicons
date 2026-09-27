export type Page = 'library' | 'examples';

// Relative entry points keep both pages working under a project subpath as well.
const basePath = location.pathname.replace(
  /examples\/?(?:index\.html)?$|index\.html$/,
  '',
);
export const pageHref = (page: Page) =>
  basePath + (page === 'examples' ? 'examples/' : '');
export const pageFromLocation = (): Page =>
  location.hash === '#library'
    ? 'library'
    : /\/examples(?:\/|$)/.test(location.pathname) ||
        location.hash === '#examples'
      ? 'examples'
      : 'library';
