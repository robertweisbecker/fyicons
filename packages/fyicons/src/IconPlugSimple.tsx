import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlugSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlugSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="plug-simple"><g clipPath={"url(#" + idPrefix + "clip0_297_4804)"}><path fill="currentColor" d="M14.853 4.147a.5.5 0 0 1 0 .707l-2.15 2.15a1.5 1.5 0 0 1-.057 2.057l-1.294 1.294a4.03 4.03 0 0 1-4.011 1.011l-.78.78a1.5 1.5 0 0 1-2.058.057l-1.65 1.65-.353.355-.707-.707.352-.354 1.65-1.65a1.5 1.5 0 0 1 .059-2.057l.78-.78a4.04 4.04 0 0 1 1.012-4.013l1.292-1.293a1.5 1.5 0 0 1 2.058-.058l2.15-2.15a.5.5 0 0 1 .707.708L9.706 4 12 6.294l2.147-2.147a.5.5 0 0 1 .707 0m-8.486 6.78a4.04 4.04 0 0 1-1.294-1.294l-.513.513a.5.5 0 0 0 0 .707l.586.587a.5.5 0 0 0 .708 0zM8.353 4.06a.5.5 0 0 0-.707 0L6.353 5.354a3.037 3.037 0 0 0 4.292 4.294l1.294-1.294a.5.5 0 0 0 0-.707z" /></g><defs><clipPath id={idPrefix + "clip0_297_4804"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconPlugSimple;
