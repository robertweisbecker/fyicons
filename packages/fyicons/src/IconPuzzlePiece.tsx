import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPuzzlePiece = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPuzzlePiece(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.378 2a.5.5 0 0 1 .4.8A1.375 1.375 0 0 0 7.875 5h.249a1.375 1.375 0 0 0 1.098-2.2.5.5 0 0 1 .4-.8H11.5A2.5 2.5 0 0 1 14 4.5V6a2 2 0 1 1 0 4v1.5a2.5 2.5 0 0 1-2.5 2.5H9.622a.5.5 0 0 1-.4-.8A1.375 1.375 0 0 0 8.125 11h-.249a1.375 1.375 0 0 0-1.098 2.2.5.5 0 0 1-.4.8H4.5A2.5 2.5 0 0 1 2 11.5V10a2 2 0 1 1 0-4V4.5A2.5 2.5 0 0 1 4.5 2zM4.5 3A1.5 1.5 0 0 0 3 4.5v2.087a.5.5 0 0 1-.667.472A.995.995 0 0 0 1 8a1 1 0 0 0 1.333.94.5.5 0 0 1 .667.472V11.5A1.5 1.5 0 0 0 4.5 13h1.086a2.375 2.375 0 0 1 2.29-3h.249a2.375 2.375 0 0 1 2.29 3H11.5a1.5 1.5 0 0 0 1.5-1.5V9.412a.5.5 0 0 1 .667-.472Q13.83 9 14 9a1 1 0 1 0-.333-1.941.502.502 0 0 1-.667-.472V4.5A1.5 1.5 0 0 0 11.5 3h-1.086q.084.299.086.625A2.375 2.375 0 0 1 8.125 6h-.25a2.375 2.375 0 0 1-2.29-3z" /></SvgRoot>;
});
export default IconPuzzlePiece;
