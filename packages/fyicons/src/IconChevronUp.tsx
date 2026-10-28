import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.1469 9.85355C12.3422 10.0488 12.6587 10.0488 12.8539 9.85355C13.0491 9.65828 13.0492 9.34175 12.8539 9.14652L8.35395 4.64652C8.15872 4.45133 7.84217 4.45138 7.64691 4.64652L3.14691 9.14652C2.95167 9.34177 2.95169 9.65829 3.14691 9.85355C3.34218 10.0488 3.65868 10.0488 3.85395 9.85355L8.00043 5.70707L12.1469 9.85355Z" fill="currentColor" /></SvgRoot>;
});
export default IconChevronUp;
