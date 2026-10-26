import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppearanceSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppearanceSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><circle cx={8} cy={8} r={6.5} stroke="currentColor" /><path fill="currentColor" d="M8 3a5 5 0 0 0 0 10z" /></SvgRoot>;
});
export default IconAppearanceSimple;
