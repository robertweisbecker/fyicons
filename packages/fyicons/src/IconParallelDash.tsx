import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParallelDash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParallelDash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 9.827a.5.5 0 0 1 .823-.381l1.976 1.672a.5.5 0 0 1 0 .762l-1.976 1.672a.5.5 0 0 1-.823-.38V12H7.5a.5.5 0 0 1 0-1H11zM2.51 11a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1 0-1zm2.99 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM11 2.829a.5.5 0 0 1 .823-.382L13.8 4.119a.5.5 0 0 1 0 .763l-1.976 1.672A.5.5 0 0 1 11 6.172V5H7.5a.5.5 0 0 1 0-1H11zm-8.49 1.17a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1 0-1zM5.5 4a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconParallelDash;
