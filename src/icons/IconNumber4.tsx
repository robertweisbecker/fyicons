import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconNumber4 = React.forwardRef<SVGSVGElement, IconProps>(function IconNumber4(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM8.14648 5.14648C8.28939 5.00362 8.50468 4.96091 8.69141 5.03809C8.87793 5.11555 8.99991 5.29801 9 5.5V8H9.5C9.77592 8.00018 9.99988 8.22407 10 8.5C9.99988 8.77593 9.77592 8.99982 9.5 9H9V10.5C8.99988 10.7759 8.77592 10.9998 8.5 11C8.22408 10.9998 8.00012 10.7759 8 10.5V9H5.5C5.29804 8.99987 5.11552 8.87793 5.03809 8.69141C4.96088 8.50466 5.00361 8.2894 5.14648 8.14648L8.14648 5.14648ZM6.70703 8H8V6.70703L6.70703 8Z" fill="currentColor" /></SvgRoot>;
});
export default IconNumber4;
