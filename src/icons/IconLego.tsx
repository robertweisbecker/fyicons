import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLego = React.forwardRef<SVGSVGElement, IconProps>(function IconLego(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.5 3C6.32843 3 7 3.67157 7 4.5V5.5H9V4.5C9 3.67157 9.67157 3 10.5 3H11.5C12.3284 3 13 3.67157 13 4.5V5.5H13.5C14.3284 5.5 15 6.17157 15 7V11.5C15 12.3284 14.3284 13 13.5 13H2.5C1.67157 13 1 12.3284 1 11.5V7C1 6.17157 1.67157 5.5 2.5 5.5H3V4.5C3 3.67157 3.67157 3 4.5 3H5.5ZM2.5 6.5C2.22386 6.5 2 6.72386 2 7V11.5C2 11.7761 2.22386 12 2.5 12H13.5C13.7761 12 14 11.7761 14 11.5V7C14 6.72386 13.7761 6.5 13.5 6.5H2.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5V5.5H6V4.5C6 4.22386 5.77614 4 5.5 4H4.5ZM10.5 4C10.2239 4 10 4.22386 10 4.5V5.5H12V4.5C12 4.22386 11.7761 4 11.5 4H10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconLego;
