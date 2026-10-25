import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkLinked = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinkLinked(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_376_6573)"}><path d="M4.14648 6.146C5.72246 4.57025 8.27792 4.57084 9.85352 6.14697C10.0485 6.34225 10.0486 6.65883 9.85352 6.854C9.6582 7.04905 9.34165 7.04827 9.14648 6.85303C7.96137 5.66771 6.03885 5.6679 4.85352 6.85303L2.85352 8.85303C1.66823 10.0385 1.66901 11.9606 2.85449 13.146C4.03992 14.3312 5.9612 14.3313 7.14648 13.146C7.34165 12.9509 7.65827 12.9511 7.85352 13.146C8.04874 13.3412 8.04867 13.6578 7.85352 13.853C6.27767 15.4289 3.72338 15.4287 2.14746 13.853C0.571459 12.2771 0.570623 9.72207 2.14648 8.146L4.14648 6.146Z" fill="currentColor" /><path d="M6.5 9.5C7.8794 10.881 10.1174 10.8817 11.4976 9.50146L13.4982 7.50085C14.8788 6.12021 14.8784 3.88132 13.4977 2.50067C12.1175 1.1204 9.87916 1.12009 8.49902 2.50049" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id={idPrefix + "clip0_376_6573"}><rect width={16} height={16} fill="white" /></clipPath></defs></SvgRoot>;
});
export default IconLinkLinked;
