import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.832 11.26A.5.5 0 0 1 7 10.887V5.113a.5.5 0 0 1 .832-.373l3.248 2.886a.5.5 0 0 1 0 .748z" /></SvgRoot>;
});
export default IconCaretRight;
