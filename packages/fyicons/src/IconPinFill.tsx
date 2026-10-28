import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPinFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPinFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 11L3.58594 13.414C3.21094 13.789 2.7022 13.9999 2.17188 14H2V13.8281C2.00008 13.2978 2.21094 12.789 2.58594 12.414L5 9.99997L6 11ZM8.59766 2.49509C9.24317 1.33416 10.8204 1.11342 11.7598 2.05271L13.9473 4.24021C14.8866 5.1796 14.6658 6.75678 13.5049 7.40232L10.9316 8.832L10.1992 11.7646C10.0106 12.5183 9.07207 12.7784 8.52246 12.2295L3.77051 7.47751C3.22167 6.92792 3.48186 5.98949 4.23535 5.80075L7.16699 5.06735L8.59766 2.49509Z" fill="currentColor" /></SvgRoot>;
});
export default IconPinFill;
