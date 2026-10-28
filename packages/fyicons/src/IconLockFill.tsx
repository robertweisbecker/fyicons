import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLockFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLockFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="lock-fill"><path fill="currentColor" d="M8 1a3 3 0 0 1 3 3v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2V4a3 3 0 0 1 3-3m0 8a1 1 0 0 0-.5 1.864V12.5a.5.5 0 0 0 1 0v-1.636A.998.998 0 0 0 8 9m0-7a2 2 0 0 0-2 2v2h4V4a2 2 0 0 0-2-2" /></SvgRoot>;
});
export default IconLockFill;
