import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.786 4.357a.25.25 0 0 1 .428 0l2.559 4.264a.25.25 0 0 1-.214.379H5.442a.25.25 0 0 1-.215-.379z" /></SvgRoot>;
});
export default IconTriangleUp;
