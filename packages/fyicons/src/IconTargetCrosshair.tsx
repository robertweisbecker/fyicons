import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTargetCrosshair = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTargetCrosshair(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a.5.5 0 0 1 .5.5v.522A6 6 0 0 1 13.977 7.5h.523a.5.5 0 0 1 0 1h-.523A6 6 0 0 1 8.5 13.977v.523a.5.5 0 0 1-1 0v-.523A6 6 0 0 1 2.022 8.5H1.5a.5.5 0 0 1 0-1h.522A6 6 0 0 1 7.5 2.022V1.5A.5.5 0 0 1 8 1M3.024 8.5A5 5 0 0 0 7.5 12.975V8.5zm5.476 0v4.475A5 5 0 0 0 12.976 8.5zm0-1h4.476A5 5 0 0 0 8.5 3.024zm-1-4.476A5 5 0 0 0 3.024 7.5H7.5z" /></SvgRoot>;
});
export default IconTargetCrosshair;
