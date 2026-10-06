import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSquarrowLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowLeft(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5 8H11.5C12.6046 8 13.5 7.10457 13.5 6V4.5C13.5 3.39543 12.6046 2.5 11.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V11.5C2.5 12.6046 3.39543 13.5 4.5 13.5H11.5C12.6046 13.5 13.5 12.6046 13.5 11.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M8 5.5L5.5 8L8 10.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconSquarrowLeft;
