import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFooterSquareExpanded = React.forwardRef<SVGSVGElement, IconProps>(function IconFooterSquareExpanded(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12ZM4 3C3.44772 3 3 3.44772 3 4V12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V4C13 3.44772 12.5523 3 12 3H4ZM11.25 8.5C11.6642 8.5 12 8.83579 12 9.25V11.25C12 11.6642 11.6642 12 11.25 12H4.75C4.33579 12 4 11.6642 4 11.25V9.25C4 8.83579 4.33579 8.5 4.75 8.5H11.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFooterSquareExpanded;
