import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenuAltSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenuAltSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="menu-alt-simple"><path stroke="currentColor" strokeLinecap="round" d="M2.5 5.5h11m-11 6h8" />{props.children}</SvgRoot>;
});
export default IconMenuAltSimple;
