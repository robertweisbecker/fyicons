import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBatteryCharging = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBatteryCharging(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 3a3 3 0 0 1 3 3 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1 3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm4.13 1.164a.5.5 0 0 1 .827.54L8.27 7.25h1.48a.5.5 0 0 1 .387.816l-2.25 2.75a.5.5 0 0 1-.875-.424l.365-1.642H6a.5.5 0 0 1-.37-.836z" /></SvgRoot>;
});
export default IconBatteryCharging;
