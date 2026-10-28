import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconInfo = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconInfo(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="info"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m-.282 5a1 1 0 0 1 .998 1.063l-.185 2.94A.498.498 0 0 1 8.5 12a.97.97 0 0 1-.968-1.03L7.718 8H7.5a.5.5 0 0 1 0-1zM8 4.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></SvgRoot>;
});
export default IconInfo;
