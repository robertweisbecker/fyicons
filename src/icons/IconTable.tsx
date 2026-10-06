import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTable = React.forwardRef<SVGSVGElement, IconProps>(function IconTable(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM6 10V12H13C13.5523 12 14 11.5523 14 11V10H6ZM2 11C2 11.5523 2.44772 12 3 12H5V10H2V11ZM6 7V9H14V7H6ZM2 9H5V7H2V9ZM6 6H14V5C14 4.44772 13.5523 4 13 4H6V6ZM3 4C2.44772 4 2 4.44772 2 5V6H5V4H3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTable;
