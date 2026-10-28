import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartHistogram = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartHistogram(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-histogram"><path fill="currentColor" d="M3.6 8c.14 0 .21 0 .263.027a.25.25 0 0 1 .11.11C4 8.19 4 8.26 4 8.4V14H3V8.4c0-.14 0-.21.027-.263a.25.25 0 0 1 .11-.11C3.19 8 3.26 8 3.4 8zm3-6c.14 0 .21 0 .263.027a.25.25 0 0 1 .11.11C7 2.19 7 2.26 7 2.4V14H6V2.4c0-.14 0-.21.027-.263a.25.25 0 0 1 .11-.11C6.19 2 6.26 2 6.4 2zm3 4c.14 0 .21 0 .263.027a.25.25 0 0 1 .11.11C10 6.19 10 6.26 10 6.4V14H9V6.4c0-.14 0-.21.027-.263a.25.25 0 0 1 .11-.11C9.19 6 9.26 6 9.4 6zm3 4c.14 0 .21 0 .263.027a.25.25 0 0 1 .11.11c.027.053.027.123.027.263V14h-1v-3.6c0-.14 0-.21.027-.263a.25.25 0 0 1 .11-.11C12.19 10 12.26 10 12.4 10z" /></SvgRoot>;
});
export default IconChartHistogram;
