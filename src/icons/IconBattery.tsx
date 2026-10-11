import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconBattery = React.forwardRef<SVGSVGElement, IconProps>(function IconBattery(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 3C13.6569 3 15 4.34315 15 6C15.5523 6 16 6.44772 16 7V9C16 9.55228 15.5523 10 15 10C15 11.6569 13.6569 13 12 13H4C2.34315 13 1 11.6569 1 10V6C1 4.34315 2.34315 3 4 3H12ZM4 4C2.89543 4 2 4.89543 2 6V10C2 11.1046 2.89543 12 4 12H12C13.1046 12 14 11.1046 14 10V6C14 4.89543 13.1046 4 12 4H4ZM12 5C12.5523 5 13 5.44772 13 6V10C13 10.5523 12.5523 11 12 11H4C3.44772 11 3 10.5523 3 10V6C3 5.44772 3.44772 5 4 5H12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconBattery;
