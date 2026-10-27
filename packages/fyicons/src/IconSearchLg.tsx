import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSearchLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSearchLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7 1C10.3137 1 13 3.68629 13 7C13 8.47681 12.4649 9.82772 11.5801 10.873L13.8535 13.1465C14.0488 13.3417 14.0488 13.6583 13.8535 13.8535C13.6583 14.0488 13.3417 14.0488 13.1465 13.8535L10.873 11.5801C9.82772 12.4649 8.47681 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1ZM7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconSearchLg;
