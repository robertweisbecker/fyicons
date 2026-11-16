import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipForward = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSkipForward(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="skip-forward"><path fill="currentColor" d="M11.998 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9.202l-5.172 3.504A1.17 1.17 0 0 1 3 11.736V4.264a1.17 1.17 0 0 1 1.826-.968l5.172 3.503V4a1 1 0 0 1 1-1zm-1 9h1V4h-1zM4.266 4.123a.17.17 0 0 0-.266.14v7.474a.17.17 0 0 0 .266.14l5.722-3.876z" /></SvgRoot>;
});
export default IconSkipForward;
