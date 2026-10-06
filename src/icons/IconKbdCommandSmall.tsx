import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconKbdCommandSmall = React.forwardRef<SVGSVGElement, IconProps>(function IconKbdCommandSmall(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 3C12.1046 3 13 3.89543 13 5C13 6.10457 12.1046 7 11 7H10V9H11C12.1046 9 13 9.89543 13 11C13 12.1046 12.1046 13 11 13C9.89543 13 9 12.1046 9 11V10H7V11C7 12.1046 6.10457 13 5 13C3.89543 13 3 12.1046 3 11C3 9.89543 3.89543 9 5 9H6V7H5C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5V6H9V5C9 3.89543 9.89543 3 11 3ZM5 10C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V10H5ZM10 11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10H10V11ZM7 9H9V7H7V9ZM5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6H6V5C6 4.44772 5.55228 4 5 4ZM11 4C10.4477 4 10 4.44772 10 5V6H11C11.5523 6 12 5.55228 12 5C12 4.44772 11.5523 4 11 4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconKbdCommandSmall;
