import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="triangle-up"><path d="M7.78563 4.35729C7.88273 4.19545 8.11727 4.19545 8.21437 4.35729L10.7728 8.62138C10.8728 8.78801 10.7528 9 10.5585 9L5.44155 9C5.24722 9 5.1272 8.78801 5.22717 8.62138L7.78563 4.35729Z" fill="currentColor" /></SvgRoot>;
});
export default IconTriangleUp;
