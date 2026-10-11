import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTextBoldInactive = React.forwardRef<SVGSVGElement, IconProps>(function IconTextBoldInactive(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.29688 2.5C9.27453 2.5 10.0454 2.86797 10.5674 3.44922C11.0813 4.02163 11.3281 4.7716 11.3281 5.50586C11.3281 6.24014 11.0814 6.99012 10.5674 7.5625C10.4375 7.70716 10.2919 7.83827 10.1318 7.9541C10.4128 8.10974 10.6608 8.30154 10.873 8.52344C11.4621 9.13926 11.75 9.95288 11.75 10.7559C11.75 11.5588 11.4621 12.3725 10.873 12.9883C10.2779 13.6104 9.40457 14 8.29688 14H4.5C4.22386 14 4 13.7761 4 13.5V3C4 2.72386 4.22386 2.5 4.5 2.5H8.29688ZM5 13H8.29688C9.15782 13 9.76119 12.7037 10.1504 12.2969C10.5457 11.8836 10.75 11.325 10.75 10.7559C10.75 10.1868 10.5456 9.62812 10.1504 9.21484C9.76119 8.80796 9.15785 8.51172 8.29688 8.51172H5V13ZM5 7.51172H8.29688L8.55273 7.5C9.12746 7.44565 9.5416 7.2081 9.82324 6.89453C10.1529 6.52737 10.3281 6.0243 10.3281 5.50586C10.3281 4.98737 10.1529 4.48438 9.82324 4.11719C9.50144 3.75881 9.0067 3.5 8.29688 3.5H5V7.51172Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTextBoldInactive;
