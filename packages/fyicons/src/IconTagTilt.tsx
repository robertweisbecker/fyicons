import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTagTilt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTagTilt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="tag-tilt"><path fill="currentColor" d="M8.33 2a2.5 2.5 0 0 0-1.768.732L1.5 7.793a1.707 1.707 0 0 0 0 2.414L5.793 14.5a1.707 1.707 0 0 0 2.414 0l5.062-5.06A2.5 2.5 0 0 0 14 7.671V3a1 1 0 0 0-1-1zM13 3v4.672a1.5 1.5 0 0 1-.44 1.06L7.5 13.793a.707.707 0 0 1-1 0L2.207 9.5a.707.707 0 0 1 0-1l5.062-5.06A1.5 1.5 0 0 1 8.329 3zM9.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconTagTilt;
