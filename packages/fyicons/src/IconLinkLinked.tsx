import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkLinked = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinkLinked(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_376_6573)"}><path d="M7.50024 13.5002L7.47524 13.5252C6.10845 14.892 3.89247 14.8921 2.52561 13.5254L2.47521 13.475C1.10822 12.1081 1.10821 9.89187 2.47518 8.525L4.47142 6.52891C5.65123 5.3492 7.49972 5.16626 8.88787 6.09185L9.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.5 9.5L7.11019 9.90726C8.49846 10.8338 10.3478 10.6512 11.528 9.47098L13.4982 7.50086C14.8788 6.12021 14.8784 3.88132 13.4977 2.50067C12.1175 1.1204 9.87916 1.12009 8.49902 2.50049" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id={idPrefix + "clip0_376_6573"}><rect width={16} height={16} fill="white" /></clipPath></defs></SvgRoot>;
});
export default IconLinkLinked;
