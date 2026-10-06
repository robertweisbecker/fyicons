import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconListLog = React.forwardRef<SVGSVGElement, IconProps>(function IconListLog(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.5 13C10.7761 13 11 13.2239 11 13.5C11 13.7761 10.7761 14 10.5 14H7.5C7.22386 14 7 13.7761 7 13.5C7 13.2239 7.22386 13 7.5 13H10.5ZM9.5 11C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H9.5ZM4.5 9C4.77614 9 5 9.22386 5 9.5C5 9.77614 4.77614 10 4.5 10H2.5C2.22386 10 2 9.77614 2 9.5C2 9.22386 2.22386 9 2.5 9H4.5ZM13.5 9C13.7761 9 14 9.22386 14 9.5C14 9.77614 13.7761 10 13.5 10H7.5C7.22386 10 7 9.77614 7 9.5C7 9.22386 7.22386 9 7.5 9H13.5ZM10.5 6C10.7761 6 11 6.22386 11 6.5C11 6.77614 10.7761 7 10.5 7H7.5C7.22386 7 7 6.77614 7 6.5C7 6.22386 7.22386 6 7.5 6H10.5ZM9.5 4C9.77614 4 10 4.22386 10 4.5C10 4.77614 9.77614 5 9.5 5H7.5C7.22386 5 7 4.77614 7 4.5C7 4.22386 7.22386 4 7.5 4H9.5ZM4.5 2C4.77614 2 5 2.22386 5 2.5C5 2.77614 4.77614 3 4.5 3H2.5C2.22386 3 2 2.77614 2 2.5C2 2.22386 2.22386 2 2.5 2H4.5ZM13.5 2C13.7761 2 14 2.22386 14 2.5C14 2.77614 13.7761 3 13.5 3H7.5C7.22386 3 7 2.77614 7 2.5C7 2.22386 7.22386 2 7.5 2H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconListLog;
