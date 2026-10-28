import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsMinimize = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsMinimize(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.5 9a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-1.793l-3.146 3.147a.5.5 0 0 1-.707-.707L5.293 10H3.5a.5.5 0 0 1 0-1zm6 0a.5.5 0 1 1 0 1h-1.793l3.147 3.147a.5.5 0 1 1-.707.707L10 10.708V12.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zM2.147 2.147a.5.5 0 0 1 .707 0L6 5.293V3.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.793L2.147 2.854a.5.5 0 0 1 0-.707m11 0a.5.5 0 1 1 .707.707L10.708 6H12.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.793z" /></SvgRoot>;
});
export default IconArrowsMinimize;
