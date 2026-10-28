import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.6427 8.21437C11.8045 8.11727 11.8045 7.88273 11.6427 7.78563L7.37862 5.22717C7.21199 5.1272 7 5.24722 7 5.44155V10.5585C7 10.7528 7.21199 10.8728 7.37862 10.7728L11.6427 8.21437Z" fill="currentColor" /></SvgRoot>;
});
export default IconTriangleRight;
