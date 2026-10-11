import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconDiff = React.forwardRef<SVGSVGElement, IconProps>(function IconDiff(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5L2 4.5C2 3.11929 3.11929 2 4.5 2L11.5 2ZM4.5 3C3.67157 3 3 3.67157 3 4.5L3 11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3L4.5 3ZM10 10C10.2761 10 10.5 10.2239 10.5 10.5C10.5 10.7761 10.2761 11 10 11H6C5.72386 11 5.5 10.7761 5.5 10.5C5.5 10.2239 5.72386 10 6 10H10ZM8 5C8.27614 5 8.5 5.22386 8.5 5.5V7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H8.5V9H7.5V8H6C5.72386 8 5.5 7.77614 5.5 7.5C5.5 7.22386 5.72386 7 6 7H7.5V5.5C7.5 5.22386 7.72386 5 8 5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconDiff;
