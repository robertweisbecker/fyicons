import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCheckSm = React.forwardRef<SVGSVGElement, IconProps>(function IconCheckSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.5 8.5L7.25 11.5L11 5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconCheckSm;
