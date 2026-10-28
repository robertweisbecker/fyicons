import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGasFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGasFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="gas-fill"><path d="M8.90039 2C9.172 2 9.40591 1.99996 9.59766 2.01562C9.79513 2.03177 9.99166 2.06688 10.1807 2.16309C10.4629 2.3069 10.6931 2.53709 10.8369 2.81934C10.9331 3.00834 10.9682 3.20487 10.9844 3.40234C11 3.59409 11 3.828 11 4.09961V15H3V4.09961C3 3.828 2.99996 3.59409 3.01562 3.40234C3.03177 3.20487 3.06688 3.00834 3.16309 2.81934C3.3069 2.53709 3.53709 2.3069 3.81934 2.16309C4.00834 2.06688 4.20487 2.03177 4.40234 2.01562C4.59409 1.99996 4.828 2 5.09961 2H8.90039ZM4.5 3C4.22386 3 4 3.22386 4 3.5V7H10V3.5C10 3.22386 9.77614 3 9.5 3H4.5Z" fill="currentColor" /><path d="M10.5 7.5H11.5C12.0523 7.5 12.5 7.94772 12.5 8.5V11.5C12.5 12.0523 12.9477 12.5 13.5 12.5C14.0523 12.5 14.5 12.0523 14.5 11.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 6.5L13 5L14 4L14.5 4.5V6.5Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 4.5L12.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 14.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconGasFill;
