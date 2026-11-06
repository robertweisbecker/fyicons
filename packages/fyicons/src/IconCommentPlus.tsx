import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentPlus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentPlus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-plus"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14H1V8a7 7 0 0 1 7-7m0 1a6 6 0 0 0-6 6v6h6A6 6 0 0 0 8 2m-.005 3a.5.5 0 0 1 .5.5v1.995H10.5a.5.5 0 0 1 0 1H8.495V10.5a.5.5 0 0 1-1 0V8.495H5.5a.5.5 0 0 1 0-1h1.995V5.5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconCommentPlus;
