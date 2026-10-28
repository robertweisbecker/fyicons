import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlipX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlipX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="flip-x"><path fill="currentColor" d="M8 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 8 2M2.002 5.56a.5.5 0 0 1 .817-.387l2.964 2.441a.5.5 0 0 1 0 .772l-2.964 2.44a.5.5 0 0 1-.817-.385zm11.182-.387A.5.5 0 0 1 14 5.56v4.88a.5.5 0 0 1-.817.386l-2.964-2.44a.5.5 0 0 1 0-.771z" /></SvgRoot>;
});
export default IconFlipX;
