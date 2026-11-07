import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartLineAxes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartLineAxes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-line-axes"><path fill="currentColor" d="M2.5 2a.5.5 0 0 1 .5.5V13h10.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5m10.647 4.146a.5.5 0 0 1 .707.707l-3 3a.5.5 0 0 1-.707 0L7.5 7.207 4.854 9.853a.5.5 0 0 1-.708-.707l3-3 .079-.064a.5.5 0 0 1 .629.064L10.5 8.793z" /></SvgRoot>;
});
export default IconChartLineAxes;
