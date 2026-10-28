import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppsConnected = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppsConnected(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 1.75a2.75 2.75 0 1 1-1.559 5.015L6.765 9.94a2.75 2.75 0 1 1-.707-.707l3.176-3.176A2.75 2.75 0 0 1 11.5 1.75m0 7a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m-7 1a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-7-8a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" /></SvgRoot>;
});
export default IconAppsConnected;
