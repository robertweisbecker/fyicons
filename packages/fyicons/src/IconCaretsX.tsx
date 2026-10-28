import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretsX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="carets-x"><path fill="currentColor" d="M5.148 5.354a.5.5 0 0 1 .854.353v4.586a.5.5 0 0 1-.854.354L2.855 8.354a.5.5 0 0 1 0-.707zm4.853.353a.5.5 0 0 1 .853-.353l2.293 2.293a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 1-.853-.354z" /></SvgRoot>;
});
export default IconCaretsX;
