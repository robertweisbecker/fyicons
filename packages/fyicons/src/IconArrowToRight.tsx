import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowToRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M14 3.5a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0zm-13 5a.5.5 0 0 1 .5-.5h8.793L7.146 4.854a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 .064.63l-.064.078-4 4a.5.5 0 1 1-.708-.707L10.293 9H1.5a.5.5 0 0 1-.5-.5" /></SvgRoot>;
});
export default IconArrowToRight;
