import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareAsterisk = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareAsterisk(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-asterisk"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm2.134 1.922a.5.5 0 0 1 .303.232l.425.737c.277.478.425 1.032.643 1.545.216-.512.365-1.063.64-1.54l.425-.737a.5.5 0 0 1 .684-.183.5.5 0 0 1 .183.683l-.425.737c-.274.474-.675.875-1.008 1.315.513-.07 1.027-.211 1.54-.211H11a.5.5 0 0 1 0 1h-.956c-.515 0-1.03-.143-1.544-.213.318.413.7.788.959 1.235l.479.829a.5.5 0 0 1-.867.5l-.477-.828c-.258-.446-.392-.963-.59-1.444-.197.482-.33 1.001-.589 1.448l-.478.829a.5.5 0 0 1-.867-.5l.479-.829c.26-.45.644-.828.964-1.244-.554.068-1.108.217-1.662.217H5a.5.5 0 0 1 0-1h.85c.554 0 1.107.148 1.66.216-.335-.443-.737-.848-1.013-1.325l-.426-.737a.5.5 0 0 1 .563-.732" /></SvgRoot>;
});
export default IconSquareAsterisk;
