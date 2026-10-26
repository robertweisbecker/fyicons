import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.146 3.146a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.707L10.293 8 6.146 3.854a.5.5 0 0 1 0-.708" /></SvgRoot>;
});
export default IconChevronRight;
