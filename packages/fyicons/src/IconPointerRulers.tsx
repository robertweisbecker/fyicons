import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointerRulers = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointerRulers(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.327 9.07a1 1 0 0 0-1.258 1.258l1.29 4.03c.284.885 1.517.938 1.875.08l.648-1.555 1.555-.648c.858-.357.806-1.591-.08-1.875zm3.725 2.242-1.744.727a.5.5 0 0 0-.27.27l-.726 1.744-1.29-4.03zM2 12.5A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5V7h5.5A1.5 1.5 0 0 0 14 5.5v-2A1.5 1.5 0 0 0 12.5 2h-9A1.5 1.5 0 0 0 2 3.5zm1-9a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H12V4h-1v2h-1V5H9v1H7V4H6v2H4v1h2v2H5v1h1v1H4v1h2v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" /></SvgRoot>;
});
export default IconPointerRulers;
