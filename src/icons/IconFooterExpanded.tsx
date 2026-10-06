import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFooterExpanded = React.forwardRef<SVGSVGElement, IconProps>(function IconFooterExpanded(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H3ZM12.25 8.5C12.6642 8.5 13 8.83579 13 9.25V10.25C13 10.6642 12.6642 11 12.25 11H3.75C3.33579 11 3 10.6642 3 10.25V9.25C3 8.83579 3.33579 8.5 3.75 8.5H12.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFooterExpanded;
