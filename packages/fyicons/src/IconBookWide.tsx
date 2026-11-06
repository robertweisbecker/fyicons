import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookWide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookWide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-wide"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2v1a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-8 9a1 1 0 1 0 0 2h7.27a2 2 0 0 1-.27-1v-1zm0-8a1 1 0 0 0-1 1v6.27A2 2 0 0 1 4 10h1V3zm2 7h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6z" /></SvgRoot>;
});
export default IconBookWide;
