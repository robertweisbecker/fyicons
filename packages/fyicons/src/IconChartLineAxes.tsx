import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartLineAxes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartLineAxes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-line-axes"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 13.5h-11v-11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5 6.5-3 3-3-3-3 3" />{props.children}</SvgRoot>;
});
export default IconChartLineAxes;
