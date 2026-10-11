import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconHeaderFill = React.forwardRef<SVGSVGElement, IconProps>(function IconHeaderFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 3C13.8807 3 15 4.11929 15 5.5V10.5C15 11.8807 13.8807 13 12.5 13H3.5C2.11929 13 1 11.8807 1 10.5V5.5C1 4.11929 2.11929 3 3.5 3H12.5ZM2 7V10.5C2 11.3284 2.67157 12 3.5 12H12.5C13.3284 12 14 11.3284 14 10.5V7H2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconHeaderFill;
