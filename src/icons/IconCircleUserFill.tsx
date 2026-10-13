import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircleUserFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleUserFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 10C7.47483 10 6.95494 10.1038 6.46973 10.3047C5.98442 10.5057 5.54331 10.8004 5.17188 11.1719C4.80044 11.5433 4.50571 11.9844 4.30469 12.4697C4.27796 12.5343 4.25276 12.5993 4.22949 12.665C5.26 13.499 6.57106 14 8 14C9.42894 14 10.74 13.499 11.7705 12.665C11.7472 12.5993 11.722 12.5343 11.6953 12.4697C11.4943 11.9844 11.1996 11.5433 10.8281 11.1719C10.4567 10.8004 10.0156 10.5057 9.53027 10.3047C9.04506 10.1038 8.52517 10 8 10ZM8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleUserFill;
