import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenuAltSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenuAltSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="menu-alt-simple"><path fill="currentColor" d="M9.5 11a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1zm5-6a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconMenuAltSimple;
