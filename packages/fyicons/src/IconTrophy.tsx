import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTrophy = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTrophy(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 2.5h7V7a3.5 3.5 0 1 1-7 0zm-3 2a2 2 0 0 1 2-2h1v4h-1a2 2 0 0 1-2-2m10-2h1a2 2 0 1 1 0 4h-1z" /><path stroke="currentColor" strokeLinecap="round" d="M8 10.5v3m2.5 0h-5" /></SvgRoot>;
});
export default IconTrophy;
