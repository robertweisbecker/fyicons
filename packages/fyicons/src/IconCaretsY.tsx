import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretsY = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsY(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="carets-y"><path fill="currentColor" d="M11.242 10a.5.5 0 0 1 .343.864l-3.242 3.061a.5.5 0 0 1-.687 0l-3.242-3.061A.5.5 0 0 1 4.757 10zM7.656 2.074a.5.5 0 0 1 .687 0l3.243 3.062a.5.5 0 0 1-.344.864H4.758a.5.5 0 0 1-.344-.864z" />{props.children}</SvgRoot>;
});
export default IconCaretsY;
