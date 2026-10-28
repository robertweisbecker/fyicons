import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWrenchTilt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWrenchTilt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.146 3.146a4.03 4.03 0 0 1 3.598-1.11l.113.033a.5.5 0 0 1 .232.7L9.952 4.815a.91.91 0 0 0 .152 1.081l.115.097c.28.2.657.227.966.055l2.046-1.138.11-.045a.5.5 0 0 1 .624.39 4.032 4.032 0 0 1-4.888 4.67l-2.82 3.29A2.464 2.464 0 1 1 2.785 9.74l3.289-2.82a4.03 4.03 0 0 1 1.073-3.775m2.688-.177a3.038 3.038 0 0 0-2.72 3.973.5.5 0 0 1-.151.533l-3.529 3.024A1.465 1.465 0 1 0 5.5 12.564l3.024-3.528a.5.5 0 0 1 .534-.15 3.035 3.035 0 0 0 3.971-2.722l-1.358.757h-.001a1.905 1.905 0 0 1-2.592-2.59zM4.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1" /></SvgRoot>;
});
export default IconWrenchTilt;
