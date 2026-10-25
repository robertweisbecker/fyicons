import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCalendarFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCalendarFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="calendar-fill"><path d="M10.5 1C11.1672 1 11.7319 1.4358 11.9268 2.03809C13.104 2.24072 14 3.26488 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.26522 2.89547 2.24111 4.07227 2.03809C4.26703 1.43565 4.83272 1 5.5 1C6.15293 1 6.70703 1.41766 6.91309 2H9.08691C9.29297 1.41766 9.84707 1 10.5 1ZM3.5 5C3.22386 5 3 5.22386 3 5.5V11.5C3 12.3284 3.67157 13 4.5 13H7.5C10.5376 13 13 10.5376 13 7.5V5.5C13 5.22386 12.7761 5 12.5 5H3.5ZM5.5 2C5.22386 2 5 2.22386 5 2.5V3.5C5 3.77614 5.22386 4 5.5 4C5.77614 4 6 3.77614 6 3.5V2.5C6 2.22386 5.77614 2 5.5 2ZM10.5 2C10.2239 2 10 2.22386 10 2.5V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V2.5C11 2.22386 10.7761 2 10.5 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconCalendarFill;
