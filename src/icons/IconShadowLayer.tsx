import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconShadowLayer = React.forwardRef<SVGSVGElement, IconProps>(function IconShadowLayer(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M14.6459 9.39939C15.0122 9.55033 15.0663 10.0478 14.7406 10.2734L9.22011 14.0947C9.08089 14.1911 8.90213 14.2107 8.7455 14.1465L1.34706 11.0996C0.980596 10.9487 0.92653 10.4522 1.25234 10.2265L2.87441 9.10252L8.74745 11.5215C8.90419 11.5859 9.08368 11.5662 9.22304 11.4697L13.1205 8.77146L14.6459 9.39939ZM6.77577 2.65428C6.91494 2.55809 7.09388 2.53929 7.25038 2.6035L14.6488 5.64939C15.0152 5.80026 15.0692 6.29777 14.7435 6.52342L9.22304 10.3447L9.16933 10.3779C9.05821 10.4357 8.92892 10.4496 8.808 10.417L8.74843 10.3965L1.34999 7.34959C0.983731 7.19859 0.929527 6.70211 1.25527 6.47654L6.77577 2.65428ZM2.57948 6.77537L8.87636 9.36717L13.4184 6.22361L7.1205 3.63084L2.57948 6.77537Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconShadowLayer;
