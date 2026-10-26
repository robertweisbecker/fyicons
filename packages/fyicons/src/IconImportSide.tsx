import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconImportSide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconImportSide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2 10.5a.5.5 0 0 1 1 0V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-1 0V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM1.999 8a.5.5 0 0 1 .5-.5h6.294L7.146 5.854a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 .064.63l-.064.078-2.5 2.5a.5.5 0 1 1-.708-.707L8.793 8.5H2.499a.5.5 0 0 1-.5-.5" /></SvgRoot>;
});
export default IconImportSide;
