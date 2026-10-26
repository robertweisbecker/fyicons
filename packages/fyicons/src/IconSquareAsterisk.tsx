import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareAsterisk = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareAsterisk(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1.634 1.922a.5.5 0 0 1 .303.232l.425.737c.277.478.425 1.032.643 1.545.216-.512.365-1.063.64-1.54l.425-.737a.5.5 0 0 1 .684-.183.5.5 0 0 1 .183.683l-.425.737c-.274.474-.675.875-1.008 1.315.513-.07 1.027-.211 1.54-.211H11a.5.5 0 0 1 0 1h-.956c-.515 0-1.03-.143-1.544-.213.318.413.7.788.959 1.235l.479.829a.5.5 0 0 1-.867.5l-.477-.828c-.258-.446-.392-.963-.59-1.444-.197.482-.33 1.001-.589 1.448l-.478.829a.5.5 0 0 1-.867-.5l.479-.829c.26-.45.644-.828.964-1.244-.554.068-1.108.217-1.662.217H5a.5.5 0 0 1 0-1h.85c.554 0 1.107.148 1.66.216-.335-.443-.737-.848-1.013-1.325l-.426-.737a.5.5 0 0 1 .563-.732" /></SvgRoot>;
});
export default IconSquareAsterisk;
