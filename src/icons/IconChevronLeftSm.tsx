import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconChevronLeftSm = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronLeftSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.14648 4.14648C9.34175 3.95122 9.65825 3.95122 9.85352 4.14648C10.0487 4.34175 10.0488 4.65827 9.85352 4.85352L6.70703 8L9.85352 11.1465C10.0487 11.3417 10.0488 11.6583 9.85352 11.8535C9.65827 12.0488 9.34175 12.0487 9.14648 11.8535L5.64648 8.35352C5.45122 8.15825 5.45122 7.84175 5.64648 7.64648L9.14648 4.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconChevronLeftSm;
