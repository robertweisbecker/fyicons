import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMath = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMath(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="math"><path d="M13.25 9.75L9.75 13.25M9.75 9.75L13.25 13.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 4.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.5 11.5H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 2.5V6.5M6.5 4.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 9.5H4.51" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 13.5H4.51" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconMath;
