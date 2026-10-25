import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconExtensions = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconExtensions(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.5 4C2.5 3.72386 2.72386 3.5 3 3.5H6C6.27614 3.5 6.5 3.72386 6.5 4V7C6.5 7.27614 6.27614 7.5 6 7.5H3C2.72386 7.5 2.5 7.27614 2.5 7V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.5 10C2.5 9.72386 2.72386 9.5 3 9.5H6C6.27614 9.5 6.5 9.72386 6.5 10V13C6.5 13.2761 6.27614 13.5 6 13.5H3C2.72386 13.5 2.5 13.2761 2.5 13V10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.5 10C8.5 9.72386 8.72386 9.5 9 9.5H12C12.2761 9.5 12.5 9.72386 12.5 10V13C12.5 13.2761 12.2761 13.5 12 13.5H9C8.72386 13.5 8.5 13.2761 8.5 13V10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.6464 1.60355C11.8417 1.40829 12.1583 1.40829 12.3536 1.60355L14.3964 3.64645C14.5917 3.84171 14.5917 4.15829 14.3964 4.35355L12.3536 6.39645C12.1583 6.59171 11.8417 6.59171 11.6464 6.39645L9.60355 4.35355C9.40829 4.15829 9.40829 3.84171 9.60355 3.64645L11.6464 1.60355Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconExtensions;
