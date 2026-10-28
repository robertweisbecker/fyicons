import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClockFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconClockFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="clock-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m.5 2a.5.5 0 0 0-.5.5V8H4.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5" /></SvgRoot>;
});
export default IconClockFill;
