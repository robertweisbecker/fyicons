import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconHeaderSquareFill = React.forwardRef<SVGSVGElement, IconProps>(function IconHeaderSquareFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM3 6.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V6.5H3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconHeaderSquareFill;
