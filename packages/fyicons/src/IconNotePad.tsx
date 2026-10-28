import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNotePad = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNotePad(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="note-pad"><path d="M10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C12.7761 2 13 2.22386 13 2.5V12.5C13 13.8807 11.8807 15 10.5 15H5.5C4.11929 15 3 13.8807 3 12.5V2.5C3 2.22386 3.22386 2 3.5 2H5V1.5C5 1.22386 5.22386 1 5.5 1C5.77614 1 6 1.22386 6 1.5V2H7.5V1.5C7.5 1.22386 7.72386 1 8 1C8.27614 1 8.5 1.22386 8.5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1ZM4 12.5C4 13.3284 4.67157 14 5.5 14H10.5C11.3284 14 12 13.3284 12 12.5V3H11V3.5C11 3.77614 10.7761 4 10.5 4C10.2239 4 10 3.77614 10 3.5V3H8.5V3.5C8.5 3.77614 8.27614 4 8 4C7.72386 4 7.5 3.77614 7.5 3.5V3H6V3.5C6 3.77614 5.77614 4 5.5 4C5.22386 4 5 3.77614 5 3.5V3H4V12.5Z" fill="currentColor" /><path d="M5.5 8.5L5.91886 8.08114C6.23982 7.76018 6.76018 7.76018 7.08114 8.08114C7.33128 8.33128 7.71342 8.39329 8.02982 8.23509L9.00656 7.74672C9.33106 7.58447 9.68888 7.5 10.0517 7.5H10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.5 11.5L6.55014 11.4109C6.83122 10.9112 7.46835 10.7405 7.96157 11.0328C8.41018 11.2986 8.987 11.184 9.29988 10.7668L9.5 10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconNotePad;
