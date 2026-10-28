import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStickyNote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStickyNote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V8.67188C13.9999 9.33481 13.7363 9.97068 13.2676 10.4395L10.4395 13.2676C9.97068 13.7363 9.33481 13.9999 8.67188 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H8V10C8 8.89543 8.89543 8 10 8H13V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM10 9C9.44772 9 9 9.44772 9 10V12.9619C9.27508 12.9001 9.52994 12.763 9.73242 12.5605L12.5605 9.73242C12.763 9.52994 12.9001 9.27508 12.9619 9H10Z" fill="currentColor" /></SvgRoot>;
});
export default IconStickyNote;
