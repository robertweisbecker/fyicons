import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNotePad = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNotePad(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.5 1C10.7761 1 11 1.22386 11 1.5V2H13V12.5C13 13.8807 11.8807 15 10.5 15H5.5C4.11929 15 3 13.8807 3 12.5V2H5V1.5C5 1.22386 5.22386 1 5.5 1C5.77614 1 6 1.22386 6 1.5V2H7.5V1.5C7.5 1.22386 7.72386 1 8 1C8.27614 1 8.5 1.22386 8.5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1ZM4 12.5C4 13.3284 4.67157 14 5.5 14H10.5C11.3284 14 12 13.3284 12 12.5V3H11V3.5C11 3.77614 10.7761 4 10.5 4C10.2239 4 10 3.77614 10 3.5V3H8.5V3.5C8.5 3.77614 8.27614 4 8 4C7.72386 4 7.5 3.77614 7.5 3.5V3H6V3.5C6 3.77614 5.77614 4 5.5 4C5.22386 4 5 3.77614 5 3.5V3H4V12.5Z" fill="currentColor" /><path d="M5.5 7.5L5.91886 7.08114C6.23982 6.76018 6.76018 6.76018 7.08114 7.08114C7.33128 7.33128 7.71342 7.39329 8.02982 7.23509L9.00656 6.74672C9.33106 6.58447 9.68888 6.5 10.0517 6.5H10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.5 10.5C5.93887 9.91485 6.72386 9.71061 7.39226 10.0077L7.45838 10.0371C8.08592 10.316 8.82042 10.1796 9.306 9.694L9.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconNotePad;
