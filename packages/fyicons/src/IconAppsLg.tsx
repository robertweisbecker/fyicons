import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppsLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppsLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m8 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-8 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6m8 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4" /></SvgRoot>;
});
export default IconAppsLg;
