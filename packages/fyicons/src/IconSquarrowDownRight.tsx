import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarrowDownRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowDownRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="squarrow-down-right"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 2.5h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V7.328c0-1.781 2.154-2.674 3.414-1.414L10.5 10.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 10.5h4v-4" />{props.children}</SvgRoot>;
});
export default IconSquarrowDownRight;
