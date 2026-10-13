import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconChevronUp = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronUp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.1464 9.85355C12.3417 10.0488 12.6582 10.0488 12.8535 9.85355C13.0486 9.65828 13.0487 9.34175 12.8535 9.14652L8.35346 4.64652C8.15823 4.45133 7.84168 4.45138 7.64643 4.64652L3.14643 9.14652C2.95118 9.34177 2.9512 9.65829 3.14643 9.85355C3.34169 10.0488 3.6582 10.0488 3.85346 9.85355L7.99994 5.70707L12.1464 9.85355Z" fill="currentColor" /></SvgRoot>;
});
export default IconChevronUp;
