import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBatteryMedium = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBatteryMedium(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="battery-medium"><path d="M12 3C13.6569 3 15 4.34315 15 6C15.5523 6 16 6.44772 16 7V9C16 9.55228 15.5523 10 15 10C15 11.6569 13.6569 13 12 13H4C2.34315 13 1 11.6569 1 10V6C1 4.34315 2.34315 3 4 3H12ZM4 4C2.89543 4 2 4.89543 2 6V10C2 11.1046 2.89543 12 4 12H12C13.1046 12 14 11.1046 14 10V6C14 4.89543 13.1046 4 12 4H4ZM7 5C7.55228 5 8 5.44772 8 6V10C8 10.5523 7.55228 11 7 11H4C3.44772 11 3 10.5523 3 10V6C3 5.44772 3.44772 5 4 5H7Z" fill="currentColor" /></SvgRoot>;
});
export default IconBatteryMedium;
