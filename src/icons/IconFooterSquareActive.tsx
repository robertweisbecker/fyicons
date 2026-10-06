import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFooterSquareActive = React.forwardRef<SVGSVGElement, IconProps>(function IconFooterSquareActive(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12ZM4 3C3.44772 3 3 3.44772 3 4V9.5H13V4C13 3.44772 12.5523 3 12 3H4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFooterSquareActive;
