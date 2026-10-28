import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDotsDiamond = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDotsDiamond(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M3.5 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m9 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-9 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconDotsDiamond;
