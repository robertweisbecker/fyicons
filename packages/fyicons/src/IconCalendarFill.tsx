import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCalendarFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCalendarFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.5 1a1.5 1.5 0 0 1 1.427 1.038A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7a2.5 2.5 0 0 1 2.072-2.462A1.5 1.5 0 0 1 6.913 2h2.174A1.5 1.5 0 0 1 10.5 1m-7 5a.5.5 0 0 0-.5.5v5A1.5 1.5 0 0 0 4.5 13h3A5.5 5.5 0 0 0 13 7.5v-1a.5.5 0 0 0-.5-.5zm2-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m5 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5" /></SvgRoot>;
});
export default IconCalendarFill;
