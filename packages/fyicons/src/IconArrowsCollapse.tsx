import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsCollapse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsCollapse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.5 9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-3.146 3.146a.5.5 0 0 1-.708-.707L5.293 10H2.5a.5.5 0 0 1 0-1zm6.647-6.854a.5.5 0 1 1 .707.708L10.707 6H13.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793z" /></SvgRoot>;
});
export default IconArrowsCollapse;
