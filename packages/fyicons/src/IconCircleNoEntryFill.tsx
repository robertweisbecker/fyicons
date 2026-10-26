import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleNoEntryFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNoEntryFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M5.25 7a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25z" /></SvgRoot>;
});
export default IconCircleNoEntryFill;
