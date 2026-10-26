import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShadowInner = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShadowInner(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7c0-.232-.055-.45-.148-.646A.497.497 0 0 1 12 3.5a.5.5 0 0 1 .146-.353A1.5 1.5 0 0 0 11.5 3zm7 9.25a.25.25 0 1 1 0 .5.25.25 0 0 1 0-.5m1-1a.25.25 0 1 1 0 .5.25.25 0 0 1 0-.5m-1-1a.25.25 0 1 1 0 .5.25.25 0 0 1 0-.5m1-1.125a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m-1-1a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m1-1a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m-1-1a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75M12.5 5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-1-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-4 .125a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m2 0a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m-6 .125a.25.25 0 1 1 0 .5.25.25 0 0 1 0-.5m2 0a.25.25 0 1 1 0 .5.25.25 0 0 1 0-.5M8.5 3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-4 .125a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m-2 .125a.25.25 0 1 1 0 .5.25.25 0 0 1 0-.5" /></SvgRoot>;
});
export default IconShadowInner;
