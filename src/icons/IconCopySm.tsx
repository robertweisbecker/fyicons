import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCopySm = React.forwardRef<SVGSVGElement, IconProps>(function IconCopySm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9 2C10.1046 2 11 2.89543 11 4V5H12C13.1046 5 14 5.89543 14 7V12C14 13.1046 13.1046 14 12 14H7C5.89543 14 5 13.1046 5 12V11H4C2.89543 11 2 10.1046 2 9V4C2 2.89543 2.89543 2 4 2H9ZM4 3C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3H4ZM6 12C6 12.5523 6.44772 13 7 13H12C12.5523 13 13 12.5523 13 12V7C13 6.44772 12.5523 6 12 6H11V9C11 10.1046 10.1046 11 9 11H6V12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCopySm;
