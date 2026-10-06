import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPanelLeftDocked = React.forwardRef<SVGSVGElement, IconProps>(function IconPanelLeftDocked(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H3ZM4.5 5C4.77614 5 5 5.22386 5 5.5V10.5C5 10.7761 4.77614 11 4.5 11H3.5C3.22386 11 3 10.7761 3 10.5V5.5C3 5.22386 3.22386 5 3.5 5H4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconPanelLeftDocked;
