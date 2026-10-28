import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPrinter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPrinter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.75 2C11.4404 2 12 2.55964 12 3.25V5H13C14.1046 5 15 5.89543 15 7V10C15 11.1046 14.1046 12 13 12H12V12.5C12 13.3284 11.3284 14 10.5 14H5.5L5.34668 13.9922C4.59028 13.9154 4 13.2767 4 12.5V12H3C1.89543 12 1 11.1046 1 10V7C1 5.89543 1.89543 5 3 5H4V3.25C4 2.55964 4.55964 2 5.25 2H10.75ZM5 12.5C5 12.7761 5.22386 13 5.5 13H10.5C10.7761 13 11 12.7761 11 12.5V9H5V12.5ZM3 6C2.44772 6 2 6.44772 2 7V10C2 10.5523 2.44772 11 3 11H4V8H12V11H13C13.5523 11 14 10.5523 14 10V7C14 6.44772 13.5523 6 13 6H3ZM5.25 3C5.11193 3 5 3.11193 5 3.25V5H11V3.25C11 3.11193 10.8881 3 10.75 3H5.25Z" fill="currentColor" /></SvgRoot>;
});
export default IconPrinter;
