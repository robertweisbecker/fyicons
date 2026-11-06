import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowDownRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDownRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-down-right"><path fill="currentColor" d="M12.5 13a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-1 0v5.793L3.853 3.146a.5.5 0 1 0-.707.707L11.293 12H5.5a.5.5 0 1 0 0 1z" /></SvgRoot>;
});
export default IconArrowDownRight;
