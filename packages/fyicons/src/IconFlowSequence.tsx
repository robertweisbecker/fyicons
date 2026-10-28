import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlowSequence = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlowSequence(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M9 4.5H7" stroke="currentColor" strokeLinejoin="round" /><path d="M9.5 6.5L6.5 9.5" stroke="currentColor" strokeLinecap="round" /><path d="M12.5 11.5H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 9.5L13.5 11.5L11.5 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={9.5} y={2.5} width={4} height={4} rx={1} stroke="currentColor" /><rect x={2.5} y={2.5} width={4} height={4} rx={1} stroke="currentColor" /><rect x={2.5} y={9.5} width={4} height={4} rx={1} stroke="currentColor" /></SvgRoot>;
});
export default IconFlowSequence;
