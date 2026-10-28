import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowClockwise = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowClockwise(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-clockwise"><path fill="currentColor" d="M8 2a6 6 0 0 1 6 6h1.358a.5.5 0 0 1 .368.839l-1.859 2.013a.5.5 0 0 1-.734 0l-1.859-2.013A.5.5 0 0 1 11.642 8H13a5 5 0 1 0-5 5 .5.5 0 0 1 0 1A6 6 0 0 1 8 2" /></SvgRoot>;
});
export default IconArrowClockwise;
