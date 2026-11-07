import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentNotification = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentNotification(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-notification"><path stroke="currentColor" strokeLinecap="round" d="M14.5 7.5a6 6 0 0 1-6 6H3.833c-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707c-.034-.127-.034-.282-.034-.592V7.5a6 6 0 0 1 6-6" /><circle cx={12.5} cy={3.5} r={2.5} fill="currentColor" /></SvgRoot>;
});
export default IconCommentNotification;
