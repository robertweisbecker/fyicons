import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTargetCrosshair = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTargetCrosshair(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a.5.5 0 0 1 .5.5v1.524A5 5 0 0 1 12.976 7.5H14.5a.5.5 0 0 1 0 1h-1.524A5 5 0 0 1 8.5 12.975V14.5a.5.5 0 0 1-1 0v-1.525A5 5 0 0 1 3.024 8.5H1.5a.5.5 0 0 1 0-1h1.524A5 5 0 0 1 7.5 3.024V1.5A.5.5 0 0 1 8 1M4.032 8.5A4 4 0 0 0 7.5 11.968V8.5zm4.468 0v3.468A4 4 0 0 0 11.968 8.5zm0-1h3.468A4 4 0 0 0 8.5 4.031zm-1-3.469A4 4 0 0 0 4.032 7.5H7.5z" /></SvgRoot>;
});
export default IconTargetCrosshair;
