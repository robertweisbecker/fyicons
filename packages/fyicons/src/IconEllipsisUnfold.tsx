import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEllipsisUnfold = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsisUnfold(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 11a.5.5 0 0 1 .5.5V13h1.295a.33.33 0 0 1 .253.541l-1.795 2.155a.33.33 0 0 1-.508 0L5.95 13.54a.33.33 0 0 1 .253-.54H7.5v-1.5A.5.5 0 0 1 8 11M4 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M7.745.305a.33.33 0 0 1 .508 0l1.795 2.154A.33.33 0 0 1 9.795 3H8.5v1.5a.5.5 0 0 1-1 0V3H6.203a.33.33 0 0 1-.253-.54z" /></SvgRoot>;
});
export default IconEllipsisUnfold;
