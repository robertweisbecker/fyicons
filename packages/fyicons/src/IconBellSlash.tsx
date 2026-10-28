import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBellSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBellSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bell-slash"><path fill="currentColor" d="M8.002 1a1 1 0 0 1 1 1v.1A5 5 0 0 1 13.001 7v1.842c0 .062.02.123.056.173l.439.601c.644.885.15 2.088-.836 2.337l1.193 1.194a.5.5 0 0 1-.707.707L11.292 12h-.84a2.501 2.501 0 0 1-4.9 0H3.717c-1.227 0-1.935-1.393-1.212-2.384l.439-.602A.3.3 0 0 0 3 8.842V7c0-.943.262-1.824.715-2.577l-1.569-1.57a.5.5 0 1 1 .707-.706l1.468 1.467A5 5 0 0 1 7.002 2.1V2a1 1 0 0 1 1-1M6.59 12a1.5 1.5 0 0 0 2.826 0zM8 3c-1.179 0-2.24.51-2.971 1.322L11.707 11h.577a.5.5 0 0 0 .403-.795l-.438-.601A1.3 1.3 0 0 1 12 8.842V7a4 4 0 0 0-4-4M4.45 5.157A4 4 0 0 0 4 7v1.842c0 .274-.086.54-.248.762l-.439.601a.5.5 0 0 0 .404.795h6.575z" /></SvgRoot>;
});
export default IconBellSlash;
