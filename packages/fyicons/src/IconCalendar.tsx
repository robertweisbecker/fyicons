import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCalendar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCalendar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.5 1a.5.5 0 0 1 .5.5V2h.5A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2H5v-.5a.5.5 0 0 1 1 0V2h4v-.5a.5.5 0 0 1 .5-.5M3 6v5.5A1.5 1.5 0 0 0 4.5 13h3A5.5 5.5 0 0 0 13 7.5V6zm10 4.96A6.5 6.5 0 0 1 10.962 13h.538a1.5 1.5 0 0 0 1.5-1.5zM4.5 3A1.5 1.5 0 0 0 3 4.5V5h10v-.5A1.5 1.5 0 0 0 11.5 3H11v.5a.5.5 0 0 1-1 0V3H6v.5a.5.5 0 0 1-1 0V3z" /></SvgRoot>;
});
export default IconCalendar;
