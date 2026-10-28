import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSidebarRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSidebarRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sidebar-right"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-3 9h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6V4z" /></SvgRoot>;
});
export default IconSidebarRight;
