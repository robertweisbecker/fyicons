import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptopSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 3C13.1046 3 14 3.89543 14 5V10H14.125C14.5392 10 14.875 10.3358 14.875 10.75V11C14.875 12.1046 13.9796 13 12.875 13H3.125C2.02043 13 1.125 12.1046 1.125 11V10.75C1.125 10.3358 1.46079 10 1.875 10H2V5C2 3.89543 2.89543 3 4 3H12ZM2.125 11C2.125 11.5523 2.57272 12 3.125 12H12.875C13.4273 12 13.875 11.5523 13.875 11H2.125ZM4 4C3.44772 4 3 4.44772 3 5V10H13V5C13 4.44772 12.5523 4 12 4H4Z" fill="currentColor" /></SvgRoot>;
});
export default IconLaptopSimple;
