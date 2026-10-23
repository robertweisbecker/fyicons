import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.00045 2C8.27647 2.00014 8.50045 2.22394 8.50045 2.5V12.792L12.146 9.14648C12.3412 8.95134 12.6587 8.95128 12.854 9.14648C13.0487 9.34165 13.0487 9.65835 12.854 9.85352L8.35397 14.3535C8.26026 14.4472 8.13296 14.4999 8.00045 14.5C7.8679 14.5 7.74069 14.4472 7.64693 14.3535L3.14693 9.85352C2.95167 9.65825 2.95167 9.34175 3.14693 9.14648C3.34221 8.95135 3.65875 8.95126 3.85397 9.14648L7.50045 12.793V2.5C7.50045 2.22386 7.72431 2 8.00045 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowDown;
