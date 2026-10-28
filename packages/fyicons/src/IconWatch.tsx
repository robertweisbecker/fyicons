import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWatch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWatch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 13.5A1.5 1.5 0 0 1 9.5 15h-3A1.5 1.5 0 0 1 5 13.5v-2.148A4.48 4.48 0 0 0 8 12.5a4.48 4.48 0 0 0 3-1.148zM9.5 1A1.5 1.5 0 0 1 11 2.5v2.146A4.48 4.48 0 0 0 8 3.5a4.48 4.48 0 0 0-3 1.146V2.5A1.5 1.5 0 0 1 6.5 1z" /><circle cx={8} cy={8} r={4.5} stroke="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 5.5v3h-2" /><path stroke="currentColor" strokeLinecap="round" d="M12.5 8h1" /></SvgRoot>;
});
export default IconWatch;
