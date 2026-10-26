import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFabric = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFabric(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="m11.086 3.086-.354.353zm1.828 1.828-.353.354zM6.5 9a.5.5 0 0 0 0 1zm0-6.5V3h3.172V2H6.5zm4.586.586-.354.353 1.829 1.829.353-.354.354-.353-1.829-1.829zM4.5 4.5H4V8h1V4.5zm9 4h.5V6.328h-1V8.5zm-1 1V9h-6v1h6zm1-1H13a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 14 8.5zm-3.828-6V3a1.5 1.5 0 0 1 1.06.44l.354-.354.353-.354A2.5 2.5 0 0 0 9.672 2zm3.242 2.414-.353.354A1.5 1.5 0 0 1 13 6.328h1a2.5 2.5 0 0 0-.732-1.767zM6.5 2.5V2A2.5 2.5 0 0 0 4 4.5h1A1.5 1.5 0 0 1 6.5 3z" /><path stroke="currentColor" d="M5.5 13.5H3a.5.5 0 0 1-.5-.5V7.5a2 2 0 0 1 2-2" /><path stroke="currentColor" strokeLinecap="round" d="M4.5 7.5v2a2 2 0 0 0 2 2h4" /><path stroke="currentColor" d="M4.5 13.5h6a2 2 0 0 0 2-2v-2" /></SvgRoot>;
});
export default IconFabric;
