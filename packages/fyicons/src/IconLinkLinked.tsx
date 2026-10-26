import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkLinked = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinkLinked(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" clipPath={"url(#" + idPrefix + "clip0_376_6573)"}><path d="m7.5 13.5-.025.025a3.5 3.5 0 0 1-4.95 0l-.05-.05a3.5 3.5 0 0 1 0-4.95l1.996-1.996a3.5 3.5 0 0 1 4.417-.437L9.5 6.5" /><path d="m6.5 9.5.61.407a3.5 3.5 0 0 0 4.418-.436l1.97-1.97a3.536 3.536 0 0 0-4.999-5" /></g><defs><clipPath id={idPrefix + "clip0_376_6573"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconLinkLinked;
