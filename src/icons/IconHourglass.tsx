import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconHourglass = React.forwardRef<SVGSVGElement, IconProps>(function IconHourglass(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.49942 1.5L4.4996 3.66671C4.49967 4.53216 4.78043 5.37425 5.29975 6.06658L6.41238 7.54989C6.61244 7.81661 6.61241 8.18337 6.41231 8.45006L5.09951 10.1997C4.70974 10.7192 4.49906 11.3511 4.49914 12.0005L4.49942 14.5" stroke="currentColor" /><path d="M6.25 5H9.75L8.61442 6.62225C8.31585 7.04879 7.68415 7.04879 7.38558 6.62225L6.25 5Z" fill="currentColor" /><path d="M6.16337 11.7946C6.05698 11.9275 5.99902 12.0928 5.99902 12.2631V13H9.99902V12.2631C9.99902 12.0928 9.94106 11.9275 9.83467 11.7946L8.58467 10.2321C8.28443 9.85676 7.71362 9.85676 7.41337 10.2321L6.16337 11.7946Z" fill="currentColor" /><path d="M12.5 1.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 14.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 1.5V3.66667C11.5 4.53215 11.2193 5.37428 10.7 6.06667L9.58752 7.54997C9.38751 7.81665 9.38752 8.18334 9.58755 8.45001L10.9001 10.1998C11.2897 10.7192 11.5003 11.351 11.5002 12.0002L11.5 14.5" stroke="currentColor" /></SvgRoot>;
});
export default IconHourglass;
