import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDrawing = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDrawing(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="drawing"><path fill="currentColor" d="M4.914 1.718a7 7 0 0 1 4.564-.56 7.2 7.2 0 0 1 1.937.72l.232-.23a1.914 1.914 0 1 1 2.707 2.706l-.27.269c.511 1 .791 2.135.81 3.235.026 1.51-.435 3.025-1.541 4.015-1.515 1.357-4.304 1.625-6.179.006a.5.5 0 1 1 .654-.756c1.466 1.266 3.689 1.052 4.858.006.825-.739 1.23-1.934 1.208-3.253a6.5 6.5 0 0 0-.559-2.504L9.533 9.175a2.5 2.5 0 0 1-1.278.685l-1.907.38a.5.5 0 0 1-.588-.588l.382-1.906a2.5 2.5 0 0 1 .684-1.277l3.848-3.85a6.2 6.2 0 0 0-1.407-.484 6 6 0 0 0-6.683 3.286 6 6 0 0 0 1.662 7.26C5.28 13.51 6.83 13.99 8.46 14a.5.5 0 0 1-.005 1c-1.799-.01-3.585-.539-4.834-1.541a7 7 0 0 1-1.94-8.47 7 7 0 0 1 3.233-3.272m8.733.636a.914.914 0 0 0-1.293 0L7.533 7.176a1.5 1.5 0 0 0-.41.766l-.236 1.17L8.06 8.88a1.5 1.5 0 0 0 .767-.412l4.821-4.82a.915.915 0 0 0 0-1.294" /></SvgRoot>;
});
export default IconDrawing;
