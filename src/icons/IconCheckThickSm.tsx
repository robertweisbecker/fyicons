import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCheckThickSm = React.forwardRef<SVGSVGElement, IconProps>(function IconCheckThickSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.33594 5.65088C9.52888 5.28439 9.98309 5.14352 10.3496 5.33643C10.7159 5.52947 10.8569 5.98369 10.6641 6.3501L8.16406 11.1001C8.04945 11.3176 7.83482 11.4648 7.59082 11.4946C7.34667 11.5243 7.10295 11.4322 6.93945 11.2485L4.93945 8.99854C4.66442 8.689 4.69255 8.21511 5.00195 7.93994C5.31154 7.66487 5.78539 7.69289 6.06055 8.00244L7.33984 9.44189L9.33594 5.65088Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCheckThickSm;
