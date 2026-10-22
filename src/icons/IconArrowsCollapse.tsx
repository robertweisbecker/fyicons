import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsCollapse = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsCollapse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5 9C6.77614 9 7 9.22386 7 9.5V13.5C6.99994 13.7761 6.7761 14 6.5 14C6.22398 13.9999 6.00006 13.776 6 13.5V10.707L2.85352 13.8535C2.65824 14.0486 2.3417 14.0487 2.14648 13.8535C1.9513 13.6583 1.95138 13.3417 2.14648 13.1465L5.29297 10H2.5C2.22398 9.9999 2.00006 9.77603 2 9.5C2 9.22392 2.22394 9.0001 2.5 9H6.5ZM13.1465 2.14648C13.3417 1.95123 13.6583 1.95125 13.8535 2.14648C14.0488 2.34175 14.0488 2.65825 13.8535 2.85352L10.707 6H13.5C13.7761 6 14 6.22386 14 6.5C13.9999 6.77609 13.7761 7 13.5 7H9.5C9.22398 6.99991 9.00006 6.77603 9 6.5V2.5C9 2.22392 9.22394 2.00009 9.5 2C9.77614 2 10 2.22386 10 2.5V5.29297L13.1465 2.14648Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowsCollapse;
