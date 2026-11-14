import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumber4 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumber4(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="number4"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm4.142 2.123c.466-.408 1.238-.088 1.238.57V8.88h.62a.5.5 0 0 1 0 1h-.62v.62a.5.5 0 0 1-1 0v-.62H6.282a.75.75 0 0 1-.578-1.229l2.849-3.436zM6.813 8.88H8.88V6.386z" />{props.children}</SvgRoot>;
});
export default IconNumber4;
