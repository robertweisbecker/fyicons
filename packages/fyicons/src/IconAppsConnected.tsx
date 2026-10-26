import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppsConnected = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppsConnected(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 2a2.5 2.5 0 1 1-1.379 4.585l-3.536 3.536a2.5 2.5 0 1 1-.707-.707l3.536-3.536A2.5 2.5 0 0 1 11.5 2m0 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-7 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7-8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconAppsConnected;
