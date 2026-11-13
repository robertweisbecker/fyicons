import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarHalfPieceFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarHalfPieceFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="star-half-piece-fill"><path fill="currentColor" d="m8 12.674-3.21 1.894h-.002c-.79.465-1.753-.237-1.557-1.131l.806-3.64-2.792-2.47C.558 6.72.927 5.584 1.84 5.495l3.71-.357 1.487-3.42c.183-.42.573-.628.963-.628z" /></SvgRoot>;
});
export default IconStarHalfPieceFill;
