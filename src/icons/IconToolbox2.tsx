import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconToolbox2 = React.forwardRef<SVGSVGElement, IconProps>(function IconToolbox2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.5 2C10.3284 2 11 2.67157 11 3.5V5H11.5C13.433 5 15 6.567 15 8.5V11.5C15 12.3284 14.3284 13 13.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.5C1 6.567 2.567 5 4.5 5H5V3.5C5 2.67157 5.67157 2 6.5 2H9.5ZM4.5 6C3.29051 6 2.28142 6.85886 2.0498 8H3.5C3.77614 8 4 8.22386 4 8.5C4 8.77614 3.77614 9 3.5 9H2V11.5C2 11.7761 2.22386 12 2.5 12H13.5C13.7761 12 14 11.7761 14 11.5V9H12.5C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8H13.9502C13.7186 6.85886 12.7095 6 11.5 6H4.5ZM9.5 8C9.77614 8 10 8.22386 10 8.5C10 8.77614 9.77614 9 9.5 9H6.5C6.22386 9 6 8.77614 6 8.5C6 8.22386 6.22386 8 6.5 8H9.5ZM6.5 3C6.22386 3 6 3.22386 6 3.5V5H10V3.5C10 3.22386 9.77614 3 9.5 3H6.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconToolbox2;
