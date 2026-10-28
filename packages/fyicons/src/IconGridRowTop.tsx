import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridRowTop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridRowTop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-row-top"><path fill="currentColor" fillOpacity={0.9} d="M12.5 14a.5.5 0 0 0 .5-.5V13h.5a.5.5 0 1 0 0-1H13V4h.5a.5.5 0 1 0 0-1H13v-.5a.5.5 0 1 0-1 0V3H4v-.5a.5.5 0 0 0-1 0V3h-.5a.5.5 0 0 0 0 1H3v8h-.5a.5.5 0 0 0 0 1H3v.5a.5.5 0 0 0 1 0V13h8v.5a.5.5 0 0 0 .5.5M4 4h8v8H4zm6.5 4a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5z" /></SvgRoot>;
});
export default IconGridRowTop;
