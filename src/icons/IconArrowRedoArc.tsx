import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowRedoArc = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRedoArc(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7 3C9.76129 3.00013 12 5.23868 12 8H13.3584C13.7939 8.00031 14.0208 8.51866 13.7256 8.83887L11.8672 10.8516C11.6692 11.066 11.3308 11.066 11.1328 10.8516L9.27441 8.83887C8.97918 8.51866 9.20609 8.00031 9.6416 8H11C11 5.79097 9.20901 4.00013 7 4C4.79088 4 3.00003 5.79089 3 8C3 10.2091 4.79086 12 7 12C7.27601 12.0001 7.49997 12.224 7.5 12.5C7.5 12.7761 7.27603 12.9999 7 13C4.23858 13 2 10.7614 2 8C2.00003 5.2386 4.23859 3 7 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconArrowRedoArc;
