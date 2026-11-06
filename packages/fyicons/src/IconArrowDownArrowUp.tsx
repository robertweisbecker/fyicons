import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowDownArrowUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDownArrowUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-down-arrow-up"><path fill="currentColor" d="M4.5 5a.5.5 0 0 1 .5.5v6.793l2.146-2.147a.5.5 0 0 1 .707.707l-3 3a.5.5 0 0 1-.078.064l-.026.014q-.028.016-.06.03-.023.009-.047.015-.022.008-.046.014a.5.5 0 0 1-.195 0q-.023-.005-.046-.014-.024-.005-.048-.014l-.06-.031-.025-.014a.5.5 0 0 1-.076-.064l-3-3a.5.5 0 1 1 .707-.707l2.146 2.147V5.5a.5.5 0 0 1 .5-.5m7.098-2.99.04.011a.5.5 0 0 1 .216.125l3 3a.5.5 0 0 1-.707.707L12 3.707V10.5a.5.5 0 0 1-1 0V3.707L8.854 5.853a.5.5 0 0 1-.707-.707l3-3a.5.5 0 0 1 .074-.061l.002-.001.071-.04.03-.012.061-.017.024-.006a.5.5 0 0 1 .091-.01z" /></SvgRoot>;
});
export default IconArrowDownArrowUp;
