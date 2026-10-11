import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowRedo = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRedo(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.6465 2.64673C10.8418 2.45148 11.1583 2.45147 11.3535 2.64673L13.8535 5.14673C14.0485 5.34197 14.0486 5.65855 13.8535 5.85376L11.3535 8.35376C11.1583 8.54878 10.8417 8.54878 10.6465 8.35376C10.4514 8.15855 10.4514 7.84196 10.6465 7.64673L12.293 6.00024H6C4.34315 6.00024 3 7.34339 3 9.00024C3.00007 10.657 4.34319 12.0002 6 12.0002H8.5C8.77614 12.0002 9 12.2241 9 12.5002C8.99993 12.7763 8.7761 13.0002 8.5 13.0002H6C3.79091 13.0002 2.00007 11.2093 2 9.00024C2 6.79111 3.79086 5.00024 6 5.00024H12.293L10.6465 3.35376C10.4513 3.15855 10.4514 2.842 10.6465 2.64673Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconArrowRedo;
