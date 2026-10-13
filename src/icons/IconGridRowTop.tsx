import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGridRowTop = React.forwardRef<SVGSVGElement, IconProps>(function IconGridRowTop(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 14C12.7761 14 13 13.7761 13 13.5V13H13.5C13.7761 13 14 12.7761 14 12.5C14 12.2239 13.7761 12 13.5 12H13V4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H13V2.5C13 2.22386 12.7761 2 12.5 2C12.2241 2.00026 12 2.22402 12 2.5V3H4V2.5C4 2.22386 3.77614 2 3.5 2C3.22408 2.00026 3 2.22402 3 2.5V3H2.5C2.22408 3.00026 2 3.22402 2 3.5C2 3.77598 2.22408 3.99974 2.5 4H3V12H2.5C2.22408 12.0003 2 12.224 2 12.5C2 12.776 2.22408 12.9997 2.5 13H3V13.5C3 13.776 3.22408 13.9997 3.5 14C3.77614 14 4 13.7761 4 13.5V13H12V13.5C12 13.776 12.2241 13.9997 12.5 14ZM4 4H12V12H4V4ZM10.5 8C10.7761 8 11 7.77614 11 7.5V5.5C11 5.22386 10.7761 5 10.5 5H5.5C5.22386 5 5 5.22386 5 5.5V7.5C5 7.77614 5.22386 8 5.5 8H10.5Z" fill="currentColor" fillOpacity={0.9} /></SvgRoot>;
});
export default IconGridRowTop;
