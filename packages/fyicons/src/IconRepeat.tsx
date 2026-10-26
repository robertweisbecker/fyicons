import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRepeat = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRepeat(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.499 7a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 1-2.5 2.5h-5.5v.933a.5.5 0 0 1-.819.384l-1.72-1.433a.5.5 0 0 1 0-.767l1.72-1.433a.5.5 0 0 1 .82.384V12h5.499a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5m-1.5-4.932a.5.5 0 0 1 .821-.385l1.719 1.433a.5.5 0 0 1 0 .768L11.82 5.317a.5.5 0 0 1-.82-.385V4H5.5A1.5 1.5 0 0 0 4 5.5v3a.5.5 0 0 1-1 0v-3A2.5 2.5 0 0 1 5.5 3H11z" /></SvgRoot>;
});
export default IconRepeat;
