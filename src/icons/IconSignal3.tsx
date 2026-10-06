import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSignal3 = React.forwardRef<SVGSVGElement, IconProps>(function IconSignal3(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M2 10C2.55228 10 3 10.4477 3 11V12C3 12.5523 2.55228 13 2 13C1.44772 13 1 12.5523 1 12V11C1 10.4477 1.44772 10 2 10ZM6 8C6.55228 8 7 8.44772 7 9V12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12V9C5 8.44772 5.44772 8 6 8ZM10 5C10.5523 5 11 5.44772 11 6V12C11 12.5523 10.5523 13 10 13C9.44771 13 9 12.5523 9 12V6C9 5.44772 9.44771 5 10 5ZM14 12C14.2761 12 14.5 12.2239 14.5 12.5C14.5 12.7761 14.2761 13 14 13C13.7239 13 13.5 12.7761 13.5 12.5C13.5 12.2239 13.7239 12 14 12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSignal3;
