import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCaretDown = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.2603 7.83218C11.5469 7.50973 11.318 7 10.8866 7H5.11342C4.682 7 4.45309 7.50973 4.73972 7.83218L7.6263 11.0796C7.82519 11.3033 8.17481 11.3033 8.3737 11.0796L11.2603 7.83218Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCaretDown;
