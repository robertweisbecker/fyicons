import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEllipsisSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsisSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ellipsis-sm"><path fill="currentColor" d="M3 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></SvgRoot>;
});
export default IconEllipsisSm;
