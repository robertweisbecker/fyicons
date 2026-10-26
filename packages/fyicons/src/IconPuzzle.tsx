import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPuzzle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPuzzle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.587 3a.5.5 0 0 1 .472.667A.995.995 0 0 0 8 5a1 1 0 0 0 .941-1.333A.5.5 0 0 1 9.413 3H11.5A1.5 1.5 0 0 1 13 4.5V6a2 2 0 1 1 0 4v1.5a1.5 1.5 0 0 1-1.5 1.5H9.413a.5.5 0 0 1-.472-.667A.995.995 0 0 0 8 11a1 1 0 0 0-.941 1.333.502.502 0 0 1-.472.667H4.5A1.5 1.5 0 0 1 3 11.5V10a2 2 0 1 1 0-4V4.5A1.5 1.5 0 0 1 4.5 3zM4.5 4a.5.5 0 0 0-.5.5v2.087a.5.5 0 0 1-.667.472A.995.995 0 0 0 2 8a1 1 0 0 0 1.333.94.5.5 0 0 1 .667.472V11.5a.5.5 0 0 0 .5.5H6a2 2 0 1 1 4 0h1.5a.5.5 0 0 0 .5-.5V9.412a.5.5 0 0 1 .667-.472Q12.83 9 13 9a1 1 0 1 0-.333-1.941.502.502 0 0 1-.667-.472V4.5a.5.5 0 0 0-.5-.5H10a2 2 0 1 1-4 0z" /></SvgRoot>;
});
export default IconPuzzle;
