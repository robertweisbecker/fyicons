import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSearchSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconSearchSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5 1C9.53757 1 12 3.46243 12 6.5C12 7.83872 11.5206 9.06482 10.7256 10.0186L14.3535 13.6465C14.5488 13.8417 14.5488 14.1583 14.3535 14.3535C14.1583 14.5488 13.8417 14.5488 13.6465 14.3535L10.0186 10.7256C9.06482 11.5206 7.83872 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1ZM6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSearchSimple;
