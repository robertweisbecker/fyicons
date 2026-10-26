import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareCheckFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareCheckFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-.743 3.071a.5.5 0 0 0-.686.172l-2.67 4.45-1.547-1.547a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .783-.097l3-5a.5.5 0 0 0-.172-.686" /></SvgRoot>;
});
export default IconSquareCheckFill;
