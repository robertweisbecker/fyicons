import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconKbdReturn = React.forwardRef<SVGSVGElement, IconProps>(function IconKbdReturn(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 3C13.1045 3 14 3.89543 14 5V8C14 9.10457 13.1045 10 12 10H3.70699L5.85348 12.1465C6.04874 12.3417 6.04874 12.6583 5.85348 12.8535C5.65822 13.0488 5.34171 13.0488 5.14645 12.8535L2.14645 9.85352C1.95118 9.65825 1.95118 9.34175 2.14645 9.14648L5.14645 6.14648C5.34171 5.95122 5.65822 5.95122 5.85348 6.14648C6.04874 6.34175 6.04874 6.65825 5.85348 6.85352L3.70699 9H12C12.5522 9 13 8.55228 13 8V5C13 4.44772 12.5522 4 12 4H8.49996C8.22382 4 7.99996 3.77614 7.99996 3.5C7.99996 3.22386 8.22382 3 8.49996 3H12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconKbdReturn;
