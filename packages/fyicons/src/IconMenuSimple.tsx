import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenuSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenuSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="menu-simple"><path fill="currentColor" d="M13.5 11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0-6a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconMenuSimple;
