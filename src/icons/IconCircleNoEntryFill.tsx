import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircleNoEntryFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNoEntryFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM5.5 7C5.22386 7 5 7.22386 5 7.5V8.5C5 8.77614 5.22386 9 5.5 9H10.5C10.7761 9 11 8.77614 11 8.5V7.5C11 7.22386 10.7761 7 10.5 7H5.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleNoEntryFill;
