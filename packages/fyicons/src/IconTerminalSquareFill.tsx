import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTerminalSquareFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTerminalSquareFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5.854 6.147a.5.5 0 0 0-.707.707l1.647 1.647-1.647 1.647a.5.5 0 1 0 .707.707l2-2a.5.5 0 0 0 0-.708zm2.648 3.854a.5.5 0 0 0 0 1h2a.501.501 0 0 0 0-1z" /></SvgRoot>;
});
export default IconTerminalSquareFill;
