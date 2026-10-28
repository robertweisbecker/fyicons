import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEllipsisVSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsisVSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ellipsis-v-sm"><path fill="currentColor" d="M8 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></SvgRoot>;
});
export default IconEllipsisVSm;
