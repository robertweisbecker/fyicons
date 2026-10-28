import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconProjector = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconProjector(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="projector"><path fill="currentColor" d="M9.68 3.005A3.5 3.5 0 0 1 12.662 5H13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v.5a.5.5 0 0 1-1 0V12H4v.5a.5.5 0 0 1-1 0V12a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3.337A3.5 3.5 0 0 1 9.5 3zM3 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-.036q.035.245.036.5l-.005.18A3.5 3.5 0 0 1 9.5 10l-.18-.005A3.5 3.5 0 0 1 6.036 6zm1.5 3a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm5-5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" /></SvgRoot>;
});
export default IconProjector;
