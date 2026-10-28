import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAgentSubSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAgentSubSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="agent-sub-simple"><path fill="currentColor" d="M8 1.5a1.5 1.5 0 0 1 .5 2.912V6a4.5 4.5 0 0 1 4.472 4H13a1 1 0 0 1 .102 1.995L13 12v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V12l-.103-.005A1 1 0 0 1 3 10h.028A4.5 4.5 0 0 1 7.5 6V4.412A1.498 1.498 0 0 1 8 1.5M7.5 7A3.5 3.5 0 0 0 4 10.5V13h8v-2.5A3.5 3.5 0 0 0 8.5 7zm-1 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m3 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M8 2.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" /></SvgRoot>;
});
export default IconAgentSubSimple;
