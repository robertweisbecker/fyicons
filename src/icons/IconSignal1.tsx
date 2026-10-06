import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSignal1 = React.forwardRef<SVGSVGElement, IconProps>(function IconSignal1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M2 10C2.55228 10 3 10.4477 3 11V12C3 12.5523 2.55228 13 2 13C1.44772 13 1 12.5523 1 12V11C1 10.4477 1.44772 10 2 10ZM6 12C6.27614 12 6.5 12.2239 6.5 12.5C6.5 12.7761 6.27614 13 6 13C5.72386 13 5.5 12.7761 5.5 12.5C5.5 12.2239 5.72386 12 6 12ZM10 12C10.2761 12 10.5 12.2239 10.5 12.5C10.5 12.7761 10.2761 13 10 13C9.72386 13 9.5 12.7761 9.5 12.5C9.5 12.2239 9.72386 12 10 12ZM14 12C14.2761 12 14.5 12.2239 14.5 12.5C14.5 12.7761 14.2761 13 14 13C13.7239 13 13.5 12.7761 13.5 12.5C13.5 12.2239 13.7239 12 14 12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSignal1;
