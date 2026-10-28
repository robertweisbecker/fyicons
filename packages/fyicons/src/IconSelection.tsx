import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSelection = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSelection(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="selection"><rect width={2} height={2} x={12.5} y={12.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={1} /><rect width={2} height={2} x={1.5} y={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={1} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 3.5h6a2 2 0 0 1 2 2v7m-3 0h-6a2 2 0 0 1-2-2v-7" /><path stroke="currentColor" strokeLinecap="round" d="M10.5 6.5h-5m3 3h-3" /></SvgRoot>;
});
export default IconSelection;
