import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParallel = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParallel(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="parallel"><path fill="currentColor" d="M4.5 9a2.5 2.5 0 0 1 2.45 2H11V9.535a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.967a.25.25 0 0 1-.41-.193v-1.465H6.95A2.502 2.502 0 0 1 2 11.5 2.5 2.5 0 0 1 4.5 9m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a2.5 2.5 0 0 1 2.45 2H11V2.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.967a.25.25 0 0 1-.41-.193V5H6.95A2.501 2.501 0 0 1 2 4.5 2.5 2.5 0 0 1 4.5 2m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconParallel;
