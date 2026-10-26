import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTargetBullseye = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTargetBullseye(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a.5.5 0 0 1 0 1 6.001 6.001 0 1 0 6 6 .5.5 0 0 1 1 0 7 7 0 1 1-7-7m0 2.915a.5.5 0 0 1 0 1 3.002 3.002 0 0 0-2.942 3.584 3.002 3.002 0 0 0 4.09 2.186A3 3 0 0 0 11 7.916a.5.5 0 0 1 1 0 4 4 0 0 1-4.78 3.923 4.002 4.002 0 0 1-2.914-5.454A4 4 0 0 1 8 3.915M11.017 1a.57.57 0 0 1 .562.477L12 4l2.523.42a.57.57 0 0 1-.037 1.132l-3.7.369-1.821 1.82a1 1 0 1 1-.708-.707l1.821-1.82.37-3.7A.57.57 0 0 1 11.017 1" /></SvgRoot>;
});
export default IconTargetBullseye;
