import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPuzzlePiece = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPuzzlePiece(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="puzzle-piece"><path fill="currentColor" d="M6.503 2a.5.5 0 0 1 .4.8 1.375 1.375 0 1 0 2.195 0 .5.5 0 0 1 .4-.8H12a2 2 0 0 1 2 2v2a2 2 0 1 1 0 4v2a2 2 0 0 1-2 2H9.497a.5.5 0 0 1-.4-.8 1.375 1.375 0 1 0-2.195 0 .5.5 0 0 1-.4.8H4a2 2 0 0 1-2-2v-2a2 2 0 1 1 0-4V4a2 2 0 0 1 2-2zM4 3a1 1 0 0 0-1 1v2.5a.5.5 0 0 1-.5.5H2a1 1 0 0 0 0 2h.5a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h1.71a2.375 2.375 0 1 1 4.578 0H12a1 1 0 0 0 1-1V9.5a.5.5 0 0 1 .5-.5h.5a1 1 0 1 0 0-2h-.5a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1h-1.71a2.375 2.375 0 1 1-4.578 0z" /></SvgRoot>;
});
export default IconPuzzlePiece;
