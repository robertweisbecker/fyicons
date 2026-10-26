import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDirectionRow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDirectionRow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.646 8.646a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 .065.63l-.064.078-2.5 2.5a.5.5 0 1 1-.708-.707L11.293 12H3.5a.5.5 0 0 1 0-1h7.793L9.646 9.354a.5.5 0 0 1 0-.708M6 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm7 0a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM3 6h3V3H3zm7 0h3V3h-3z" /></SvgRoot>;
});
export default IconDirectionRow;
