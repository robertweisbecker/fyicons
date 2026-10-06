import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCaretUpLg = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUpLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.43396 5.38525C7.73274 5.04411 8.2641 5.04411 8.56287 5.38525L11.5121 8.75537C11.9364 9.24027 11.5919 9.99938 10.9476 9.99951H5.0492C4.44505 9.99939 4.10463 9.33206 4.41443 8.84912L4.48475 8.75537L7.43396 5.38525Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCaretUpLg;
