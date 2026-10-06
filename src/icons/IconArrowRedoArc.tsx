import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowRedoArc = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRedoArc(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7 3C9.76129 3.00013 12 5.23868 12 8H13.709C13.7664 8.00007 13.8224 8.01852 13.8701 8.05273C13.918 8.08712 13.9555 8.13617 13.9775 8.19336C13.9996 8.25052 14.0054 8.31334 13.9941 8.37402C13.9829 8.43474 13.9548 8.49041 13.9141 8.53418L11.7061 10.9082C11.679 10.9373 11.6467 10.9608 11.6113 10.9766C11.5761 10.9922 11.5382 11 11.5 11C11.4619 11 11.4239 10.9922 11.3887 10.9766C11.3533 10.9608 11.321 10.9373 11.2939 10.9082L9.08496 8.53418C9.04432 8.49044 9.01708 8.43465 9.00586 8.37402C8.99462 8.31331 9.00042 8.25055 9.02246 8.19336C9.04447 8.13628 9.08113 8.0871 9.12891 8.05273C9.17678 8.01836 9.23344 8 9.29102 8H11C11 5.79097 9.20901 4.00013 7 4C4.79088 4 3.00003 5.79089 3 8C3 10.2091 4.79086 12 7 12C7.27601 12.0001 7.49997 12.224 7.5 12.5C7.5 12.7761 7.27603 12.9999 7 13C4.23858 13 2 10.7614 2 8C2.00003 5.2386 4.23859 3 7 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconArrowRedoArc;
