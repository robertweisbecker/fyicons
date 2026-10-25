import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChartDonutFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChartDonutFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="chart-donut-fill"><path d="M7 5.17383C5.83532 5.58594 5 6.69415 5 8C5 9.48647 6.08118 10.7199 7.5 10.958V13.9766C4.42035 13.7224 2 11.1453 2 8C2 5.02706 4.16237 2.56013 7 2.08398V5.17383ZM13.915 9C13.4658 11.6768 11.2459 13.7499 8.5 13.9766V10.958C9.58379 10.7762 10.4678 10.0127 10.8262 9H13.915ZM8 1C8.91918 1 9.82949 1.1805 10.6787 1.53223C11.528 1.88401 12.3002 2.39979 12.9502 3.0498C13.6001 3.69979 14.115 4.47206 14.4668 5.32129C14.8185 6.17053 15 7.0808 15 8H11C11 6.34315 9.65685 5 8 5V1Z" fill="currentColor" /></SvgRoot>;
});
export default IconChartDonutFill;
