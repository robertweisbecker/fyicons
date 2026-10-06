import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTriangleLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleLeft(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.26667 8.2C4.13333 8.1 4.13333 7.9 4.26667 7.8L7.6 5.3C7.76481 5.17639 8 5.29399 8 5.5V10.5C8 10.706 7.76481 10.8236 7.6 10.7L4.26667 8.2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTriangleLeft;
