import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTriangleRight = React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.7333 8.2C11.8667 8.1 11.8667 7.9 11.7333 7.8L8.4 5.3C8.23519 5.17639 8 5.29399 8 5.5V10.5C8 10.706 8.23519 10.8236 8.4 10.7L11.7333 8.2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTriangleRight;
