import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLightnessLow = React.forwardRef<SVGSVGElement, IconProps>(function IconLightnessLow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><circle cx={14} cy={10} r={0.75} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><circle cx={12} cy={7} r={0.75} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><circle cx={8} cy={6} r={0.75} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><circle cx={4} cy={7} r={0.75} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><circle cx={2} cy={10} r={0.75} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M10.5 10.5H5.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconLightnessLow;
