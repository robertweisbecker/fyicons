import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconChevronLeftSharp = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronLeftSharp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.85352 4.35352L6.20703 8L9.85352 11.6465L9.14648 12.3535L4.79297 8L9.14648 3.64648L9.85352 4.35352Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconChevronLeftSharp;
