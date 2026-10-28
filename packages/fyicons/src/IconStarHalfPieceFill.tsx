import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarHalfPieceFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarHalfPieceFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="star-half-piece-fill"><path d="M8 12.666L4.78906 14.5596L4.78809 14.5605C3.99753 15.0248 3.03477 14.323 3.23145 13.4287L4.03711 9.78906L1.24512 7.31934C0.558457 6.71138 0.926985 5.57612 1.83984 5.4873H1.84082L5.5498 5.12988L7.03711 1.71094C7.22023 1.29023 7.61015 1.0819 8 1.08203V12.666Z" fill="currentColor" /></SvgRoot>;
});
export default IconStarHalfPieceFill;
