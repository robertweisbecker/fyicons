import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBoltFlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBoltFlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="bolt-flash"><path d="M11.5 1C11.6767 1.00004 11.8407 1.09309 11.9307 1.24512C12.0206 1.39726 12.0236 1.58634 11.9385 1.74121L9.5957 6H12.5C12.6893 6.00005 12.8626 6.10701 12.9473 6.27637C13.0319 6.44561 13.0138 6.64835 12.9004 6.7998L6.90039 14.7998C6.77128 14.9719 6.54594 15.0426 6.3418 14.9746C6.13763 14.9066 6 14.7152 6 14.5V10H3.5C3.35661 10 3.21991 9.93853 3.125 9.83105C3.03009 9.72354 2.98612 9.57981 3.00391 9.4375L4.00391 1.4375L4.02344 1.34766C4.08844 1.14389 4.27922 1 4.5 1H11.5ZM4.06641 9H7V12.999L11.5 7H7.9043L8.31152 6.25879L10.6543 2H4.94141L4.06641 9Z" fill="currentColor" /></SvgRoot>;
});
export default IconBoltFlash;
