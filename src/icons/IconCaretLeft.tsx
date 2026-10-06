import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCaretLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretLeft(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.16782 11.2603C8.49027 11.5469 9 11.318 9 10.8866V5.11342C9 4.682 8.49027 4.45309 8.16782 4.73972L4.92042 7.6263C4.69666 7.82519 4.69666 8.17481 4.92042 8.3737L8.16782 11.2603Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCaretLeft;
