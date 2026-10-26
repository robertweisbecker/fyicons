import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWatch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWatch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2.648A4.48 4.48 0 0 0 8 12.5a4.48 4.48 0 0 0 3-1.148zM10 1a1 1 0 0 1 1 1v2.646A4.48 4.48 0 0 0 8 3.5a4.48 4.48 0 0 0-3 1.146V2a1 1 0 0 1 1-1z" /><circle cx={8} cy={8} r={4.5} stroke="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 5.5v3h-2" /><path stroke="currentColor" strokeLinecap="round" d="M12.5 8h1" /></SvgRoot>;
});
export default IconWatch;
