import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenu = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenu(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M14.5 12C14.7761 12 15 12.2239 15 12.5C15 12.7761 14.7761 13 14.5 13H1.5C1.22386 13 1 12.7761 1 12.5C1 12.2239 1.22386 12 1.5 12H14.5ZM14.5 8C14.7761 8 15 8.22386 15 8.5C15 8.77614 14.7761 9 14.5 9H1.5C1.22386 9 1 8.77614 1 8.5C1 8.22386 1.22386 8 1.5 8H14.5ZM14.5 4C14.7761 4 15 4.22386 15 4.5C15 4.77614 14.7761 5 14.5 5H1.5C1.22386 5 1 4.77614 1 4.5C1 4.22386 1.22386 4 1.5 4H14.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconMenu;
