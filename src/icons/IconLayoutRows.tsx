import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLayoutRows = React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutRows(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM3 4C2.44772 4 2 4.44772 2 5V7.5H3.5C3.77614 7.5 4 7.72386 4 8C4 8.27614 3.77614 8.5 3.5 8.5H2V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V8.5H12.5C12.2239 8.5 12 8.27614 12 8C12 7.72386 12.2239 7.5 12.5 7.5H14V5C14 4.44772 13.5523 4 13 4H3ZM7 7.5C7.27614 7.5 7.5 7.72386 7.5 8C7.5 8.27614 7.27614 8.5 7 8.5H5.5C5.22386 8.5 5 8.27614 5 8C5 7.72386 5.22386 7.5 5.5 7.5H7ZM10.5 7.5C10.7761 7.5 11 7.72386 11 8C11 8.27614 10.7761 8.5 10.5 8.5H9C8.72386 8.5 8.5 8.27614 8.5 8C8.5 7.72386 8.72386 7.5 9 7.5H10.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconLayoutRows;
