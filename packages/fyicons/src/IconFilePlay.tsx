import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFilePlay = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFilePlay(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g fill="currentColor" clipPath={"url(#" + idPrefix + "clip0_1013_19504)"}><path d="M8.5 1a2.5 2.5 0 0 1 2 1l2.4 3.2a.5.5 0 0 1 .1.3v7a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V6h-1.5A1.5 1.5 0 0 1 9 4.5V2.086A1.5 1.5 0 0 0 8.5 2zm5 2.5a.5.5 0 0 0 .5.5h1L10 2.999z" /><path d="M6 11.237V7.763a.75.75 0 0 1 1.11-.658l3.183 1.737a.75.75 0 0 1 0 1.316l-3.184 1.737A.75.75 0 0 1 6 11.237" /></g><defs><clipPath id={idPrefix + "clip0_1013_19504"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconFilePlay;
