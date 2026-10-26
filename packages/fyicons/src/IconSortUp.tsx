import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSortUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSortUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M3.142 2.103a.5.5 0 0 1 .707 0l2.043 2.043A.5.5 0 0 1 5.54 5H4v7.5a.501.501 0 0 1-1 0V5H1.454a.5.5 0 0 1-.354-.854zM14.5 12a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1zm-2-3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm-2-3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconSortUp;
