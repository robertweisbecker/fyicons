import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRulerMeasure = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRulerMeasure(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ruler-measure"><path fill="currentColor" d="M1 12.5A1.5 1.5 0 0 0 2.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 13.5 7h-11A1.5 1.5 0 0 0 1 8.5zM3 5V4h10v1h1V2h-1v1H3V2H2v3zM2 8.5a.5.5 0 0 1 .5-.5H4v3h1V8h2.5v2h1V8H11v3h1V8h1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z" /></SvgRoot>;
});
export default IconRulerMeasure;
