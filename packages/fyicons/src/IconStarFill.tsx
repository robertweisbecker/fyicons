import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.03734 1.71072C7.40341 0.869925 8.59685 0.86915 8.96312 1.71072L10.4485 5.12869L14.1604 5.48709L14.3254 5.51541C15.1149 5.71563 15.3993 6.74799 14.7551 7.31815L11.9621 9.78787L12.7698 13.4275H12.7707C12.9683 14.323 12.0023 15.0239 11.2121 14.5594L8.00023 12.6668L4.7893 14.5594H4.78832C3.99864 15.0237 3.03252 14.324 3.2307 13.4275L4.03637 9.78787L1.24535 7.31815C0.558913 6.71021 0.926803 5.57562 1.84008 5.48709L5.55004 5.12869L7.03734 1.71072Z" fill="currentColor" /></SvgRoot>;
});
export default IconStarFill;
