import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRadar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRadar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.32 1.533a7 7 0 0 1 7.264 1.176l.563-.562a.5.5 0 0 1 .707.707l-5.5 5.5a.5.5 0 0 1-.707-.707l2.14-2.14a2.996 2.996 0 0 0-4.762 2.016 3.002 3.002 0 0 0 4.475 2.99.5.5 0 0 1 .5.865 4 4 0 1 1-1.092-7.36 4 4 0 0 1 1.59.776l1.376-1.375A5.997 5.997 0 0 0 2 8a6 6 0 0 0 7.17 5.885 6 6 0 0 0 3.072-1.642.502.502 0 0 1 .708.708A7.002 7.002 0 0 1 1 8a7 7 0 0 1 4.32-6.467" /></SvgRoot>;
});
export default IconRadar;
