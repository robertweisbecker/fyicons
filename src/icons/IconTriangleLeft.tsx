import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.35729 8.21437C4.19545 8.11727 4.19545 7.88273 4.35729 7.78563L8.62138 5.22717C8.78801 5.1272 9 5.24722 9 5.44155V10.5585C9 10.7528 8.78801 10.8728 8.62138 10.7728L4.35729 8.21437Z" fill="currentColor" /></SvgRoot>;
});
export default IconTriangleLeft;
