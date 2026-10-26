import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRepeat = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRepeat(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 7a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 1-2.5 2.5H5v.933a.5.5 0 0 1-.82.384l-1.72-1.433a.5.5 0 0 1 0-.768l1.719-1.432a.5.5 0 0 1 .82.384V12h5.5a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5M11 2.068a.5.5 0 0 1 .82-.384l1.72 1.431a.5.5 0 0 1 0 .769l-1.72 1.433a.5.5 0 0 1-.82-.384V4H5.5A1.5 1.5 0 0 0 4 5.5v3a.5.5 0 1 1-1 0v-3A2.5 2.5 0 0 1 5.5 3H11z" /></SvgRoot>;
});
export default IconRepeat;
