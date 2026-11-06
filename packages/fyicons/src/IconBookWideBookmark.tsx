import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookWideBookmark = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookWideBookmark(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-wide-bookmark"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v5a2 2 0 0 1-1.796 1.99L12 11v1a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-8 9a1 1 0 1 0 0 2h7.27a2 2 0 0 1-.27-1v-1zm0-8a1 1 0 0 0-1 1v6.27A2 2 0 0 1 4 10h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2v3.537a.25.25 0 0 1-.445.156L8 4.75 6.445 6.693A.25.25 0 0 1 6 6.537V3z" /></SvgRoot>;
});
export default IconBookWideBookmark;
