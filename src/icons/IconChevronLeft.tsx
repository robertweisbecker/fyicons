import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconChevronLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronLeft(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.85266 3.14669C9.6574 2.95143 9.34089 2.95143 9.14563 3.14669L4.64563 7.64669C4.45054 7.84197 4.45043 8.15852 4.64563 8.35372L9.14563 12.8537C9.34085 13.0488 9.65744 13.0488 9.85266 12.8537C10.0479 12.6585 10.0478 12.342 9.85266 12.1467L5.70618 8.00021L9.85266 3.85372C10.0479 3.65852 10.0478 3.34197 9.85266 3.14669Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconChevronLeft;
