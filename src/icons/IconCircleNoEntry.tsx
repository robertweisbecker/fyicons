import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircleNoEntry = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNoEntry(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.5 7C10.7761 7 11 7.22386 11 7.5V8.5C11 8.77614 10.7761 9 10.5 9H5.5C5.22386 9 5 8.77614 5 8.5V7.5C5 7.22386 5.22386 7 5.5 7H10.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleNoEntry;
