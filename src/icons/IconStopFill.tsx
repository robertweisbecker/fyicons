import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconStopFill = React.forwardRef<SVGSVGElement, IconProps>(function IconStopFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><rect x={3} y={3} width={10} height={10} rx={1} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconStopFill;
