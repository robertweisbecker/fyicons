import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenuAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenuAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.5 13C7.77614 13 8 13.2239 8 13.5C8 13.7761 7.77614 14 7.5 14H2.5C2.22386 14 2 13.7761 2 13.5C2 13.2239 2.22386 13 2.5 13H7.5ZM13.5 8C13.7761 8 14 8.22386 14 8.5C14 8.77614 13.7761 9 13.5 9H2.5C2.22386 9 2 8.77614 2 8.5C2 8.22386 2.22386 8 2.5 8H13.5ZM11.5 3C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H2.5C2.22386 4 2 3.77614 2 3.5C2 3.22386 2.22386 3 2.5 3H11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconMenuAlt;
