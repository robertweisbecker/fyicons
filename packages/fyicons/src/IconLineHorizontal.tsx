import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLineHorizontal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLineHorizontal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M16 8.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1 0-1h15a.5.5 0 0 1 .5.5" /></SvgRoot>;
});
export default IconLineHorizontal;
