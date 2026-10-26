import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPaperclipWideTilt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclipWideTilt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_315_17553)"}><path fill="currentColor" d="M14.01 4.11a3.5 3.5 0 0 1 0 4.95l-3.889 3.89a5 5 0 0 1-7.07-7.072l2.474-2.474a.5.5 0 0 1 .707.707L3.757 6.586a4 4 0 0 0 5.657 5.656l3.89-3.889a2.5 2.5 0 1 0-3.536-3.535l-3.89 3.889a1 1 0 0 0 1.415 1.414l2.889-2.89a.5.5 0 0 1 .707.708l-2.89 2.89a2 2 0 1 1-2.828-2.83l3.89-3.888a3.5 3.5 0 0 1 4.95 0" /></g><defs><clipPath id={idPrefix + "clip0_315_17553"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconPaperclipWideTilt;
