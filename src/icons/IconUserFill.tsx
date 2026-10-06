import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconUserFill = React.forwardRef<SVGSVGElement, IconProps>(function IconUserFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.00003 9C9.4587 9 10.8573 9.52718 11.8887 10.4648C12.5281 11.0461 12.9939 11.7556 13.2557 12.5268C13.522 13.3113 12.8285 14 12 14H4.00003C3.1716 14 2.47808 13.3113 2.74435 12.5268C3.00614 11.7556 3.47199 11.0461 4.11135 10.4648C5.1428 9.52718 6.54135 9 8.00003 9ZM8.00003 2C9.65688 2 11 3.34315 11 5C11 6.65685 9.65688 8 8.00003 8C6.34317 8 5.00003 6.65685 5.00003 5C5.00003 3.34315 6.34317 2 8.00003 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconUserFill;
