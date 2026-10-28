import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartDonut = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartDonut(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-donut"><path fill="currentColor" d="M8 1a7 7 0 0 1 7 7v1h-1.085a6 6 0 0 1-2.158 3.678 6 6 0 0 1-3.744 1.32L8 14l-.024-.001q-.1 0-.2-.005l-.095-.004-.177-.013-.122-.01-.033-.002-.015-.004A5.998 5.998 0 0 1 7.5 2.022V1zm-.5 2.024a5 5 0 0 0-.022 9.948q.012 0 .022.002v-1.51a3.5 3.5 0 0 1 0-6.929zM11.355 9A3.5 3.5 0 0 1 8.5 11.464v1.509q.458-.045.9-.173A5 5 0 0 0 12.9 9zM8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m.5-.965c1.697.243 3 1.702 3 3.465H14a6 6 0 0 0-5.5-5.978z" /></SvgRoot>;
});
export default IconChartDonut;
