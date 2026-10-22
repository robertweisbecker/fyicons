import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlayFill = React.forwardRef<SVGSVGElement, IconProps>(function IconPlayFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4 3.97681C4 2.61095 5.49497 1.77159 6.66113 2.48267L13.2598 6.5061C14.3783 7.1882 14.3783 8.81234 13.2598 9.49438L6.66113 13.5178C5.49504 14.2288 4.00014 13.3894 4 12.0237V3.97681Z" fill="currentColor" /></SvgRoot>;
});
export default IconPlayFill;
