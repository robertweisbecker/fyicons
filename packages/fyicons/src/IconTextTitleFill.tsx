import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextTitleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextTitleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.5 2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.998.045A2.81 2.81 0 0 0 10.47 3H9v10h1.499a.5.5 0 1 1 0 1h-5a.5.5 0 0 1 0-1H7V3H5.53a2.81 2.81 0 0 0-2.532 2.545A.5.5 0 0 1 2 5.5v-3a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconTextTitleFill;
