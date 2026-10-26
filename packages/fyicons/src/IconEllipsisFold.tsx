import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEllipsisFold = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsisFold(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.746 10.305a.33.33 0 0 1 .508 0l1.795 2.154a.33.33 0 0 1-.254.541H8.5v2.5a.5.5 0 0 1-1 0V13H6.204a.33.33 0 0 1-.253-.541zM4 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8.001 0a.5.5 0 0 1 .5.5V3h1.294a.33.33 0 0 1 .254.541L8.254 5.695a.33.33 0 0 1-.508 0L5.951 3.541A.33.33 0 0 1 6.204 3h1.297V.5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconEllipsisFold;
