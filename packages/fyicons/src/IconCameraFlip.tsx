import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCameraFlip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCameraFlip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="camera-flip"><path fill="currentColor" d="M8.764 2A2.5 2.5 0 0 1 11 3.382l.18.361 1.511.117A2.5 2.5 0 0 1 15 6.353V10.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5V6.353A2.5 2.5 0 0 1 3.309 3.86l1.51-.117L5 3.382l.085-.155A2.5 2.5 0 0 1 7.236 2zM7.236 3a1.5 1.5 0 0 0-1.234.647l-.107.182-.308.614a.5.5 0 0 1-.41.275l-1.792.138A1.5 1.5 0 0 0 2 6.353V10.5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5V6.353a1.5 1.5 0 0 0-1.385-1.497l-1.794-.138a.5.5 0 0 1-.409-.275l-.307-.614A1.5 1.5 0 0 0 8.765 3z" /><path stroke="currentColor" strokeLinejoin="round" d="M8 10.5A2.5 2.5 0 0 1 5.5 8" /><path fill="currentColor" d="M5.303 6.004a.25.25 0 0 1 .394 0l1.24 1.593A.25.25 0 0 1 6.738 8H4.26a.25.25 0 0 1-.197-.403z" /><path stroke="currentColor" strokeLinecap="round" d="M8 10.5h.5" /><path stroke="currentColor" strokeLinejoin="round" d="M8 5.5A2.5 2.5 0 0 1 10.5 8" /><path fill="currentColor" d="M10.697 9.996a.25.25 0 0 1-.394 0l-1.24-1.593A.25.25 0 0 1 9.262 8h2.478a.25.25 0 0 1 .197.403z" /><path stroke="currentColor" strokeLinecap="round" d="M7.5 5.5H8" /></SvgRoot>;
});
export default IconCameraFlip;
