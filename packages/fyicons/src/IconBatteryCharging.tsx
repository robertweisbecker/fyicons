import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBatteryCharging = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBatteryCharging(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="battery-charging"><path fill="currentColor" d="M12 3a3 3 0 0 1 3 3 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1 3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm4.088 1.214c.347-.417 1.018-.076.887.45L8.64 7h1.338a.51.51 0 0 1 .391.837l-2.458 2.95c-.347.415-1.018.075-.887-.451L7.36 9H6.021a.51.51 0 0 1-.391-.837z" /></SvgRoot>;
});
export default IconBatteryCharging;
