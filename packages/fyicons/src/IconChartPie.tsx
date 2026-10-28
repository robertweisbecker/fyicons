import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartPie = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartPie(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-pie"><path fill="currentColor" d="M8 1a7 7 0 1 1-.002 14A7 7 0 0 1 8 1M2.022 8.5a6 6 0 0 0 1.736 3.742A6 6 0 0 0 7.5 13.977V8.5zM8.5 13.977a6 6 0 0 0 1.796-.434 6.001 6.001 0 0 0 0-11.086A6 6 0 0 0 8.5 2.022zm-5.08-9.85A6 6 0 0 0 2.022 7.5h4.771zM7.5 2.022A6 6 0 0 0 4.127 3.42L7.5 6.794z" /></SvgRoot>;
});
export default IconChartPie;
