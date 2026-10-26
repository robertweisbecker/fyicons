import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBug = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBug(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.5 1a.5.5 0 0 1 .5.5c0 .609-.262 1.177-.702 1.573.438.522.703 1.193.703 1.927v.087c.428.152.765.492.915.92L12 6a1 1 0 0 0 1-1V3.5a.5.5 0 1 1 1 0V5a2 2 0 0 1-2 2v1h1.5a.5.5 0 0 1 0 1H12v1.043l-.002.007A2.5 2.5 0 0 1 14 12.5v1a.5.5 0 0 1-1 0v-1a1.5 1.5 0 0 0-1.115-1.448c-.2.86-.65 1.53-1.234 2.013C9.872 13.709 8.88 14 8 14s-1.87-.291-2.65-.935a3.64 3.64 0 0 1-1.237-2.013A1.5 1.5 0 0 0 3 12.5v1a.5.5 0 0 1-1 0v-1c0-1.21.86-2.219 2-2.45V9H2.5a.5.5 0 1 1 0-1H4V7l-.205-.01A2 2 0 0 1 2 5V3.5a.5.5 0 0 1 1 0V5a1 1 0 0 0 1 1q.043 0 .083.008c.15-.43.489-.77.917-.921V5c0-.734.263-1.406.7-1.927A2.12 2.12 0 0 1 5 1.5a.5.5 0 0 1 1 0c0 .369.182.71.479.917a2.98 2.98 0 0 1 3.041 0c.298-.207.48-.548.48-.917a.5.5 0 0 1 .5-.5m-5 5a.5.5 0 0 0-.5.5v3.543c0 1.06.42 1.783.986 2.25.58.479 1.338.707 2.014.707.677 0 1.435-.228 2.015-.707.566-.467.986-1.19.986-2.25V6.5a.5.5 0 0 0-.5-.5zM8 3a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2" /></SvgRoot>;
});
export default IconBug;
