import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSkipBackwardFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSkipBackwardFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.6533 3.84144C12.2393 3.47517 12.9998 3.89655 13 4.58753V11.4127C12.9998 12.1037 12.2393 12.5251 11.6533 12.1588L6.19434 8.74671C5.64287 8.40204 5.64287 7.59821 6.19434 7.25355L11.6533 3.84144ZM4.5 3.99964C4.776 3.99964 4.99977 4.22369 5 4.49964V11.4996C5 11.7758 4.77614 11.9996 4.5 11.9996H3.5C3.22386 11.9996 3 11.7758 3 11.4996V4.49964C3.00023 4.22369 3.224 3.99964 3.5 3.99964H4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSkipBackwardFill;
