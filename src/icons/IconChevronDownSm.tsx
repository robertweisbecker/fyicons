import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconChevronDownSm = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronDownSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.1464 6.64669C11.3417 6.45143 11.6582 6.45143 11.8535 6.64669C12.0487 6.84195 12.0487 7.15846 11.8535 7.35372L8.35348 10.8537C8.15822 11.049 7.84171 11.049 7.64645 10.8537L4.14645 7.35372C3.95118 7.15846 3.95118 6.84195 4.14645 6.64669C4.34171 6.45143 4.65822 6.45143 4.85348 6.64669L7.99996 9.79318L11.1464 6.64669Z" fill="currentColor" /></SvgRoot>;
});
export default IconChevronDownSm;
