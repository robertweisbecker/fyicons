import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleUpDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleUpDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="triangle-up-down"><path fill="currentColor" d="M10.559 10a.25.25 0 0 1 .213.379l-2.558 4.263a.25.25 0 0 1-.429 0L5.227 10.38a.25.25 0 0 1 .214-.38zM7.785 1.357a.25.25 0 0 1 .43 0l2.557 4.265A.25.25 0 0 1 10.56 6H5.44a.25.25 0 0 1-.214-.378z" />{props.children}</SvgRoot>;
});
export default IconTriangleUpDown;
