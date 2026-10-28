import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeNoneFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeNoneFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-none-fill"><path d="M6.91992 2.23657C7.726 1.52006 8.99983 2.09174 9 3.17017V12.8303C8.99972 13.9086 7.72596 14.4803 6.91992 13.7639L3.81055 11.0002H1.5C0.671628 11.0002 7.76759e-05 10.3286 0 9.50024V6.50024C9.43067e-05 5.67194 0.671672 5.0003 1.5 5.00024H3.80957L6.91992 2.23657Z" fill="currentColor" /></SvgRoot>;
});
export default IconVolumeNoneFill;
