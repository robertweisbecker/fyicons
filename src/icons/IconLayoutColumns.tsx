import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLayoutColumns = React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutColumns(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H3Z" fill="currentColor" /><path d="M8.5 12C8.5 12.2761 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12.2761 7.5 12V10.5C7.5 10.2239 7.72386 10 8 10C8.27614 10 8.5 10.2239 8.5 10.5V12ZM8.5 8.5C8.5 8.77614 8.27614 9 8 9C7.72386 9 7.5 8.77614 7.5 8.5V7.5C7.5 7.22386 7.72386 7 8 7C8.27614 7 8.5 7.22386 8.5 7.5V8.5ZM8 3.5C8.27614 3.5 8.5 3.72386 8.5 4V5.5C8.5 5.77614 8.27614 6 8 6C7.72386 6 7.5 5.77614 7.5 5.5V4C7.5 3.72386 7.72386 3.5 8 3.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconLayoutColumns;
