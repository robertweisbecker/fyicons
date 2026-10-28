import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretRightLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretRightLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="caret-right-lg"><path fill="currentColor" d="M6 4.062a.75.75 0 0 1 1.158-.63l.094.072 4.376 3.938a.75.75 0 0 1 0 1.116l-4.376 3.938A.75.75 0 0 1 6 11.938z" /></SvgRoot>;
});
export default IconCaretRightLg;
