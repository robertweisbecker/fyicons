import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarHalfPiece = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarHalfPiece(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="star-half-piece"><path fill="currentColor" d="M7.923 1.083h.001a1 1 0 0 1 1 1v9.478a1 1 0 0 1-.505.87l-.248.14-.434.247-.002-.002-2.946 1.739c-.79.464-1.756-.237-1.559-1.132l.806-3.64-2.79-2.47c-.687-.608-.32-1.742.594-1.83l3.71-.36 1.486-3.416c.155-.357.46-.56.786-.614l.008-.001q.046-.008.093-.012zm0 1.092L6.35 5.793l-.118.27-.293.029-4.003.386q-.024.004-.027.01a.06.06 0 0 0-.018.054.05.05 0 0 0 .017.023L4.92 9.23l.22.195-.063.288-.87 3.927q-.004.022 0 .027.003.01.02.023.016.01.026.011.007.002.028-.008l3.465-2.042.177-.105v.015h.001V2.082z" /></SvgRoot>;
});
export default IconStarHalfPiece;
