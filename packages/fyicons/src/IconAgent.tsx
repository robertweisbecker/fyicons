import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAgent = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAgent(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a1.5 1.5 0 0 1 .5 2.912V4H10a3 3 0 0 1 3 3v.087A1.5 1.5 0 0 1 14 8.5v1.75a.75.75 0 0 1-.364.64 2.02 2.02 0 0 1-.71 1.442C12.009 13.112 10.426 14 8 14c-2.415 0-3.994-.866-4.913-1.63a2.04 2.04 0 0 1-.732-1.521.83.83 0 0 1-.355-.682V8.5a1.5 1.5 0 0 1 1-1.413V7a3 3 0 0 1 3-3h1.5v-.088A1.498 1.498 0 0 1 8 1M6 5a2 2 0 0 0-2 2v1.345a3 3 0 0 1-.294 1.296l-.174.362c-.3.629-.216 1.256.195 1.599C4.487 12.235 5.847 13 8 13c2.159 0 3.518-.783 4.278-1.43.409-.347.487-.977.181-1.603l-.153-.315A3 3 0 0 1 12 8.333V7a2 2 0 0 0-2-2H8.5v.5a.5.5 0 0 1-1 0V5zm.5 2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m3 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M8 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" /></SvgRoot>;
});
export default IconAgent;
