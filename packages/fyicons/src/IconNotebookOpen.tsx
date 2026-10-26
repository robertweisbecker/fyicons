import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNotebookOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNotebookOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.327 1.245A2 2 0 0 1 10.651 2H12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1.293a2 2 0 0 1-2.059.927l-4-.714A2 2 0 0 1 3 12.243V11.06l-.348-.07a.5.5 0 0 1 .196-.98l.152.03V8.5h-.25a.5.5 0 1 1 0-1H3V6.215l-.168.029a.5.5 0 0 1-.164-.987L3 5.201v-.645a2 2 0 0 1 1.327-1.883zM10 3.129a1 1 0 0 0-1.336-.943l-4 1.429A1 1 0 0 0 4 4.556v.478l.168-.028a.5.5 0 0 1 .164.987L4 6.047V7.5h.25a.5.5 0 0 1 0 1H4v1.74l.098.02a.5.5 0 0 1-.098.989v.995a1 1 0 0 0 .824.984l4 .714A1 1 0 0 0 10 12.958zm.996-.13q.004.064.004.13v9.829l-.002.042H12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7.5 8a.5.5 0 0 1 0 1h-1a.5.5 0 1 1 0-1zm.68-3.244a.5.5 0 0 1 .14.99l-1.75.25a.5.5 0 0 1-.14-.99z" /></SvgRoot>;
});
export default IconNotebookOpen;
