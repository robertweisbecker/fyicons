import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextBoxHeading = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextBoxHeading(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-box-heading"><path fill="currentColor" d="M14 12.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5V10h1v2.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V10h1zM12.5 2A1.5 1.5 0 0 1 14 3.5V7h-1V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V7H2V3.5A1.5 1.5 0 0 1 3.5 2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.001 10.5h-.5m-.5 0h.5m0 0V8m0-2.5V8m.5-2.5h-1m.5 2.5H9.5m0 0V5.5m0 2.5v2.5m0-5h.5m-.5 0H9m.5 5h.5m-.5 0H9" /><rect width={2} height={2} x={12.5} y={7.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={0.25} /><rect width={2} height={2} x={1.5} y={7.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={0.25} /></SvgRoot>;
});
export default IconTextBoxHeading;
