import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLightnessHigh = React.forwardRef<SVGSVGElement, IconProps>(function IconLightnessHigh(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 3.5V6.5M0.5 10.5H2.5M13.5 10.5H15.5M2.5 5.5L4.5 7.5M11.5 7.5L13.5 5.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 10.5H5.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconLightnessHigh;
