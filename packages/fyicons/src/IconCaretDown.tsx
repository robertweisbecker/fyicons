import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.26 7.832A.5.5 0 0 0 10.887 7H5.113a.5.5 0 0 0-.373.832l2.886 3.248a.5.5 0 0 0 .748 0z" /></SvgRoot>;
});
export default IconCaretDown;
