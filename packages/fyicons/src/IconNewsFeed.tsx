import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNewsFeed = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNewsFeed(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="news-feed"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3.5A1.5 1.5 0 0 1 2 12.5v-6a.5.5 0 0 1 .5-.5H4V4a2 2 0 0 1 2-2zM3 12.5a.5.5 0 0 0 1 0V7H3zM6 3a1 1 0 0 0-1 1v8.5c0 .175-.032.344-.087.5H12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm2.5 6a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm3-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm-1-2a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconNewsFeed;
