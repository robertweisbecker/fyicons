import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square"><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} /></SvgRoot>;
});
export default IconSquare;
