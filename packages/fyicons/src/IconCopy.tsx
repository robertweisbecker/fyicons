import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCopy = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCopy(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.5 1C9.88071 1 11 2.11929 11 3.5V5H12.5C13.8807 5 15 6.11929 15 7.5V12.5C15 13.8807 13.8807 15 12.5 15H7.5C6.11929 15 5 13.8807 5 12.5V11H3.5C2.11929 11 1 9.88071 1 8.5V3.5C1 2.11929 2.11929 1 3.5 1H8.5ZM3.5 2C2.67157 2 2 2.67157 2 3.5V8.5C2 9.32843 2.67157 10 3.5 10H8.5C9.32843 10 10 9.32843 10 8.5V3.5C10 2.67157 9.32843 2 8.5 2H3.5ZM6 12.5C6 13.3284 6.67157 14 7.5 14H12.5C13.3284 14 14 13.3284 14 12.5V7.5C14 6.67157 13.3284 6 12.5 6H11V8.5C11 9.88071 9.88071 11 8.5 11H6V12.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconCopy;
