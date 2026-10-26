import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlowConnector = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlowConnector(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2.5a.5.5 0 0 1 .8-.4l2.667 2a.5.5 0 0 1 0 .8l-2.667 2a.5.5 0 0 1-.8-.4V5h-.501A1.5 1.5 0 0 0 9 6.5v3A2.5 2.5 0 0 1 6.5 12h-.55a2.501 2.501 0 1 1 0-1h.55A1.5 1.5 0 0 0 8 9.5v-3A2.5 2.5 0 0 1 10.499 4H11zM3.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconFlowConnector;
