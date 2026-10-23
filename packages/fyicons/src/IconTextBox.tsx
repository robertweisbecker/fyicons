import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextBox = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextBox(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M14 12.5C14 13.3284 13.3284 14 12.5 14H3.5C2.67157 14 2 13.3284 2 12.5V10H3V12.5C3 12.7761 3.22386 13 3.5 13H12.5C12.7761 13 13 12.7761 13 12.5V10H14V12.5ZM12.5 2C13.3284 2 14 2.67157 14 3.5V7H13V3.5C13 3.22386 12.7761 3 12.5 3H3.5C3.22386 3 3 3.22386 3 3.5V7H2V3.5C2 2.67157 2.67157 2 3.5 2H12.5Z" fill="currentColor" /><path d="M8.50098 10.5H8.00098M7.50098 10.5H8.00098M8.00098 10.5V5.5M5.50098 6.5V5.5H10.501L10.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={12.5} y={7.5} width={2} height={2} rx={0.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={1.5} y={7.5} width={2} height={2} rx={0.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconTextBox;
