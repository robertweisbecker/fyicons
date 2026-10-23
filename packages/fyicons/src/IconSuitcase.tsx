import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSuitcase = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSuitcase(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.5 2C10.3284 2 11 2.67157 11 3.5V4H13C14.1046 4 15 4.89543 15 6V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V6C1 4.89543 1.89543 4 3 4H5V3.5C5 2.67157 5.67157 2 6.5 2H9.5ZM3 5C2.44772 5 2 5.44772 2 6V11C2 11.5523 2.44772 12 3 12H5V5H3ZM11 12H13C13.5523 12 14 11.5523 14 11V6C14 5.44772 13.5523 5 13 5H11V12ZM6 12H10V5H6V12ZM6.5 3C6.22386 3 6 3.22386 6 3.5V4H10V3.5C10 3.22386 9.77614 3 9.5 3H6.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconSuitcase;
