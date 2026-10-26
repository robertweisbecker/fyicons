import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBoxStorage = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBoxStorage(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.965 2c.501 0 .97.251 1.248.668l1.535 2.303a1.5 1.5 0 0 1 .252.832v6.198a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5.803a1.5 1.5 0 0 1 .252-.832l1.535-2.303A1.5 1.5 0 0 1 5.035 2zM3 6v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6zm6.5 2a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM5.035 3a.5.5 0 0 0-.416.223L3.435 5H7.5V3zM8.5 5h4.065l-1.184-1.777A.5.5 0 0 0 10.965 3H8.5z" /></SvgRoot>;
});
export default IconBoxStorage;
