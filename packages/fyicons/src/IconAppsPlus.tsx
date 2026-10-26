import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppsPlus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppsPlus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.5 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m7 0a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0V12H9.5a.5.5 0 0 1 0-1H11V9.5a.5.5 0 0 1 .5-.5m-7 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m7 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-7 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconAppsPlus;
