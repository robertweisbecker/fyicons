import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeSimpleHigh = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeSimpleHigh(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gauge-simple-high"><path fill="currentColor" d="M8.002 1c.807 0 1.604.14 2.357.41l-.797.797a6 6 0 0 0-4.893.804 6.003 6.003 0 0 0-.91 9.231.502.502 0 0 1-.708.708A7.001 7.001 0 0 1 8.001 1m6.594 4.658a7 7 0 0 1-1.644 7.292.502.502 0 0 1-.708-.708 6 6 0 0 0 1.642-3.071 6 6 0 0 0-.088-2.715zM13.15 2.146a.5.5 0 0 1 .707.708L9.722 6.987a2 2 0 1 1-.706-.708zM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGaugeSimpleHigh;
