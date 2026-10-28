import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWrap = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWrap(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5M7 3a3 3 0 0 1 0 6H3.707l1.147 1.146a.5.5 0 1 1-.708.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 1 1 .708.708L3.707 8H7a2 2 0 1 0 0-4H2.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconWrap;
