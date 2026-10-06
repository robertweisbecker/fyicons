import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFastBackward = React.forwardRef<SVGSVGElement, IconProps>(function IconFastBackward(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M13.5722 4.17803C14.216 3.83293 14.9951 4.29916 14.9951 5.02959V10.971C14.9949 11.7013 14.2159 12.1675 13.5722 11.8226L8.49803 9.10186V10.971C8.49786 11.7013 7.71885 12.1675 7.07518 11.8226L1.53319 8.85186C0.853488 8.4875 0.853556 7.51315 1.53319 7.14873L7.07518 4.17803C7.71895 3.83293 8.49803 4.29916 8.49803 5.02959V6.89776L13.5722 4.17803ZM2.06053 8.00029L7.49803 10.9144V5.08526L2.06053 8.00029ZM8.5576 8.00029L13.9951 10.9144V5.08526L8.5576 8.00029Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFastBackward;
