import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridPositionBottom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridPositionBottom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-position-bottom"><path fill="currentColor" fillOpacity={0.9} d="M13.5 1a.5.5 0 0 1 .5.5V2h.5a.5.5 0 0 1 0 1H14v10h.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-1 0V14H3v.5a.5.5 0 0 1-1 0V14h-.5a.5.5 0 0 1 0-1H2V3h-.5a.5.5 0 0 1 0-1H2v-.5a.5.5 0 0 1 1 0V2h10v-.5a.5.5 0 0 1 .5-.5M3 13h10V3H3zm8.5-5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconGridPositionBottom;
