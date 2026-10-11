import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSwitchesIos = React.forwardRef<SVGSVGElement, IconProps>(function IconSwitchesIos(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5C2 10.1193 3.11929 9 4.5 9H11.5ZM9.5 10C8.67157 10 8 10.6716 8 11.5C8 12.3284 8.67157 13 9.5 13H11.5C12.3284 13 13 12.3284 13 11.5C13 10.6716 12.3284 10 11.5 10H9.5ZM11 2C12.6569 2 14 3.34315 14 5C14 6.65685 12.6569 8 11 8H5C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7H11C12.1046 7 13 6.10457 13 5C13 3.89543 12.1046 3 11 3H5ZM7 3.5C7.82843 3.5 8.5 4.17157 8.5 5C8.5 5.82843 7.82843 6.5 7 6.5H5C4.17157 6.5 3.5 5.82843 3.5 5C3.5 4.17157 4.17157 3.5 5 3.5H7Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSwitchesIos;
