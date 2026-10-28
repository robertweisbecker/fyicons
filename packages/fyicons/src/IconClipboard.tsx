import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClipboard = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconClipboard(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.393 1c.672 0 1.248.413 1.488 1H11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1.12c.239-.587.815-1 1.487-1zM5 3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-.499c.314.3.499.717.499 1.16v.34a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-.34c0-.443.185-.86.499-1.16zm2.607-1A.607.607 0 0 0 7 2.607c0 .355-.179.687-.476.881l-.25.164A.6.6 0 0 0 6.022 4h3.956a.6.6 0 0 0-.252-.348l-.25-.164A1.05 1.05 0 0 1 9 2.608.607.607 0 0 0 8.393 2z" /></SvgRoot>;
});
export default IconClipboard;
