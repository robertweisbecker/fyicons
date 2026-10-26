import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCopied = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCopied(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.5 1A2.5 2.5 0 0 1 12 3.5V4h.5A2.5 2.5 0 0 1 15 6.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 4 12.5V12h-.5A2.5 2.5 0 0 1 1 9.5v-6A2.5 2.5 0 0 1 3.5 1zM12 9.5A2.5 2.5 0 0 1 9.5 12H5v.5A1.5 1.5 0 0 0 6.5 14h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 5H12zM3.5 2A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11h6A1.5 1.5 0 0 0 11 9.5v-6A1.5 1.5 0 0 0 9.5 2zm4.309 2.515a.5.5 0 0 1 .882.47l-2 3.75a.502.502 0 0 1-.817.094l-1.75-2a.5.5 0 0 1 .752-.658l1.272 1.455z" /></SvgRoot>;
});
export default IconCopied;
