import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPosts = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPosts(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="posts"><path fill="currentColor" d="M11.204 2.01A2 2 0 0 1 13 4v1l.204.01A2 2 0 0 1 15 7v5a2 2 0 0 1-1.796 1.99L13 14H5a2 2 0 0 1-1.99-1.796L3 12v-1l-.204-.01A2 2 0 0 1 1.01 9.203L1 9V4a2 2 0 0 1 2-2h8zM3 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm4.5 4a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM4 12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1v3a2 2 0 0 1-1.796 1.99L11 11H4z" /></SvgRoot>;
});
export default IconPosts;
