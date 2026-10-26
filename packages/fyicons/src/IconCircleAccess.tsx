import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleAccess = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleAccess(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m2.5 5a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v.056c0 .543.126 1.08.37 1.565l.577 1.155a.5.5 0 0 1-.894.448l-.577-1.156a4 4 0 0 1-.153-.342A.35.35 0 0 0 8 10a.35.35 0 0 0-.323.226 4 4 0 0 1-.153.342l-.577 1.156a.5.5 0 0 1-.894-.448l.578-1.155A3.5 3.5 0 0 0 7 8.556V8.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1zM8.001 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></SvgRoot>;
});
export default IconCircleAccess;
