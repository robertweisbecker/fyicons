import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEllipsisUnfold = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsisUnfold(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ellipsis-unfold"><path fill="currentColor" d="M8 11a.5.5 0 0 1 .5.5V13h1.295a.33.33 0 0 1 .253.542l-1.795 2.154a.33.33 0 0 1-.508 0L5.95 13.542A.33.33 0 0 1 6.203 13H7.5v-1.5A.5.5 0 0 1 8 11M4 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M7.745.304a.33.33 0 0 1 .508 0l1.795 2.155a.33.33 0 0 1-.253.54H8.5v1.5a.5.5 0 0 1-1 0V3H6.203a.33.33 0 0 1-.253-.54z" /></SvgRoot>;
});
export default IconEllipsisUnfold;
