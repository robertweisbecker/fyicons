import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="user-fill"><path fill="currentColor" d="M8 9c1.459 0 2.857.527 3.889 1.465a4.94 4.94 0 0 1 1.367 2.062C13.522 13.31 12.828 14 12 14H4c-.828 0-1.522-.689-1.256-1.473a4.94 4.94 0 0 1 1.367-2.062C5.143 9.527 6.541 9 8 9m0-7a3 3 0 1 1 0 6 3 3 0 0 1 0-6" /></SvgRoot>;
});
export default IconUserFill;
