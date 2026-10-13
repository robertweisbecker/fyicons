import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconRowExpand = React.forwardRef<SVGSVGElement, IconProps>(function IconRowExpand(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.1467 11.1506C10.3419 10.9554 10.6585 10.9554 10.8537 11.1506C11.049 11.3459 11.049 11.6624 10.8537 11.8577L8.35664 14.3547C8.16136 14.5497 7.84476 14.5499 7.64961 14.3547L5.15254 11.8577C4.9574 11.6625 4.95761 11.3459 5.15254 11.1506C5.3478 10.9554 5.66431 10.9554 5.85957 11.1506L8.00313 13.2942L10.1467 11.1506ZM8.00215 2.50122C8.13466 2.50121 8.26191 2.55408 8.35567 2.64771L10.8547 5.14673C11.0499 5.342 11.0499 5.65853 10.8547 5.85376C10.6594 6.04866 10.3428 6.04881 10.1477 5.85376L8.00313 3.70923L5.8586 5.85376C5.66344 6.04864 5.34678 6.0486 5.15157 5.85376C4.95643 5.6587 4.95587 5.34207 5.15059 5.14673L7.64864 2.64771C7.74229 2.55405 7.86971 2.50135 8.00215 2.50122Z" fill="currentColor" /><path d="M3.5 8.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconRowExpand;
