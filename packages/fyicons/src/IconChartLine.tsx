import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartLine = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartLine(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-line"><path fill="currentColor" d="M2.5 2a.5.5 0 0 1 .5.5V13h10.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5m10.723 6.084a.5.5 0 0 1 .554.832l-3 2a.5.5 0 0 1-.554 0L7.426 9.052l-2.768.922a.5.5 0 0 1-.316-.949l3-1 .112-.023a.5.5 0 0 1 .323.082L10.5 9.898zm-.077-4.938a.5.5 0 0 1 .707.707l-3 3a.5.5 0 0 1-.707 0L7.5 4.207 4.854 6.853a.5.5 0 1 1-.708-.707l3-3 .079-.064a.5.5 0 0 1 .629.064L10.5 5.793z" /></SvgRoot>;
});
export default IconChartLine;
