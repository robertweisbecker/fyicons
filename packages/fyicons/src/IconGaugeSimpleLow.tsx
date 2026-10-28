import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeSimpleLow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeSimpleLow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gauge-simple-low"><path fill="currentColor" d="M2.207 6.444a6 6 0 0 0 1.551 5.799.502.502 0 0 1-.708.708 7 7 0 0 1-1.64-7.305zM8 1a7.001 7.001 0 0 1 4.95 11.95.502.502 0 0 1-.708-.707 6 6 0 0 0-.91-9.232 6 6 0 0 0-4.881-.808l-.798-.797A7 7 0 0 1 8 1M2.15 2.147a.5.5 0 0 1 .707 0l4.13 4.13a2 2 0 1 1-.708.706L2.15 2.854a.5.5 0 0 1 0-.707M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGaugeSimpleLow;
