import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGas = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGas(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M3.5 4.9C3.5 4.05992 3.5 3.63988 3.66349 3.31901C3.8073 3.03677 4.03677 2.8073 4.31901 2.66349C4.63988 2.5 5.05992 2.5 5.9 2.5H8.1C8.94008 2.5 9.36012 2.5 9.68099 2.66349C9.96323 2.8073 10.1927 3.03677 10.3365 3.31901C10.5 3.63988 10.5 4.05992 10.5 4.9V14.5H3.5V4.9Z" stroke="currentColor" /><rect x={4.75} y={3.75} width={4.5} height={3.5} rx={0.5} fill="currentColor" /><path d="M10.5 6.5L12.2071 8.20711C12.3946 8.39464 12.5 8.649 12.5 8.91421V11.5C12.5 12.0523 12.9477 12.5 13.5 12.5C14.0523 12.5 14.5 12.0523 14.5 11.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 4.5V6.5L13.5 5.5L14.5 4.5Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 4.5L13 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 14.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconGas;
