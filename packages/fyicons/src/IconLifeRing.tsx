import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLifeRing = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLifeRing(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="life-ring"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m1.299 9.701a2.98 2.98 0 0 1-2.598 0l.006.006-2.183 2.182A5.97 5.97 0 0 0 8 14a5.97 5.97 0 0 0 3.475-1.111l-2.182-2.182zm1.408-3.994-.006-.006a2.98 2.98 0 0 1 0 2.598l.006-.006 2.182 2.182A5.97 5.97 0 0 0 14 8a5.97 5.97 0 0 0-1.111-3.476zM3.11 4.524A5.97 5.97 0 0 0 2 8a5.97 5.97 0 0 0 1.11 3.475l2.183-2.182.006.006a2.98 2.98 0 0 1 0-2.598l-.006.006zM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-4a5.97 5.97 0 0 0-3.476 1.11l2.183 2.183-.006.006a2.98 2.98 0 0 1 2.598 0l-.006-.006 2.182-2.183A5.97 5.97 0 0 0 8 2" /></SvgRoot>;
});
export default IconLifeRing;
