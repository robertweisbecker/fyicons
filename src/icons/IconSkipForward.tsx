import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSkipForward = React.forwardRef<SVGSVGElement, IconProps>(function IconSkipForward(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M3 4.57791C3.00026 3.82477 3.82395 3.36109 4.46777 3.75173L9.74805 6.95877V4.99978C9.74818 4.44761 10.1958 3.99978 10.748 3.99978H11.998C12.5503 3.99978 12.9979 4.44761 12.998 4.99978V10.9998C12.998 11.5521 12.5503 11.9998 11.998 11.9998H10.748C10.1958 11.9998 9.74805 11.5521 9.74805 10.9998V9.03787L4.46777 12.2459C3.82382 12.6368 3 12.1731 3 11.4197V4.57791ZM4 11.3601L9.5332 7.9988L4 4.6365V11.3601ZM10.748 10.9998H11.998V4.99978H10.748V10.9998Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSkipForward;
