import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVideosSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVideosSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="videos-square"><path fill="currentColor" d="M5.597 2.298A2 2 0 0 1 8.08.943l5.622 1.654a2 2 0 0 1 1.355 2.483l-1.654 5.622a1.99 1.99 0 0 1-1.407 1.365A2 2 0 0 1 10 14H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.096zM4 5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 .996-.927l-.021-.004c.02-.276.024-.611.024-1.033H11V6a1 1 0 0 0-1-1zm1 1.86a.5.5 0 0 1 .748-.434L9.49 8.563a.5.5 0 0 1 0 .87L5.748 11.57A.5.5 0 0 1 5 11.137zM10 4a2 2 0 0 1 2 2v4.992a1 1 0 0 0 .443-.572l1.654-5.622a1 1 0 0 0-.677-1.241L7.798 1.903a1 1 0 0 0-1.241.677L6.139 4z" /></SvgRoot>;
});
export default IconVideosSquare;
