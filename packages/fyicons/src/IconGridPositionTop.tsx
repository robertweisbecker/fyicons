import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridPositionTop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridPositionTop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-position-top"><path fill="currentColor" fillOpacity={0.9} d="M13.5 15a.5.5 0 0 0 .5-.5V14h.5a.5.5 0 0 0 0-1H14V3h.5a.5.5 0 0 0 0-1H14v-.5a.5.5 0 0 0-1 0V2H3v-.5a.5.5 0 0 0-1 0V2h-.5a.5.5 0 0 0 0 1H2v10h-.5a.5.5 0 0 0 0 1H2v.5a.5.5 0 0 0 1 0V14h10v.5a.5.5 0 0 0 .5.5M3 3h10v10H3zm8.5 5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5z" /></SvgRoot>;
});
export default IconGridPositionTop;
