import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCirclePlay = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCirclePlay(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-play"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2M6 5.835a.75.75 0 0 1 1.14-.64l3.557 2.164a.75.75 0 0 1 0 1.282L7.14 10.806A.75.75 0 0 1 6 10.165z" /></SvgRoot>;
});
export default IconCirclePlay;
