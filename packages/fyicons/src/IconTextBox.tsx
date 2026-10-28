import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextBox = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextBox(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-box"><path fill="currentColor" d="M14 12.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5V10h1v2.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V10h1zM12.5 2A1.5 1.5 0 0 1 14 3.5V7h-1V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V7H2V3.5A1.5 1.5 0 0 1 3.5 2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.501 10.5h-.5m-.5 0h.5m0 0v-5m-2.5 1v-1h5l-.001 1" /><rect width={2} height={2} x={12.5} y={7.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={0.25} /><rect width={2} height={2} x={1.5} y={7.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={0.25} /></SvgRoot>;
});
export default IconTextBox;
