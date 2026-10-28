import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClockFillAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconClockFillAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="clock-fill-alt"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 1a5 5 0 1 1 0 10A5 5 0 0 1 8 3m.5 1a.5.5 0 0 0-.5.5V8H5.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5" /></SvgRoot>;
});
export default IconClockFillAlt;
