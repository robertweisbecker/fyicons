import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextWrapSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextWrapSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 7C12.8807 7 14 8.11929 14 9.5C14 10.8807 12.8807 12 11.5 12H11V12.8965C11 13.1192 10.7307 13.2307 10.5732 13.0732L9.17676 11.6768C9.07915 11.5791 9.07915 11.4209 9.17676 11.3232L10.5732 9.92676C10.7307 9.7693 11 9.88082 11 10.1035V11H11.5C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.5ZM6.5 11C6.77614 11 7 11.2239 7 11.5C7 11.7761 6.77614 12 6.5 12H2.5C2.22386 12 2 11.7761 2 11.5C2 11.2239 2.22386 11 2.5 11H6.5ZM11.5 3C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H2.5C2.22386 4 2 3.77614 2 3.5C2 3.22386 2.22386 3 2.5 3H11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconTextWrapSimple;
