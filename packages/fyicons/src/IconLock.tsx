import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLock = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLock(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a3 3 0 0 1 3 3v2a2 2 0 0 1 2 2v5a2 2 0 0 1-1.796 1.99L11 15H5l-.204-.01a2 2 0 0 1-1.785-1.786L3 13V8a2 2 0 0 1 2-2V4a3 3 0 0 1 3-3M5 7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm3 2a1 1 0 0 1 .5 1.864V12a.5.5 0 0 1-1 0v-1.136A.998.998 0 0 1 8 9m0-7a2 2 0 0 0-2 2v2h4V4a2 2 0 0 0-2-2" /></SvgRoot>;
});
export default IconLock;
