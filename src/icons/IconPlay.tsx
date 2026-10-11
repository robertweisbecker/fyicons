import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPlay = React.forwardRef<SVGSVGElement, IconProps>(function IconPlay(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M4 3.97661C4.00002 2.61077 5.49498 1.77141 6.66113 2.48246L13.2598 6.5059C14.3783 7.18796 14.3783 8.81212 13.2598 9.49418L6.66113 13.5176C5.49497 14.2287 4 13.3893 4 12.0235V3.97661ZM6.14062 3.33598C5.64085 3.03125 5.00002 3.39126 5 3.97661V12.0235C5 12.6088 5.64084 12.9689 6.14062 12.6641L12.7393 8.64067C13.2186 8.34835 13.2186 7.65173 12.7393 7.35942L6.14062 3.33598Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconPlay;
