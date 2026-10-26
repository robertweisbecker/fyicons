import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartDonutFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartDonutFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7 5.174a2.999 2.999 0 0 0 .5 5.784v3.019A5.998 5.998 0 0 1 7 2.084zM13.915 9A6 6 0 0 1 8.5 13.977v-3.019A3 3 0 0 0 10.826 9zM8 1a7 7 0 0 1 7 7h-4a3 3 0 0 0-3-3z" /></SvgRoot>;
});
export default IconChartDonutFill;
