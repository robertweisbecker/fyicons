import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdCommandK = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdCommandK(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="kbd-command-k"><path fill="currentColor" d="M6.625 4.75a1.625 1.625 0 0 1 0 3.25H6v1h.625A1.625 1.625 0 1 1 5 10.625V10H4v.625A1.625 1.625 0 1 1 2.375 9H3V8h-.625A1.625 1.625 0 1 1 4 6.375V7h1v-.625c0-.897.728-1.625 1.625-1.625M2.375 10a.625.625 0 1 0 .625.625V10zM6 10.625A.625.625 0 1 0 6.625 10H6zM4 9h1V8H4zM2.375 5.75a.625.625 0 1 0 0 1.25H3v-.625a.625.625 0 0 0-.625-.625m4.25 0A.625.625 0 0 0 6 6.375V7h.625a.625.625 0 1 0 0-1.25" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 5.5v4m0 2v-2m0 0 4-4m0 6-2.25-3.25" /></SvgRoot>;
});
export default IconKbdCommandK;
