import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEllipsisV = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsisV(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ellipsis-v"><path fill="currentColor" d="M8 11.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m0-5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m0-5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" /></SvgRoot>;
});
export default IconEllipsisV;
