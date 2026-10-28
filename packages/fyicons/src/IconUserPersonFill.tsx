import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserPersonFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserPersonFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 9.5c2.245 0 4.202 1.336 5.23 3.315.562 1.079-.39 2.185-1.607 2.185H4.377c-1.217 0-2.169-1.106-1.607-2.185C3.798 10.836 5.755 9.5 8 9.5m0-7.75c1.4 0 2.75.964 2.75 2.708 0 .964-.255 1.938-.733 2.653C9.547 7.813 8.88 8.25 8 8.25s-1.547-.437-2.016-1.139c-.48-.715-.734-1.69-.734-2.653C5.25 2.714 6.6 1.75 8 1.75" /></SvgRoot>;
});
export default IconUserPersonFill;
