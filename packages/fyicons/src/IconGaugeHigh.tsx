import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeHigh = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeHigh(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gauge-high"><path fill="currentColor" d="M8.001 1a7 7 0 0 1 2.357.41l-.796.797a6 6 0 0 0-4.894.804 6 6 0 0 0-2.552 6.16 6 6 0 0 0 1.643 3.071.502.502 0 0 1-.708.708A7.002 7.002 0 0 1 8 1m6.595 4.658a7 7 0 0 1-1.645 7.292.502.502 0 0 1-.708-.708 6 6 0 0 0 1.643-3.071 6 6 0 0 0-.09-2.715zM13.15 2.146a.5.5 0 1 1 .707.708L9.723 6.987a2 2 0 1 1-.706-.708zM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />{props.children}</SvgRoot>;
});
export default IconGaugeHigh;
