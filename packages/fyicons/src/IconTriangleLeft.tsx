import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.357 8.214a.25.25 0 0 1 0-.428l4.264-2.559A.25.25 0 0 1 9 5.442v5.117a.25.25 0 0 1-.379.214z" /></SvgRoot>;
});
export default IconTriangleLeft;
