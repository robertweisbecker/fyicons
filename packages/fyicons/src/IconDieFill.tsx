import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDieFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDieFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="die-fill"><path fill="currentColor" d="M6.614 5.06a1.775 1.775 0 0 1 2.174 1.256l1.152 4.298a1.776 1.776 0 0 1-1.256 2.174l-4.297 1.151a1.775 1.775 0 0 1-2.174-1.255L1.06 8.387a1.776 1.776 0 0 1 1.256-2.175zM7.001 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6.518-5.433a1.134 1.134 0 0 1 1.549-.415l2.366 1.365c.542.314.728 1.008.415 1.55l-1.366 2.365a1.134 1.134 0 0 1-1.55.416L9.568 6.482a1.135 1.135 0 0 1-.415-1.55zm1.48 1.683a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5" /></SvgRoot>;
});
export default IconDieFill;
