import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconHourglass = React.forwardRef<SVGSVGElement, IconProps>(function IconHourglass(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.49942 1.5L4.4996 3.66671C4.49967 4.53216 4.78043 5.37425 5.29975 6.06658L6.41238 7.54989C6.61244 7.81661 6.61241 8.18337 6.41231 8.45006L5.09951 10.1997C4.70974 10.7192 4.49906 11.3511 4.49914 12.0005L4.49942 14.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} /><path d="M7.3831 5H8.6169C9.00555 5 9.24561 5.42399 9.04565 5.75725L8.42875 6.78542C8.23454 7.10909 7.76545 7.10909 7.57125 6.78542L6.95435 5.75725C6.75439 5.42399 6.99445 5 7.3831 5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M6.16125 11.7972C6.05624 11.9285 5.99902 12.0916 5.99902 12.2597C5.99902 12.6686 6.33047 13 6.73934 13H9.25871C9.66757 13 9.99902 12.6686 9.99902 12.2597C9.99902 12.0916 9.94181 11.9285 9.8368 11.7972L8.58467 10.2321C8.28443 9.85676 7.71362 9.85676 7.41337 10.2321L6.16125 11.7972Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M12.5 1.5H3.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 14.5H3.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 1.5V3.66667C11.5 4.53215 11.2193 5.37428 10.7 6.06667L9.58752 7.54997C9.38751 7.81665 9.38752 8.18334 9.58755 8.45001L10.9001 10.1998C11.2897 10.7192 11.5003 11.351 11.5002 12.0002L11.5 14.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} /></SvgRoot>;
});
export default IconHourglass;
