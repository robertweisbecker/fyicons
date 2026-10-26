import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 3a2 2 0 0 1 2 2v5h.25a.75.75 0 0 1 .75.75V11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-.25a.75.75 0 0 1 .75-.75H2V5a2 2 0 0 1 2-2zM2 11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1H9.865a1 1 0 0 1-.865.5H7a1 1 0 0 1-.865-.5zm2-7a1 1 0 0 0-1 1v5h4v.5h2V10h4V5a1 1 0 0 0-1-1z" /></SvgRoot>;
});
export default IconLaptop;
