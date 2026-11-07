import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartLine = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartLine(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-line"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 12.5h3l2-2 4 2 3-3m-13-1L5 7l2.5-2.5 3 2 4-3" /></SvgRoot>;
});
export default IconChartLine;
