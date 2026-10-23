import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLockFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLockFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C9.65685 1 11 2.34315 11 4V6C12.1046 6 13 6.89543 13 8V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V8C3 6.89543 3.89543 6 5 6V4C5 2.34315 6.34315 1 8 1ZM8 9C7.44772 9 7 9.44772 7 10C7 10.3698 7.20157 10.6912 7.5 10.8643V12C7.5 12.2761 7.72386 12.5 8 12.5C8.27614 12.5 8.5 12.2761 8.5 12V10.8643C8.79843 10.6912 9 10.3698 9 10C9 9.44772 8.55228 9 8 9ZM8 2C6.89543 2 6 2.89543 6 4V6H10V4C10 2.89543 9.10457 2 8 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconLockFill;
