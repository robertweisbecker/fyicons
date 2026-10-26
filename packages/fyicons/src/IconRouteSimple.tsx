import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRouteSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRouteSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_1019_878)"}><path fill="currentColor" d="M4.501 0a2.5 2.5 0 0 1 .494 4.95Q5 4.974 5 5v.492a1.5 1.5 0 0 0 1.088 1.442l4.099 1.171A2.5 2.5 0 0 1 12 10.509v.541a2.501 2.501 0 1 1-1 0v-.54a1.5 1.5 0 0 0-1.088-1.443L5.813 7.896A2.5 2.5 0 0 1 4 5.492V5q0-.026.004-.05A2.5 2.5 0 0 1 4.5 0m7 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M4.501 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></g><defs><clipPath id={idPrefix + "clip0_1019_878"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconRouteSimple;
