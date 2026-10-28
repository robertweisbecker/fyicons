import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="triangle-right"><path fill="currentColor" d="M11.643 8.214a.25.25 0 0 0 0-.428L7.379 5.227A.25.25 0 0 0 7 5.442v5.117a.25.25 0 0 0 .379.214z" /></SvgRoot>;
});
export default IconTriangleRight;
