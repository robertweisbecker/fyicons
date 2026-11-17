import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretRightLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretRightLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="caret-right-lg"><path fill="currentColor" d="M6.297 3.043a.5.5 0 0 1 .538.085l5 4.5a.5.5 0 0 1 0 .744l-5 4.5A.501.501 0 0 1 6 12.5v-9a.5.5 0 0 1 .297-.457" /></SvgRoot>;
});
export default IconCaretRightLg;
