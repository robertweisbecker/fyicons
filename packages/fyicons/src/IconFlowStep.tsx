import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlowStep = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlowStep(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 10.5h-3a1 1 0 0 1-1-1v-2" /><rect width={6} height={4} x={8.5} y={8.5} stroke="currentColor" rx={1} /><rect width={6} height={4} x={1.5} y={3.5} stroke="currentColor" rx={1} /></SvgRoot>;
});
export default IconFlowStep;
