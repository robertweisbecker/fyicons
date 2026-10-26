import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRoute = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRoute(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.501 1a2.5 2.5 0 0 1 2.45 2h3.299a2.75 2.75 0 0 1 0 5.5h-4.5a1.75 1.75 0 0 0 0 3.5h3.3a2.501 2.501 0 0 1 4.95.5 2.5 2.5 0 0 1-4.95.5h-3.3a2.75 2.75 0 1 1 0-5.5h4.5a1.75 1.75 0 1 0 0-3.5H6.951a2.5 2.5 0 1 1-2.45-3M11.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M4.501 2A1.5 1.5 0 1 0 6 3.505v-.012A1.5 1.5 0 0 0 4.501 2" /></SvgRoot>;
});
export default IconRoute;
