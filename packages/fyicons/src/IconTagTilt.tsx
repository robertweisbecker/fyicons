import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTagTilt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTagTilt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M3 2a1 1 0 0 0-1 1v4.672a2.5 2.5 0 0 0 .733 1.767l4.854 4.854a2 2 0 0 0 2.829 0l3.878-3.879a2 2 0 0 0 0-2.828L9.44 2.732A2.5 2.5 0 0 0 7.672 2zm4.672 1c.398 0 .78.158 1.06.44l4.855 4.853a1 1 0 0 1 0 1.414l-3.879 3.879a1 1 0 0 1-1.414 0L3.44 8.732A1.5 1.5 0 0 1 3 7.672V3zM5.994 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" /></SvgRoot>;
});
export default IconTagTilt;
