import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHighlighterTipDuo = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHighlighterTipDuo(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="highlighter-tip-duo"><path fill="currentColor" d="M9.223 1.084A.5.5 0 0 1 10 1.5v4.527a1.5 1.5 0 0 1 1.175 1.109l.81 3.243v.008A.5.5 0 0 1 12 10.5V16H4v-5.5q0-.06.014-.114v-.007l.811-3.243A1.5 1.5 0 0 1 6 6.027V3.5a.5.5 0 0 1 .223-.416zM5 11v4h6v-4zm1.281-4a.5.5 0 0 0-.485.379l-.655 2.62h5.718l-.655-2.62a.5.5 0 0 0-.485-.38zM7 3.767V6h2V2.433z" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 1.5v5h-3v-3z" opacity={0.5} /></SvgRoot>;
});
export default IconHighlighterTipDuo;
