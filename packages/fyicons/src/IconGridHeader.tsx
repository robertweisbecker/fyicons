import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridHeader = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridHeader(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 9C6.55228 9 7 9.44772 7 10V13C7 13.5523 6.55228 14 6 14H3C2.44772 14 2 13.5523 2 13V10C2 9.44772 2.44772 9 3 9H6ZM13 9C13.5523 9 14 9.44772 14 10V13C14 13.5523 13.5523 14 13 14H10C9.44772 14 9 13.5523 9 13V10C9 9.44772 9.44772 9 10 9H13ZM3 13H6V10H3V13ZM10 10V13H13V10H10ZM13 2C13.5523 2 14 2.44772 14 3V6C14 6.55229 13.5523 7 13 7H3C2.44772 7 2 6.55228 2 6V3C2 2.44771 2.44772 2 3 2H13ZM3 6H13V3H3V6Z" fill="currentColor" /></SvgRoot>;
});
export default IconGridHeader;
