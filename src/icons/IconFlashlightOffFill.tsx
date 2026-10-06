import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFlashlightOffFill = React.forwardRef<SVGSVGElement, IconProps>(function IconFlashlightOffFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 7.39453C11 7.78935 10.8831 8.1754 10.6641 8.50391L10.3359 8.99609C10.1169 9.32461 10 9.71065 10 10.1055V13.5732C9.99989 14.1413 9.67908 14.6694 9.13281 14.8252C8.7975 14.9208 8.39869 15 8 15C7.60131 15 7.2025 14.9208 6.86719 14.8252C6.3209 14.6694 6.00011 14.1413 6 13.5732V10.1055C5.99998 9.71066 5.88306 9.3246 5.66406 8.99609L5.33594 8.50391C5.11693 8.17539 5.00002 7.78935 5 7.39453V6H11V7.39453ZM8 9C7.44772 9 7 9.44772 7 10V12C7 12.5523 7.44772 13 8 13C8.55227 13 9 12.5523 9 12V10C9 9.44773 8.55227 9.00002 8 9ZM8 11.5C8.27614 11.5 8.5 11.7239 8.5 12C8.5 12.2761 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.72386 11.5 8 11.5ZM10.5 4C10.7761 4.00002 11 4.22387 11 4.5V5H5V4.5C5 4.22386 5.22386 4 5.5 4H10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFlashlightOffFill;
