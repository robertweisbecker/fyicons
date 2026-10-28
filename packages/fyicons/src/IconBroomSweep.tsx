import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBroomSweep = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBroomSweep(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 9.5 5.75 6.75M2.843 8.5H2.5v1a2 2 0 0 0 2 2l-1 1h2.86c.42 0 .832-.11 1.196-.318l1.936-1.106A2 2 0 0 0 10.5 9.339V7.5a1 1 0 0 0-1-1h-1a1.414 1.414 0 0 0-2 0l-.828.828A4 4 0 0 1 2.843 8.5m10.657-5-3 3" /><path stroke="currentColor" strokeLinecap="round" d="M4 2v2m1-1H3m7.5 9.5h3a1 1 0 1 0 0-2m-3 4h1m-5.25 0H8.5" /></SvgRoot>;
});
export default IconBroomSweep;
