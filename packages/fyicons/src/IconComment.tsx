import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconComment = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconComment(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14H1V8a7 7 0 0 1 7-7m0 1a6 6 0 0 0-6 6v6h6A6 6 0 0 0 8 2" /></SvgRoot>;
});
export default IconComment;
