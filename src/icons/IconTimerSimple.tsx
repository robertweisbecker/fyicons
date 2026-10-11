import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTimerSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconTimerSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1.5C9.49894 1.5 10.9518 2.01806 12.1126 2.96645C13.2734 3.91484 14.0707 5.23526 14.3695 6.70411C14.6684 8.17296 14.4503 9.69995 13.7524 11.0265C13.0545 12.353 11.9195 13.3976 10.5398 13.9833C9.15997 14.569 7.62017 14.6598 6.18111 14.2403C4.74206 13.8209 3.49219 12.917 2.64318 11.6816C1.79417 10.4463 1.3982 8.95554 1.52232 7.46175C1.64645 5.96796 2.28304 4.56297 3.32429 3.48472" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path d="M8.70751 7.28826C9.09803 7.67879 9.09803 8.31195 8.70751 8.70247C8.31698 9.093 7.68382 9.093 7.29329 8.70247C7.02717 8.43635 5.82703 6.58134 5.08945 5.42657C4.94627 5.2024 5.20392 4.94443 5.42827 5.08734C6.58422 5.8237 8.44136 7.02211 8.70751 7.28826Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M7.5 3.5V1.5H8.25" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconTimerSimple;
