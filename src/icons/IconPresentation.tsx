import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPresentation = React.forwardRef<SVGSVGElement, IconProps>(function IconPresentation(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 2C8.27614 2 8.5 2.22386 8.5 2.5V3H13.5C13.7761 3 14 3.22386 14 3.5V10.5C14 11.3284 13.3284 12 12.5 12H9.30762L9.94629 13.2764C10.0697 13.5233 9.96958 13.8238 9.72266 13.9473C9.47572 14.0707 9.17529 13.9705 9.05176 13.7236L8.19043 12H7.80859L6.94727 13.7236C6.8237 13.9704 6.52323 14.0706 6.27637 13.9473C6.02956 13.8238 5.92949 13.5233 6.05273 13.2764L6.69141 12H3.5C2.67157 12 2 11.3284 2 10.5V3.5C2 3.22386 2.22386 3 2.5 3H7.5V2.5C7.5 2.22386 7.72386 2 8 2ZM3 10.5C3 10.7761 3.22386 11 3.5 11H12.5C12.7761 11 13 10.7761 13 10.5V4H3V10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M14.5 3.5H1.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></SvgRoot>;
});
export default IconPresentation;
