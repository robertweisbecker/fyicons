import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m-.099 2.509a.5.5 0 0 1 .339.055q.061.032.114.082l2.5 2.5a.5.5 0 1 1-.707.708L8.5 6.207V11.5a.5.5 0 0 1-1 0V6.207L5.854 7.854a.5.5 0 1 1-.708-.708l2.5-2.5a.5.5 0 0 1 .113-.083.5.5 0 0 1 .142-.054" /></SvgRoot>;
});
export default IconCircleArrowUp;
