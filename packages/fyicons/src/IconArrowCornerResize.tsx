import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowCornerResize = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowCornerResize(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-corner-resize"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5v1a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1m8 3v-3h-3M13 3 8 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 5.5v3h3" />{props.children}</SvgRoot>;
});
export default IconArrowCornerResize;
