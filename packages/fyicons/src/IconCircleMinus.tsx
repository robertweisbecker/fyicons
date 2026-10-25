import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleMinus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleMinus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-minus"><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM11.3398 7.70996C11.7071 7.70996 12.0049 8.00773 12.0049 8.375C12.0049 8.74227 11.7071 9.04004 11.3398 9.04004H4.66992C4.30265 9.04004 4.00488 8.74227 4.00488 8.375C4.00488 8.00773 4.30265 7.70996 4.66992 7.70996H11.3398Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleMinus;
