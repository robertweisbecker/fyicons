import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconZoomOut = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconZoomOut(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="zoom-out"><path fill="currentColor" d="M7 2a5 5 0 0 1 3.871 8.164l2.981 2.982a.5.5 0 1 1-.707.706l-2.98-2.98A5 5 0 1 1 7 2m0 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1.5 3.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconZoomOut;
