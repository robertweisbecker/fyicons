import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleAccessFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleAccessFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-access-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M5.5 7a.5.5 0 0 0 0 1h1a.5.5 0 0 1 .5.5v.056c0 .543-.126 1.08-.37 1.565l-.577 1.155a.5.5 0 0 0 .894.448l.577-1.156a4 4 0 0 0 .153-.342A.35.35 0 0 1 8 10a.35.35 0 0 1 .323.226q.069.174.153.342l.577 1.156a.5.5 0 0 0 .894-.448l-.578-1.155A3.5 3.5 0 0 1 9 8.556V8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 0-1zm2.501-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconCircleAccessFill;
