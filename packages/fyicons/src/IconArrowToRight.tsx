import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowToRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M14 3.5a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0zm-12 5a.5.5 0 0 1 .5-.5h8.793L9.146 5.854a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 .064.63l-.064.078-3 3a.5.5 0 1 1-.708-.707L11.293 9H2.5a.5.5 0 0 1-.5-.5" /></SvgRoot>;
});
export default IconArrowToRight;
