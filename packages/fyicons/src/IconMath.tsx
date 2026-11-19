import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMath = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMath(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="math"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.25 9.75-3.5 3.5m0-3.5 3.5 3.5M9.5 4.5h4m-9-2.25v4.5M6.75 4.5h-4.5m7.25 6h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.5 8.25h.01m-.01 4.5h.01" />{props.children}</SvgRoot>;
});
export default IconMath;
