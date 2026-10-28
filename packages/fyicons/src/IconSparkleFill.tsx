import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparkleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSparkleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="sparkle-fill"><path d="M6.7688 1.86914C7.16404 0.68429 8.84047 0.684199 9.2356 1.86914L10.0647 4.35645C10.3135 5.1029 10.8993 5.68866 11.6458 5.9375L13.9055 6.69043C15.1634 7.10987 15.1633 8.89003 13.9055 9.30957L11.6458 10.0625C10.8994 10.3113 10.3136 10.8972 10.0647 11.6436L9.31177 13.9033C8.89239 15.1615 7.11201 15.1615 6.69263 13.9033L5.9397 11.6436C5.69084 10.8972 5.10498 10.3114 4.35864 10.0625L2.09888 9.30957C0.840736 8.89019 0.840741 7.10981 2.09888 6.69043L4.35864 5.9375C5.10496 5.6886 5.69089 5.1028 5.9397 4.35645L6.7688 1.86914Z" fill="currentColor" /></SvgRoot>;
});
export default IconSparkleFill;
