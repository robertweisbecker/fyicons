import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13.5 8C14.3284 8 15 8.67157 15 9.5V11.5C15 12.8807 13.8807 14 12.5 14H3.5C2.11929 14 1 12.8807 1 11.5V9.5C1 8.67157 1.67157 8 2.5 8H13.5ZM4.67188 2C5.33481 2.00008 5.97068 2.26365 6.43945 2.73242L7.70703 4H12.5C13.8807 4 15 5.11929 15 6.5V7.50293C14.5819 7.18841 14.0635 7 13.5 7H2.5C1.93653 7 1.41809 7.18841 1 7.50293V4.5C1 3.11929 2.11929 2 3.5 2H4.67188Z" fill="currentColor" /></SvgRoot>;
});
export default IconFolderFill;
