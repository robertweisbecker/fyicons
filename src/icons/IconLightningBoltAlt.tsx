import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLightningBoltAlt = React.forwardRef<SVGSVGElement, IconProps>(function IconLightningBoltAlt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10 1C10.158 1.00004 10.307 1.07448 10.4014 1.20117C10.4957 1.32796 10.5239 1.4922 10.4785 1.64355L9.17188 6H12.5C12.6893 6.00005 12.8626 6.10701 12.9473 6.27637C13.0319 6.44561 13.0138 6.64835 12.9004 6.7998L6.90039 14.7998C6.7667 14.9781 6.53056 15.0469 6.32227 14.9678C6.11392 14.8886 5.98344 14.6801 6.00195 14.458L6.45703 9H3.5C3.35508 9 3.21704 8.93661 3.12207 8.82715C3.02741 8.71779 2.98455 8.57289 3.00488 8.42969L4.00488 1.42969C4.04008 1.18337 4.25118 1 4.5 1H10ZM4.07617 8H7C7.13976 8.00003 7.27352 8.0583 7.36816 8.16113C7.4628 8.26402 7.50965 8.40268 7.49805 8.54199L7.1416 12.8096L11.5 7H8.5C8.34202 7 8.19299 6.92552 8.09863 6.79883C8.00429 6.67202 7.97607 6.50783 8.02148 6.35645L9.32812 2H4.93359L4.07617 8Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconLightningBoltAlt;
