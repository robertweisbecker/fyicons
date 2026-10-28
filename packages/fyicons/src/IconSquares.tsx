import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquares = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquares(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.094 2.955a2 2 0 0 1 2.45-1.415l5.795 1.553a2 2 0 0 1 1.414 2.45l-1.552 5.796A2 2 0 0 1 11 12.8v.2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1.544zM3 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm4.286-3.494a1 1 0 0 0-1.225.707L5.581 5h3.42a2 2 0 0 1 2 2v4.783l.01.003a1 1 0 0 0 1.224-.707l1.553-5.796a1 1 0 0 0-.707-1.225z" /></SvgRoot>;
});
export default IconSquares;
