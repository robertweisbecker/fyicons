import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconHighlighterTip = React.forwardRef<SVGSVGElement, IconProps>(function IconHighlighterTip(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.22266 1.08375C9.37608 0.981465 9.57375 0.972326 9.73633 1.05934C9.89862 1.14642 10 1.31555 10 1.49977V6.02711C10.5657 6.13484 11.031 6.56088 11.1748 7.13551L11.9854 10.3787C11.9952 10.4183 12 10.459 12 10.4998V14.4998C12 14.7759 11.7761 14.9998 11.5 14.9998H4.5C4.22387 14.9998 4.00002 14.7759 4 14.4998V10.4998C4 10.459 4.00478 10.4183 4.01465 10.3787L4.8252 7.13551C4.96899 6.56088 5.43435 6.13484 6 6.02711V3.49977C6 3.33259 6.08357 3.17648 6.22266 3.08375L9.22266 1.08375ZM5 10.8748V13.9998H11V10.8748H5ZM6.28125 6.99977C6.05182 6.99977 5.85154 7.15609 5.7959 7.37867L5.10938 10.1248H10.8906L10.2041 7.37867C10.1485 7.15609 9.94818 6.99977 9.71875 6.99977H6.28125ZM7 3.76734V5.99977H9V2.43336L7 3.76734Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path opacity={0.5} d="M9.5 1.5V6.5H6.5V3.5L9.5 1.5Z" fill="currentColor" stroke="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1,
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconHighlighterTip;
