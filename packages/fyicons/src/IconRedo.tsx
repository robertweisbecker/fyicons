import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRedo = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRedo(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.147 2.147a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.707-.707L12.293 6H6a3 3 0 1 0 0 6h2.5a.5.5 0 0 1 0 1H6a4 4 0 0 1 0-8h6.293l-2.146-2.146a.5.5 0 0 1 0-.707" /></SvgRoot>;
});
export default IconRedo;
