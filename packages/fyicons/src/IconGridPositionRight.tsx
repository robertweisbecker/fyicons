import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridPositionRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridPositionRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-position-right"><path fill="currentColor" fillOpacity={0.9} d="M1 13.5a.5.5 0 0 0 .5.5H2v.5a.5.5 0 0 0 1 0V14h10v.5a.5.5 0 0 0 1 0V14h.5a.5.5 0 0 0 0-1H14V3h.5a.5.5 0 0 0 0-1H14v-.5a.5.5 0 0 0-1 0V2H3v-.5a.5.5 0 0 0-1 0V2h-.5a.5.5 0 0 0 0 1H2v10h-.5a.5.5 0 0 0-.5.5M13 3v10H3V3zm-5 8.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5z" /></SvgRoot>;
});
export default IconGridPositionRight;
