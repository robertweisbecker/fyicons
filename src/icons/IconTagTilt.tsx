import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTagTilt = React.forwardRef<SVGSVGElement, IconProps>(function IconTagTilt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M13.0016 2C13.5537 2.00023 14.0015 2.44797 14.0016 3V7.67188C14.0015 8.33466 13.7378 8.97074 13.2692 9.43945L8.41473 14.293C7.63371 15.0739 6.36763 15.0738 5.58661 14.293L1.7077 10.4141C0.92688 9.63303 0.926839 8.36692 1.7077 7.58594L6.5622 2.73242C7.03094 2.26392 7.66703 2.00006 8.32977 2H13.0016ZM8.32977 3C7.93222 3.00006 7.55044 3.15846 7.26923 3.43945L2.41473 8.29297C2.02439 8.68343 2.02444 9.31653 2.41473 9.70703L6.29364 13.5859C6.68413 13.9763 7.31721 13.9763 7.7077 13.5859L12.5622 8.73242C12.8432 8.45125 13.0015 8.06942 13.0016 7.67188V3H8.32977ZM10.0085 4.75C10.6985 4.75024 11.2583 5.30995 11.2585 6C11.2585 6.69021 10.6986 7.24976 10.0085 7.25C9.31813 7.25 8.75848 6.69036 8.75848 6C8.75868 5.30981 9.31825 4.75 10.0085 4.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTagTilt;
