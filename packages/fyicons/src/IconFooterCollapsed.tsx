import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFooterCollapsed = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFooterCollapsed(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="footer-collapsed"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm9.5 6a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconFooterCollapsed;
