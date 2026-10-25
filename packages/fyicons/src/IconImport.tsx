import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconImport = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconImport(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2 10.5C2 10.2239 2.22386 10 2.5 10C2.77614 10 3 10.2239 3 10.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H11.5C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V10.5ZM2 2.5C2 2.22386 2.22386 2 2.5 2H3.5C5.98528 2 8 4.01472 8 6.5V10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5V6.5C7 4.567 5.433 3 3.5 3H2.5C2.22386 3 2 2.77614 2 2.5Z" fill="currentColor" /><path d="M10 7.75L7.5 10.5L5 7.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconImport;
