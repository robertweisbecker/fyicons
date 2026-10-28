import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconQuotesFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconQuotesFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="quotes-fill"><path fill="currentColor" d="M4.75 3A3.25 3.25 0 0 1 8 6.25v.5c0 2.3-1.22 3.868-2.36 4.82a8.7 8.7 0 0 1-2.076 1.28q-.09.039-.154.064l-.047.018-.007.003H3.35v.002h-.003q-.005.004-.01.004l-.005.002.005-.003a1 1 0 0 1-1.237-.507l-.04-.095a1 1 0 0 1 .595-1.276l.026-.011.098-.04a6.7 6.7 0 0 0 1.581-.975q.293-.244.56-.542A3.25 3.25 0 1 1 4.75 3m7 0A3.25 3.25 0 0 1 15 6.25v.5c0 2.3-1.22 3.868-2.36 4.82a8.7 8.7 0 0 1-2.075 1.28q-.091.039-.155.064l-.047.018-.007.003h-.007v.002h-.003q-.005.004-.01.004l-.005.002.005-.003a1 1 0 0 1-1.237-.507l-.04-.095a1 1 0 0 1 .595-1.276l.026-.011.098-.04a6.7 6.7 0 0 0 1.581-.975 5.5 5.5 0 0 0 .56-.542A3.25 3.25 0 1 1 11.75 3" /></SvgRoot>;
});
export default IconQuotesFill;
