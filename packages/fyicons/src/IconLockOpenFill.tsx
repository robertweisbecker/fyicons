import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLockOpenFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLockOpenFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="lock-open-fill"><path fill="currentColor" d="M8 1c1.029 0 1.935.518 2.475 1.308.214.313-.047.692-.427.692a.66.66 0 0 1-.497-.26A2 2 0 0 0 6 4v2h4.999a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2V4a3 3 0 0 1 3-3m0 8a1 1 0 0 0-.5 1.864V12.5a.5.5 0 0 0 1 0v-1.636A.998.998 0 0 0 8 9" /></SvgRoot>;
});
export default IconLockOpenFill;
