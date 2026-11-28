import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRedoSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRedoSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="redo-sm"><path fill="currentColor" d="M9.838 4.274A.5.5 0 0 0 9 4.642V6H7a3 3 0 1 0 0 6h.5a.5.5 0 0 0 0-1H7a2 2 0 0 1 0-4h2v1.358a.5.5 0 0 0 .838.367l2.013-1.859a.5.5 0 0 0 0-.734z" />{props.children}</SvgRoot>;
});
export default IconRedoSm;
