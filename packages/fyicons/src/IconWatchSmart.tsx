import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWatchSmart = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWatchSmart(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.772 1.684A1 1 0 0 1 6.721 1H9.28a1 1 0 0 1 .948.684l.092.276a2 2 0 0 0 .617.904l1.064.886H4l1.062-.886a2 2 0 0 0 .617-.904z" /><rect width={2} height={2} x={12.001} y={6} fill="currentColor" rx={0.75} /><path fill="currentColor" d="M5.772 14.316A1 1 0 0 0 6.72 15h2.56a1 1 0 0 0 .948-.684l.092-.276a2 2 0 0 1 .617-.904L12 12.25H4l1.063.886a2 2 0 0 1 .617.904z" /><rect width={9} height={9} x={3.5} y={3.5} stroke="currentColor" rx={2.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 5.5v3h-2" /></SvgRoot>;
});
export default IconWatchSmart;
