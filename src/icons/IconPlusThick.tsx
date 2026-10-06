import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPlusThick = React.forwardRef<SVGSVGElement, IconProps>(function IconPlusThick(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.75 8H11.25M8 4.75V11.25" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconPlusThick;
