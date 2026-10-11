import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGridColumnEnd = React.forwardRef<SVGSVGElement, IconProps>(function IconGridColumnEnd(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M2 12.5C2 12.7761 2.22386 13 2.5 13H3V13.5C3 13.7761 3.22386 14 3.5 14C3.77614 14 4 13.7761 4 13.5V13H7V13.5L7.00977 13.6006C7.05629 13.8286 7.25829 14 7.5 14H12.5C12.7417 14 12.9437 13.8286 12.9902 13.6006L13 13.5V13H13.5C13.7761 13 14 12.7761 14 12.5C14 12.2239 13.7761 12 13.5 12H13V4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H13V2.5C13 2.22386 12.7761 2 12.5 2H7.5L7.39941 2.00977C7.17145 2.05629 7 2.25829 7 2.5V3H4V2.5C4 2.22386 3.77614 2 3.5 2C3.22386 2 3 2.22386 3 2.5V3H2.5C2.22386 3 2 3.22386 2 3.5C2 3.77614 2.22386 4 2.5 4H3V12H2.5C2.22386 12 2 12.2239 2 12.5ZM8 3H12V13H8V3ZM7 4V12H4V4H7Z" fill="currentColor" fillOpacity={0.9} style={{
      fill: "currentColor",
      fillOpacity: 0.9
    }} /></SvgRoot>;
});
export default IconGridColumnEnd;
