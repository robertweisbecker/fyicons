import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLuggageRolling = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLuggageRolling(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="luggage-rolling"><path fill="currentColor" d="M9.5 1a.5.5 0 0 1 .5.5V5h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V1.5a.5.5 0 0 1 .5-.5zM5 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1v1l-.009.084A1.5 1.5 0 0 1 11 8.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a1.5 1.5 0 0 1 1.008-1.416L9 7V6zm4.5 2a.5.5 0 0 0-.5.5V10h1V8.5a.5.5 0 0 0-.5-.5M7 5h2V2H7z" /><path stroke="currentColor" strokeLinecap="round" d="M11.5 13.5v.5a.5.5 0 0 1-1 0v-.5m-5 0v.5a.5.5 0 0 1-1 0v-.5m5.5-12H6" /></SvgRoot>;
});
export default IconLuggageRolling;
