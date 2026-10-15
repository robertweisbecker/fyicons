import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSendFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSendFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2 3.99393C2.00019 2.48624 3.60553 1.52077 4.9375 2.22733L13.3193 6.67459C14.3818 7.23838 14.3817 8.76108 13.3193 9.32498L4.9375 13.7722C3.6054 14.4791 1.99994 13.5137 2 12.0056V9.93436C2.00029 9.28821 2.49321 8.74888 3.13672 8.69022L7.20801 8.3201C7.37332 8.30489 7.5 8.16583 7.5 7.99979C7.49989 7.83382 7.37326 7.69466 7.20801 7.67947L3.1377 7.30936C2.49398 7.25083 2.00115 6.71158 2.00098 6.06522L2 3.99393Z" fill="currentColor" /></SvgRoot>;
});
export default IconSendFill;
