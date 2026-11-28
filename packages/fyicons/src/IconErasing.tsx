import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconErasing = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconErasing(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="erasing"><path fill="currentColor" d="M3.001 14h-1.5a.5.5 0 0 1 0-1h1.5zM8.939 1.354a1.5 1.5 0 0 1 2.121 0l3.586 3.586a1.5 1.5 0 0 1 0 2.12L8.708 13h.295v1h-5v-1h.05l-1.176-1.049a2.5 2.5 0 0 1-.507-3.105l1.196-2.094.038-.055.043-.05zM12.001 14h-2v-1h2zm2.5-1a.5.5 0 0 1 0 1h-1.5v-1zM3.238 9.342a1.5 1.5 0 0 0 .304 1.863l1.874 1.672.139.123h1.738l1-1-4.185-4.184zm7.116-7.281a.5.5 0 0 0-.708 0l-4.94 4.938L9 11.293l4.94-4.94a.5.5 0 0 0 0-.706z" />{props.children}</SvgRoot>;
});
export default IconErasing;
