import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarrowUpLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowUpLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="squarrow-up-left"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m5.5 5.5 4.586 4.586c1.26 1.26 3.414.367 3.414-1.414V4.5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 5.5h-4v4" /></SvgRoot>;
});
export default IconSquarrowUpLeft;
