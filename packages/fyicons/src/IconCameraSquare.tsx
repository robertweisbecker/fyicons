import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCameraSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCameraSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="camera-square"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 6.42v5.08a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6.42a2 2 0 0 0-1.642-1.969L10.75 4.25l-.801-1.122a1.5 1.5 0 0 0-1.22-.628H7.271a1.5 1.5 0 0 0-1.22.628L5.25 4.25l-1.108.201A2 2 0 0 0 2.5 6.42" /><rect width={5} height={5} x={5.5} y={6.5} stroke="currentColor" rx={2.5} /></SvgRoot>;
});
export default IconCameraSquare;
