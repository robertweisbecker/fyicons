import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridRowBottom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridRowBottom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" fillOpacity={0.9} d="M12.5 2a.5.5 0 0 1 .5.5V3h.5a.5.5 0 1 1 0 1H13v8h.5a.5.5 0 1 1 0 1H13v.5a.5.5 0 1 1-1 0V13H4v.5a.5.5 0 0 1-1 0V13h-.5a.5.5 0 0 1 0-1H3V4h-.5a.5.5 0 0 1 0-1H3v-.5a.5.5 0 0 1 1 0V3h8v-.5a.5.5 0 0 1 .5-.5M4 12h8V4H4zm6.5-4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconGridRowBottom;
