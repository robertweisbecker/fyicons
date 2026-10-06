import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconChevronUpSharp = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronUpSharp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.3535 9.14648L11.6465 9.85352L8 6.20703L4.35352 9.85352L3.64648 9.14648L8 4.79297L12.3535 9.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconChevronUpSharp;
