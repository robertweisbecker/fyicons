import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSendFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSendFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M2 3.9939C2.00019 2.48621 3.60553 1.52074 4.9375 2.22729L13.3193 6.67456C14.3818 7.23835 14.3817 8.76105 13.3193 9.32495L4.9375 13.7722C3.6054 14.479 1.99994 13.5136 2 12.0056V9.93433C2.00029 9.28818 2.49321 8.74885 3.13672 8.69019L7.20801 8.32007C7.37332 8.30486 7.5 8.1658 7.5 7.99976C7.49989 7.83379 7.37326 7.69463 7.20801 7.67944L3.1377 7.30933C2.49398 7.2508 2.00115 6.71154 2.00098 6.06519L2 3.9939Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSendFill;
