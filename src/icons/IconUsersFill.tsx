import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUsersFill = React.forwardRef<SVGSVGElement, IconProps>(function IconUsersFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.2531 9.25C12.982 9.25 14.4375 10.4203 14.8712 12.0117C15.0163 12.5445 14.5553 13 14.0031 13H2.00307C1.45086 13 0.989841 12.5445 1.13491 12.0117C1.56868 10.4203 3.02416 9.25 4.75307 9.25C6.14322 9.25 7.35541 10.0072 8.00307 11.1309C8.65073 10.0072 9.86293 9.25 11.2531 9.25ZM4.7521 3.25C5.99474 3.25 7.0021 4.25736 7.0021 5.5C7.0021 6.74264 5.99474 7.75 4.7521 7.75C3.50946 7.75 2.5021 6.74264 2.5021 5.5C2.5021 4.25736 3.50946 3.25 4.7521 3.25ZM11.2501 3.25C12.4928 3.25 13.5001 4.25736 13.5001 5.5C13.5001 6.74264 12.4928 7.75 11.2501 7.75C10.0075 7.75 9.00014 6.74264 9.00014 5.5C9.00014 4.25736 10.0075 3.25 11.2501 3.25Z" fill="currentColor" /></SvgRoot>;
});
export default IconUsersFill;
