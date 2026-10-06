import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPlay = React.forwardRef<SVGSVGElement, IconProps>(function IconPlay(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M3 3.46835C3.0002 2.31846 4.24135 1.59568 5.24121 2.16367L13.2168 6.69589C14.2284 7.27091 14.2283 8.72823 13.2168 9.30332L5.24121 13.8355C4.24125 14.4037 3 13.681 3 12.5309V3.46835ZM4.74707 3.03281C4.41387 2.84372 4.0002 3.08524 4 3.46835V12.5309C4 12.9142 4.41377 13.1557 4.74707 12.9664L12.7227 8.43418C13.0599 8.24246 13.0599 7.75668 12.7227 7.56503L4.74707 3.03281Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconPlay;
