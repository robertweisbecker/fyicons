import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartPieFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartPieFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-pie-fill"><path fill="currentColor" d="M8 15a7 7 0 0 1-6.928-6H8zM9 1.072a7 7 0 0 1 0 13.855zM7.782 8H1c0-1.775.662-3.396 1.751-4.63zM8 6.84 3.466 2.668A6.97 6.97 0 0 1 8 1z" /></SvgRoot>;
});
export default IconChartPieFill;
