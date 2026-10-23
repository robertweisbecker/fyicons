import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPauseFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPauseFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 2C6.55228 2 7 2.44772 7 3V13C7 13.5523 6.55228 14 6 14H4.5C3.94772 14 3.5 13.5523 3.5 13V3C3.5 2.44772 3.94772 2 4.5 2H6ZM11.5 2C12.0523 2 12.5 2.44772 12.5 3V13C12.5 13.5523 12.0523 14 11.5 14H10C9.44772 14 9 13.5523 9 13V3C9 2.44772 9.44772 2 10 2H11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconPauseFill;
