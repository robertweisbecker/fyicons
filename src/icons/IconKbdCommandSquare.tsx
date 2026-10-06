import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconKbdCommandSquare = React.forwardRef<SVGSVGElement, IconProps>(function IconKbdCommandSquare(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M10 4.5C10.8284 4.5 11.5 5.17157 11.5 6C11.5 6.82843 10.8284 7.5 10 7.5H9.5V8.5H10C10.8284 8.5 11.5 9.17157 11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10V9.5H7.5V10C7.5 10.8284 6.82843 11.5 6 11.5C5.17157 11.5 4.5 10.8284 4.5 10C4.5 9.17157 5.17157 8.5 6 8.5H6.5V7.5H6C5.17157 7.5 4.5 6.82843 4.5 6C4.5 5.17157 5.17157 4.5 6 4.5C6.82843 4.5 7.5 5.17157 7.5 6V6.5H8.5V6C8.5 5.17157 9.17157 4.5 10 4.5ZM6 9.5C5.72386 9.5 5.5 9.72386 5.5 10C5.5 10.2761 5.72386 10.5 6 10.5C6.27614 10.5 6.5 10.2761 6.5 10V9.5H6ZM9.5 10C9.5 10.2761 9.72386 10.5 10 10.5C10.2761 10.5 10.5 10.2761 10.5 10C10.5 9.72386 10.2761 9.5 10 9.5H9.5V10ZM7.5 8.5H8.5V7.5H7.5V8.5ZM6 5.5C5.72386 5.5 5.5 5.72386 5.5 6C5.5 6.27614 5.72386 6.5 6 6.5H6.5V6C6.5 5.72386 6.27614 5.5 6 5.5ZM10 5.5C9.72386 5.5 9.5 5.72386 9.5 6V6.5H10C10.2761 6.5 10.5 6.27614 10.5 6C10.5 5.72386 10.2761 5.5 10 5.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconKbdCommandSquare;
