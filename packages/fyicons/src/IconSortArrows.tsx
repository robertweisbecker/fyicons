import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSortArrows = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSortArrows(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.5 5a.5.5 0 0 1 .5.5v6.794l2.147-2.148a.5.5 0 0 1 .707.707l-3 3a.5.5 0 0 1-.707 0l-3-3a.5.5 0 1 1 .707-.707l2.145 2.145V5.5a.5.5 0 0 1 .5-.5m7-3a.5.5 0 0 1 .1.01q.01.001.02.006a.5.5 0 0 1 .233.13l3.001 3a.5.5 0 0 1-.707.707L12 3.707v6.792a.5.5 0 0 1-1 0V3.706L8.854 5.853a.5.5 0 0 1-.707-.707l2.999-3 .076-.062.074-.04.026-.01.06-.019.027-.007a.5.5 0 0 1 .09-.008" /></SvgRoot>;
});
export default IconSortArrows;
