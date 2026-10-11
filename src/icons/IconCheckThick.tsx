import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCheckThick = React.forwardRef<SVGSVGElement, IconProps>(function IconCheckThick(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.6006 4.375C10.8077 4.01642 11.2663 3.89365 11.625 4.10059C11.9835 4.30768 12.1063 4.76634 11.8994 5.125L8.14941 11.625C8.036 11.8214 7.83932 11.9562 7.61523 11.9912C7.39119 12.026 7.16292 11.9572 6.99512 11.8047L4.24512 9.30469C3.93895 9.02602 3.91679 8.5515 4.19531 8.24512C4.47399 7.93898 4.94851 7.9168 5.25488 8.19531L7.31543 10.0684L10.6006 4.375Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCheckThick;
