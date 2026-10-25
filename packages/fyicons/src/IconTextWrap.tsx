import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextWrap = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextWrap(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="text-wrap"><path d="M11 6C12.6569 6 14 7.34315 14 9C14 10.6569 12.6569 12 11 12H10V12.8965C9.99997 13.1192 9.73073 13.2307 9.57324 13.0732L8.17676 11.6768C8.07915 11.5791 8.07915 11.4209 8.17676 11.3232L9.57324 9.92676C9.73073 9.7693 9.99997 9.88082 10 10.1035V11H11C12.1046 11 13 10.1046 13 9C13 7.89543 12.1046 7 11 7H2.5C2.22386 7 2 6.77614 2 6.5C2 6.22386 2.22386 6 2.5 6H11ZM5.5 12C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H2.5C2.22386 13 2 12.7761 2 12.5C2 12.2239 2.22386 12 2.5 12H5.5ZM5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10H2.5C2.22386 10 2 9.77614 2 9.5C2 9.22386 2.22386 9 2.5 9H5.5ZM11.5 3C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H2.5C2.22386 4 2 3.77614 2 3.5C2 3.22386 2.22386 3 2.5 3H11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconTextWrap;
