import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarHalfPieceFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarHalfPieceFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 12.666 4.79 14.56h-.002c-.79.465-1.753-.237-1.557-1.131l.806-3.64-2.792-2.47c-.687-.608-.318-1.743.595-1.832l3.71-.357 1.487-3.42c.183-.42.573-.628.963-.628z" /></SvgRoot>;
});
export default IconStarHalfPieceFill;
