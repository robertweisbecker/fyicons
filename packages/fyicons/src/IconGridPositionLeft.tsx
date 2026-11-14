import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridPositionLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridPositionLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-position-left"><path fill="currentColor" fillOpacity={0.9} d="M15 13.5a.5.5 0 0 1-.5.5H14v.5a.5.5 0 0 1-1 0V14H3v.5a.5.5 0 0 1-1 0V14h-.5a.5.5 0 0 1 0-1H2V3h-.5a.5.5 0 0 1 0-1H2v-.5a.5.5 0 0 1 1 0V2h10v-.5a.5.5 0 0 1 1 0V2h.5a.5.5 0 0 1 0 1H14v10h.5a.5.5 0 0 1 .5.5M3 3v10h10V3zm5 8.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5z" /></SvgRoot>;
});
export default IconGridPositionLeft;
