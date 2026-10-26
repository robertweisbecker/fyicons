import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconExtensions = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconExtensions(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.5 4C2.5 3.72386 2.72386 3.5 3 3.5H6C6.27614 3.5 6.5 3.72386 6.5 4V7C6.5 7.27614 6.27614 7.5 6 7.5H3C2.72386 7.5 2.5 7.27614 2.5 7V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.5 10C2.5 9.72386 2.72386 9.5 3 9.5H6C6.27614 9.5 6.5 9.72386 6.5 10V13C6.5 13.2761 6.27614 13.5 6 13.5H3C2.72386 13.5 2.5 13.2761 2.5 13V10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.5 10C8.5 9.72386 8.72386 9.5 9 9.5H12C12.2761 9.5 12.5 9.72386 12.5 10V13C12.5 13.2761 12.2761 13.5 12 13.5H9C8.72386 13.5 8.5 13.2761 8.5 13V10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.6464 2.60355C10.8417 2.40829 11.1583 2.40829 11.3536 2.60355L13.3964 4.64645C13.5917 4.84171 13.5917 5.15829 13.3964 5.35355L11.3536 7.39645C11.1583 7.59171 10.8417 7.59171 10.6464 7.39645L8.60355 5.35355C8.40829 5.15829 8.40829 4.84171 8.60355 4.64645L10.6464 2.60355Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconExtensions;
