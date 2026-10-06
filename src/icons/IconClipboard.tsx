import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconClipboard = React.forwardRef<SVGSVGElement, IconProps>(function IconClipboard(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.78711 1C9.38412 1.00014 9.87689 1.43192 9.97754 2H11C12.1046 2 13 2.89543 13 4V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V4C3 2.89543 3.89543 2 5 2H6.02148C6.12223 1.4319 6.61586 1.00014 7.21289 1H8.78711ZM5 3C4.44772 3 4 3.44772 4 4V13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13V4C12 3.44772 11.5523 3 11 3H10.7705C10.9177 3.27914 10.9999 3.59136 11 3.91406V4.5C11 4.77614 10.7761 5 10.5 5H5.5C5.22386 5 5 4.77614 5 4.5V3.91406C5.00005 3.59136 5.08225 3.27914 5.22949 3H5ZM7.21289 2C7.09539 2.00016 7.00016 2.09539 7 2.21289C7 2.4599 6.89293 2.69476 6.70703 2.85742L6.3291 3.18848C6.11995 3.37149 6.00009 3.63616 6 3.91406V4H10V3.91406C9.99991 3.63616 9.88005 3.37149 9.6709 3.18848L9.29297 2.85742C9.10707 2.69476 9 2.4599 9 2.21289C8.99984 2.09539 8.90461 2.00016 8.78711 2H7.21289Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconClipboard;
