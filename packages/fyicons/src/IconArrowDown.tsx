import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 2a.5.5 0 0 1 .5.5v10.292l3.646-3.646a.501.501 0 0 1 .708.708l-4.5 4.5a.5.5 0 0 1-.707 0l-4.5-4.5a.5.5 0 1 1 .707-.708L7.5 12.793V2.5A.5.5 0 0 1 8 2" /></SvgRoot>;
});
export default IconArrowDown;
