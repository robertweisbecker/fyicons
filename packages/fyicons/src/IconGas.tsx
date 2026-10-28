import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGas = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGas(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="gas"><path d="M3.5 4.1C3.5 3.53995 3.5 3.25992 3.60899 3.04601C3.70487 2.85785 3.85785 2.70487 4.04601 2.60899C4.25992 2.5 4.53995 2.5 5.1 2.5H8.9C9.46005 2.5 9.74008 2.5 9.95399 2.60899C10.1422 2.70487 10.2951 2.85785 10.391 3.04601C10.5 3.25992 10.5 3.53995 10.5 4.1V14.5H3.5V4.1Z" stroke="currentColor" /><path d="M10.5 7.5H11.5C12.0523 7.5 12.5 7.94772 12.5 8.5V11.5C12.5 12.0523 12.9477 12.5 13.5 12.5C14.0523 12.5 14.5 12.0523 14.5 11.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 6.5L13 5L14 4L14.5 4.5V6.5Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 4.5L12.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 14.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 7.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconGas;
