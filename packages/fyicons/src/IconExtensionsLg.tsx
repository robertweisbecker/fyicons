import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconExtensionsLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconExtensionsLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="extensions-lg"><path d="M2.5 4.5C2.5 3.94772 2.94772 3.5 3.5 3.5H7.5V8.5H2.5V4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 0.5H14.5C15.0523 0.5 15.5 0.947715 15.5 1.5V5.5H10.5V0.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.5 8.5H7.5V13.5H3.5C2.94772 13.5 2.5 13.0523 2.5 12.5V8.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 8.5H12.5V12.5C12.5 13.0523 12.0523 13.5 11.5 13.5H7.5V8.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconExtensionsLg;
