import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconBell = React.forwardRef<SVGSVGElement, IconProps>(function IconBell(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.00305 2C8.55534 2 9.00305 2.44772 9.00305 3V3.12305C10.7824 3.57045 12.0996 5.18141 12.0997 7.09961V8.97363C12.0997 9.31033 12.176 9.64306 12.3224 9.94629L13.1036 11.5654C13.4241 12.2294 12.9405 12.9999 12.2032 13H9.41516C9.20905 13.5822 8.65493 14 8.00208 14C7.34943 13.9998 6.79603 13.5821 6.58997 13H3.797C3.05967 13 2.57606 12.2294 2.89661 11.5654L3.67786 9.94629C3.8242 9.64307 3.90051 9.31033 3.90051 8.97363V7.09961C3.90069 5.17927 5.22071 3.56737 7.00305 3.12207V3C7.00305 2.44776 7.45083 2.00008 8.00305 2ZM8.00012 4C6.28817 4 4.90072 5.38771 4.90051 7.09961V8.97363C4.90051 9.46085 4.79002 9.94208 4.57825 10.3809L3.797 12H12.2032L11.422 10.3809C11.2102 9.94207 11.0997 9.46086 11.0997 8.97363V7.09961C11.0995 5.38774 9.71202 4.00006 8.00012 4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconBell;
