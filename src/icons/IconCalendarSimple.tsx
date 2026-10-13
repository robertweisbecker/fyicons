import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCalendarSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconCalendarSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.5 1C10.7761 1 11 1.22386 11 1.5V2H11.5C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H5V1.5C5 1.22386 5.22386 1 5.5 1C5.77614 1 6 1.22386 6 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H11V3.5C11 3.77614 10.7761 4 10.5 4C10.2239 4 10 3.77614 10 3.5V3H6V3.5C6 3.77614 5.77614 4 5.5 4C5.22386 4 5 3.77614 5 3.5V3H4.5ZM10.5 5C10.7761 5 11 5.22386 11 5.5C11 5.77614 10.7761 6 10.5 6H5.5C5.22386 6 5 5.77614 5 5.5C5 5.22386 5.22386 5 5.5 5H10.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconCalendarSimple;
