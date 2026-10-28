import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTerminalSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTerminalSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="terminal-square"><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm.146 3.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.708-.707L6.793 8.5 5.146 6.854a.5.5 0 0 1 0-.708M10.5 10a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconTerminalSquare;
