import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHighlighterTip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHighlighterTip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="highlighter-tip"><g fill="currentColor" clipPath={"url(#" + idPrefix + "clip0_137_4863)"}><path d="M9.223 1.084A.5.5 0 0 1 10 1.5v4.527a1.5 1.5 0 0 1 1.175 1.109l.81 3.243q.015.06.015.121V16H4v-5.5a.5.5 0 0 1 .015-.121l.81-3.243A1.5 1.5 0 0 1 6 6.027V3.5a.5.5 0 0 1 .223-.416zM5 10.875V15h6v-4.125zM6.281 7a.5.5 0 0 0-.485.379l-.687 2.746h5.782l-.687-2.746A.5.5 0 0 0 9.72 7zM7 3.768V6h2V2.434z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 1.5v5h-3v-3z" opacity={0.5} /></g><defs><clipPath id={idPrefix + "clip0_137_4863"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconHighlighterTip;
