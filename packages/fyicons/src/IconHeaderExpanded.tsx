import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeaderExpanded = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeaderExpanded(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="header-expanded"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm9.25 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-8.5A.75.75 0 0 1 3 7.25v-1.5A.75.75 0 0 1 3.75 5z" /></SvgRoot>;
});
export default IconHeaderExpanded;
