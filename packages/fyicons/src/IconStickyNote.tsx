import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStickyNote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStickyNote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="sticky-note"><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V7.46484C13.9999 8.26036 13.6836 9.02342 13.1211 9.58594L8.85352 13.8535C8.75975 13.9473 8.63261 14 8.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H8V10C8 8.89543 8.89543 8 10 8H12.9248C12.9729 7.82704 13 7.6475 13 7.46484V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM10 9C9.44772 9 9 9.44772 9 10V12.293L12.293 9H10Z" fill="currentColor" /></SvgRoot>;
});
export default IconStickyNote;
