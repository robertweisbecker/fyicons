import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsMinimize = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsMinimize(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.5 10a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-1.793l-2.146 2.147a.5.5 0 0 1-.707-.707l2.146-2.146H2.5a.5.5 0 0 1 0-1zm8 0a.5.5 0 1 1 0 1h-1.793l2.147 2.147a.5.5 0 1 1-.707.707l-2.146-2.146V13.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm-8-8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.793L2.147 2.854a.5.5 0 1 1 .707-.707L5 4.293V2.5a.5.5 0 0 1 .5-.5m7.647.147a.5.5 0 1 1 .707.707L11.708 5H13.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v1.793z" /></SvgRoot>;
});
export default IconArrowsMinimize;
