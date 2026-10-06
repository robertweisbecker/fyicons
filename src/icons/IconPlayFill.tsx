import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPlayFill = React.forwardRef<SVGSVGElement, IconProps>(function IconPlayFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path fillRule="evenodd" clipRule="evenodd" d="M3 3.15397C3 2.1942 4.03685 1.59249 4.87017 2.06867L13.3507 6.9147C14.1905 7.39456 14.1905 8.60544 13.3507 9.0853L4.87017 13.9313C4.03685 14.4075 3 13.8058 3 12.846V3.15397Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconPlayFill;
