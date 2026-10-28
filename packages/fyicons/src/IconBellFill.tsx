import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBellFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBellFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.00439 1C8.55651 1.00019 9.00438 1.44785 9.00439 2V2.10059C11.2847 2.56535 13.0005 4.58241 13.0005 7V8.8418C13.0005 8.90376 13.0206 8.96457 13.0571 9.01465L13.4956 9.61621C14.2179 10.6074 13.5101 11.9998 12.2837 12H10.4526C10.221 13.1411 9.21193 14 8.00244 14C6.79295 14 5.78387 13.1411 5.55225 12H3.71729C2.49036 12 1.78232 10.6074 2.50537 9.61621L2.94385 9.01367C2.98031 8.96366 3.00044 8.90369 3.00049 8.8418V7C3.00049 4.57962 4.72015 2.56035 7.00439 2.09863V2C7.00441 1.44773 7.45212 1 8.00439 1ZM6.58936 12C6.79541 12.5823 7.34952 13 8.00244 13C8.65537 13 9.20947 12.5823 9.41553 12H6.58936Z" fill="currentColor" /></SvgRoot>;
});
export default IconBellFill;
