import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSelection = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSelection(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><rect x={12.5} y={12.5} width={2} height={2} rx={1} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={1.5} y={1.5} width={2} height={2} rx={1} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.5 3.5H11.5C12.6046 3.5 13.5 4.39543 13.5 5.5V12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 12.5H4.5C3.39543 12.5 2.5 11.6046 2.5 10.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 6.5H5.5" stroke="currentColor" strokeLinecap="round" /><path d="M8.5 9.5H5.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconSelection;
