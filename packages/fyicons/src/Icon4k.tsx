import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const Icon4k = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function Icon4k(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="4k"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm3.1 1.2a.5.5 0 0 1 .9.3V9h.5a.5.5 0 0 1 0 1H7v.5a.5.5 0 0 1-1 0V10H3.5a.5.5 0 0 1-.4-.8zm6.032-.039a.5.5 0 0 1 .736.678l-1.622 1.759 1.676 2.633a.5.5 0 0 1-.844.538l-1.533-2.41-.545.592V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v1.975zM4.5 9H6V7z" /></SvgRoot>;
});
export default Icon4k;
