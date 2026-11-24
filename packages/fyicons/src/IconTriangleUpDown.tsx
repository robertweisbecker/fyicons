import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleUpDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleUpDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="triangle-up-down"><path fill="currentColor" d="M10.559 10a.25.25 0 0 1 .214.378l-2.56 4.265a.25.25 0 0 1-.428 0l-2.557-4.265a.25.25 0 0 1 .213-.377zM7.785 1.358a.25.25 0 0 1 .429 0l2.559 4.265a.25.25 0 0 1-.214.378H5.44a.25.25 0 0 1-.213-.378z" />{props.children}</SvgRoot>;
});
export default IconTriangleUpDown;
