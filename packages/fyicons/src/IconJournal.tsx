import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconJournal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconJournal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 2C12.1046 2 13 2.89543 13 4V12C13 13.1046 12.1046 14 11 14H5C3.89543 14 3 13.1046 3 12V11H2.5C2.22386 11 2 10.7761 2 10.5C2 10.2239 2.22386 10 2.5 10H3V9H2.5C2.22386 9 2 8.77614 2 8.5C2 8.22386 2.22386 8 2.5 8H3V7H2.5C2.22386 7 2 6.77614 2 6.5C2 6.22386 2.22386 6 2.5 6H3V5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H3C3 2.89543 3.89543 2 5 2H11ZM5 3C4.44772 3 4 3.44772 4 4H4.5C4.77614 4 5 4.22386 5 4.5C5 4.77614 4.77614 5 4.5 5H4V6H4.5C4.77614 6 5 6.22386 5 6.5C5 6.77614 4.77614 7 4.5 7H4V8H4.5C4.77614 8 5 8.22386 5 8.5C5 8.77614 4.77614 9 4.5 9H4V10H4.5C4.77614 10 5 10.2239 5 10.5C5 10.7761 4.77614 11 4.5 11H4V12C4 12.5523 4.44772 13 5 13H11C11.5523 13 12 12.5523 12 12V4C12 3.44772 11.5523 3 11 3H5Z" fill="currentColor" /><path d="M9.5 2.5V13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconJournal;
