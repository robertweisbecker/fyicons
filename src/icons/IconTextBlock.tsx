import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTextBlock = React.forwardRef<SVGSVGElement, IconProps>(function IconTextBlock(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 12C12.7761 12 13 12.2239 13 12.5C13 12.7761 12.7761 13 12.5 13H3.5C3.22386 13 3 12.7761 3 12.5C3 12.2239 3.22386 12 3.5 12H12.5ZM12.5 9C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H3.5C3.22386 10 3 9.77614 3 9.5C3 9.22386 3.22386 9 3.5 9H12.5ZM6.50098 2C6.77712 2 7.00098 2.22386 7.00098 2.5V3.5C7.00098 3.77614 6.77712 4 6.50098 4C6.22483 4 6.00098 3.77614 6.00098 3.5V3H5.00098V6H5.5C5.77614 6 6 6.22386 6 6.5C6 6.77614 5.77614 7 5.5 7H3.5C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H4.00098V3H3.00098V3.5C3.00098 3.77614 2.77712 4 2.50098 4C2.22483 4 2.00098 3.77614 2.00098 3.5V2.5C2.00098 2.22386 2.22483 2 2.50098 2H6.50098ZM12.5 6C12.7761 6 13 6.22386 13 6.5C13 6.77614 12.7761 7 12.5 7H8.5C8.22386 7 8 6.77614 8 6.5C8 6.22386 8.22386 6 8.5 6H12.5ZM12.5 3C12.7761 3 13 3.22386 13 3.5C13 3.77614 12.7761 4 12.5 4H9.5C9.22386 4 9 3.77614 9 3.5C9 3.22386 9.22386 3 9.5 3H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTextBlock;
