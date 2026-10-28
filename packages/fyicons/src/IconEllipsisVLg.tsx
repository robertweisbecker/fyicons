import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEllipsisVLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsisVLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ellipsis-v-lg"><path fill="currentColor" d="M9.5 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" /></SvgRoot>;
});
export default IconEllipsisVLg;
