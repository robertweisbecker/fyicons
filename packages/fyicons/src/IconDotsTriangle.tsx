import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDotsTriangle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDotsTriangle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="dots-triangle"><path fill="currentColor" d="M4.25 8a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m7.5 0a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m-7.5 1a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7.5 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8 2a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 8 2m0 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 8 3" /></SvgRoot>;
});
export default IconDotsTriangle;
