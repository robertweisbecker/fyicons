import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileSpreadsheet = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileSpreadsheet(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="file-spreadsheet"><path d="M8.87891 1C9.40925 1.00006 9.91795 1.21092 10.293 1.58594L12.4141 3.70703C12.7891 4.08205 12.9999 4.59075 13 5.12109V12.5C13 13.8807 11.8807 15 10.5 15H5.5C4.11929 15 3.00001 13.8807 3 12.5V3C3.00001 1.89544 3.89544 1 5 1H8.87891ZM5 2C4.44772 2 4.00001 2.44772 4 3V12.5C4.00001 13.3284 4.67158 14 5.5 14H10.5C11.3284 14 12 13.3284 12 12.5V6H9.5C8.67157 6 8 5.32843 8 4.5V2H5ZM10.5 7C10.7761 7 11 7.22386 11 7.5V11.5C11 11.7761 10.7761 12 10.5 12H5.5C5.22386 12 5 11.7761 5 11.5V7.5C5 7.22386 5.22386 7 5.5 7H10.5ZM6 11H7.5V10H6V11ZM8.5 11H10V10H8.5V11ZM6 8V9H7.5V8H6ZM8.5 8V9H10V8H8.5ZM9 4.5C9 4.77614 9.22386 5 9.5 5H11.9922C11.9652 4.77948 11.8657 4.57276 11.707 4.41406L9.58594 2.29297C9.42724 2.13427 9.22052 2.03478 9 2.00781V4.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconFileSpreadsheet;
