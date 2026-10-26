import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCompassAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCompassAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m2.553 2.105a1 1 0 0 1 1.342 1.342l-2 4a1 1 0 0 1-.448.448l-4 2a1 1 0 0 1-1.342-1.342l2-4a1 1 0 0 1 .448-.448zM7 7l-2 4 4-2 2-4zm1 .25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></SvgRoot>;
});
export default IconCompassAlt;
