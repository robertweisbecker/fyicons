import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsToOrigin = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsToOrigin(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrows-to-origin"><path fill="currentColor" d="M7.725 10.582a.5.5 0 0 1 .629.064l1.5 1.5A.5.5 0 0 1 9.5 13h-1v1.5a.5.5 0 0 1-1 0V13h-1a.5.5 0 0 1-.354-.854l1.5-1.5zM3.309 6.038a.5.5 0 0 1 .545.108l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5A.5.5 0 0 1 3 9.5v-1H1.5a.5.5 0 0 1 0-1H3v-1a.5.5 0 0 1 .309-.462m8.837.108A.5.5 0 0 1 13 6.5v1h1.5a.5.5 0 0 1 0 1H13v1a.5.5 0 0 1-.854.354l-1.5-1.5a.5.5 0 0 1 0-.708zM8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-6a.5.5 0 0 1 .5.5V3h1a.5.5 0 0 1 .354.854l-1.5 1.5a.5.5 0 0 1-.63.064l-.078-.064-1.5-1.5A.5.5 0 0 1 6.5 3h1V1.5A.5.5 0 0 1 8 1" /></SvgRoot>;
});
export default IconArrowsToOrigin;
