import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStickyNote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStickyNote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sticky-note"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v2.965a3 3 0 0 1-.879 2.12l-4.267 4.268A.5.5 0 0 1 8.5 14h-4A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13H8v-3a2 2 0 0 1 2-2h2.925q.073-.26.075-.535V4.5A1.5 1.5 0 0 0 11.5 3zM10 9a1 1 0 0 0-1 1v2.293L12.293 9z" /></SvgRoot>;
});
export default IconStickyNote;
