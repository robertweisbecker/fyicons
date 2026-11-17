import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEraser = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEraser(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="eraser"><path fill="currentColor" d="M8.793 1.5a1.707 1.707 0 0 1 2.415 0L14.5 4.793a1.71 1.71 0 0 1 0 2.414l-5.648 5.646a.5.5 0 0 1-.096.076l-1.367.82a2.25 2.25 0 0 1-2.696-.288l-2.049-1.92a2.25 2.25 0 0 1-.436-2.719l.852-1.561.038-.06.047-.055zm-4.89 6.304L3.087 9.3a1.25 1.25 0 0 0 .243 1.51l2.047 1.92a1.25 1.25 0 0 0 1.499.16l1.313-.788.104-.104L4 7.706zm6.596-5.597a.707.707 0 0 0-.998 0L4.707 6.999 9 11.292 13.793 6.5a.707.707 0 0 0 0-1z" />{props.children}</SvgRoot>;
});
export default IconEraser;
