import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVideosSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVideosSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.597 3.297A2 2 0 0 1 8.08 1.943l5.622 1.653a2 2 0 0 1 1.355 2.483l-1.654 5.622a2 2 0 0 1-2.483 1.355l-.19-.057A2 2 0 0 1 9 14H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6l-.002.035.204.06a1 1 0 0 0 1.241-.676l1.654-5.622a1 1 0 0 0-.677-1.241L7.798 2.903a1 1 0 0 0-1.241.676L6.434 4H5.39zM3 5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm7.773 7.922.01-.014.009-.026zM4 7.292a.75.75 0 0 1 1.122-.651L8.11 8.349a.75.75 0 0 1 0 1.303l-2.988 1.707A.75.75 0 0 1 4 10.707z" /></SvgRoot>;
});
export default IconVideosSquare;
