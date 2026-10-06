import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCaretRight = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.83218 11.2603C7.50973 11.5469 7 11.318 7 10.8866V5.11342C7 4.682 7.50973 4.45309 7.83218 4.73972L11.0796 7.6263C11.3033 7.82519 11.3033 8.17481 11.0796 8.3737L7.83218 11.2603Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCaretRight;
