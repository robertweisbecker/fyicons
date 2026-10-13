import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconRowCollapse = React.forwardRef<SVGSVGElement, IconProps>(function IconRowCollapse(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.65127 10.6476C7.8465 10.4525 8.16307 10.4525 8.3583 10.6476L10.8583 13.1476C11.0535 13.3428 11.0534 13.6594 10.8583 13.8546C10.663 14.0499 10.3465 14.0499 10.1513 13.8546L8.00478 11.7081L5.8583 13.8546C5.66304 14.0499 5.34653 14.0499 5.15127 13.8546C4.95613 13.6594 4.95605 13.3428 5.15127 13.1476L7.65127 10.6476ZM10.1552 3.1476C10.3504 2.95251 10.667 2.95252 10.8622 3.1476C11.0571 3.34284 11.0572 3.65946 10.8622 3.85463L8.36025 6.35658C8.16509 6.55169 7.84849 6.55152 7.65322 6.35658L5.15127 3.85463C4.95618 3.65941 4.95621 3.34283 5.15127 3.1476C5.34649 2.95239 5.66304 2.95247 5.8583 3.1476L8.00674 5.29603L10.1552 3.1476Z" fill="currentColor" /><path d="M3.5 8.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconRowCollapse;
