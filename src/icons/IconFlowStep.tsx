import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFlowStep = React.forwardRef<SVGSVGElement, IconProps>(function IconFlowStep(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5V7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={8.5} y={8.5} width={6} height={4} rx={1} stroke="currentColor" /><rect x={1.5} y={3.5} width={6} height={4} rx={1} stroke="currentColor" /></SvgRoot>;
});
export default IconFlowStep;
