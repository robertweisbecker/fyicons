import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretDownLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretDownLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="caret-down-lg"><path fill="currentColor" d="M12.498 6a.5.5 0 0 1 .372.835l-4.5 5a.5.5 0 0 1-.745 0l-4.5-5A.502.502 0 0 1 3.498 6z" /></SvgRoot>;
});
export default IconCaretDownLg;
