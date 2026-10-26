import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextOutdent = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextOutdent(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.5 12a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1zm2.646-5.854A.5.5 0 0 1 14 6.5v4a.5.5 0 0 1-.854.354l-2-2a.5.5 0 0 1 0-.708zM8.5 9a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm4.75-3a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconTextOutdent;
