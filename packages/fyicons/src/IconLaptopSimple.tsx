import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptopSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 3C13.1046 3 14 3.89543 14 5V10.0244C14.5706 10.1402 15 10.6452 15 11.25V11.75C15 12.4404 14.4404 13 13.75 13H2.25C1.55964 13 1 12.4404 1 11.75V11.25C1 10.6452 1.42938 10.1402 2 10.0244V5C2 3.89543 2.89543 3 4 3H12ZM2.25 11C2.11193 11 2 11.1119 2 11.25V11.75C2 11.8881 2.11193 12 2.25 12H13.75C13.8881 12 14 11.8881 14 11.75V11.25C14 11.1119 13.8881 11 13.75 11H2.25ZM4 4C3.44772 4 3 4.44772 3 5V10H13V5C13 4.44772 12.5523 4 12 4H4Z" fill="currentColor" /></SvgRoot>;
});
export default IconLaptopSimple;
