import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSkipForwardFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSkipForwardFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M3 4.58807C3 3.89689 3.76056 3.47565 4.34668 3.84198L9.80566 7.25409C10.3571 7.59876 10.3571 8.40161 9.80566 8.74628L4.34668 12.1584C3.76056 12.5247 3 12.1035 3 11.4123V4.58807ZM12.5 4.00018C12.7761 4.00018 13 4.22404 13 4.50018V11.5002C12.9999 11.7763 12.7761 12.0002 12.5 12.0002H11.5C11.2239 12.0002 11.0001 11.7763 11 11.5002V4.50018C11 4.22404 11.2239 4.00018 11.5 4.00018H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSkipForwardFill;
