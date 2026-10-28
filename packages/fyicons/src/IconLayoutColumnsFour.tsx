import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutColumnsFour = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutColumnsFour(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-columns-four"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-1 9h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1zm-3.5 0H11V4H8.5zM5 12h2.5V4H5zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1V4z" /></SvgRoot>;
});
export default IconLayoutColumnsFour;
