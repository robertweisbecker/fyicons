import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleUserFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleUserFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-user-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 9a4 4 0 0 0-3.77 2.665A5.97 5.97 0 0 0 8 14a5.97 5.97 0 0 0 3.77-1.335A4 4 0 0 0 8 10m0-6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" /></SvgRoot>;
});
export default IconCircleUserFill;
