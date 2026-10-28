import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M1.146 1.146a.5.5 0 0 1 .708 0l2.55 2.55A3.5 3.5 0 0 1 6.5 3c.952 0 1.817.381 2.447.998a.12.12 0 0 0 .099.033Q9.269 4 9.5 4A3.5 3.5 0 0 1 13 7.5q-.002.335-.065.651A3 3 0 0 1 15 11a3 3 0 0 1-1.033 2.26l.886.887a.5.5 0 0 1-.707.707l-1.06-1.06A3 3 0 0 1 12 14H4.487l-.154-.004H4.32A3.496 3.496 0 0 1 3.092 7.3a3.49 3.49 0 0 1 .604-2.895l-2.55-2.55a.5.5 0 0 1 0-.708m3.268 3.975a2.49 2.49 0 0 0-.236 2.3.502.502 0 0 1-.334.668 2.5 2.5 0 0 0 .518 4.906l.15.004H12q.139-.001.271-.02zM6.5 4c-.51 0-.984.153-1.379.415l8.138 8.138a1.996 1.996 0 0 0-1.004-3.535.5.5 0 0 1-.407-.667c.097-.27.152-.555.152-.851a2.5 2.5 0 0 0-2.821-2.478 1.12 1.12 0 0 1-.931-.31A2.5 2.5 0 0 0 6.5 4" /></SvgRoot>;
});
export default IconCloudSlash;
