import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTriangleDown = React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.8 11.7333C7.9 11.8667 8.1 11.8667 8.2 11.7333L10.7 8.4C10.8236 8.23519 10.706 8 10.5 8L5.5 8C5.29399 8 5.17639 8.23519 5.3 8.4L7.8 11.7333Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTriangleDown;
