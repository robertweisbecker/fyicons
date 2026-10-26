import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarrowRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5V6a2.5 2.5 0 0 0 2.5 2.5h4.793l-1.647 1.646a.5.5 0 1 0 .708.707l2.5-2.5a.5.5 0 0 0 0-.707l-2.5-2.5a.5.5 0 1 0-.708.708L9.293 7.5H4.5A1.5 1.5 0 0 1 3 6V4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5a.5.5 0 0 0-1 0A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2z" /></SvgRoot>;
});
export default IconSquarrowRight;
