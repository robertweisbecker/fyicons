import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconOverflow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconOverflow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="overflow"><path d="M7.5 10C7.77614 10 8 10.2239 8 10.5V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V10.5C7 10.2239 7.22386 10 7.5 10ZM11.1465 6.14648C11.3417 5.95122 11.6583 5.95122 11.8535 6.14648L13.8535 8.14648C14.0488 8.34175 14.0488 8.65825 13.8535 8.85352L11.8535 10.8535C11.6583 11.0488 11.3417 11.0488 11.1465 10.8535C10.9512 10.6583 10.9512 10.3417 11.1465 10.1465L12.293 9H2.5C2.22386 9 2 8.77614 2 8.5C2 8.22386 2.22386 8 2.5 8H12.293L11.1465 6.85352C10.9512 6.65825 10.9512 6.34175 11.1465 6.14648ZM7.5 2C7.77614 2 8 2.22386 8 2.5V6.5C8 6.77614 7.77614 7 7.5 7C7.22386 7 7 6.77614 7 6.5V2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconOverflow;
