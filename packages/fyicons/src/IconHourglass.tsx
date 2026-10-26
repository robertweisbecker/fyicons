import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHourglass = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHourglass(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" d="M4.5 1.5v2.965a2.5 2.5 0 0 0 .732 1.767l.915.914a1.207 1.207 0 0 1 0 1.708l-.915.914a2.5 2.5 0 0 0-.732 1.768V14.5" /><path fill="currentColor" d="M9.397 5a.25.25 0 0 1 .176.427L8.375 6.625v3.4l1.56 2.184a.5.5 0 0 1-.407.791H6.47a.5.5 0 0 1-.407-.791l1.561-2.186V6.625L6.427 5.427A.25.25 0 0 1 6.604 5z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 1.5h-9m9 13h-9" /><path stroke="currentColor" d="M11.5 1.5v2.964a2.5 2.5 0 0 1-.732 1.768l-.914.914a1.207 1.207 0 0 0 0 1.708l.914.914a2.5 2.5 0 0 1 .732 1.768V14.5" /></SvgRoot>;
});
export default IconHourglass;
