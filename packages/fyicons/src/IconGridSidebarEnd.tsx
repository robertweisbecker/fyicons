import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridSidebarEnd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridSidebarEnd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-sidebar-end"><path fill="currentColor" d="M6 9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm7-7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM3 10v3h3v-3zm7 3h3V3h-3zM6 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM3 6h3V3H3z" /></SvgRoot>;
});
export default IconGridSidebarEnd;
