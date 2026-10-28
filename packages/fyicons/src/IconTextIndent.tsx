import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextIndent = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextIndent(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-indent"><path fill="currentColor" d="M13.25 12a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1 0-1zM2.309 6.038a.5.5 0 0 1 .545.108l2 2a.5.5 0 0 1 0 .708l-2 2A.5.5 0 0 1 2 10.5v-4a.5.5 0 0 1 .309-.462M13.25 9a.5.5 0 0 1 0 1H7.5a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1H7.5a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconTextIndent;
