import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPaperclipTilt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclipTilt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_315_17581)"}><path fill="currentColor" d="M14.354 2.647a2.62 2.62 0 0 1 0 3.707l-6.75 6.749a3.683 3.683 0 0 1-5.207-5.206l2.75-2.75a.5.5 0 1 1 .707.707l-2.75 2.75a2.682 2.682 0 1 0 3.793 3.792l6.75-6.75a1.621 1.621 0 0 0-2.293-2.292l-6.75 6.75a.56.56 0 0 0 .793.793l4.75-4.75a.5.5 0 0 1 .707.707l-4.749 4.75a1.561 1.561 0 0 1-2.208-2.207l6.75-6.75a2.62 2.62 0 0 1 3.707 0" /></g><defs><clipPath id={idPrefix + "clip0_315_17581"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconPaperclipTilt;
