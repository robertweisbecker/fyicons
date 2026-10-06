import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconRowExpand = React.forwardRef<SVGSVGElement, IconProps>(function IconRowExpand(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.64926 11.6479C9.84452 11.4526 10.161 11.4526 10.3563 11.6479C10.5513 11.8432 10.5515 12.1598 10.3563 12.3549L8.35629 14.3549C8.16109 14.5499 7.84446 14.5499 7.64926 14.3549L5.64926 12.3549C5.45407 12.1598 5.45424 11.8432 5.64926 11.6479C5.84452 11.4526 6.16103 11.4526 6.35629 11.6479L8.00277 13.2944L9.64926 11.6479ZM7.64828 2.64791C7.84354 2.45265 8.16005 2.45265 8.35531 2.64791L10.3553 4.64791C10.5505 4.84318 10.5505 5.15972 10.3553 5.35494C10.1601 5.54993 9.84347 5.55001 9.64828 5.35494L8.00179 3.70846L6.35531 5.35494C6.16007 5.54993 5.84347 5.55001 5.64828 5.35494C5.4531 5.15976 5.45326 4.84319 5.64828 4.64791L7.64828 2.64791Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M3.5 8.5H12.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconRowExpand;
