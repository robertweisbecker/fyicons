import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBell2Fill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBell2Fill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bell-2-fill"><path fill="currentColor" d="M8.155 1.008a1.5 1.5 0 0 1 1.163 2.21A4.1 4.1 0 0 1 12.1 7.1v1.89c0 .224.049.445.142.649l.727 1.592A1.25 1.25 0 0 1 11.831 13h-1.83l-.011.204a2 2 0 0 1-3.98 0L6 13H4.167a1.25 1.25 0 0 1-1.135-1.77l.727-1.591a1.6 1.6 0 0 0 .14-.649V7.1a4.1 4.1 0 0 1 2.784-3.883A1.5 1.5 0 0 1 8 1h.001zM7 13a1 1 0 1 0 2 0z" /></SvgRoot>;
});
export default IconBell2Fill;
