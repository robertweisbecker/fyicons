import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconProgressPie20 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconProgressPie20(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="progress-pie-20"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 5.707 4.146L8 8zm5.33 3.245" /></SvgRoot>;
});
export default IconProgressPie20;
