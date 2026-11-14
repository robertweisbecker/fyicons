import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleRecordFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleRecordFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-record-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 2a5 5 0 1 0 0 10A5 5 0 0 0 8 3" /><path fill="currentColor" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></SvgRoot>;
});
export default IconCircleRecordFill;
