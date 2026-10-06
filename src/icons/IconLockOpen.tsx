import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLockOpen = React.forwardRef<SVGSVGElement, IconProps>(function IconLockOpen(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C9.02868 1 9.93488 1.51824 10.4746 2.30762C10.689 2.62117 10.4276 2.9999 10.0479 3C9.8516 3 9.67463 2.8915 9.55078 2.73926C9.18438 2.28854 8.6262 2 8 2C6.89543 2 6 2.89543 6 4V6H11C12.1046 6 13 6.89543 13 8V13C13 14.0357 12.2128 14.887 11.2041 14.9893L11 15H5L4.7959 14.9893C3.85435 14.8938 3.1062 14.1457 3.01074 13.2041L3 13V8C3 6.89543 3.89543 6 5 6V4C5 2.34315 6.34315 1 8 1ZM5 7C4.44772 7 4 7.44772 4 8V13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13V8C12 7.44772 11.5523 7 11 7H5ZM8 9C8.55228 9 9 9.44771 9 10C9 10.3698 8.79843 10.6912 8.5 10.8643V12C8.5 12.2761 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12.2761 7.5 12V10.8643C7.20157 10.6912 7 10.3698 7 10C7 9.44771 7.44772 9 8 9Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconLockOpen;
