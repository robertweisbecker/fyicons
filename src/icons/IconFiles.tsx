import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFiles = React.forwardRef<SVGSVGElement, IconProps>(function IconFiles(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.3789 1C10.9093 1.00006 11.4179 1.21092 11.793 1.58594L13.4141 3.20703C13.7891 3.58205 13.9999 4.09074 14 4.62109V10C14 11.1046 13.1046 12 12 12H10V13C10 14.1046 9.10457 15 8 15H4C2.89543 15 2 14.1046 2 13V6C2 4.89543 2.89543 4 4 4H6V3C6 1.89543 6.89543 1 8 1H10.3789ZM4 5C3.44772 5 3 5.44772 3 6V13C3 13.5523 3.44772 14 4 14H8C8.55228 14 9 13.5523 9 13V12H8C6.89543 12 6 11.1046 6 10V5H4ZM8 2C7.44772 2 7 2.44772 7 3V10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10V5H11.25C10.5596 5 10 4.44036 10 3.75V2H8ZM11 3.75C11 3.88807 11.1119 4 11.25 4H12.7832C12.7595 3.97012 12.7343 3.94129 12.707 3.91406L11.0859 2.29297C11.0587 2.26574 11.0299 2.24049 11 2.2168V3.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFiles;
