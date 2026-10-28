import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCirclePlayFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCirclePlayFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-play-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m-.86 4.194A.75.75 0 0 0 6 5.835v4.33a.75.75 0 0 0 1.14.64l3.557-2.164a.75.75 0 0 0 0-1.282z" /></SvgRoot>;
});
export default IconCirclePlayFill;
