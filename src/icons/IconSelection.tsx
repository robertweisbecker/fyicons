import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSelection = React.forwardRef<SVGSVGElement, IconProps>(function IconSelection(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><rect x={12.5} y={12} width={2} height={2} rx={1} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={1.5} y={2} width={2} height={2} rx={1} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M4.5 4.5H12.5C13.0523 4.5 13.5 4.94772 13.5 5.5V12.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 12.5H3.5C2.94772 12.5 2.5 12.0523 2.5 11.5V3" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 7.5H5.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path d="M9.5 9.5H5.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></SvgRoot>;
});
export default IconSelection;
