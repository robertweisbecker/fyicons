import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleUpDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleUpDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="triangle-up-down"><path fill="currentColor" d="M10.559 9a.25.25 0 0 1 .214.379l-2.558 4.264a.25.25 0 0 1-.43 0L5.228 9.379A.25.25 0 0 1 5.44 9zM7.785 2.357a.25.25 0 0 1 .43 0l2.558 4.264a.25.25 0 0 1-.214.379H5.44a.25.25 0 0 1-.213-.379z" /><rect width={8} height={2} x={3.999} y={7} fill="currentColor" rx={0.25} /></SvgRoot>;
});
export default IconTriangleUpDown;
