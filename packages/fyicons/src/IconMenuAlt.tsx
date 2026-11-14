import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenuAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenuAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="menu-alt"><path fill="currentColor" d="M7.5 12a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm7-4a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1zm-3-4a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" />{props.children}</SvgRoot>;
});
export default IconMenuAlt;
