import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLuggage = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLuggage(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="luggage"><path d="M9.5 2C10.3284 2 11 2.67157 11 3.5V4H13C14.1046 4 15 4.89543 15 6V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V6C1 4.89543 1.89543 4 3 4H5V3.5C5 2.67157 5.67157 2 6.5 2H9.5ZM3 5C2.44772 5 2 5.44772 2 6V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V6C14 5.44772 13.5523 5 13 5H11V6.29297L11.8535 7.14648C11.9473 7.24025 12 7.36739 12 7.5V9.5C12 9.77614 11.7761 10 11.5 10H9.5C9.22386 10 9 9.77614 9 9.5V7.5C9 7.36739 9.05272 7.24025 9.14648 7.14648L10 6.29297V5H3ZM10 7.70703V9H11V7.70703L10.5 7.20703L10 7.70703ZM6.5 3C6.22386 3 6 3.22386 6 3.5V4H10V3.5C10 3.22386 9.77614 3 9.5 3H6.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconLuggage;
