import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppsConnected = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppsConnected(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="apps-connected"><path fill="currentColor" d="M11.5 1.665a2.835 2.835 0 1 1-1.62 5.16L6.826 9.881a2.835 2.835 0 1 1-.707-.707l3.056-3.056A2.835 2.835 0 0 1 11.5 1.665m0 7a2.835 2.835 0 1 1 0 5.67 2.835 2.835 0 0 1 0-5.67m-7 1a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67m7 0a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67m-7-8a2.835 2.835 0 1 1 0 5.67 2.835 2.835 0 0 1 0-5.67m0 1a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67m7 0a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67" /></SvgRoot>;
});
export default IconAppsConnected;
