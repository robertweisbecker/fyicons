import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGrid = React.forwardRef<SVGSVGElement, IconProps>(function IconGrid(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 9C6.55228 9 7 9.44772 7 10V13C7 13.5523 6.55228 14 6 14H3C2.44772 14 2 13.5523 2 13V10C2 9.44772 2.44772 9 3 9H6ZM13 9C13.5523 9 14 9.44772 14 10V13C14 13.5523 13.5523 14 13 14H10C9.44772 14 9 13.5523 9 13V10C9 9.44772 9.44772 9 10 9H13ZM3 13H6V10H3V13ZM10 13H13V10H10V13ZM6 2C6.55228 2 7 2.44772 7 3V6C7 6.55228 6.55228 7 6 7H3C2.44772 7 2 6.55228 2 6V3C2 2.44772 2.44772 2 3 2H6ZM13 2C13.5523 2 14 2.44772 14 3V6C14 6.55228 13.5523 7 13 7H10C9.44772 7 9 6.55228 9 6V3C9 2.44772 9.44772 2 10 2H13ZM3 6H6V3H3V6ZM10 6H13V3H10V6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconGrid;
