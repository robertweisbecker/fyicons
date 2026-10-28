import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBatteryCharging = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBatteryCharging(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="battery-charging"><path d="M12 3C13.6569 3 15 4.34315 15 6C15.5523 6 16 6.44772 16 7V9C16 9.55228 15.5523 10 15 10C15 11.6569 13.6569 13 12 13H4C2.34315 13 1 11.6569 1 10V6C1 4.34315 2.34315 3 4 3H12ZM4 4C2.89543 4 2 4.89543 2 6V10C2 11.1046 2.89543 12 4 12H12C13.1046 12 14 11.1046 14 10V6C14 4.89543 13.1046 4 12 4H4ZM8.08789 5.21387C8.43488 4.79748 9.10606 5.13823 8.97461 5.66406L8.64062 7H9.97852C10.4109 7 10.6469 7.50473 10.3701 7.83691L7.91211 10.7861C7.56514 11.2024 6.89406 10.8617 7.02539 10.3359L7.35938 9H6.02148C5.58912 9 5.35315 8.49527 5.62988 8.16309L8.08789 5.21387Z" fill="currentColor" /></SvgRoot>;
});
export default IconBatteryCharging;
