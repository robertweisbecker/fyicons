import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSkipBackward = React.forwardRef<SVGSVGElement, IconProps>(function IconSkipBackward(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5264 3.75333C12.1703 3.36245 12.9941 3.8261 12.9941 4.57951V11.4213C12.994 12.1745 12.1702 12.6382 11.5264 12.2475L5.99902 8.88908V11.0004C5.99885 11.5525 5.5512 12.0004 4.99902 12.0004H3.99902C3.44685 12.0004 2.9992 11.5525 2.99902 11.0004V5.0004C2.99902 4.44812 3.44674 4.0004 3.99902 4.0004H4.99902C5.55131 4.0004 5.99902 4.44812 5.99902 5.0004V7.11075L11.5264 3.75333ZM6.46094 8.0004L11.9941 11.3617V4.6381L6.46094 8.0004ZM3.99902 11.0004H4.99902V5.0004H3.99902V11.0004Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSkipBackward;
