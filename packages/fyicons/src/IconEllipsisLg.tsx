import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEllipsisLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsisLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2.5 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" /></SvgRoot>;
});
export default IconEllipsisLg;
