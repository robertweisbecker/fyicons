import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronRightSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronRightSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.146 4.146a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.707L9.293 8 6.146 4.854a.5.5 0 0 1 0-.708" /></SvgRoot>;
});
export default IconChevronRightSm;
