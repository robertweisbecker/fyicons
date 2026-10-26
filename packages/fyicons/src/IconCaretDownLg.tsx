import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretDownLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretDownLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.936 6c.65 0 .992.77.558 1.252l-3.939 4.376a.75.75 0 0 1-1.115 0L3.5 7.252A.75.75 0 0 1 4.06 6z" /></SvgRoot>;
});
export default IconCaretDownLg;
