import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBatteryLow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBatteryLow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="battery-low"><path fill="currentColor" d="M12 3a3 3 0 0 1 3 3 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1 3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1" /></SvgRoot>;
});
export default IconBatteryLow;
