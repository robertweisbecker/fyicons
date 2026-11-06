import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconProgressPie40 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconProgressPie40(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="progress-pie-40"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 3.526 10.853L8 8zm5.854 7.311.03-.133zm-.525-4.066" /></SvgRoot>;
});
export default IconProgressPie40;
