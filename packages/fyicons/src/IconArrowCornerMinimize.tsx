import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowCornerMinimize = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowCornerMinimize(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-corner-minimize"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.499 3.5v4h-4M2.5 2.501 6.999 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 2.5h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-1" />{props.children}</SvgRoot>;
});
export default IconArrowCornerMinimize;
