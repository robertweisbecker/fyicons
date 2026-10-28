import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSync = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSync(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sync"><path fill="currentColor" d="M6 4c.74 0 1.385.403 1.73 1H10a5 5 0 0 1 0 10H6.5a.5.5 0 0 1 0-1H10a4 4 0 0 0 0-8H8a2 2 0 1 1-2-2m3.5-3a.5.5 0 0 1 0 1H6a4 4 0 1 0 0 8h2a2 2 0 1 1 .269.998L8.25 11H6A5 5 0 0 1 6 1zm.5 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconSync;
