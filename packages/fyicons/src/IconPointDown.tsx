import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.122 13.39 2.807 5.48A1 1 0 0 1 3.685 4h8.63a1 1 0 0 1 .878 1.479L8.878 13.39a1 1 0 0 1-1.756 0" /></SvgRoot>;
});
export default IconPointDown;
