import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.168 11.26A.5.5 0 0 0 9 10.887V5.113a.5.5 0 0 0-.832-.373L4.92 7.626a.5.5 0 0 0 0 .748z" /></SvgRoot>;
});
export default IconCaretLeft;
