import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWrap = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWrap(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="wrap"><path d="M12.5 2C12.7761 2.00002 13 2.22387 13 2.5V13.5C13 13.7761 12.7761 14 12.5 14C12.2239 14 12 13.7761 12 13.5V2.5C12 2.22386 12.2239 2 12.5 2ZM7 3C8.65685 3 10 4.34315 10 6C10 7.65685 8.65685 9 7 9H3.70703L4.85352 10.1465C5.04878 10.3417 5.04878 10.6583 4.85352 10.8535C4.65825 11.0488 4.34175 11.0488 4.14648 10.8535L2.14648 8.85352C1.95122 8.65825 1.95122 8.34175 2.14648 8.14648L4.14648 6.14648C4.34175 5.95122 4.65825 5.95122 4.85352 6.14648C5.04878 6.34175 5.04878 6.65825 4.85352 6.85352L3.70703 8H7C8.10457 8 9 7.10457 9 6C9 4.89543 8.10457 4 7 4H2.5C2.22386 4 2 3.77614 2 3.5C2 3.22386 2.22386 3 2.5 3H7Z" fill="currentColor" /></SvgRoot>;
});
export default IconWrap;
