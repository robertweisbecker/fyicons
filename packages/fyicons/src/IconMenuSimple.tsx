import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenuSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenuSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="menu-simple"><path d="M8.5 10C8.77614 10 9 10.2239 9 10.5C9 10.7761 8.77614 11 8.5 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H8.5ZM14.5 5C14.7761 5 15 5.22386 15 5.5C15 5.77614 14.7761 6 14.5 6H1.5C1.22386 6 1 5.77614 1 5.5C1 5.22386 1.22386 5 1.5 5H14.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconMenuSimple;
