import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconBrackets = React.forwardRef<SVGSVGElement, IconProps>(function IconBrackets(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.5 2C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H3.5C3.22386 3 3 3.22386 3 3.5V12.5C3 12.7761 3.22386 13 3.5 13H5.5C5.77614 13 6 13.2239 6 13.5C6 13.7761 5.77614 14 5.5 14H3.5C2.67157 14 2 13.3284 2 12.5V3.5C2 2.67157 2.67157 2 3.5 2H5.5ZM12.5 2C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H10.5C10.2239 14 10 13.7761 10 13.5C10 13.2239 10.2239 13 10.5 13H12.5C12.7761 13 13 12.7761 13 12.5V3.5C13 3.22386 12.7761 3 12.5 3H10.5C10.2239 3 10 2.77614 10 2.5C10 2.22386 10.2239 2 10.5 2H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconBrackets;
