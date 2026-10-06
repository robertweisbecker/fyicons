import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCaretsDiagonal = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsDiagonal(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.2929 13C7.73835 13 7.96144 12.4614 7.64646 12.1464L3.85356 8.3535C3.53857 8.03852 3 8.2616 3 8.70706V12.5C3 12.7761 3.22386 13 3.5 13H7.2929ZM13 7.29284C13 7.73829 12.4614 7.96138 12.1464 7.6464L8.35356 3.85355C8.03858 3.53857 8.26166 3 8.70712 3H12.5C12.7761 3 13 3.22386 13 3.5V7.29284Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCaretsDiagonal;
