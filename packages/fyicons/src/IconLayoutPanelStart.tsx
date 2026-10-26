import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutPanelStart = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutPanelStart(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6 12.501a.5.5 0 0 1-.5.5H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 .5.5zm-3-8.5a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h2V4.001zm7-.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m0 9a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m5-7a.5.5 0 0 1-1 0v-.5a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1 0-1H13a2 2 0 0 1 2 2zm0 5.5a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1 0-1H13a1 1 0 0 0 1-1v-.5a.5.5 0 1 1 1 0zm0-2.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0z" /></SvgRoot>;
});
export default IconLayoutPanelStart;
