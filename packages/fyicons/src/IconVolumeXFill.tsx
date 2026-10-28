import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeXFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeXFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-x-fill"><path d="M6.91992 2.2365C7.726 1.51999 8.99983 2.09167 9 3.17009V12.8302C8.99972 13.9086 7.72596 14.4802 6.91992 13.7638L3.81055 11.0002H1.5C0.671628 11.0002 7.76759e-05 10.3285 0 9.50017V6.50017C9.43067e-05 5.67186 0.671672 5.00023 1.5 5.00017H3.80957L6.91992 2.2365Z" fill="currentColor" /><path d="M14.5 6.5L11.5 9.5" stroke="currentColor" strokeLinecap="round" /><path d="M11.5 6.5L14.5 9.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconVolumeXFill;
