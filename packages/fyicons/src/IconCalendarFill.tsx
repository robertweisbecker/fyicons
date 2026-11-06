import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCalendarFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCalendarFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="calendar-fill"><path fill="currentColor" d="M13.981 7A7.5 7.5 0 0 1 6.5 14h-2A2.5 2.5 0 0 1 2 11.5V7zM14 11.5a2.5 2.5 0 0 1-2.5 2.5h-.999A8.54 8.54 0 0 0 14 10.5zm-9-8a.5.5 0 0 0 1 0V2h4v1.5a.5.5 0 0 0 1 0V2h.5A2.5 2.5 0 0 1 14 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2H5zM5.5 1a.5.5 0 0 1 .5.5V2H5v-.5a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5V2h-1v-.5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconCalendarFill;
