import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCompassSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCompassSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="compass-simple"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m3.368 2.018a.5.5 0 0 1 .614.614l-1.048 3.846a3.5 3.5 0 0 1-2.456 2.456l-3.846 1.048a.5.5 0 0 1-.614-.614l1.048-3.846a3.5 3.5 0 0 1 2.456-2.456zM7.785 6.03a2.5 2.5 0 0 0-1.754 1.754l-.82 3.002 3.004-.818a2.5 2.5 0 0 0 1.754-1.754l.818-3.003zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></SvgRoot>;
});
export default IconCompassSimple;
