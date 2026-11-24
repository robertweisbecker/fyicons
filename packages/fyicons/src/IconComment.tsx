import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconComment = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconComment(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment"><path stroke="currentColor" strokeLinejoin="round" d="M3.5 13.5h5a6 6 0 0 0 0-12 6 6 0 0 0-6 6v5a1 1 0 0 0 1 1Z" />{props.children}</SvgRoot>;
});
export default IconComment;
