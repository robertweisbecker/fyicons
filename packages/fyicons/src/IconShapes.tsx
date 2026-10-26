import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><rect x={2.5} y={9.5} width={4} height={4} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={9.5} y={8.5} width={5} height={5} rx={2.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.7901 2.57438C11.8886 2.42213 12.1114 2.42213 12.2099 2.57438L14.5004 6.11419C14.608 6.28053 14.4886 6.5 14.2905 6.5H9.70954C9.51141 6.5 9.39201 6.28053 9.49964 6.11419L11.7901 2.57438Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 1.5L7.5 4.5L4.5 7.5L1.5 4.5L4.5 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconShapes;
