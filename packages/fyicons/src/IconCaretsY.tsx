import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretsY = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsY(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="carets-y"><path fill="currentColor" d="M10.293 10a.5.5 0 0 1 .354.854l-2.294 2.292a.5.5 0 0 1-.707 0l-2.293-2.293A.5.5 0 0 1 5.707 10zM7.646 2.853a.5.5 0 0 1 .707 0l2.294 2.293a.5.5 0 0 1-.354.854H5.707a.5.5 0 0 1-.354-.854z" /></SvgRoot>;
});
export default IconCaretsY;
