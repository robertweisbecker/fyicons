import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBug = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBug(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.5 1a.5.5 0 0 1 .5.5c0 .609-.262 1.177-.702 1.573.438.522.703 1.193.703 1.927v.087c.428.152.765.492.915.92L12 6a1 1 0 0 0 1-1v-.5a.5.5 0 1 1 1 0V5a2 2 0 0 1-2 2v1h1.5a.5.5 0 0 1 0 1H12v1.05c1.14.232 2 1.24 2 2.45a.5.5 0 0 1-1 0 1.5 1.5 0 0 0-1.021-1.42c-.1 1.255-.601 2.208-1.306 2.862A3.98 3.98 0 0 1 8 15a3.98 3.98 0 0 1-2.673-1.058c-.705-.654-1.208-1.607-1.308-2.863A1.5 1.5 0 0 0 3 12.5a.5.5 0 0 1-1 0 2.5 2.5 0 0 1 2-2.45V9H2.5a.5.5 0 0 1 0-1H4V7l-.205-.01A2 2 0 0 1 2 5v-.5a.5.5 0 0 1 1 0V5a1 1 0 0 0 1 1q.043 0 .083.008c.15-.43.489-.77.917-.921V5c0-.734.263-1.406.7-1.927A2.12 2.12 0 0 1 5 1.5a.5.5 0 0 1 1 0c0 .369.182.71.479.917a2.98 2.98 0 0 1 3.041 0c.298-.207.48-.548.48-.917a.5.5 0 0 1 .5-.5m-5 5a.5.5 0 0 0-.5.5v4.111c0 1.232.436 2.068 1.007 2.599A2.98 2.98 0 0 0 8 14c.66 0 1.412-.25 1.994-.79.57-.53 1.006-1.367 1.007-2.599V6.5a.5.5 0 0 0-.5-.5zM8 3a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2" /></SvgRoot>;
});
export default IconBug;
