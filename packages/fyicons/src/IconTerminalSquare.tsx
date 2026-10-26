import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTerminalSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTerminalSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-.604 2.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 1 1-.708-.708L5.543 7 4.396 5.854a.5.5 0 0 1 0-.708M9.5 8a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconTerminalSquare;
