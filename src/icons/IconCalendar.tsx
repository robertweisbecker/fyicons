import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCalendar = React.forwardRef<SVGSVGElement, IconProps>(function IconCalendar(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.5 1C11.3284 1 12 1.67157 12 2.5C13.1046 2.5 14 3.39543 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.39543 2.89543 2.5 4 2.5C4 1.67157 4.67157 1 5.5 1C6.32843 1 7 1.67157 7 2.5H9C9 1.67157 9.67157 1 10.5 1ZM3.5 5C3.22386 5 3 5.22386 3 5.5V11.5C3 12.3284 3.67157 13 4.5 13H9C11.2091 13 13 11.2091 13 9V5.5C13 5.22386 12.7761 5 12.5 5H3.5ZM5.5 2C5.22386 2 5 2.22386 5 2.5V3.5C5 3.77614 5.22386 4 5.5 4C5.77614 4 6 3.77614 6 3.5V2.5C6 2.22386 5.77614 2 5.5 2ZM10.5 2C10.2239 2 10 2.22386 10 2.5V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V2.5C11 2.22386 10.7761 2 10.5 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCalendar;
