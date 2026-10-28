import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStickyNoteAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStickyNoteAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sticky-note-alt"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v4.764c0 .946-.535 1.812-1.382 2.236l-4.472 2.236c-.347.173-.73.264-1.118.264H4.5A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h2.528l.036-.003 1.492-3.353a2 2 0 0 1 2.22-1.149L13 8.939V4.5A1.5 1.5 0 0 0 11.5 3zm6.08 6.475a1 1 0 0 0-1.11.575L8.38 12.5l3.79-1.895c.298-.149.528-.39.67-.677z" /></SvgRoot>;
});
export default IconStickyNoteAlt;
