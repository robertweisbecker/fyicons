import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldKeyhole = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldKeyhole(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.324 1.243a2 2 0 0 1 1.351 0l4.262 1.53a1.5 1.5 0 0 1 .99 1.508l-.241 3.776a6.5 6.5 0 0 1-2.5 4.721l-2.573 1.997-.142.092c-.294.157-.65.157-.943 0l-.142-.092-2.572-1.997a6.5 6.5 0 0 1-2.47-4.374l-.031-.347-.241-3.776a1.5 1.5 0 0 1 .875-1.46l.115-.048zm1.013.941a1 1 0 0 0-.675 0L3.4 3.714a.5.5 0 0 0-.33.503l.241 3.777a5.5 5.5 0 0 0 2.116 3.994L8 13.985l2.572-1.997a5.5 5.5 0 0 0 2.116-3.994l.241-3.777a.5.5 0 0 0-.33-.502zM8 5.5a1.5 1.5 0 0 1 .5 2.912V10a.5.5 0 1 1-1 0V8.412A1.499 1.499 0 0 1 8 5.5" /></SvgRoot>;
});
export default IconShieldKeyhole;
