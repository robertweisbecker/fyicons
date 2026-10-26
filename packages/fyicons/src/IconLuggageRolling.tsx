import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLuggageRolling = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLuggageRolling(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.5 1a.5.5 0 0 1 .5.5V6h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V1.5a.5.5 0 0 1 .5-.5zM5 7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1v1.293l.854.853A.5.5 0 0 1 11 9.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .146-.354L9 8.293V7zm4 2.707V11h1V9.707l-.5-.5zM7 6h2V2H7z" /><path stroke="currentColor" strokeLinecap="round" d="M11.5 13.5v.5a.5.5 0 0 1-1 0v-.5m-5 0v.5a.5.5 0 0 1-1 0v-.5m5.5-12H6" /></SvgRoot>;
});
export default IconLuggageRolling;
