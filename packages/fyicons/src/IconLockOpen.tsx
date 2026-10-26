import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLockOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLockOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1c1.029 0 1.935.518 2.475 1.308.214.313-.047.692-.427.692a.66.66 0 0 1-.497-.26A2 2 0 0 0 6 4v2h4.999a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5l-.204-.01A2 2 0 0 1 3 13V8a2 2 0 0 1 2-2V4a3 3 0 0 1 3-3M5 7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm3 2a1 1 0 0 1 .5 1.864V12a.5.5 0 0 1-1 0v-1.136A.998.998 0 0 1 8 9" /></SvgRoot>;
});
export default IconLockOpen;
