import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleRecord = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleRecord(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 1a5 5 0 1 1 0 10A5 5 0 0 1 8 3m0 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /></SvgRoot>;
});
export default IconCircleRecord;
