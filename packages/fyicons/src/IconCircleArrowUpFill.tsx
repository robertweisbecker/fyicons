import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowUpFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowUpFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m.098 3.509a.5.5 0 0 0-.339.055.5.5 0 0 0-.113.082l-2.5 2.5a.5.5 0 1 0 .708.708L7.5 6.207V11.5a.5.5 0 0 0 1 0V6.207l1.646 1.647a.5.5 0 1 0 .707-.708l-2.5-2.5a.5.5 0 0 0-.113-.083.5.5 0 0 0-.142-.054" /></SvgRoot>;
});
export default IconCircleArrowUpFill;
