import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookmark = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookmark(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v10.552c0 1.186-1.401 1.815-2.288 1.027L8 12.17l-2.712 2.41C4.401 15.367 3 14.738 3 13.552V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v10.552c0 .323.382.495.624.28l3.044-2.706.075-.055a.5.5 0 0 1 .589.055l3.044 2.706a.375.375 0 0 0 .624-.28V3a1 1 0 0 0-1-1z" /></SvgRoot>;
});
export default IconBookmark;
