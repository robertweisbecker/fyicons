import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconBookText = React.forwardRef<SVGSVGElement, IconProps>(function IconBookText(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 1C12.5523 1 13 1.44772 13 2V11.5C13 11.7761 12.7761 12 12.5 12H11.6348C10.8879 12.4544 10.8879 13.5456 11.6348 14H12.5C12.7761 14 13 14.2239 13 14.5C13 14.7761 12.7761 15 12.5 15H5C3.89543 15 3 14.1046 3 13V3.5C3 2.11929 4.11929 1 5.5 1H12ZM5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14H10.3125C9.99399 13.377 9.99399 12.623 10.3125 12H5ZM5.5 2C4.67157 2 4 2.67157 4 3.5V11.2695C4.29437 11.0991 4.63536 11 5 11H12V2H5.5ZM8.5 6C8.77614 6 9 6.22386 9 6.5C9 6.77614 8.77614 7 8.5 7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H8.5ZM9.5 4C9.77614 4 10 4.22386 10 4.5C10 4.77614 9.77614 5 9.5 5H6.5C6.22386 5 6 4.77614 6 4.5C6 4.22386 6.22386 4 6.5 4H9.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconBookText;
