import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPaperclipSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclipSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="paperclip-simple"><path d="M9.5 1C10.8807 1 12 2.11929 12 3.5V11C12 13.2091 10.2091 15 8 15C5.79086 15 4 13.2091 4 11V6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5V11C5 12.6569 6.34315 14 8 14C9.65685 14 11 12.6569 11 11V3.5C11 2.67157 10.3284 2 9.5 2C8.67157 2 8 2.67157 8 3.5V10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5V3.5C7 2.11929 8.11929 1 9.5 1Z" fill="currentColor" /></SvgRoot>;
});
export default IconPaperclipSimple;
