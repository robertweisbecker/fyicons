import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconDiff = React.forwardRef<SVGSVGElement, IconProps>(function IconDiff(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5L2 4.5C2 3.11929 3.11929 2 4.5 2L11.5 2ZM4.5 3C3.67157 3 3 3.67157 3 4.5L3 11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3L4.5 3ZM10 10C10.2761 10 10.5 10.2239 10.5 10.5C10.5 10.7761 10.2761 11 10 11H6C5.72386 11 5.5 10.7761 5.5 10.5C5.5 10.2239 5.72386 10 6 10H10ZM8 4.5C8.27614 4.5 8.5 4.72386 8.5 5V6H9.5C9.77614 6 10 6.22386 10 6.5C10 6.77614 9.77614 7 9.5 7H8.5V8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8V7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H7.5V5C7.5 4.72386 7.72386 4.5 8 4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconDiff;
