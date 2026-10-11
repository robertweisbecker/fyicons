import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGridColumnStart = React.forwardRef<SVGSVGElement, IconProps>(function IconGridColumnStart(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M14 12.5C14 12.7761 13.7761 13 13.5 13H13V13.5C13 13.7761 12.7761 14 12.5 14C12.2239 14 12 13.7761 12 13.5V13H9V13.5L8.99023 13.6006C8.94371 13.8286 8.74171 14 8.5 14H3.5C3.25829 14 3.05629 13.8286 3.00977 13.6006L3 13.5V13H2.5C2.22386 13 2 12.7761 2 12.5C2 12.2239 2.22386 12 2.5 12H3V4H2.5C2.22386 4 2 3.77614 2 3.5C2 3.22386 2.22386 3 2.5 3H3V2.5C3 2.22386 3.22386 2 3.5 2H8.5L8.60059 2.00977C8.82855 2.05629 9 2.25829 9 2.5V3H12V2.5C12 2.22386 12.2239 2 12.5 2C12.7761 2 13 2.22386 13 2.5V3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H13V12H13.5C13.7761 12 14 12.2239 14 12.5ZM8 3H4V13H8V3ZM9 4V12H12V4H9Z" fill="currentColor" fillOpacity={0.9} style={{
      fill: "currentColor",
      fillOpacity: 0.9
    }} /></SvgRoot>;
});
export default IconGridColumnStart;
