import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFilter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFilter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.585 2c1.626 0 2.573 1.838 1.627 3.162L10 9.66v3.12a1.5 1.5 0 0 1-1.026 1.422l-2.316.773A.5.5 0 0 1 6 14.5V9.66L2.787 5.162C1.842 3.838 2.788 2 4.415 2zm-7.17 1A1 1 0 0 0 3.6 4.581L6.907 9.21A.5.5 0 0 1 7 9.5v4.306l1.658-.552A.5.5 0 0 0 9 12.779V9.5c0-.104.032-.206.092-.291L12.4 4.581A1 1 0 0 0 11.585 3z" /></SvgRoot>;
});
export default IconFilter;
