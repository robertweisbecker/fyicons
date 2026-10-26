import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAlarmClock = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAlarmClock(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.387 2.494a2.247 2.247 0 0 1 3.15 3.194 5.99 5.99 0 0 1-1.991 7.15l1.308 1.308a.5.5 0 1 1-.707.707l-1.48-1.479A6 6 0 0 1 8 14a6 6 0 0 1-2.668-.626l-1.478 1.48a.5.5 0 0 1-.708-.707l1.307-1.308A5.99 5.99 0 0 1 2 8c0-.835.17-1.63.478-2.352a2.249 2.249 0 0 1 3.17-3.17A6 6 0 0 1 8 2a6 6 0 0 1 2.387.494M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3m.5 2.5A.5.5 0 0 1 9 6v2.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h2V6a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconAlarmClock;
