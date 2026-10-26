import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHook = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHook(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a1.998 1.998 0 0 1 .5 3.934v7.316a1.75 1.75 0 1 0 3.5 0v-1.941l-1.276.638a.5.5 0 0 1-.448-.894l2-1A.5.5 0 0 1 13 9.5v2.75a2.75 2.75 0 0 1-5 1.577 2.75 2.75 0 0 1-5-1.577V9.5a.5.5 0 0 1 .724-.447l2 1a.5.5 0 0 1-.448.894L4 10.31v1.941a1.75 1.75 0 1 0 3.5 0V4.934A1.998 1.998 0 0 1 8 1m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconHook;
