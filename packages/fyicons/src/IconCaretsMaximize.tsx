import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretsMaximize = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsMaximize(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="carets-maximize"><path fill="currentColor" d="M8.293 12a.5.5 0 0 0 .353-.854L4.854 7.353A.5.5 0 0 0 4 7.708V11.5a.5.5 0 0 0 .5.5zM12 8.293a.5.5 0 0 1-.854.353L7.354 4.854A.5.5 0 0 1 7.707 4H11.5a.5.5 0 0 1 .5.5z" /></SvgRoot>;
});
export default IconCaretsMaximize;
