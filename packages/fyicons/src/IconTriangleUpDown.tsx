import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleUpDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleUpDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.215 13.643a.25.25 0 0 1-.43 0L5.228 9.379A.25.25 0 0 1 5.442 9h5.117a.25.25 0 0 1 .214.379zm2.558-7.021A.25.25 0 0 1 10.56 7H5.442a.25.25 0 0 1-.215-.378l2.559-4.265a.25.25 0 0 1 .429 0z" /></SvgRoot>;
});
export default IconTriangleUpDown;
