import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipForward = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSkipForward(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M3 4.578a.967.967 0 0 1 1.468-.826l5.28 3.207v-1.71c0-.69.56-1.25 1.25-1.25h.75c.69 0 1.25.56 1.25 1.25v5.5c0 .691-.56 1.25-1.25 1.25h-.75a1.25 1.25 0 0 1-1.25-1.25v-1.71l-5.28 3.208A.966.966 0 0 1 3 11.42zm1 6.782L9.533 8 4 4.636zM10.998 5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h.75a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25z" /></SvgRoot>;
});
export default IconSkipForward;
