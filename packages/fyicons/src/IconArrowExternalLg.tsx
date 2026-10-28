import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowExternalLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowExternalLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.5 2a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 1 1 0 2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2m9 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V3.707L7.854 8.854a.5.5 0 1 1-.708-.708L12.293 3H8.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconArrowExternalLg;
