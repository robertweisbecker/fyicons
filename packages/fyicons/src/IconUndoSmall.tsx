import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUndoSmall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUndoSmall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="undo-small"><path fill="currentColor" d="M6.162 4.274A.5.5 0 0 1 7 4.642V6h2a3 3 0 0 1 0 6h-.5a.5.5 0 0 1 0-1H9a2 2 0 0 0 0-4H7v1.357a.5.5 0 0 1-.838.369L4.149 6.867a.5.5 0 0 1 0-.734z" /></SvgRoot>;
});
export default IconUndoSmall;
