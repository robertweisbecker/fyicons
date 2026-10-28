import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptopFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.58594 11C5.8511 11 6.10547 11.1055 6.29297 11.293L6.70703 11.707C6.89453 11.8945 7.1489 12 7.41406 12H8.58594C8.8511 12 9.10547 11.8945 9.29297 11.707L9.70703 11.293C9.89453 11.1055 10.1489 11 10.4141 11H13V5C13 4.44772 12.5523 4 12 4H4C3.44772 4 3 4.44772 3 5V11H5.58594ZM15 11.5C15 12.3284 14.3284 13 13.5 13H2.5C1.67157 13 1 12.3284 1 11.5V11H2V5C2 3.89543 2.89543 3 4 3H12C13.1046 3 14 3.89543 14 5V11H15V11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconLaptopFill;
