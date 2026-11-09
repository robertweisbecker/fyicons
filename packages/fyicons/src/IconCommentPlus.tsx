import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentPlus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentPlus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-plus"><path fill="currentColor" d="M8.5 1a6.5 6.5 0 1 1 0 13h-5A1.5 1.5 0 0 1 2 12.5v-5A6.5 6.5 0 0 1 8.5 1m0 1A5.5 5.5 0 0 0 3 7.5v5a.5.5 0 0 0 .5.5h5a5.5 5.5 0 1 0 0-11m-.005 2.5a.5.5 0 0 1 .5.5v1.995H11a.5.5 0 0 1 0 1H8.995V10a.5.5 0 0 1-1 0V7.995H6a.5.5 0 0 1 0-1h1.995V5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconCommentPlus;
