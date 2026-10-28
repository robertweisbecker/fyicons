import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDotsTriangleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDotsTriangleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="dots-triangle-fill"><path fill="currentColor" d="M4.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m7 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M8 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" /></SvgRoot>;
});
export default IconDotsTriangleFill;
