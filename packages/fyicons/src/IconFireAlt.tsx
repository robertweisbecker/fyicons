import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFireAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFireAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fire-alt"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.53 1.5c-3.095 0-1.75 5-4.03 5-1.5 0-.999-1.833-.999-1.833S1.975 6 2.5 9.625c.371 2.56 2.561 4.874 5.53 4.874s5.47-2.166 5.47-4.874c0-3.775-4-4.626-3.97-8.125" /><path fill="currentColor" d="M11 10.5c-.31 1.55-1.646 2.5-2.75 2.5S6.133 12.24 6 11c-.25-2.308 2.5-2 3-5 0 0 2.5 2 2 4.5" />{props.children}</SvgRoot>;
});
export default IconFireAlt;
