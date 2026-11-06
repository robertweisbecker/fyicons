import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTree = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTree(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="tree"><path fill="currentColor" d="M7 14h2v-1h1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1h1zm.15-12.57a1 1 0 0 1 1.624-.11l.08.11v.002l3.105 5.046a.998.998 0 0 1-.64 1.499l1.75 3.168A1.25 1.25 0 0 1 11.976 13H4.02a1.25 1.25 0 0 1-1.093-1.854l1.75-3.17a1 1 0 0 1-.63-1.497L7.15 1.432zm.852.526L4.897 7h.613a.5.5 0 0 1 .438.742L3.801 11.63a.25.25 0 0 0 .218.37h7.957a.25.25 0 0 0 .22-.37l-2.148-3.886a.5.5 0 0 1 .437-.742h.623z" /></SvgRoot>;
});
export default IconTree;
