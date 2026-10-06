import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconMenu = React.forwardRef<SVGSVGElement, IconProps>(function IconMenu(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M13.5 12C13.7761 12 14 12.2239 14 12.5C14 12.7761 13.7761 13 13.5 13H2.5C2.22386 13 2 12.7761 2 12.5C2 12.2239 2.22386 12 2.5 12H13.5ZM13.5 8C13.7761 8 14 8.22386 14 8.5C14 8.77614 13.7761 9 13.5 9H2.5C2.22386 9 2 8.77614 2 8.5C2 8.22386 2.22386 8 2.5 8H13.5ZM13.5 4C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconMenu;
