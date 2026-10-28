import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRedoSmall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRedoSmall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="redo-small"><path fill="currentColor" d="M9.839 4.274a.5.5 0 0 0-.84.367V6h-2a3 3 0 0 0 0 6h.5a.5.5 0 1 0 0-1H7a2 2 0 1 1 0-4h2v1.357a.5.5 0 0 0 .84.367l2.012-1.857a.5.5 0 0 0 0-.735z" /></SvgRoot>;
});
export default IconRedoSmall;
