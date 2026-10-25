import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenuAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenuAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5 12C6.77614 12 7 12.2239 7 12.5C7 12.7761 6.77614 13 6.5 13H1.5C1.22386 13 1 12.7761 1 12.5C1 12.2239 1.22386 12 1.5 12H6.5ZM14.5 8C14.7761 8 15 8.22386 15 8.5C15 8.77614 14.7761 9 14.5 9H1.5C1.22386 9 1 8.77614 1 8.5C1 8.22386 1.22386 8 1.5 8H14.5ZM11.5 4C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5H1.5C1.22386 5 1 4.77614 1 4.5C1 4.22386 1.22386 4 1.5 4H11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconMenuAlt;
