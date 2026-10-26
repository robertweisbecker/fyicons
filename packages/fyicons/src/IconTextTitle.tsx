import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextTitle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextTitle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.5 2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V3H8.5v10h.999a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1H7.5V3H3v2.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconTextTitle;
