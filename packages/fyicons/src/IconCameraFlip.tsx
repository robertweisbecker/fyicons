import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCameraFlip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCameraFlip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="camera-flip"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 5.5v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H11L9.95 2.1a1.5 1.5 0 0 0-1.2-.6h-1.5a1.5 1.5 0 0 0-1.2.6L5 3.5h-.5a2 2 0 0 0-2 2" /><path stroke="currentColor" strokeLinejoin="round" d="M8 10.5A2.5 2.5 0 0 1 5.5 8" /><path fill="currentColor" d="M5.303 6.004a.25.25 0 0 1 .394 0l1.24 1.593A.25.25 0 0 1 6.738 8H4.26a.25.25 0 0 1-.197-.403z" /><path stroke="currentColor" strokeLinejoin="round" d="M8 5.5A2.5 2.5 0 0 1 10.5 8" /><path fill="currentColor" d="M10.697 9.996a.25.25 0 0 1-.394 0l-1.24-1.593A.25.25 0 0 1 9.262 8h2.478a.25.25 0 0 1 .197.403z" /><path stroke="currentColor" strokeLinecap="round" d="M8 10.5h.5m-1-5H8" /></SvgRoot>;
});
export default IconCameraFlip;
