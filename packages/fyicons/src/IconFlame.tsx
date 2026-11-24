import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlame = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlame(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="flame"><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M7.195 1.823c1.088.709 1.652 2.02 1.345 3.281-.107.438-.225.87-.364 1.297C7.86 7.369 8.53 8.5 9.549 8.5a1.32 1.32 0 0 0 1.252-.903L11.5 5.5l.155.311a8 8 0 0 1 .845 3.577V10l-.008.258a4.5 4.5 0 0 1-8.991-.257H3.5v-.038l.001-.03A5.96 5.96 0 0 1 4.54 6.634l.508-.743a9 9 0 0 0 1.335-3.034L6.7 1.5z" />{props.children}</SvgRoot>;
});
export default IconFlame;
