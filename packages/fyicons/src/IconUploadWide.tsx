import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUploadWide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUploadWide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M3.5 6a.5.5 0 0 1 0 1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1h.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm4.146-3.352a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1-.707.707L8.5 4.21v5.293a.5.5 0 0 1-1 0V4.209L5.854 5.855a.5.5 0 0 1-.708-.707z" /></SvgRoot>;
});
export default IconUploadWide;
