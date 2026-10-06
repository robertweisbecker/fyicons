import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLaptopFill = React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 11C6 11.5523 6.44772 12 7 12H9C9.55229 12 10 11.5523 10 11H13V5C13 4.44772 12.5523 4 12 4H4C3.44772 4 3 4.44772 3 5V11H6ZM14.75 11C14.8881 11 15 11.1119 15 11.25V11.5C15 12.3284 14.3284 13 13.5 13H2.5C1.67157 13 1 12.3284 1 11.5V11.25C1 11.1119 1.11193 11 1.25 11H2V5C2 3.89543 2.89543 3 4 3H12C13.1046 3 14 3.89543 14 5V11H14.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconLaptopFill;
