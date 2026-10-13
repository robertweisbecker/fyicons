import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconQueueAdd = React.forwardRef<SVGSVGElement, IconProps>(function IconQueueAdd(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 8.50049C11.7761 8.50049 12 8.72435 12 9.00049V10.5005H13.5C13.7761 10.5005 14 10.7243 14 11.0005C13.9997 11.2764 13.776 11.5005 13.5 11.5005H12V13.0005C11.9997 13.2764 11.776 13.5005 11.5 13.5005C11.224 13.5005 11.0003 13.2764 11 13.0005V11.5005H9.5C9.22402 11.5005 9.00026 11.2764 9 11.0005C9 10.7243 9.22386 10.5005 9.5 10.5005H11V9.00049C11 8.72435 11.2239 8.50049 11.5 8.50049ZM12.5 2.00049C13.3284 2.00049 14 2.67206 14 3.50049V5.50049L13.9922 5.65381C13.9152 6.40998 13.2765 7.00049 12.5 7.00049H3.5C2.7235 7.00049 2.08483 6.40998 2.00781 5.65381L2 5.50049V3.50049C2 2.67206 2.67157 2.00049 3.5 2.00049H12.5ZM3.5 3.00049C3.22386 3.00049 3 3.22435 3 3.50049V5.50049C3.00026 5.77641 3.22402 6.00049 3.5 6.00049H12.5C12.776 6.00049 12.9997 5.77641 13 5.50049V3.50049C13 3.22435 12.7761 3.00049 12.5 3.00049H3.5Z" fill="currentColor" /><path d="M3.5 8V10.5C3.5 11.6046 4.39543 12.5 5.5 12.5H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.5 6.5V7.5C3.5 8.60457 4.39543 9.5 5.5 9.5H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconQueueAdd;
