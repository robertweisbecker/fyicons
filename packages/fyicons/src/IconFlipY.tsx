import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlipY = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlipY(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="flip-y"><path fill="currentColor" d="M7.614 11.219a.5.5 0 0 1 .772 0l2.44 2.964a.5.5 0 0 1-.386.817H5.56a.5.5 0 0 1-.386-.817zM13.5 8a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm-3.06-6a.5.5 0 0 1 .386.817l-2.44 2.964a.5.5 0 0 1-.772 0l-2.44-2.964A.5.5 0 0 1 5.56 2z" /></SvgRoot>;
});
export default IconFlipY;
