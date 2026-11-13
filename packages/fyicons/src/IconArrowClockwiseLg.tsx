import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowClockwiseLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowClockwiseLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-clockwise-lg"><path stroke="currentColor" strokeLinecap="round" d="M14.488 7.584a6.5 6.5 0 1 1-2.195-4.465" /><path fill="currentColor" d="M13.671 5.001h-2.873a.33.33 0 0 1-.234-.563l2.874-2.874a.33.33 0 0 1 .563.234V4.67a.33.33 0 0 1-.33.33" /></SvgRoot>;
});
export default IconArrowClockwiseLg;
