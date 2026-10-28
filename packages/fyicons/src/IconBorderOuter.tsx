import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBorderOuter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBorderOuter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="border-outer"><path fill="currentColor" d="M2.5 12a.5.5 0 0 1 .49.4l.02.2c.04.196.194.35.39.39l.2.02a.5.5 0 0 1-.1.99A1.5 1.5 0 0 1 2 12.5a.5.5 0 0 1 .5-.5M7 13a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1 0-1zm3.5 0a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1zm3-1a.5.5 0 0 1 .5.5 1.5 1.5 0 0 1-1.5 1.5.5.5 0 0 1-.1-.99l.2-.02a.5.5 0 0 0 .39-.39l.02-.2a.5.5 0 0 1 .49-.4M11 4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM2.5 8.5A.5.5 0 0 1 3 9v1.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5M5 11h6V5H5zm8.5-2.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5M2.5 5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5m-10-3a.5.5 0 0 1 .1.99l-.2.02a.5.5 0 0 0-.39.39l-.02.2A.5.5 0 0 1 2 3.5 1.5 1.5 0 0 1 3.5 2m9 0A1.5 1.5 0 0 1 14 3.5a.5.5 0 0 1-.99.1l-.02-.2a.5.5 0 0 0-.39-.39l-.2-.02a.5.5 0 0 1 .1-.99M7 2a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1 0-1zm3.5 0a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconBorderOuter;
