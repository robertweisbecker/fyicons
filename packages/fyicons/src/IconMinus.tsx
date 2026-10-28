import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMinus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMinus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="minus"><path fill="currentColor" d="M13 8.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5" /></SvgRoot>;
});
export default IconMinus;
