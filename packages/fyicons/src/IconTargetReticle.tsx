import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTargetReticle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTargetReticle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a.5.5 0 0 1 .5.5v.522A6 6 0 0 1 13.977 7.5h.523a.5.5 0 0 1 0 1h-.523A6 6 0 0 1 8.5 13.977v.523a.5.5 0 0 1-1 0v-.523A6 6 0 0 1 2.022 8.5H1.5a.5.5 0 0 1 0-1h.522A6 6 0 0 1 7.5 2.022V1.5A.5.5 0 0 1 8 1m.5 2.5a.5.5 0 0 1-1 0v-.476A5 5 0 0 0 3.024 7.5H3.5a.5.5 0 0 1 0 1h-.476A5 5 0 0 0 7.5 12.975V12.5a.5.5 0 0 1 1 0v.475A5 5 0 0 0 12.976 8.5H12.5a.5.5 0 0 1 0-1h.476A5 5 0 0 0 8.5 3.024zM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconTargetReticle;
