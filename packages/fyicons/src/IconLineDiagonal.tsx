import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLineDiagonal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLineDiagonal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="line-diagonal"><path fill="currentColor" d="M2.147 2.146a.5.5 0 0 1 .707 0l11 11a.5.5 0 0 1-.707.707l-11-11a.5.5 0 0 1 0-.707" /></SvgRoot>;
});
export default IconLineDiagonal;
