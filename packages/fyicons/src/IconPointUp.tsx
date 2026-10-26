import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="m7.122 2.61-4.315 7.91A1 1 0 0 0 3.685 12h8.63a1 1 0 0 0 .878-1.479L8.878 2.61a1 1 0 0 0-1.756 0" /></SvgRoot>;
});
export default IconPointUp;
