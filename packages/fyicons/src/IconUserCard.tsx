import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserCard = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserCard(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="user-card"><rect width={13} height={9} x={1.5} y={3.5} stroke="currentColor" rx={1.5} /><path fill="currentColor" d="M5.495 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M3.64 11c-.325 0-.551-.304-.399-.591.314-.59.98-1.409 2.26-1.409s1.945.819 2.258 1.409c.152.287-.074.591-.4.591z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 6.5h3m-3 3h3" /></SvgRoot>;
});
export default IconUserCard;
