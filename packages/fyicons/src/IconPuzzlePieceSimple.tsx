import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPuzzlePieceSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPuzzlePieceSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="puzzle-piece-simple"><path fill="currentColor" d="M7.5 1a2.5 2.5 0 0 1 2.45 2H11a2 2 0 0 1 2 2v1.05a2.501 2.501 0 0 1 0 4.898V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.5a.5.5 0 0 1 .5-.5h.875a1.5 1.5 0 1 0 0-3H2.5a.5.5 0 0 1-.5-.5V5a2 2 0 0 1 2-2h1.05A2.5 2.5 0 0 1 7.5 1m0 1A1.5 1.5 0 0 0 6 3.5a.5.5 0 0 1-.5.5H4a1 1 0 0 0-1 1v1h.375a2.5 2.5 0 0 1 0 5H3v1a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 .474-.499l.185-.01A1.499 1.499 0 0 0 12.5 7a.5.5 0 0 1-.5-.5V5a1 1 0 0 0-1-1H9.5a.5.5 0 0 1-.5-.5A1.5 1.5 0 0 0 7.5 2" />{props.children}</SvgRoot>;
});
export default IconPuzzlePieceSimple;
