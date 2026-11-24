import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMath = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMath(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="math"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.25 9.75-3.5 3.5m0-3.5 3.5 3.5M9.5 4.5h4M4.5 2v5M7 4.5H2m7.5 7h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.5 9h.01m-.01 5h.01" />{props.children}</SvgRoot>;
});
export default IconMath;
