import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutHeader = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutHeader(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-header"><path fill="currentColor" d="M13.337 12c.316 0 .555.294.418.579A2.5 2.5 0 0 1 11.5 14a.5.5 0 0 1 0-1c.527 0 .99-.273 1.256-.684.115-.178.298-.316.51-.316zm-3.336 1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5M2.735 12c.211 0 .394.139.509.316.267.411.729.684 1.256.684a.5.5 0 1 1 0 1 2.5 2.5 0 0 1-2.255-1.421c-.137-.285.101-.579.418-.579zM14 10.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zM2.5 8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m9-6A2.5 2.5 0 0 1 14 4.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 0 11.5 3a.5.5 0 0 1 0-1m-7 0a.5.5 0 1 1 0 1A1.5 1.5 0 0 0 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2m5.001 0a.5.5 0 0 1 0 1h-3a.5.5 0 1 1 0-1z" /><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5V6h10V4.5A1.5 1.5 0 0 0 11.5 3z" /></SvgRoot>;
});
export default IconLayoutHeader;
