import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBlocks = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBlocks(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.192 1.422a1.5 1.5 0 0 1 1.617.003l2.503 1.61A1.5 1.5 0 0 1 13 4.296v6.156a1.5 1.5 0 0 1-.694 1.265l-4.44 2.824a1.5 1.5 0 0 1-1.732-.085l-2.56-2.012A1.5 1.5 0 0 1 3 11.264V5.55c0-.512.262-.99.694-1.265zm-.692 9.61v2.557l4.269-2.716a.5.5 0 0 0 .231-.421V8.307zm-3.5.232c0 .153.07.299.191.394L6.5 13.47v-2.463L4 9.222zm3.5-3.728v2.327L12 7.138V4.876zM4 7.992l2.5 1.786V7.523L4 5.916zm5.268-5.725a.5.5 0 0 0-.54 0L4.429 5 7.01 6.663l4.739-2.801z" /></SvgRoot>;
});
export default IconBlocks;
