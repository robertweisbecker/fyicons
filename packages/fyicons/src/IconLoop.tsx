import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLoop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLoop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="loop"><path fill="currentColor" d="M12.5 3c1.38 0 2.501 1.12 2.501 2.5v5a2.5 2.5 0 0 1-2.5 2.5H8.708l1.146 1.146a.5.5 0 0 1-.708.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .708.707l-1.148 1.148h3.795a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.501-1.5h-9A1.5 1.5 0 0 0 2 5.5v5c0 .828.673 1.5 1.501 1.5a.501.501 0 0 1 0 1 2.5 2.5 0 0 1-2.502-2.5v-5C.999 4.12 2.119 3 3.5 3z" /></SvgRoot>;
});
export default IconLoop;
