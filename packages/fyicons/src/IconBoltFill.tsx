import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBoltFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBoltFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bolt-fill"><path fill="currentColor" d="M8.088 1.217A.5.5 0 0 1 9 1.5V6h3.05a1 1 0 0 1 .823 1.566l-4.96 7.217A.5.5 0 0 1 7 14.5V10H3.95a1 1 0 0 1-.823-1.566z" /></SvgRoot>;
});
export default IconBoltFill;
