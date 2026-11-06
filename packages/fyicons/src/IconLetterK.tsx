import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterK = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterK(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-k"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm2 2a.5.5 0 0 1 .5.5v1.972l2.133-2.31a.5.5 0 1 1 .734.677L8.33 7.503l1.602 2.745a.5.5 0 1 1-.864.504l-1.447-2.48L7 8.943V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconLetterK;
