import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDiamond = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDiamond(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_1167_1437)"}><path fill="currentColor" d="M7.293.5a1 1 0 0 1 1.414 0L15.5 7.293a1 1 0 0 1 0 1.414L8.707 15.5a1 1 0 0 1-1.414 0L.5 8.707a1 1 0 0 1 0-1.414zM1.207 8 8 14.793 14.793 8 8 1.207z" /></g><defs><clipPath id={idPrefix + "clip0_1167_1437"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconDiamond;
