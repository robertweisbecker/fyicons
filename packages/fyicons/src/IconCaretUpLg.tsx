import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretUpLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUpLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="caret-up-lg"><path fill="currentColor" d="M8 4c.142 0 .278.06.373.165l4.5 5A.501.501 0 0 1 12.5 10h-9a.5.5 0 0 1-.373-.835l4.5-5 .079-.07A.5.5 0 0 1 8 4" /></SvgRoot>;
});
export default IconCaretUpLg;
