import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStickyNote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStickyNote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v4.172c0 .663-.264 1.299-.732 1.768l-2.828 2.828A2.5 2.5 0 0 1 8.672 14H4.5A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13H8v-3a2 2 0 0 1 2-2h3V4.5A1.5 1.5 0 0 0 11.5 3zM10 9a1 1 0 0 0-1 1v2.962c.275-.062.53-.199.732-.402l2.829-2.828c.202-.202.34-.457.4-.732z" /></SvgRoot>;
});
export default IconStickyNote;
