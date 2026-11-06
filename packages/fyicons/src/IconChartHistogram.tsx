import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartHistogram = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartHistogram(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-histogram"><path fill="currentColor" d="M1.6 11c.14 0 .21 0 .263.027a.25.25 0 0 1 .11.11C2 11.19 2 11.26 2 11.4V14H1v-2.6c0-.14 0-.21.027-.263a.25.25 0 0 1 .11-.11C1.19 11 1.26 11 1.4 11zm3-5c.14 0 .21 0 .263.027a.25.25 0 0 1 .11.11C5 6.19 5 6.26 5 6.4V14H4V6.4c0-.14 0-.21.027-.263a.25.25 0 0 1 .11-.11C4.19 6 4.26 6 4.4 6zm3-3c.14 0 .21 0 .263.027a.25.25 0 0 1 .11.11C8 3.19 8 3.26 8 3.4V14H7V3.4c0-.14 0-.21.027-.263a.25.25 0 0 1 .11-.11C7.19 3 7.26 3 7.4 3zm3 3c.14 0 .21 0 .263.027a.25.25 0 0 1 .11.11C11 6.19 11 6.26 11 6.4V14h-1V6.4c0-.14 0-.21.027-.263a.25.25 0 0 1 .11-.11C10.19 6 10.26 6 10.4 6zm3 3c.14 0 .21 0 .263.027a.25.25 0 0 1 .11.11C14 9.19 14 9.26 14 9.4V14h-1V9.4c0-.14 0-.21.027-.263a.25.25 0 0 1 .11-.11C13.19 9 13.26 9 13.4 9z" /></SvgRoot>;
});
export default IconChartHistogram;
