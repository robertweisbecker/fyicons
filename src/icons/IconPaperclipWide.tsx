import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPaperclipWide = React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclipWide(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.5 2C11.433 2 13 3.567 13 5.5V10C13 12.7614 10.7614 15 8 15C5.23858 15 3 12.7614 3 10V8.5C3 8.22386 3.22386 8 3.5 8C3.77614 8 4 8.22386 4 8.5V10C4 12.2091 5.79086 14 8 14C10.2091 14 12 12.2091 12 10V5.5C12 4.11929 10.8807 3 9.5 3C8.11929 3 7 4.11929 7 5.5V10C7 10.5523 7.44772 11 8 11C8.55228 11 9 10.5523 9 10V6.5C9 6.22386 9.22386 6 9.5 6C9.77614 6 10 6.22386 10 6.5V10C10 11.1046 9.10457 12 8 12C6.89543 12 6 11.1046 6 10V5.5C6 3.567 7.567 2 9.5 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconPaperclipWide;
