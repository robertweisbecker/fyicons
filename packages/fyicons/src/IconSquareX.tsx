import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm4.646 2.646a.5.5 0 1 1 .707.708L8.708 8l1.646 1.646a.5.5 0 1 1-.707.707L8 8.708l-1.646 1.646a.5.5 0 1 1-.708-.707L7.293 8 5.646 6.354a.5.5 0 1 1 .708-.708L8 7.293z" /></SvgRoot>;
});
export default IconSquareX;
