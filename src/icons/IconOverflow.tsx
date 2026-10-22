import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconOverflow = React.forwardRef<SVGSVGElement, IconProps>(function IconOverflow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.5 10C7.77614 10 8 10.2239 8 10.5V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V10.5C7 10.2239 7.22386 10 7.5 10ZM11.1465 5.64648C11.3417 5.45122 11.6583 5.45122 11.8535 5.64648L13.8535 7.64648C14.0488 7.84175 14.0488 8.15825 13.8535 8.35352L11.8535 10.3535C11.6583 10.5488 11.3417 10.5488 11.1465 10.3535C10.9512 10.1583 10.9512 9.84175 11.1465 9.64648L12.293 8.5H2.5C2.22386 8.5 2 8.27614 2 8C2 7.72386 2.22386 7.5 2.5 7.5H12.293L11.1465 6.35352C10.9512 6.15825 10.9512 5.84175 11.1465 5.64648ZM7.5 2C7.77614 2 8 2.22386 8 2.5V5.5C8 5.77614 7.77614 6 7.5 6C7.22386 6 7 5.77614 7 5.5V2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconOverflow;
