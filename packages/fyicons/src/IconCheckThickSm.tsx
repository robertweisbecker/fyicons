import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheckThickSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheckThickSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="check-thick-sm"><path fill="currentColor" d="M9.857 5.364a.751.751 0 0 1 1.287.772l-3 5a.753.753 0 0 1-1.204.112l-2-2.25a.75.75 0 0 1 1.12-.996l1.322 1.486z" /></SvgRoot>;
});
export default IconCheckThickSm;
