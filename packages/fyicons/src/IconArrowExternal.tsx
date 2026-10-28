import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowExternal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowExternal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-external"><path fill="currentColor" d="M6.5 3a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 0 4 5.5v5A1.5 1.5 0 0 0 5.5 12h5a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 10.5v-5A2.5 2.5 0 0 1 5.5 3zm7-1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V3.707L8.854 7.854a.5.5 0 1 1-.708-.708L12.293 3H9.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconArrowExternal;
