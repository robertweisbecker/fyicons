import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconChevronRightSharp = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronRightSharp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.207 8L6.85352 12.3535L6.14648 11.6465L9.79297 8L6.14648 4.35352L6.85352 3.64648L11.207 8Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconChevronRightSharp;
