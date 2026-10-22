import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrangeEnd = React.forwardRef<SVGSVGElement, IconProps>(function IconArrangeEnd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 7C11.7761 7 12 6.77614 12 6.5V5.5C12 5.22386 11.7761 5 11.5 5H7.5C7.22386 5 7 5.22386 7 5.5V6.5C7 6.77614 7.22386 7 7.5 7H11.5ZM11.5 11C11.7761 11 12 10.7761 12 10.5V9.5C12 9.22386 11.7761 9 11.5 9H3.5C3.22386 9 3 9.22386 3 9.5V10.5C3 10.7761 3.22386 11 3.5 11H11.5Z" fill="currentColor" /><path d="M13.5 2.5V13.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconArrangeEnd;
