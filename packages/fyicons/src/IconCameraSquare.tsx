import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCameraSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCameraSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="camera-square"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 5.5v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H11L9.95 2.1a1.5 1.5 0 0 0-1.2-.6h-1.5a1.5 1.5 0 0 0-1.2.6L5 3.5h-.5a2 2 0 0 0-2 2" /><rect width={5} height={5} x={5.5} y={5.5} stroke="currentColor" rx={2.5} />{props.children}</SvgRoot>;
});
export default IconCameraSquare;
