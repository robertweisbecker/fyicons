import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPost = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPost(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="post"><path fill="currentColor" d="M12.5 3A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-5A2.5 2.5 0 0 1 3.5 3zm-9 1A1.5 1.5 0 0 0 2 5.5v5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 4zm5 5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm3-3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconPost;
