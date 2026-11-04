import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartLine = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartLine(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-line"><path fill="currentColor" d="M2.5 2a.5.5 0 0 1 .5.5V13h10.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5m9.584 2.222a.5.5 0 0 1 .832.555L11.361 7.11A2 2 0 0 1 9.697 8H8.303a1 1 0 0 0-.832.446l-1.555 2.332a.5.5 0 0 1-.832-.555L6.639 7.89A2 2 0 0 1 8.303 7h1.394a1 1 0 0 0 .832-.446z" /></SvgRoot>;
});
export default IconChartLine;
