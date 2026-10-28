import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarrowDownRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowDownRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="squarrow-down-right"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5 5.914 5.914C4.654 4.654 2.5 5.547 2.5 7.328V11.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 10.5h4v-4" /></SvgRoot>;
});
export default IconSquarrowDownRight;
