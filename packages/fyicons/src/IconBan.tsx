import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBan = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBan(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ban"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M3.419 4.126a6 6 0 0 0 8.454 8.454zM8 2a5.98 5.98 0 0 0-3.874 1.419l8.454 8.454A6 6 0 0 0 8 2" /></SvgRoot>;
});
export default IconBan;
