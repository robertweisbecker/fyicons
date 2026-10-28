import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapesPlus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapesPlus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="shapes-plus"><rect x={2.5} y={9.5} width={4} height={4} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 9.5V13.5M13.5 11.5H9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 1.5L7.5 4.5L4.5 7.5L1.5 4.5L4.5 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.7836 2.12371C11.8799 1.95738 12.1201 1.95739 12.2164 2.12371L14.5327 6.12474C14.6292 6.29141 14.509 6.5 14.3164 6.5H9.68361C9.49103 6.5 9.37076 6.29141 9.46726 6.12474L11.7836 2.12371Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconShapesPlus;
