import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMouse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMouse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" d="M3.5 4.5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v6a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5h9" /><path stroke="currentColor" strokeLinecap="round" d="M8 6.5v-5" /></SvgRoot>;
});
export default IconMouse;
