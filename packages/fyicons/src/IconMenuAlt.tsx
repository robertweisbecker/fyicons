import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenuAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenuAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.5 13a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm6-5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm-2-5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconMenuAlt;
