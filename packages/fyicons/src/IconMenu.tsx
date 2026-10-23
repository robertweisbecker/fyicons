import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenu = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenu(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13.5 13C13.7761 13 14 13.2239 14 13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5C2 13.2239 2.22386 13 2.5 13H13.5ZM13.5 8C13.7761 8 14 8.22386 14 8.5C14 8.77614 13.7761 9 13.5 9H2.5C2.22386 9 2 8.77614 2 8.5C2 8.22386 2.22386 8 2.5 8H13.5ZM13.5 3C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H2.5C2.22386 4 2 3.77614 2 3.5C2 3.22386 2.22386 3 2.5 3H13.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconMenu;
