import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsToCenter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsToCenter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrows-to-center"><path fill="currentColor" d="M6.918 8.225a.5.5 0 0 1-.064.629l-2 2a.5.5 0 1 1-.708-.707L5.293 9H1.5a.5.5 0 0 1 0-1h3.793L4.146 6.854a.5.5 0 1 1 .708-.708l2 2zM9 13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 1 0zm7-5a.5.5 0 0 1-.5.5h-3.793l1.146 1.146a.5.5 0 1 1-.707.707l-2-2a.5.5 0 0 1-.064-.628l.064-.079 2-2a.5.5 0 1 1 .707.708L11.708 8H15.5a.5.5 0 0 1 .5.5" /></SvgRoot>;
});
export default IconArrowsToCenter;
