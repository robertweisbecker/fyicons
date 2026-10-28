import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-check"><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm5.071 2.243a.5.5 0 0 1 .858.514l-3 5a.5.5 0 0 1-.783.097l-2-2a.5.5 0 1 1 .708-.708L7.4 9.693z" /></SvgRoot>;
});
export default IconSquareCheck;
