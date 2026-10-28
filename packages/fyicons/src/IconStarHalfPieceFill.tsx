import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarHalfPieceFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarHalfPieceFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="star-half-piece-fill"><path fill="currentColor" d="m8 12.674-3.21 1.894h-.002c-.79.465-1.753-.237-1.556-1.131l.805-3.64-2.792-2.47C.56 6.72.927 5.584 1.84 5.495h.001l3.709-.357 1.487-3.419c.183-.42.573-.629.963-.629z" /></SvgRoot>;
});
export default IconStarHalfPieceFill;
