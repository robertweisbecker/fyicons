import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptopSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 3C13.1046 3 14 3.89543 14 5V10C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H2C1.44772 12 1 11.5523 1 11C1 10.4477 1.44772 10 2 10V5C2 3.89543 2.89543 3 4 3H12ZM4 4C3.44772 4 3 4.44772 3 5V10H13V5C13 4.44772 12.5523 4 12 4H4Z" fill="currentColor" /></SvgRoot>;
});
export default IconLaptopSimple;
