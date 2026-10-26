import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEllipsis = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsis(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M3 6.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" /></SvgRoot>;
});
export default IconEllipsis;
