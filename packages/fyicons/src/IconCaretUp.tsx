import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="caret-up"><path fill="currentColor" d="M11.793 8.175a.5.5 0 0 1-.38.825H4.587a.5.5 0 0 1-.38-.825L7.62 4.193a.5.5 0 0 1 .76 0z" /></SvgRoot>;
});
export default IconCaretUp;
