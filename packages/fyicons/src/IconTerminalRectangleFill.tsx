import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTerminalRectangleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTerminalRectangleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="terminal-rectangle-fill"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM4.354 5.646a.5.5 0 0 0-.708.708L5.293 8 3.646 9.646a.5.5 0 0 0 .708.707l2-2a.5.5 0 0 0 0-.707zM7.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" /></SvgRoot>;
});
export default IconTerminalRectangleFill;
