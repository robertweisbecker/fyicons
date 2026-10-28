import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGlobeStand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGlobeStand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M12.741 10.743a6 6 0 1 1-8.485-8.486" /><path stroke="currentColor" strokeLinecap="round" d="M7.5 12.75v1.75m0 0h2m-2 0h-2" /><circle cx={8.5} cy={6.5} r={4} stroke="currentColor" /><path fill="currentColor" d="M3.646 2.354 4 2.707 4.707 2l-.353-.354L4 2zm.208-1.208a.5.5 0 1 0-.708.708L3.5 1.5zM4 2l.354-.354-.5-.5L3.5 1.5l-.354.354.5.5zm9.354 8.646L13 10.293l-.707.707.353.354L13 11zm-.208 1.208a.5.5 0 0 0 .708-.708l-.354.354zM13 11l-.354.354.5.5.354-.354.354-.354-.5-.5z" /></SvgRoot>;
});
export default IconGlobeStand;
