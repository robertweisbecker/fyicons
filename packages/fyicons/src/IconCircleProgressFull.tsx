import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleProgressFull = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleProgressFull(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8 3C10.7614 3 13 5.23858 13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3ZM9.76172 6.07422C9.52656 5.92967 9.21889 6.00317 9.07422 6.23828L7.40527 8.94824L6.60352 8.14648C6.40829 7.95139 6.09172 7.95139 5.89648 8.14648C5.70131 8.34171 5.70136 8.65826 5.89648 8.85352L7.14648 10.1035C7.25464 10.2115 7.40682 10.2649 7.55859 10.2471C7.71014 10.2291 7.84566 10.1426 7.92578 10.0127L9.92578 6.76172C10.0702 6.5267 9.99651 6.219 9.76172 6.07422Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleProgressFull;
