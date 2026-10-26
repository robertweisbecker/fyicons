import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowToLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2 13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 1 0zm13-5a.5.5 0 0 1-.5.5H5.707l3.147 3.146a.5.5 0 1 1-.708.707l-4-4a.5.5 0 0 1-.064-.628l.064-.079 4-4a.5.5 0 1 1 .708.708L5.707 8H14.5a.5.5 0 0 1 .5.5" /></SvgRoot>;
});
export default IconArrowToLeft;
