import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHighlighterTip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHighlighterTip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.223 1.084A.5.5 0 0 1 10 1.5v4.527a1.5 1.5 0 0 1 1.175 1.109l.81 3.243q.015.06.015.12v5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .015-.12l.81-3.243A1.5 1.5 0 0 1 6 6.027V3.5a.5.5 0 0 1 .223-.416zM5 10.874V15h6v-4.125zM6.281 7a.5.5 0 0 0-.485.379l-.687 2.746h5.782l-.687-2.746a.5.5 0 0 0-.485-.38zM7 3.767V6h2V2.433z" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 1.5v5h-3v-3z" opacity={0.5} /></SvgRoot>;
});
export default IconHighlighterTip;
