import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCard = React.forwardRef<SVGSVGElement, IconProps>(function IconCard(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.2041 2.01074C13.2128 2.113 14 2.96435 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12L12.2041 2.01074ZM4 3C3.44772 3 3 3.44772 3 4V12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V4C13 3.44772 12.5523 3 12 3H4ZM7.5 10C7.77614 10 8 10.2239 8 10.5C8 10.7761 7.77614 11 7.5 11H4.5C4.22386 11 4 10.7761 4 10.5C4 10.2239 4.22386 10 4.5 10H7.5ZM9.5 8C9.77614 8 10 8.22386 10 8.5C10 8.77614 9.77614 9 9.5 9H4.5C4.22386 9 4 8.77614 4 8.5C4 8.22386 4.22386 8 4.5 8H9.5ZM11.5 4C11.7761 4 12 4.22386 12 4.5V6.5C12 6.77614 11.7761 7 11.5 7H4.5C4.22386 7 4 6.77614 4 6.5V4.5C4 4.22386 4.22386 4 4.5 4H11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCard;
