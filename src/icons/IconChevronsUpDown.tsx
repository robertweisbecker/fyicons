import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconChevronsUpDown = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsUpDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.6474 9.64669C10.8427 9.45143 11.1592 9.45143 11.3544 9.64669C11.5494 9.84198 11.5496 10.1586 11.3544 10.3537L8.35443 13.3537C8.15926 13.5488 7.84267 13.5487 7.6474 13.3537L4.6474 10.3537C4.45215 10.1585 4.45218 9.84196 4.6474 9.64669C4.84266 9.45143 5.15917 9.45143 5.35443 9.64669L8.00092 12.2932L10.6474 9.64669ZM7.6474 2.64669C7.84266 2.45143 8.15917 2.45143 8.35443 2.64669L11.3544 5.64669C11.5496 5.84196 11.5497 6.15848 11.3544 6.35372C11.1592 6.5487 10.8426 6.54883 10.6474 6.35372L8.00092 3.70724L5.35443 6.35372C5.15917 6.5487 4.84258 6.54883 4.6474 6.35372C4.45223 6.15855 4.4524 5.84197 4.6474 5.64669L7.6474 2.64669Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconChevronsUpDown;
