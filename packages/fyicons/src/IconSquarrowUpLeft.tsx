import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarrowUpLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowUpLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="squarrow-up-left"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 13.5h-4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4.172c0 1.781-2.154 2.674-3.414 1.414L5.5 5.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 5.5h-4v4" />{props.children}</SvgRoot>;
});
export default IconSquarrowUpLeft;
