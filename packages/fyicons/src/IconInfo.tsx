import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconInfo = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconInfo(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="info"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m-.066 5a1 1 0 0 1 .992 1.124l-.36 2.882A.499.499 0 0 1 8.5 12a.942.942 0 0 1-.935-1.059L7.934 8H7.5a.5.5 0 0 1 0-1zM8 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></SvgRoot>;
});
export default IconInfo;
