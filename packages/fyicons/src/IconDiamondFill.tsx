import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDiamondFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDiamondFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="diamond-fill"><g clipPath={"url(#" + idPrefix + "clip0_1167_1446)"}><path fill="currentColor" d="M7.295 1.251a1 1 0 0 1 1.414 0l6.043 6.043a1 1 0 0 1 0 1.414l-6.043 6.043a1 1 0 0 1-1.414 0L1.252 8.708a1 1 0 0 1 0-1.414z" /></g><defs><clipPath id={idPrefix + "clip0_1167_1446"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconDiamondFill;
