import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHardDrive = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHardDrive(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hard-drive"><rect width={13} height={5} x={1.5} y={7.5} stroke="currentColor" rx={2.5} /><path stroke="currentColor" strokeLinecap="round" d="M1.5 10v-.12a2 2 0 0 1 .14-.733l1.725-4.38A2 2 0 0 1 5.225 3.5h5.55a2 2 0 0 1 1.86 1.267l1.726 4.38a2 2 0 0 1 .139.733V10" /><circle cx={12} cy={10} r={1} fill="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 10.5h-3" /></SvgRoot>;
});
export default IconHardDrive;
