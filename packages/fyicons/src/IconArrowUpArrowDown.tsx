import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowUpArrowDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUpArrowDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 5a.5.5 0 0 1 .5.5v6.793l2.146-2.147a.5.5 0 0 1 .707.707l-3 3a.5.5 0 0 1-.078.064l-.026.013q-.028.018-.06.032-.023.009-.047.014l-.046.014a.5.5 0 0 1-.195 0l-.046-.014-.048-.014-.06-.032-.025-.013a.5.5 0 0 1-.076-.064l-3-3a.5.5 0 0 1 .707-.707l2.146 2.147V5.5a.5.5 0 0 1 .5-.5M4.597 2.01l.04.011a.5.5 0 0 1 .216.125l3 3a.5.5 0 0 1-.707.707L5 3.707V10.5a.5.5 0 0 1-1 0V3.707L1.854 5.853a.5.5 0 0 1-.707-.707l3-3a.5.5 0 0 1 .074-.061l.002-.001.071-.04.03-.012.061-.018.024-.005a.5.5 0 0 1 .091-.01z" /></SvgRoot>;
});
export default IconArrowUpArrowDown;
