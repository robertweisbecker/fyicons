import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconChevronRightSharp = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronRightSharp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.14648 3.64648C6.34175 3.45122 6.65825 3.45122 6.85352 3.64648L11.207 8L6.85352 12.3535C6.65825 12.5488 6.34175 12.5488 6.14648 12.3535C5.95122 12.1583 5.95122 11.8417 6.14648 11.6465L9.79297 8L6.14648 4.35352C5.95122 4.15825 5.95122 3.84175 6.14648 3.64648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconChevronRightSharp;
