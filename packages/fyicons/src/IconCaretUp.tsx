import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="caret-up"><path fill="currentColor" d="M11.26 8.168a.5.5 0 0 1-.373.832H5.113a.5.5 0 0 1-.373-.832L7.626 4.92a.5.5 0 0 1 .748 0z" /></SvgRoot>;
});
export default IconCaretUp;
