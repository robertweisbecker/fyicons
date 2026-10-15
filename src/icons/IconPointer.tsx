import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPointer = React.forwardRef<SVGSVGElement, IconProps>(function IconPointer(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M1.65807 3.55534C1.26752 2.38286 2.38304 1.26714 3.55553 1.65788L13.2421 4.8864C14.5353 5.31749 14.6295 7.11125 13.3885 7.67546L9.45983 9.45964L7.67565 13.3883C7.11151 14.6295 5.3177 14.5352 4.88658 13.2419L1.65807 3.55534ZM3.23912 2.60612C2.84846 2.47608 2.47646 2.84828 2.60631 3.23894L5.8358 12.9255C5.97951 13.3566 6.57744 13.388 6.76549 12.9743L8.62779 8.87565C8.67782 8.76598 8.76612 8.67756 8.87584 8.62761L12.9745 6.7653C13.388 6.57719 13.3567 5.9793 12.9256 5.83562L3.23912 2.60612Z" fill="currentColor" /></SvgRoot>;
});
export default IconPointer;
