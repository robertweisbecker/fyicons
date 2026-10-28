import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlowSequence = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlowSequence(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="flow-sequence"><path stroke="currentColor" strokeLinejoin="round" d="M9 4.5H7" /><path stroke="currentColor" strokeLinecap="round" d="m9.5 6.5-3 3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 11.5h-6m5-2 2 2-2 2" /><rect width={4} height={4} x={9.5} y={2.5} stroke="currentColor" rx={1} /><rect width={4} height={4} x={2.5} y={2.5} stroke="currentColor" rx={1} /><rect width={4} height={4} x={2.5} y={9.5} stroke="currentColor" rx={1} /></SvgRoot>;
});
export default IconFlowSequence;
