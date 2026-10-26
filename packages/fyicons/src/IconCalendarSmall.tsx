import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCalendarSmall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCalendarSmall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10 3.5a.5.5 0 0 0 1 0V3a2 2 0 0 1 2 2v5.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 10.5V5a2 2 0 0 1 2-2v.5a.5.5 0 0 0 1 0V3h4zM4.5 6a.5.5 0 0 0-.5.5v4A1.5 1.5 0 0 0 5.5 12h5a1.5 1.5 0 0 0 1.5-1.5v-4a.5.5 0 0 0-.5-.5zm1-4a.5.5 0 0 1 .5.5V3H5v-.5a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5V3h-1v-.5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconCalendarSmall;
