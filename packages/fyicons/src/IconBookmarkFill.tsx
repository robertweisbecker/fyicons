import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookmarkFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookmarkFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v10.552c0 1.186-1.401 1.815-2.288 1.027L8 12.17l-2.712 2.41C4.401 15.367 3 14.738 3 13.552V3a2 2 0 0 1 2-2z" /></SvgRoot>;
});
export default IconBookmarkFill;
