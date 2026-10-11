import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconVolumeSlashFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlashFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.8838 12.6515C10.6103 13.1717 9.89971 13.3822 9.37988 12.9718L6.25 10.5001H4.5C3.67158 10.5001 3 9.82853 3 9.0001V7.0001C3.00007 6.39644 3.357 5.87664 3.87109 5.63877L10.8838 12.6515ZM9.37988 3.02842C10.0356 2.51074 10.9999 2.97814 11 3.81357V9.23252L6.81836 5.05088L9.37988 3.02842Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M2.5 2.5L13.5 13.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></SvgRoot>;
});
export default IconVolumeSlashFill;
