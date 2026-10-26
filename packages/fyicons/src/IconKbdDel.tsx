import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdDel = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdDel(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 3A2.5 2.5 0 0 1 14 5.5v5a2.5 2.5 0 0 1-2.5 2.5H6.358a2.5 2.5 0 0 1-1.813-.777L1.538 9.059a1.5 1.5 0 0 1-.007-2.06L4.542 3.79A2.5 2.5 0 0 1 6.365 3zM6.365 4a1.5 1.5 0 0 0-1.093.474L2.26 7.683a.5.5 0 0 0 .002.686l3.008 3.164A1.5 1.5 0 0 0 6.358 12H11.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 4zm4.284 1.646a.5.5 0 0 1 .707.708L9.708 8l1.647 1.646a.5.5 0 0 1-.707.707L9 8.708l-1.645 1.646a.5.5 0 1 1-.707-.707L8.294 8 6.648 6.354a.5.5 0 1 1 .707-.708L9 7.293z" /></SvgRoot>;
});
export default IconKbdDel;
