import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconEraser = React.forwardRef<SVGSVGElement, IconProps>(function IconEraser(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.99958 1.50012C9.13219 1.50012 9.25933 1.55284 9.35309 1.64661L14.3531 6.64661C14.5484 6.84187 14.5483 7.15837 14.3531 7.35364L8.63337 13.0734C7.72514 13.9814 6.27677 14.0537 5.28278 13.2404L2.89411 11.2863C1.74969 10.3498 1.66418 8.62997 2.70954 7.58411L3.64606 6.64661L8.64606 1.64661L8.72224 1.58411C8.80372 1.52979 8.90021 1.50016 8.99958 1.50012ZM3.41657 8.29114C2.78943 8.91866 2.84031 9.95094 3.52692 10.5128L5.91559 12.4669C6.51196 12.9549 7.38139 12.9111 7.92634 12.3663L8.29255 12.0001L3.99958 7.70715L3.41657 8.29114ZM4.70661 7.00012L8.99958 11.2931L13.2925 7.00012L8.99958 2.70715L4.70661 7.00012Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconEraser;
