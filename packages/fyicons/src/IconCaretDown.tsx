import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="caret-down"><path fill="currentColor" d="M11.793 7.825a.5.5 0 0 0-.38-.825H4.587a.5.5 0 0 0-.38.825l3.413 3.982a.5.5 0 0 0 .76 0z" /></SvgRoot>;
});
export default IconCaretDown;
