import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutSidebarEnd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutSidebarEnd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10 12.501a.5.5 0 0 0 .5.5H13a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2.5a.5.5 0 0 0-.5.5zm3-8.5a1 1 0 0 1 1 1V11a1 1 0 0 1-1 1h-2V4.001zm-7-.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5m0 9a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5m-5-7a.5.5 0 0 0 1 0v-.5a1 1 0 0 1 1-1h1.5a.5.5 0 0 0 0-1H3a2 2 0 0 0-2 2zm0 5.5a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 0-1H3a1 1 0 0 1-1-1v-.5a.5.5 0 1 0-1 0zm0-2.5a.5.5 0 0 0 1 0v-1a.5.5 0 1 0-1 0z" /></SvgRoot>;
});
export default IconLayoutSidebarEnd;
