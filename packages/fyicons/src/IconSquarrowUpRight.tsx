import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarrowUpRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowUpRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="squarrow-up-right"><path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v4.172c0 2.227 2.693 3.342 4.268 1.768L10 6.707V9.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.063-.241A.5.5 0 0 0 10.5 5h-4a.5.5 0 0 0 0 1h2.793L5.561 9.732c-.945.945-2.56.276-2.561-1.06V4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2z" /></SvgRoot>;
});
export default IconSquarrowUpRight;
