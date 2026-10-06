import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconBrowserFill = React.forwardRef<SVGSVGElement, IconProps>(function IconBrowserFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12ZM3 12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V6H3V12ZM4 3.25C3.58579 3.25 3.25 3.58579 3.25 4C3.25 4.41421 3.58579 4.75 4 4.75C4.41421 4.75 4.75 4.41421 4.75 4C4.75 3.58579 4.41421 3.25 4 3.25ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75C6.41421 4.75 6.75 4.41421 6.75 4C6.75 3.58579 6.41421 3.25 6 3.25ZM8 3.25C7.58579 3.25 7.25 3.58579 7.25 4C7.25 4.41421 7.58579 4.75 8 4.75C8.41421 4.75 8.75 4.41421 8.75 4C8.75 3.58579 8.41421 3.25 8 3.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconBrowserFill;
